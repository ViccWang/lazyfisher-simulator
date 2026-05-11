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
  strengthSkillInput: "28",
  enduranceSkillInput: "26",
  experienceSkillInput: "23",
  techniqueSkillInput: "25",
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
  FORMULA_LAST_UPDATED,
  "2026-05-11 12:19",
  "模拟器应标记为官网帮助页 2026-05-11 12:19 的公式版本",
);

assert.strictEqual(
  DATA.meta.version,
  "1778315607",
  "模拟器应载入官网 get_game_data 的最新静态数据版本",
);
assert.strictEqual(
  window.LAZYFISHER_GAME_DATA.ship_modules.length,
  18,
  "模拟器应同步官网最新船模块数据",
);
assert(
  window.LAZYFISHER_GAME_DATA.ship_modules.some((item) => item.id === "bluewater_fighting_gantry"),
  "模拟器应包含 2026-05-11 新增的蓝水搏鱼龙门架船模块",
);

assert.strictEqual(
  reelingFishStaminaMax({ endurance: 2, agility: 3 }, 10),
  31.6,
  "鱼最大体力应同步官网公式，把 m_init 系数更新为 1.5",
);

const formulaWeight = catchWeightFromSkew({ weightMin: 1, weightMax: 101 }, 0);
const expectedFormulaWeight = 1 + 100 * clamp((0.52 ** FISH_WEIGHT_RATIO_SIZE_EXPONENT) * 0.88, 0.02, 1);
assert(
  Math.abs(formulaWeight - expectedFormulaWeight) < 1e-9,
  `鱼重应按 rho_size^alpha * density 的最新公式估算，当前=${formulaWeight}, expected=${expectedFormulaWeight}`,
);

assert(
  groundbaitMultiplierFromAmount(300) < 1.07,
  `打窝前期应使用 smoothstep 非线性增长，少量窝料不能线性冲高，当前=${groundbaitMultiplierFromAmount(300)}`,
);

const autoDragSafety = tackleSafetyProfile(presentationWithDrag(0).items, presentationWithDrag(0).controls);
assert(
  Math.abs(autoDragSafety.dragTension - autoDragSafety.weakTension * 0.8) < 1e-9,
  `摩擦片 0 应按薄弱点 80% 自动档解析，当前 drag=${autoDragSafety.dragTension}, weak=${autoDragSafety.weakTension}`,
);

assert.strictEqual(
  byId(DATA.regions, "boat_yinlin_offshore").noticeMultiplier,
  1.7,
  "银鳞岛外海船钓应同步地图 notice 倍率",
);
assert.strictEqual(
  byId(DATA.regions, "boat_yinlin_offshore").sceneMultiplier,
  2.65,
  "银鳞岛外海船钓应读取 boat_trip.encounter_multiplier 作为场景遭遇倍率",
);
assert.strictEqual(
  byId(DATA.regions, "boat_yinlin_offshore").weightMaxOverride,
  120,
  "银鳞岛外海船钓应读取 boat_trip.weight_max_kg_override 作为公共船钓个体上限",
);
assert.strictEqual(
  byId(DATA.regions, "boat_crimson_trench").noticeMultiplier,
  4,
  "赤湾深槽船钓应同步地图 notice 倍率",
);
assert.strictEqual(
  byId(DATA.reels, "spoolworks_sw1500m_match").castFactor,
  1.03,
  "渔轮应保留官方 cast_factor，用于抛投与推荐评分",
);
assert.strictEqual(
  byId(DATA.reels, "spoolworks_sw1500m_match").controlFactor,
  1.01,
  "渔轮应保留官方 control_factor，用于控鱼能力",
);
assert.strictEqual(
  byId(DATA.reels, "spoolworks_sw1500m_match").economyFactor,
  1.02,
  "渔轮应保留官方 economy_factor，用于遛鱼体力压力",
);

const yinlin = byId(DATA.regions, "boat_yinlin_offshore");
const alphaTuna = byId(DATA.fish, "yellowfin_tuna_alpha");
assert(
  catchWeightFromSkew(alphaTuna, 3, 0, 0, yinlin) <= 120,
  "公共船钓生成鱼重应应用 boat_trip.weight_max_kg_override 上限",
);

