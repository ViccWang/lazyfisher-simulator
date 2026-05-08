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

const smallFishYield = estimateWeightStats({
  fishRows: [
    { catch: 20, fish: { weightMin: 1, weightMax: 1 }, entry: { sizeModifier: 1 } },
  ],
}, 2);
const heavyFishYield = estimateWeightStats({
  fishRows: [
    { catch: 2, fish: { weightMin: 10, weightMax: 10 }, entry: { sizeModifier: 1 } },
  ],
}, 2);
assert.strictEqual(smallFishYield.totalWeightKg, 20, "重量收益应统计预期总重量");
assert.strictEqual(smallFishYield.kgPerHour, 10, "重量收益应统计每小时重量");
assert.strictEqual(heavyFishYield.totalWeightKg, 20, "高重量鱼方案也应保留同样总重量");
assert.strictEqual(heavyFishYield.heavyCatch, 2, "高重量鱼数量应单独展示");
assert(
  heavyFishYield.scorePerHour > smallFishYield.scorePerHour,
  `同样总重量下，大鱼更多的套装收益评分应该更高，small=${smallFishYield.scorePerHour}, heavy=${heavyFishYield.scorePerHour}`,
);

const estimateForDeferredRevenue = estimateLoadout(
  state.loadout,
  state.controls,
  getRegion(),
  getWeather(getRegion()),
  currentLevel(),
  2,
  1.2,
  currentGroundbaitConfig(state.loadout, getRegion()),
);
const originalMapRevenueTopRows = mapRevenueTopRows;
let syncMapRevenueCalls = 0;
mapRevenueTopRows = () => {
  syncMapRevenueCalls += 1;
  return [];
};
renderResults(estimateForDeferredRevenue, null, 2, currentGroundbaitConfig(state.loadout, getRegion()));
mapRevenueTopRows = originalMapRevenueTopRows;
assert.strictEqual(
  syncMapRevenueCalls,
  0,
  "结果渲染不应同步扫描所有地图收益，避免每次手动调装备/参数时卡顿",
);

const observedMatchLoadout = {
  rod: "aqualis_mr540_grand_match",
  reel: "harborforge_drum_9000",
  line: "braidcore_pe_45lb_stride",
  leader: "stealthplus_sp18_leader",
  hook: "trigrip_stinger_5_0",
  bait: "small_fish_mid_cut_140",
  float: "streamfloat_sf12",
};
const observedMatchControls = defaultControls({
  throwDistance: 14.3,
  floatLengthCm: 550,
  dragRatio: 0.704,
  reelSpeed: 1.25,
  lureAction: "auto",
  lineCutRoundLimit: 100,
  lineCutLineOutLimitM: 0,
  lineCutOut: 0,
});
const lanchaoBoatRegion = byId(DATA.regions, "boat_lanchao_shelf");
const observedEstimate = estimateLoadout(
  observedMatchLoadout,
  observedMatchControls,
  lanchaoBoatRegion,
  getWeather(lanchaoBoatRegion),
  36,
  8,
  1.2,
  currentGroundbaitConfig(observedMatchLoadout, lanchaoBoatRegion),
);
const observedWeight = estimateWeightStats(observedEstimate, 8).totalWeightKg;
assert(
  observedWeight < 1400,
  `高密度重鱼图必须扣除 BITE_WINDOW/REELING 占用时间；这套实测约 1000kg/8h，模拟不应仍到 2000kg+，当前=${observedWeight}`,
);
const observedSaleValue = estimateSaleValue(observedEstimate);
assert(
  observedSaleValue < 150000,
  `蓝潮岬重鱼图的兜底鱼价不能把 1000kg 出头估到接近 20w 金，当前=${observedSaleValue}`,
);
renderResults(observedEstimate, null, 8, currentGroundbaitConfig(observedMatchLoadout, lanchaoBoatRegion));
assert(
  els.summary.innerHTML.includes("含误判 8.5 次"),
  `误判次数也应该按有效作钓时间缩放，当前摘要=${els.summary.innerHTML}`,
);
assert.doesNotThrow(() => {
  const randomSimulation = simulate(
    observedMatchLoadout,
    observedMatchControls,
    lanchaoBoatRegion,
    getWeather(lanchaoBoatRegion),
    36,
    8,
    currentGroundbaitConfig(observedMatchLoadout, lanchaoBoatRegion),
  );
  assert(randomSimulation?.stats, "随机模拟应该返回统计结果");
}, "点击开始模拟对应的随机模拟不应该抛错");

const safeDrag = reelingSuccessRate(presentationWithDrag(0.45), fish, poolEntry, env);
const overDrag = reelingSuccessRate(presentationWithDrag(0.95), fish, poolEntry, env);

assert(
  overDrag <= safeDrag - 0.05,
  `过高摩擦片比例应该因为超过薄弱点张力而降低起鱼率，当前 safe=${safeDrag}, over=${overDrag}`,
);

const giantFish = { weightMin: 80, weightMax: 80, strength: 5, endurance: 5, agility: 3 };
const giantOutcome = reelingOutcomeProfile(presentationWithDrag(0.95), giantFish, poolEntry, env, 80);
assert(
  giantOutcome.breakChance > 0.5,
  `重鱼超过薄弱点时应该有明显爆装概率，当前=${giantOutcome.breakChance}`,
);
assert(
  giantOutcome.reelingSuccess < 0.1,
  `重鱼爆装风险应压低实际起鱼率，当前=${giantOutcome.reelingSuccess}`,
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

const fragileLanchaoEstimate = estimateLoadout(
  weakLineBottomLoadout,
  defaultControls({ throwDistance: 20, dragRatio: 0.7, reelSpeed: 1 }),
  lanchaoBoatRegion,
  getWeather(lanchaoBoatRegion),
  36,
  8,
  1.2,
  currentGroundbaitConfig(weakLineBottomLoadout, lanchaoBoatRegion),
);
assert(
  fragileLanchaoEstimate.equipmentBreaks > 1,
  `弱线进蓝潮岬应该统计大鱼爆装/断线风险，当前=${fragileLanchaoEstimate.equipmentBreaks}`,
);
renderResults(fragileLanchaoEstimate, null, 8, currentGroundbaitConfig(weakLineBottomLoadout, lanchaoBoatRegion));
assert(
  els.summary.innerHTML.includes("爆装"),
  `模拟结果摘要应该显示装备损坏风险，当前=${els.summary.innerHTML}`,
);

console.log("drag-safety-ok");
