const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const elements = new Map();
const defaults = {
  regionSelect: "",
  spotSelect: "",
  levelInput: "36",
  hoursInput: "2",
  proficiencyInput: "20",
  timeInput: "average",
  weatherSelect: "calm",
  groundbaitModeSelect: "none",
  groundbaitTypeSelect: "",
  groundbaitAmountInput: "3000",
  castInput: "0",
  floatInput: "0",
  dragInput: "0.5",
  reelSpeedInput: "1.2",
  lureActionInput: "auto",
  lineCutRoundInput: "100",
  lineCutInput: "0",
  loadoutJson: "",
};

function makeElement(id = "") {
  return {
    id,
    value: defaults[id] ?? "",
    innerHTML: "",
    textContent: "",
    disabled: false,
    hidden: false,
    dataset: {},
    className: "",
    style: {},
    classList: { toggle() {}, add() {}, remove() {} },
    append() {},
    appendChild() {},
    remove() {},
    click() {},
    addEventListener() {},
    querySelector() { return makeElement("nested"); },
    querySelectorAll() { return []; },
  };
}

global.window = {};
global.navigator = { clipboard: { writeText: async () => {} } };
global.Blob = class Blob {
  constructor(parts, opts) {
    this.parts = parts;
    this.opts = opts;
  }
};
global.URL = { createObjectURL: () => "blob:test", revokeObjectURL() {} };
global.document = {
  body: makeElement("body"),
  getElementById(id) {
    if (!elements.has(id)) elements.set(id, makeElement(id));
    return elements.get(id);
  },
  createElement(tag) {
    return makeElement(tag);
  },
  querySelectorAll(selector) {
    if (selector !== ".loadout-tab") return [];
    return ["hand_rod", "match_rod", "bottom_rod", "lure_rod"].map((rodType) => ({
      ...makeElement("tab"),
      dataset: { rodType },
      classList: { toggle() {}, add() {}, remove() {} },
    }));
  },
};

vm.runInThisContext(fs.readFileSync("game-data.js", "utf8"), { filename: "game-data.js" });
vm.runInThisContext(fs.readFileSync("app.js", "utf8"), { filename: "app.js" });

function presentationWithDrag(dragRatio) {
  return {
    items: {
      rod: { maxTension: 2, durability: 100, length: 3 },
      reel: { frictionMax: 4, durability: 100 },
      line: { maxTension: 2, durability: 100, length: 80 },
      hook: { maxTension: 80, durability: 100 },
      leader: null,
    },
    controls: { dragRatio },
    skills: { endurance: 8, strength: 8 },
    ctrl: 0.55,
    reelPower: 0.65,
    hookPower: 0.55,
    actualCast: 18,
    targetDepth: 6,
  };
}

const fish = { weightMin: 6, weightMax: 6, strength: 2.4, endurance: 1.2 };
const poolEntry = { sizeModifier: 1 };
const env = { wind: 0, waterFlow: 0 };

assert.strictEqual(
  reelingFishStaminaMax({ endurance: 2, agility: 3 }, 10),
  31.6,
  "鱼最大体力应同步官网 2026-05-07 21:18 公式，把 m_init 系数更新为 1.5",
);

const safeDrag = reelingSuccessRate(presentationWithDrag(0.45), fish, poolEntry, env);
const overDrag = reelingSuccessRate(presentationWithDrag(0.95), fish, poolEntry, env);

assert(
  overDrag <= safeDrag - 0.05,
  `过高摩擦片比例应该因为超过薄弱点张力而降低起鱼率，当前 safe=${safeDrag}, over=${overDrag}`,
);

const weakLineBottomLoadout = {
  rod: "tideforge_bf660_oceanlord_bottom",
  reel: "harborforge_drum_9000",
  line: "nylon_line_2lb",
  hook: "marineredge_bg29_leviathan_8_0",
  bait: "small_live_fish",
  sinker: "riverhold_rh40",
  tip: "quiverflex_qf30r",
};
const weakLineDrags = Array.from(new Set(controlVariants("bottom_rod", getRegion(), weakLineBottomLoadout).map((controls) => controls.dragRatio)));
assert(
  weakLineDrags.some((dragRatio) => dragRatio > 0 && dragRatio < 0.2),
  `自动调参候选应该按当前装备薄弱点插入低摩擦片安全档，当前候选=${weakLineDrags.join(",")}`,
);

const tunedWeakLine = bestControlsForLoadout(
  weakLineBottomLoadout,
  "bottom_rod",
  getRegion(),
  getWeather(getRegion()),
  36,
  2,
  currentGroundbaitConfig(weakLineBottomLoadout, getRegion()),
);
assert(
  tunedWeakLine.controls.dragRatio < 0.2,
  `弱线配大轮时自动调参应该选低摩擦片安全档，当前=${tunedWeakLine.controls.dragRatio}`,
);

console.log("drag-safety-ok");