const lowDensityYinlin = {
  ...yinlin,
  fishPool: yinlin.fishPool.map((entry) => ({ ...entry, population: entry.population * 0.01 })),
};
const noSceneYinlin = { ...lowDensityYinlin, sceneMultiplier: 1 };
const bottomLoadout = {
  rod: "tideforge_bf750_abyssal_bottom",
  reel: "abyssalcrown_ac22000_trench",
  line: "braidcore_pe_300lb_abyss",
  leader: "steelguard_sg180_trace",
  hook: "marineredge_bg37_trench_8_0",
  bait: "oceanscent_skipjack_chunk",
  sinker: "deepanchor_da220",
  tip: "quiverflex_qf78a",
};
const bottomControls = defaultControls({
  throwDistance: 61.6,
  dragRatio: 0,
  reelSpeed: 1,
  lineCutRoundLimit: 200,
});
const yinlinEnv = { ...yinlin.environment, timeAveraged: true, fishActivityFactor: 1, visibilityFactor: 1 };
const boostedPresentation = buildPresentation(bottomLoadout, bottomControls, lowDensityYinlin, yinlinEnv, 53);
const baselinePresentation = buildPresentation(bottomLoadout, bottomControls, noSceneYinlin, yinlinEnv, 53);
const boostedEncounter = candidateWeights(boostedPresentation, lowDensityYinlin, yinlinEnv, 53).encounterRate;
const baselineEncounter = candidateWeights(baselinePresentation, noSceneYinlin, yinlinEnv, 53).encounterRate;
assert(
  Math.abs(boostedEncounter / baselineEncounter - 2.65) < 1e-9,
  `船钓场景倍率应线性进入总遭遇率，当前倍率=${boostedEncounter / baselineEncounter}`,
);
elements.get("strengthSkillInput").value = "91";
elements.get("enduranceSkillInput").value = "87";
elements.get("experienceSkillInput").value = "83";
elements.get("techniqueSkillInput").value = "79";
assert.deepStrictEqual(
  derivedSkills(36),
  { strength: 91, endurance: 87, experience: 83, skill: 79 },
  "模拟器应读取玩家四项技能等级，而不是只按账号等级粗略派生",
);
for (const id of ["strengthSkillInput", "enduranceSkillInput", "experienceSkillInput", "techniqueSkillInput"]) {
  elements.get(id).value = "";
}
assert(
  heavyFishRetrieveResistanceFactor(80, false) < 1,
  `60kg 以上大鱼应按新版公式降低有效回线效率，当前=${heavyFishRetrieveResistanceFactor(80, false)}`,
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
const falseSignalMatch = els.summary.innerHTML.match(/含误判 ([0-9.]+) 次/);
assert(
  falseSignalMatch && Number(falseSignalMatch[1]) > 0 && Number(falseSignalMatch[1]) < 15,
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

const fastMatchLoadout = {
  rod: "aqualis_mr570_celestial_match",
  reel: "marineredge_me14000b_bluecurrent",
  line: "fluorocore_fc36_main",
  leader: "stealthplus_sp22_leader",
  hook: "marineredge_bg37_trench_8_0",
  bait: "small_fish_whole_bait_170",
  float: "marshfloat_mf16",
};
const fastMatchSpeedCandidates = controlVariants("match_rod", lanchaoBoatRegion, fastMatchLoadout).map((controls) => controls.reelSpeed);
assert(
  fastMatchSpeedCandidates.some((speed) => speed > 1.25),
  `自动调参应该按鱼轮 speed_max 生成更高收线候选，当前候选=${Array.from(new Set(fastMatchSpeedCandidates)).join(",")}`,
);
assert(
  fastMatchSpeedCandidates.every((speed) => speed <= 6.1),
  `自动调参生成的收线速度不应超过当前鱼轮 speed_max=6.1，当前候选=${Array.from(new Set(fastMatchSpeedCandidates)).join(",")}`,
);
const tunedFastMatch = bestControlsForLoadout(
  fastMatchLoadout,
  "match_rod",
  lanchaoBoatRegion,
  getWeather(lanchaoBoatRegion),
  53,
  8,
  currentGroundbaitConfig(fastMatchLoadout, lanchaoBoatRegion),
);
assert(
  tunedFastMatch.controls.reelSpeed > 1.25,
  `高速度鱼轮自动调参不应仍固定在保守 1.25，当前=${tunedFastMatch.controls.reelSpeed}`,
);

const seamountRegion = byId(DATA.regions, "seamount_edge");
const seamountGroundbait = { enabled: true, mode: "auto", baitType: "", amount: 3000 };
const weakMatchLoadout = {
  rod: "aqualis_mr570_celestial_match",
  reel: "abyssalcrown_ac22000_trench",
  line: "braidcore_pe_300lb_abyss",
  leader: "steelguard_sg180_trace",
  hook: "marineredge_bg37_trench_8_0",
  bait: "oceanscent_skipjack_chunk",
  float: "imperialfloat_if24_crown",
};
const heavyBottomLoadout = {
  rod: "tideforge_bf750_abyssal_bottom",
  reel: "abyssalcrown_ac22000_trench",
  line: "braidcore_pe_300lb_abyss",
  leader: "steelguard_sg180_trace",
  hook: "marineredge_bg37_trench_8_0",
  bait: "oceanscent_skipjack_chunk",
  sinker: "deepanchor_da220",
  tip: "quiverflex_qf78a",
};
const weakMatchControls = defaultControls({
  throwDistance: 21,
  floatLengthCm: 1800,
  dragRatio: 0,
  reelSpeed: 1,
  lineCutRoundLimit: 200,
});
const heavyBottomControls = defaultControls({
  throwDistance: 61.6,
  dragRatio: 0,
  reelSpeed: 1,
  lineCutRoundLimit: 200,
});
const weakMatchEstimate = estimateLoadout(
  weakMatchLoadout,
  weakMatchControls,
  seamountRegion,
  getWeather(seamountRegion),
  53,
  8,
  1.2,
  seamountGroundbait,
);
const heavyBottomEstimate = estimateLoadout(
  heavyBottomLoadout,
  heavyBottomControls,
  seamountRegion,
  getWeather(seamountRegion),
  53,
  8,
  1.2,
  seamountGroundbait,
);
assert(
  weakMatchEstimate.equipmentBreaks < 0.1 && (weakMatchEstimate.lineLockRisk ?? 0) < 0.01,
  `摩擦片能正常放线且余线足够时，不应仅因原始鱼压超过竿体上限就判定爆装，break=${weakMatchEstimate.equipmentBreaks}, lock=${weakMatchEstimate.lineLockRisk}`,
);

const safeDrag = reelingSuccessRate(presentationWithDrag(0.45), fish, poolEntry, env);
const overDrag = reelingSuccessRate(presentationWithDrag(0.95), fish, poolEntry, env);

assert(
  overDrag <= safeDrag - 0.05,
  `过高摩擦片比例应该因为超过薄弱点张力而降低起鱼率，当前 safe=${safeDrag}, over=${overDrag}`,
);

const giantFish = { weightMin: 80, weightMax: 80, strength: 5, endurance: 5, agility: 3 };
const giantOutcome = reelingOutcomeProfile(presentationWithDrag(0.95), giantFish, poolEntry, env, 80);
assert(
  giantOutcome.breakChance > 0.9,
  `重鱼超过薄弱点时应该接近确定爆装，当前=${giantOutcome.breakChance}`,
);
assert(
  giantOutcome.reelingSuccess < 0.1,
  `重鱼爆装风险应压低实际起鱼率，当前=${giantOutcome.reelingSuccess}`,
);

const releaseRoomPresentation = presentationWithDrag(0.45);
releaseRoomPresentation.items.line.length = 200;
const releaseRoomOutcome = reelingOutcomeProfile(
  releaseRoomPresentation,
  { weightMin: 20, weightMax: 20, strength: 4, endurance: 3, agility: 3 },
  poolEntry,
  env,
  20,
);
assert.strictEqual(
  releaseRoomOutcome.breakChance,
  0,
  `原始鱼压超过薄弱点但摩擦片能放线且余线足够时不应爆装，当前=${releaseRoomOutcome.breakChance}`,
);

const lockedLinePresentation = presentationWithDrag(0.45);
lockedLinePresentation.items.line.length = 80;
const lockedLineOutcome = reelingOutcomeProfile(
  lockedLinePresentation,
  { weightMin: 20, weightMax: 20, strength: 4, endurance: 3, agility: 3 },
  poolEntry,
  env,
  20,
);
assert(
  lockedLineOutcome.breakChance > 0.5,
  `余线不足导致轮组锁死后才应出现爆装风险，当前=${lockedLineOutcome.breakChance}`,
);

const lineCutOff = presentationWithDrag(0.45);
lineCutOff.actualCast = 45;
lineCutOff.targetDepth = 10;
lineCutOff.controls.lineCutLineOutLimitM = 12;
lineCutOff.controls.lineCutOut = 12;
const lineCutOutcome = reelingOutcomeProfile(lineCutOff, { weightMin: 12, weightMax: 12, strength: 2, endurance: 2, agility: 2 }, poolEntry, env, 12);
assert.strictEqual(
  lineCutOutcome.lineCutChance,
  1,
  `自动切线出线阈值应按初始出线触发主动切线，当前=${lineCutOutcome.lineCutChance}`,
);
assert.strictEqual(
  lineCutOutcome.reelingSuccess,
  0,
  `主动切线后不应再计入起鱼成功率，当前=${lineCutOutcome.reelingSuccess}`,
);

const efficientReelPresentation = presentationWithDrag(0.45);
efficientReelPresentation.items.reel = { frictionMax: 4, durability: 100, controlFactor: 1.12, economyFactor: 1.1 };
efficientReelPresentation.reelPower = 0.65;
const baselineReelPresentation = presentationWithDrag(0.45);
baselineReelPresentation.items.reel = { frictionMax: 4, durability: 100, controlFactor: 1, economyFactor: 1 };
baselineReelPresentation.reelPower = 0.65;
const efficientReelOutcome = reelingOutcomeProfile(efficientReelPresentation, fish, poolEntry, env, 6);
const baselineReelOutcome = reelingOutcomeProfile(baselineReelPresentation, fish, poolEntry, env, 6);
assert(
  efficientReelOutcome.reelingSuccess > baselineReelOutcome.reelingSuccess,
  `更高 control/economy_factor 的渔轮应提高遛鱼期望，baseline=${baselineReelOutcome.reelingSuccess}, efficient=${efficientReelOutcome.reelingSuccess}`,
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

const blackreefBigBottomLoadout = {
  rod: "tideforge_bf720_leviathan_bottom",
  reel: "abyssalcrown_ac18000_ocean",
  line: "braidcore_pe_120lb",
  leader: "braidcore_bc95_shock",
  hook: "marineredge_bg33_pelagic_8_0",
  bait: "small_fish_big_whole_310",
  sinker: "deepanchor_da120",
  tip: "quiverflex_qf68b",
};
const blackreefRoundLimits = Array.from(new Set(controlVariants("bottom_rod", byId(DATA.regions, "blackreef_dropoff"), blackreefBigBottomLoadout).map((controls) => controls.lineCutRoundLimit)));
assert(
  blackreefRoundLimits.includes(200),
  `大物图自动调参应搜索 200 回合止损，避免把长搏鱼错误切线，当前候选=${blackreefRoundLimits.join(",")}`,
);
const blackreefRegion = byId(DATA.regions, "blackreef_dropoff");
const blackreefRound100 = estimateLoadout(
  blackreefBigBottomLoadout,
  defaultControls({ throwDistance: 34.6, dragRatio: 0.95, reelSpeed: 1.2, lineCutRoundLimit: 100 }),
  blackreefRegion,
  getWeather(blackreefRegion),
  45,
  2,
  1.2,
  { mode: "none", amount: 0, type: "" },
);
const blackreefRound200 = estimateLoadout(
  blackreefBigBottomLoadout,
  defaultControls({ throwDistance: 34.6, dragRatio: 0.95, reelSpeed: 1.2, lineCutRoundLimit: 200 }),
  blackreefRegion,
  getWeather(blackreefRegion),
  45,
  2,
  1.2,
  { mode: "none", amount: 0, type: "" },
);
assert(
  blackreefRound200.lineCutEvents < blackreefRound100.lineCutEvents,
  `黑礁大底钓套 200 回合止损应显著减少主动切线，100=${blackreefRound100.lineCutEvents}, 200=${blackreefRound200.lineCutEvents}`,
);
assert(
  estimateWeightStats(blackreefRound200, 2).kgPerHour > estimateWeightStats(blackreefRound100, 2).kgPerHour,
  `减少主动切线后应提升黑礁大底钓套重量收益，100=${estimateWeightStats(blackreefRound100, 2).kgPerHour}, 200=${estimateWeightStats(blackreefRound200, 2).kgPerHour}`,
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
