const ROD_LABELS = {
  hand_rod: "手竿",
  match_rod: "赛竿",
  bottom_rod: "底钓",
  lure_rod: "路亚",
};

const LAYER_LABELS = {
  surface: "上层",
  mid: "中层",
  deep: "下层",
};

const LURE_ACTION_LABELS = {
  auto: "按拟饵自动",
  steady_surface: "浅层匀速",
  steady_mid: "中层匀速",
  bottom_hop: "底层跳动",
  mid_twitch: "中层抽动",
};

const AVERAGE_TIME_MATCH_CACHE = new Map();
const FORMULA_LAST_UPDATED = "2026-05-11 12:19";
const REGION_NOTICE_MULTIPLIER_OVERRIDES = Object.freeze({
  seamount_edge: 2.1,
  stormline_reef: 2,
  hadal_canyon_gate: 3.3,
  boat_yinlin_offshore: 1.7,
  boat_crimson_trench: 4,
  blackreef_dropoff: 1,
});
const FISHING_TICK_SECONDS = 60;
const FISHING_TICKS_PER_HOUR = 3600 / FISHING_TICK_SECONDS;
const ENCOUNTER_FISHING_INTERVAL_BITE_RATE_MULTIPLIER = 1;
const WAITING_BITE_STEP_SECONDS = 900;
const WAITING_BITE_MULTIPLIER_CAP = 16;
const LINE_CUT_LINE_OUT_LIMIT_MAX_M = 2000;
const FISH_WEIGHT_RATIO_SIZE_EXPONENT = 1.7;
const CATCH_SIZE_RATIO_BASE = 0.52;
const CATCH_SIZE_RATIO_LATENT_SCALE = 0.18;
const CATCH_DENSITY_BASE = 0.88;
const CATCH_DENSITY_LATENT_SCALE = 0.07;
const REELING_FISH_STAMINA_WEIGHT_COEFFICIENT = 1.5;
const REELING_RAW_TENSION_SOFTCAP_KG = 22;
const REELING_RAW_TENSION_REFERENCE_LOW_WEIGHT_KG = 250;
const REELING_RAW_TENSION_REFERENCE_LOW_TENSION_KG = 44;
const REELING_RAW_TENSION_REFERENCE_HIGH_WEIGHT_KG = 500;
const REELING_RAW_TENSION_REFERENCE_HIGH_TENSION_KG = 76;
const REELING_RAW_TENSION_OVERFLOW_PIVOT_KG = 38;
const REELING_HEAVY_RETRIEVE_RESISTANCE_START_WEIGHT_KG = 60;
const REELING_HEAVY_RETRIEVE_RESISTANCE_FULL_WEIGHT_KG = 240;
const REELING_HEAVY_RETRIEVE_MIN_FACTOR = 0.38;
const REELING_HEAVY_NORMAL_RETRIEVE_PRESSURE = 0.34;
const REELING_HEAVY_SPRINT_RETRIEVE_PRESSURE = 0.64;
const REELING_HIGH_REEL_PRESSURE_SPEED_START_MPS = 1.5;
const REELING_HIGH_REEL_PRESSURE_SPEED_FULL_MPS = 3.5;
const REELING_HIGH_REEL_TENSION_PRESSURE_START_WEIGHT_KG = 35;
const REELING_HIGH_REEL_TENSION_PRESSURE_FULL_WEIGHT_KG = 180;
const REELING_HIGH_REEL_TENSION_PRESSURE_STAMINA_FLOOR_RATIO = 0.25;
const REELING_HIGH_REEL_TENSION_PRESSURE_RELIEF_START_LINE_OUT_M = 8;
const REELING_HIGH_REEL_TENSION_PRESSURE_RELIEF_FULL_LINE_OUT_M = 70;
const REELING_HIGH_REEL_TENSION_PRESSURE_MAX_KG = 8;
const REELING_AUTO_SPEED_BASE = 1.25;
const REELING_AUTO_SPEED_STRENGTH_SCALE = 2.8;
const REELING_AUTO_SPEED_SKILL_SCALE = 1.2;
const REELING_AUTO_SPEED_STAMINA_SCALE = 0.75;
const REELING_AUTO_SPEED_AVERAGE_STAMINA_RATIO = 0.5;
const BITE_WINDOW_BASE_SECONDS = 4;
const BITE_WINDOW_REACTION_TICK_SECONDS = 1.7;
const REELING_PHASE_TICK_SECONDS = 3;
const REELING_STAMINA_SECONDS = 1.0;
const REELING_MASS_SECONDS = 11;
const SIMULATION_DEBOUNCE_MS = 90;
const AUTO_TUNE_DEBOUNCE_MS = 120;
const RECOMMENDATION_DEBOUNCE_MS = 80;
const MAP_REVENUE_DEBOUNCE_MS = 140;
const SIM_OWNED_SHIP_REGION_ID = "sim_owned_ship_exclusive";
const GROUNDBAIT_MAX_AMOUNT = 3000;
const GROUNDBAIT_DECAY_SECONDS = 7200;
const GROUNDBAIT_MAX_MULTIPLIER = 3;
const RATING_MULTIPLIERS = Object.freeze({
  below: 0.2,
  standard: 1,
  rare: 2,
  epic: 5,
  legendary: 10,
});
const FISH_VALUE_PER_KG_BY_RARITY = Object.freeze({
  common: 7,
  uncommon: 12,
  rare: 36,
  epic: 76,
  legendary: 155,
  mythic: 235,
});
const FISH_VALUE_SIZE_FACTOR_EXPONENT = 0.12;
const FISH_VALUE_SIZE_FACTOR_MIN = 0.8;
const FISH_VALUE_SIZE_FACTOR_MAX = 2;
const EXPECTED_REELING_SAMPLE_COUNT = 3;
const EXPECTED_RATING_MULTIPLIER =
  0.38 * RATING_MULTIPLIERS.below +
  0.52 * RATING_MULTIPLIERS.standard +
  0.085 * RATING_MULTIPLIERS.rare +
  0.0145 * RATING_MULTIPLIERS.epic +
  0.0005 * RATING_MULTIPLIERS.legendary;
const EXPECTED_WEIGHT_SAMPLE_COUNT = 64;
const DATA = normalizeGameData(window.LAZYFISHER_GAME_DATA);

let simulationTimer = null;
let autoTuneTimer = null;
let recommendationTimer = null;
let mapRevenueTimer = null;
let mapRevenueRequestId = 0;


function normalizeGameData(raw) {
  if (!raw?.regions?.length) throw new Error("缺少官方 game-data.js，无法加载真实地图与装备数据。");
  if (raw.regions[0].depthMin !== undefined) return raw;

  const normalized = {
    meta: {
      source: "official",
      version: raw.version || "unknown",
      extractedAt: "2026-05-07",
      formulaLastUpdated: FORMULA_LAST_UPDATED,
    },
    regions: (raw.regions || []).map(normalizeRegion),
    weatherPresets: (raw.weather_presets || []).map(normalizeWeatherPreset),
    fish: (raw.fish || []).map(normalizeFish),
    rods: (raw.rods || []).map(normalizeRod),
    reels: (raw.reels || []).map(normalizeReel),
    lines: (raw.lines || []).map(normalizeLine),
    hooks: (raw.hooks || []).map(normalizeHook),
    baits: (raw.baits || []).map(normalizeBait),
    floats: (raw.floats || []).map(normalizeFloat),
    lures: (raw.lures || []).map(normalizeLure),
    leaders: (raw.leaders || []).map(normalizeLine),
    sinkers: (raw.sinkers || []).map(normalizeSinker),
    tips: (raw.tips || []).map(normalizeTip),
    tackleBundles: raw.tackle_bundles || [],
  };

  normalized.regions.push(...simulatorVirtualRegions(raw));
  normalized.regions = normalized.regions.filter((region) => region.fishPool.length);
  normalized.fish = normalized.fish.filter((item) => item.id && item.name);
  return normalized;
}

function simulatorVirtualRegions(raw) {
  const ownedShipFish = (raw.fish || [])
    .filter((fish) =>
      Array.isArray(fish.owned_ship_route_regions) &&
      fish.owned_ship_route_regions.filter(Boolean).length > 0 &&
      (!Array.isArray(fish.regions) || fish.regions.length === 0))
    .sort((a, b) =>
      b.owned_ship_route_regions.length - a.owned_ship_route_regions.length ||
      (b.weight_max_kg ?? 0) - (a.weight_max_kg ?? 0) ||
      String(a.id).localeCompare(String(b.id)));
  if (!ownedShipFish.length) return [];

  return [normalizeRegion({
    id: SIM_OWNED_SHIP_REGION_ID,
    name: "模拟器·自有船",
    description: "仅供模拟器使用的自有船专属鱼池，汇总正式公开鱼池外的远航专属巨物。",
    water_type: "saltwater",
    depth_min: 12,
    depth_max: 40,
    fishing_mode: "boat",
    scene_type: "boat",
    recommended_styles: ["bottom_rod", "lure_rod"],
    fish_pool: ownedShipFish.map((fish) => ({
      fish_id: fish.id,
      base_ratio: 1,
      size_modifier: 1,
    })),
    spots: [],
    environment_baseline: { wind: 4.1, cloud: 4.2, rain: 0, water_flow: 2.1 },
    simulator_virtual: "owned_ship_exclusive",
  })];
}

function normalizeRegion(item) {
  const env = item.environment_baseline || {};
  const boatTrip = item.boat_trip || {};
  const spots = (item.spots || []).map(normalizeSpot).filter((spot) => spot.id && spot.name);
  return {
    id: item.id,
    name: item.name,
    description: item.description || "",
    level: item.level_required ?? 1,
    fishingMode: item.fishing_mode || "shore",
    sceneType: item.scene_type || "shore",
    depthMin: item.depth_min ?? 0.4,
    depthMax: item.depth_max ?? item.depth_min ?? 1,
    waterType: item.water_type || "freshwater",
    castOffset: item.cast_expectation_offset ?? 0,
    noticeMultiplier: REGION_NOTICE_MULTIPLIER_OVERRIDES[item.id] ?? item.notice_multiplier ?? 1,
    sceneMultiplier: boatTrip.encounter_multiplier ?? item.encounter_multiplier ?? item.scene_multiplier ?? 1,
    softLimitKg: item.soft_limit_kg ?? null,
    weightMinOverride: boatTrip.weight_min_kg_override ?? item.weight_min_kg_override ?? null,
    weightMaxOverride: boatTrip.weight_max_kg_override ?? item.weight_max_kg_override ?? null,
    boatBasePrice: boatTrip.base_price ?? 0,
    simulatorVirtual: item.simulator_virtual || null,
    recommendedStyles: item.recommended_styles || [],
    spots: spots.length ? spots : [defaultSpot()],
    environment: {
      wind: env.wind ?? 1,
      cloud: env.cloud ?? 2,
      rain: env.rain ?? 0,
      waterFlow: env.water_flow ?? 0.1,
    },
    fishPool: (item.fish_pool || []).map((entry) => ({
      fishId: entry.fish_id,
      population: entry.base_ratio ?? entry.population ?? 0,
      sizeModifier: entry.size_modifier ?? 1,
    })).filter((entry) => entry.fishId && entry.population > 0),
  };
}

function normalizeSpot(item) {
  return {
    id: item.id,
    name: item.name,
    depthBias: item.depth_bias ?? 1,
    castOffset: item.cast_expectation_offset ?? 0,
    snagRisk: item.snag_risk ?? 0,
  };
}

function defaultSpot() {
  return { id: "default", name: "默认钓位", depthBias: 1, castOffset: 0, snagRisk: 0 };
}

function normalizeWeatherPreset(item) {
  return {
    id: item.id,
    name: item.name,
    wind: averageRange(item.wind_range, 1),
    cloud: averageRange(item.cloud_range, 2),
    rain: averageRange(item.rain_range, 0),
    waterFlowDelta: item.water_flow_delta ?? 0,
    visibilityFactor: item.visibility_factor ?? 1,
    fishActivityFactor: item.fish_activity_factor ?? 1,
  };
}

function normalizeFish(item) {
  return {
    id: item.id,
    name: item.name,
    rarity: item.rarity || "common",
    weightMin: item.weight_min_kg ?? 0.01,
    weightMax: item.weight_max_kg ?? item.weight_min_kg ?? 0.1,
    sizeMin: item.size_min_cm ?? 1,
    sizeMax: item.size_max_cm ?? item.size_min_cm ?? 10,
    strength: item.strength ?? 1,
    endurance: item.endurance ?? 1,
    agility: item.agility ?? 1,
    alertness: item.alertness ?? 1,
    baitPreference: item.bait_preference || "",
    lurePreference: item.lure_preference || "",
    waterLayer: item.water_layer || "mid",
    migration: item.migration_habit || "resident",
    biteHours: item.bite_hours || [],
    offshorePreference: item.offshore_preference,
    baseValue: fishValuePerKg(item),
  };
}

function normalizeRod(item) {
  return {
    id: item.id,
    name: item.name,
    rodType: item.rod_type || "hand_rod",
    level: item.level_required ?? 1,
    length: item.length ?? 3,
    hardness: item.hardness ?? 5,
    ergonomics: item.ergonomics ?? 5,
    maxTension: item.max_tension ?? 1,
    lureWeightMin: item.lure_weight_min ?? 0,
    lureWeightMax: item.lure_weight_max ?? 0,
    durability: item.durability ?? 100,
  };
}

function normalizeReel(item) {
  return {
    id: item.id,
    name: item.name,
    level: item.level_required ?? 1,
    gearRatio: item.gear_ratio ?? 5,
    frictionMax: item.friction_max ?? 1,
    speedMax: item.speed_max ?? 1,
    castFactor: item.cast_factor ?? 1,
    controlFactor: item.control_factor ?? 1,
    economyFactor: item.economy_factor ?? 1,
    lineCapacity: item.line_capacity ?? 80,
    durability: item.durability ?? 100,
  };
}

function normalizeLine(item) {
  const diameter = item.diameter_mm ?? 0.2;
  const visibility = item.visibility ?? materialVisibility(item.material);
  return {
    id: item.id,
    name: item.name,
    level: item.level_required ?? 1,
    material: item.material || "nylon",
    diameter,
    maxTension: item.max_tension ?? 1,
    length: item.length_m ?? 50,
    visibility,
    lineTension: item.line_tension ?? clamp(0.14 + diameter * 1.2 + visibility * 0.32, 0.12, 0.92),
    durability: item.durability ?? 100,
  };
}

function normalizeHook(item) {
  const hookType = item.hook_type || "single";
  const snagFactor = item.snag_factor ?? hookTypeSnag(hookType);
  return {
    id: item.id,
    name: item.name,
    level: item.level_required ?? 1,
    hookType,
    size: item.size ?? 10,
    maxTension: item.max_tension ?? 1,
    recognition: item.recognition ?? 0.25,
    snagFactor,
    escapeHoldFactor: item.escape_hold_factor ?? clamp(0.42 + item.max_tension / 120 + (hookType === "treble" ? 0.14 : 0) - snagFactor * 0.08, 0.3, 0.95),
    durability: item.durability ?? 100,
  };
}

function normalizeBait(item) {
  return {
    id: item.id,
    name: item.name,
    level: item.level_required ?? 1,
    baitType: item.bait_type || "",
    size: item.size ?? 3,
    naturalness: item.naturalness ?? 0.65,
    color: item.color || "natural",
    weight: item.weight_g ?? Math.max(0.1, (item.size ?? 2) * 0.22),
    durability: item.durability ?? 100,
  };
}

function normalizeFloat(item) {
  return {
    id: item.id,
    name: item.name,
    level: item.level_required ?? 1,
    sensitivity: item.float_sensitivity ?? 0.5,
    threshold: item.float_detection_threshold_g ?? 18,
  };
}

function normalizeLure(item) {
  return {
    id: item.id,
    name: item.name,
    level: item.level_required ?? 1,
    lureType: item.lure_type || "spoon",
    size: item.size ?? 4,
    weight: item.weight_g ?? 5,
    turbulence: item.turbulence ?? 0.4,
    reflectivity: item.reflectivity ?? 0.4,
    sound: item.sound ?? 0.1,
    color: item.color || "natural",
    durability: item.durability ?? 100,
  };
}

function normalizeSinker(item) {
  return {
    id: item.id,
    name: item.name,
    level: item.level_required ?? 1,
    weight: item.weight_g ?? 10,
    stability: item.stability ?? 0.5,
    snagFactor: item.snag_factor ?? 0.2,
    durability: item.durability ?? 100,
  };
}

function normalizeTip(item) {
  return {
    id: item.id,
    name: item.name,
    level: item.level_required ?? 1,
    sensitivity: item.tip_sensitivity ?? 0.5,
    threshold: item.tip_detection_threshold_g ?? 20,
    testMin: item.test_weight_min_g ?? 5,
    testMax: item.test_weight_max_g ?? 40,
    durability: item.durability ?? 100,
  };
}

function averageRange(range, fallback) {
  return Array.isArray(range) && range.length >= 2 ? (Number(range[0]) + Number(range[1])) / 2 : fallback;
}

function fishValuePerKg(item) {
  const officialPerKg = firstPositiveNumber(
    item.base_value_per_kg,
    item.value_per_kg,
    item.sell_value_per_kg,
    item.sale_value_per_kg,
    item.base_price_per_kg,
  );
  if (officialPerKg !== null) return officialPerKg;

  const officialPerFish = firstPositiveNumber(
    item.base_sale_value,
    item.sale_value,
    item.sell_value,
    item.base_price,
  );
  if (officialPerFish !== null) return officialPerFish / fishBaselineWeight(item);

  return estimatedFishValuePerKg(item);
}

function firstPositiveNumber(...values) {
  for (const value of values) {
    const numberValue = Number(value);
    if (Number.isFinite(numberValue) && numberValue > 0) return numberValue;
  }
  return null;
}

function fishBaselineWeight(item) {
  const minWeight = Number(item.weight_min_kg ?? 0.01);
  const maxWeight = Number(item.weight_max_kg ?? item.weight_min_kg ?? 0.1);
  return Math.max(0.05, avg([minWeight, maxWeight]));
}

function estimatedFishValuePerKg(item) {
  const rarityValue = FISH_VALUE_PER_KG_BY_RARITY[item.rarity] ?? 16;
  const size = fishBaselineWeight(item);
  const sizeFactor = clamp(size ** FISH_VALUE_SIZE_FACTOR_EXPONENT, FISH_VALUE_SIZE_FACTOR_MIN, FISH_VALUE_SIZE_FACTOR_MAX);
  return rarityValue * sizeFactor;
}

function hookTypeSnag(type) {
  return { single: 0.18, double: 0.38, treble: 0.62, circle: 0.22 }[type] ?? 0.24;
}

const state = {
  rodType: "hand_rod",
  loadout: {},
  controls: defaultControls(),
};
let spotOverride = null;

function defaultControls(overrides = {}) {
  const lineCutLineOutLimitM = overrides.lineCutLineOutLimitM ?? overrides.lineCutOut ?? 0;
  return {
    throwDistance: 0,
    floatLengthCm: 0,
    dragRatio: 0.5,
    reelSpeed: 1.2,
    lureAction: "auto",
    lineCutRoundLimit: 100,
    lineCutLineOutLimitM,
    lineCutOut: lineCutLineOutLimitM,
    ...overrides,
    lineCutLineOutLimitM,
    lineCutOut: lineCutLineOutLimitM,
  };
}

const $ = (id) => document.getElementById(id);

const els = {
  region: $("regionSelect"),
  spot: $("spotSelect"),
  level: $("levelInput"),
  hours: $("hoursInput"),
  proficiency: $("proficiencyInput"),
  strengthSkill: $("strengthSkillInput"),
  enduranceSkill: $("enduranceSkillInput"),
  experienceSkill: $("experienceSkillInput"),
  techniqueSkill: $("techniqueSkillInput"),
  time: $("timeInput"),
  timeOutput: $("timeOutput"),
  weather: $("weatherSelect"),
  groundbaitMode: $("groundbaitModeSelect"),
  groundbaitType: $("groundbaitTypeSelect"),
  groundbaitAmount: $("groundbaitAmountInput"),
  recommendBtn: $("recommendBtn"),
  recommendations: $("recommendations"),
  recommendMeta: $("recommendMeta"),
  manualFields: $("manualFields"),
  simulateBtn: $("simulateBtn"),
  loadoutJson: $("loadoutJson"),
  importLoadout: $("importLoadoutBtn"),
  exportLoadout: $("exportLoadoutBtn"),
  downloadLoadout: $("downloadLoadoutBtn"),
  transferStatus: $("transferStatus"),
  cast: $("castInput"),
  float: $("floatInput"),
  drag: $("dragInput"),
  dragOutput: $("dragOutput"),
  reelSpeed: $("reelSpeedInput"),
  lureAction: $("lureActionInput"),
  lineCutRound: $("lineCutRoundInput"),
  lineCut: $("lineCutInput"),
  resetControls: $("resetControlsBtn"),
  summary: $("summaryCards"),
  distribution: $("distribution"),
  mapRevenue: $("mapRevenue"),
  subtitle: $("resultSubtitle"),
};

function clamp(x, min = 0, max = 1) {
  if (!Number.isFinite(x)) return min;
  return Math.min(Math.max(x, min), max);
}

function gauss(x, mu, sigma) {
  const safeSigma = Math.max(Math.abs(sigma), 0.0001);
  return Math.exp(-(((x - mu) / safeSigma) ** 2));
}

function softcap(x, p = 1) {
  return x <= 0 ? 0 : x / (x + p);
}

function avg(values) {
  const nums = values.filter(Number.isFinite);
  return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;
}

function byId(collection, id) {
  return collection.find((item) => item.id === id) || null;
}

function currentLevel() {
  return clamp(Number(els.level.value), 1, 200);
}

function available(collection, level = currentLevel(), extra = () => true) {
  return collection.filter((item) => item.level <= level && extra(item));
}

function firstId(collection) {
  return collection[0] ? collection[0].id : "";
}

function getRegion() {
  return byId(DATA.regions, els.region.value) || DATA.regions[0];
}

function getSpot(region = getRegion()) {
  const spots = region.spots?.length ? region.spots : [defaultSpot()];
  if (spotOverride?.regionId === region.id) return byId(spots, spotOverride.spotId) || spots[0];
  return byId(spots, els.spot.value) || spots[0];
}

function activeCastOffset(region = getRegion()) {
  const spot = getSpot(region);
  return (region.castOffset ?? 0) + (spot?.castOffset ?? 0);
}

function withSpot(region, spot, fn) {
  const previous = spotOverride;
  spotOverride = { regionId: region.id, spotId: spot?.id || "" };
  try {
    return fn();
  } finally {
    spotOverride = previous;
  }
}

function getWeather(region) {
  const rows = averageWeatherPresets().map((preset) => weatherFromPreset(region, preset));
  return {
    timeAveraged: true,
    regionTime: null,
    wind: avg(rows.map((row) => row.wind)),
    cloud: avg(rows.map((row) => row.cloud)),
    rain: avg(rows.map((row) => row.rain)),
    waterFlow: avg(rows.map((row) => row.waterFlow)),
    visibilityFactor: avg(rows.map((row) => row.visibilityFactor)),
    fishActivityFactor: avg(rows.map((row) => row.fishActivityFactor)),
  };
}

function isShoreRegion(region = getRegion()) {
  return region?.fishingMode !== "boat" && region?.sceneType !== "boat" && !String(region?.id || "").startsWith("boat_");
}

function groundbaitTypeOptions() {
  const seen = new Set();
  const rows = [];
  for (const bait of DATA.baits) {
    if (!bait.baitType || seen.has(bait.baitType)) continue;
    seen.add(bait.baitType);
    rows.push(bait.baitType);
  }
  return rows.sort((a, b) => baitTypeLabel(a).localeCompare(baitTypeLabel(b), "zh-CN"));
}

function currentGroundbaitConfig(loadout = state.loadout, region = getRegion()) {
  const mode = els.groundbaitMode.value;
  const enabled = isShoreRegion(region) && mode !== "none";
  const amount = clamp(Number(els.groundbaitAmount.value), 0, GROUNDBAIT_MAX_AMOUNT);
  const autoType = byId(DATA.baits, loadout?.bait)?.baitType || "";
  const selectedType = els.groundbaitType.value || "";
  return {
    enabled: enabled && amount > 0,
    mode,
    baitType: mode === "auto" ? autoType : selectedType,
    amount,
  };
}

function groundbaitMultiplier(config, presentation, fishObj, elapsedSeconds = 0, hours = null) {
  const baitType = config?.mode === "auto" ? presentation.items.bait?.baitType : config?.baitType;
  if (!config?.enabled || presentation.rodType === "lure_rod" || !baitType) return 1;
  if (fishObj.baitPreference !== baitType) return 1;
  if (hours !== null) return averageGroundbaitMultiplier(config.amount, hours);
  const remaining = Math.max(0, config.amount - (GROUNDBAIT_MAX_AMOUNT / GROUNDBAIT_DECAY_SECONDS) * elapsedSeconds);
  return groundbaitMultiplierFromAmount(remaining);
}

function averageGroundbaitMultiplier(amount, hours) {
  const ticks = fishingTicksForHours(hours, true);
  let total = 0;
  for (let tick = 0; tick < ticks; tick += 1) {
    total += groundbaitMultiplierFromAmount(amount - (GROUNDBAIT_MAX_AMOUNT / GROUNDBAIT_DECAY_SECONDS) * tick * FISHING_TICK_SECONDS);
  }
  return total / ticks;
}

function fishingTicksForHours(hours, rounded = false) {
  const ticks = Math.max(1, Number(hours || 0) * FISHING_TICKS_PER_HOUR);
  return rounded ? Math.round(ticks) : ticks;
}

function groundbaitMultiplierFromAmount(amount) {
  const ratio = clamp(amount / GROUNDBAIT_MAX_AMOUNT);
  const smooth = ratio ** 2 * (3 - 2 * ratio);
  return 1 + (GROUNDBAIT_MAX_MULTIPLIER - 1) * smooth;
}

function groundbaitSummary(config, presentation = null) {
  if (!config?.enabled) return "";
  const baitType = config.mode === "auto" ? presentation?.items?.bait?.baitType || config.baitType : config.baitType;
  if (!baitType) return "";
  return `打窝 ${baitTypeLabel(baitType)} ${Math.round(config.amount)}/${GROUNDBAIT_MAX_AMOUNT}`;
}

function averageWeatherPresets() {
  if (DATA.weatherPresets?.length) return DATA.weatherPresets;
  return [
    { id: "calm", wind: 0.7, cloud: 2.2, rain: 0.5, waterFlow: 0.12, visibilityFactor: 1, fishActivityFactor: 1 },
    { id: "cloudy", wind: 1.4, cloud: 6.8, rain: 2.5, waterFlow: 0.28, visibilityFactor: 1, fishActivityFactor: 1 },
    { id: "rainy", wind: 2.4, cloud: 8.5, rain: 18, waterFlow: 0.88, visibilityFactor: 1, fishActivityFactor: 1 },
    { id: "windy", wind: 7.2, cloud: 4.5, rain: 4, waterFlow: 1.1, visibilityFactor: 1, fishActivityFactor: 1 },
  ];
}

function weatherFromPreset(region, preset) {
  return {
    wind: clamp((region.environment.wind + preset.wind) / 2, 0, 12),
    cloud: clamp((region.environment.cloud + preset.cloud) / 2, 0, 10),
    rain: clamp((region.environment.rain + preset.rain) / 2, 0, 100),
    waterFlow: preset.waterFlowDelta === undefined
      ? clamp((region.environment.waterFlow + preset.waterFlow) / 2, 0, 4)
      : clamp(region.environment.waterFlow + preset.waterFlowDelta, 0, 4),
    visibilityFactor: preset.visibilityFactor ?? 1,
    fishActivityFactor: preset.fishActivityFactor ?? 1,
  };
}

function derivedSkills(level) {
  const fallback = {
    strength: Math.max(1, Math.round(level * 0.78)),
    endurance: Math.max(1, Math.round(level * 0.72)),
    experience: Math.max(1, Math.round(level * 0.64)),
    skill: Math.max(1, Math.round(level * 0.7)),
  };
  return {
    strength: skillInputValue(els.strengthSkill, fallback.strength),
    endurance: skillInputValue(els.enduranceSkill, fallback.endurance),
    experience: skillInputValue(els.experienceSkill, fallback.experience),
    skill: skillInputValue(els.techniqueSkill, fallback.skill),
  };
}

function skillInputValue(input, fallback) {
  const value = Number(input?.value);
  if (!Number.isFinite(value) || value <= 0) return fallback;
  return clamp(Math.floor(value), 1, 999);
}

function normalizeLoadout(rodType = state.rodType) {
  const level = currentLevel();
  const rods = available(DATA.rods, level, (item) => item.rodType === rodType);
  const selectedRod = byId(rods, state.loadout.rod) || rods[0];
  const loadout = {
    rod: selectedRod ? selectedRod.id : "",
    reel: "",
    line: firstId(available(DATA.lines, level)),
    leader: "",
    hook: firstId(available(DATA.hooks, level)),
    bait: "",
    float: "",
    lure: "",
    sinker: "",
    tip: "",
  };

  if (rodType === "hand_rod") {
    loadout.bait = firstId(available(DATA.baits, level));
    loadout.float = firstId(available(DATA.floats, level));
  } else if (rodType === "match_rod") {
    loadout.reel = firstId(available(DATA.reels, level));
    loadout.bait = firstId(available(DATA.baits, level));
    loadout.float = firstId(available(DATA.floats, level));
  } else if (rodType === "bottom_rod") {
    loadout.reel = firstId(available(DATA.reels, level));
    loadout.bait = firstId(available(DATA.baits, level));
    loadout.sinker = firstId(available(DATA.sinkers, level));
    loadout.tip = firstId(available(DATA.tips, level));
  } else {
    loadout.reel = firstId(available(DATA.reels, level));
    loadout.lure = firstId(available(DATA.lures, level));
  }

  state.loadout = { ...loadout, ...Object.fromEntries(Object.entries(state.loadout).filter(([, value]) => value)) };
  for (const [slot, collectionName] of Object.entries(slotCollections())) {
    if (!state.loadout[slot]) continue;
    const collection = available(DATA[collectionName], level, slot === "rod" ? (item) => item.rodType === rodType : () => true);
    if (!collection.some((item) => item.id === state.loadout[slot])) state.loadout[slot] = loadout[slot] || "";
  }
}

function slotCollections() {
  return {
    rod: "rods",
    reel: "reels",
    line: "lines",
    leader: "leaders",
    hook: "hooks",
    bait: "baits",
    float: "floats",
    lure: "lures",
    sinker: "sinkers",
    tip: "tips",
  };
}

function requiredSlots(rodType) {
  const hasLeader = available(DATA.leaders, currentLevel()).length > 0;
  if (rodType === "hand_rod") return ["rod", "line", "hook", "bait", "float"];
  if (rodType === "match_rod") return ["rod", "reel", "line", ...(hasLeader ? ["leader"] : []), "hook", "bait", "float"];
  if (rodType === "bottom_rod") return ["rod", "reel", "line", ...(hasLeader ? ["leader"] : []), "hook", "bait", "sinker", "tip"];
  return ["rod", "reel", "line", ...(hasLeader ? ["leader"] : []), "hook", "lure"];
}

function renderManualFields() {
  normalizeLoadout(state.rodType);
  const labels = {
    rod: "鱼竿",
    reel: "渔轮",
    line: "鱼线",
    leader: "引线",
    hook: "鱼钩",
    bait: "真饵",
    float: "浮子",
    lure: "拟饵",
    sinker: "沉子",
    tip: "竿梢",
  };
  const stats = {
    rod: (item) => `${item.name} · Lv.${item.level} · ${item.maxTension}kg`,
    reel: (item) => `${item.name} · Lv.${item.level} · 拖力${item.frictionMax}kg`,
    line: (item) => `${item.name} · Lv.${item.level} · ${item.maxTension}kg`,
    leader: (item) => `${item.name} · Lv.${item.level} · ${item.maxTension}kg`,
    hook: (item) => `${item.name} · Lv.${item.level} · ${formatHookSize(item.size)}`,
    bait: (item) => `${item.name} · Lv.${item.level} · ${baitTypeLabel(item.baitType)}`,
    float: (item) => `${item.name} · Lv.${item.level} · 灵敏${item.sensitivity}`,
    lure: (item) => `${item.name} · Lv.${item.level} · ${lureTypeLabel(item.lureType)}`,
    sinker: (item) => `${item.name} · Lv.${item.level} · ${item.weight}g`,
    tip: (item) => `${item.name} · Lv.${item.level} · 阈值${item.threshold}g`,
  };

  els.manualFields.innerHTML = "";
  for (const slot of requiredSlots(state.rodType)) {
    const collectionName = slotCollections()[slot];
    const options = available(DATA[collectionName], currentLevel(), slot === "rod" ? (item) => item.rodType === state.rodType : () => true);
    const label = document.createElement("label");
    const span = document.createElement("span");
    span.textContent = labels[slot];
    const select = document.createElement("select");
    select.dataset.slot = slot;
    if (slot === "leader") {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "不使用前导";
      select.appendChild(option);
    }
    for (const item of options) {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = stats[slot](item);
      select.appendChild(option);
    }
    select.value = state.loadout[slot] || (slot === "leader" ? "" : firstId(options));
    if (!state.loadout[slot] && slot !== "leader") state.loadout[slot] = select.value;
    label.append(span, select);
    els.manualFields.appendChild(label);
  }

  els.float.disabled = state.rodType === "bottom_rod" || state.rodType === "lure_rod";
  els.drag.disabled = state.rodType === "hand_rod";
  els.reelSpeed.disabled = state.rodType === "hand_rod";
  els.lureAction.disabled = state.rodType !== "lure_rod";
}

function formatHookSize(size) {
  return size < 0 ? `${Math.abs(size)}/0` : `${size}号`;
}

function baitTypeLabel(type) {
  const labels = {
    worm: "虫饵",
    corn: "玉米",
    insect: "昆虫",
    algae_paste: "藻饵",
    grass: "草饵",
    grain: "谷物",
    pellet: "颗粒",
    snail: "螺饵",
    paste: "面饵",
    shrimp: "虾饵",
    small_fish: "活小鱼",
    shellfish: "贝肉",
    crab: "蟹饵",
    frog: "青蛙",
  };
  return labels[type] || type;
}

function lureTypeLabel(type) {
  return { topwater: "水面系", spoon: "亮片", minnow: "米诺", crank: "摇滚", jig: "铅头钩" }[type] || type;
}

function colorStrength(color) {
  return { natural: 0.25, green: 0.45, yellow: 0.5, orange: 0.62, silver: 0.78, blue: 0.58 }[color] ?? 0.45;
}

function naturalColor(color) {
  return { natural: 0.9, green: 0.72, yellow: 0.64, orange: 0.58, silver: 0.48, blue: 0.52 }[color] ?? 0.6;
}

function materialVisibility(material) {
  return { fluorocarbon: 0.15, nylon: 0.35, pe: 0.45, steel: 0.85 }[material] ?? 0.45;
}

function hookProfile(hookItem) {
  if (!hookItem) return { bonus: 0.45, visibilitySnag: 0.2, snag: 0.2 };
  const byType = {
    treble: { bonus: 0.75, visibilitySnag: 0.55, fallbackSnag: 0.7 },
    double: { bonus: 0.6, visibilitySnag: 0.4, fallbackSnag: 0.45 },
    single: { bonus: 0.45, visibilitySnag: 0.2, fallbackSnag: 0.2 },
  }[hookItem.hookType] || { bonus: 0.45, visibilitySnag: 0.2, fallbackSnag: 0.2 };
  return {
    bonus: byType.bonus,
    visibilitySnag: byType.visibilitySnag,
    snag: hookItem.snagFactor ?? byType.fallbackSnag,
  };
}

function resolveAction(rawAction, lureType) {
  if (rawAction && rawAction !== "auto") return rawAction;
  return { topwater: "steady_surface", jig: "bottom_hop", spoon: "steady_mid", crank: "steady_mid", minnow: "mid_twitch" }[lureType] || "steady_mid";
}

function getLoadoutItems(loadout) {
  return {
    rod: byId(DATA.rods, loadout.rod),
    reel: byId(DATA.reels, loadout.reel),
    line: byId(DATA.lines, loadout.line),
    leader: byId(DATA.leaders, loadout.leader),
    hook: byId(DATA.hooks, loadout.hook),
    bait: byId(DATA.baits, loadout.bait),
    float: byId(DATA.floats, loadout.float),
    lure: byId(DATA.lures, loadout.lure),
    sinker: byId(DATA.sinkers, loadout.sinker),
    tip: byId(DATA.tips, loadout.tip),
  };
}

function getControls() {
  const lineCutLineOutLimitM = clamp(Number(els.lineCut.value), 0, LINE_CUT_LINE_OUT_LIMIT_MAX_M);
  return defaultControls({
    throwDistance: clamp(Number(els.cast.value), 0, 120),
    floatLengthCm: clamp(Number(els.float.value), 0, 3000),
    dragRatio: clamp(Number(els.drag.value), 0, 1),
    reelSpeed: clamp(Number(els.reelSpeed.value), 0, 10),
    lureAction: els.lureAction.value,
    lineCutRoundLimit: clamp(Number(els.lineCutRound.value), 1, 500),
    lineCutLineOutLimitM,
    lineCutOut: lineCutLineOutLimitM,
  });
}

function buildPresentation(loadout, controls, region, env, level) {
  const items = getLoadoutItems(loadout);
  const rod = items.rod;
  const line = items.line;
  const hookItem = items.hook;
  if (!rod || !line || !hookItem) return null;
  const rodType = rod.rodType;
  const skills = derivedSkills(level);
  const action = resolveAction(controls.lureAction, items.lure?.lureType);
  const spot = getSpot(region);
  const castExpectationOffset = activeCastOffset(region);
  const autoFloat = Math.min(1100, Math.max(45, region.depthMax * 52));
  const floatLengthCm = controls.floatLengthCm > 0 ? controls.floatLengthCm : autoFloat;
  let targetDepth;

  if (rodType === "bottom_rod") {
    targetDepth = Math.max(region.depthMin, region.depthMax - 0.25);
  } else if (rodType === "lure_rod") {
    const actionDepth = {
      steady_surface: { ratio: 0.18, min: 0.12 },
      steady_mid: { ratio: 0.46, min: 0.55 },
      bottom_hop: { ratio: 0.84, min: 1.2 },
      mid_twitch: { ratio: 0.52, min: 0.7 },
    }[action] || { ratio: 0.46, min: 0.55 };
    targetDepth = clamp(Math.max(actionDepth.min, actionDepth.ratio * region.depthMax), 0.05, Math.max(region.depthMax, 0.05));
  } else {
    targetDepth = clamp(floatLengthCm / 100, 0.05, Math.max(region.depthMax, 0.05));
  }

  const surfaceMax = Math.min(10, Math.max(0.2 * region.depthMax, 0.05));
  const midMax = Math.max(surfaceMax, 0.6 * region.depthMax);
  const targetLayer = targetDepth <= surfaceMax ? "surface" : targetDepth <= midMax ? "mid" : "deep";
  const payload = castPayload(items, rodType);
  const window = rodWeightWindow(rod, rodType);
  const payloadMid = (window.min + window.max) / 2;
  const payloadSpan = Math.max(0.8, (window.max - window.min) / 2);
  const payloadMatch = gauss(payload, payloadMid, payloadSpan);
  const strengthFactor = 0.82 + 0.36 * clamp(skills.strength / 30);
  const hardFactor = 0.88 + 0.22 * clamp(rod.hardness / 10);
  const payloadFactor = 0.45 + 0.65 * payloadMatch;
  const reelCastFactor = items.reel ? clamp(items.reel.castFactor ?? 1, 0.75, 1.25) : 1;
  const reelControlFactor = items.reel ? clamp(items.reel.controlFactor ?? 1, 0.75, 1.25) : 1;
  const reelEconomyFactor = items.reel ? clamp(items.reel.economyFactor ?? 1, 0.75, 1.25) : 1;
  const baseCast = {
    hand_rod: 4 + 2.4 * rod.length,
    match_rod: 5.5 + 3.2 * rod.length,
    bottom_rod: 10 + 5.2 * rod.length,
    lure_rod: 8 + 5.8 * rod.length,
  }[rodType];
  const autoCast = {
    hand_rod: Math.max(1.6 * rod.length, 4),
    match_rod: Math.max(2.2 * rod.length, 4),
    bottom_rod: Math.max(3.5 * rod.length, 2 * region.depthMax + 4),
    lure_rod: Math.max(Math.max(4 * rod.length, 4), Math.min(11, 1.3 * Math.max(4 * rod.length, 4))),
  }[rodType];
  const requestedCast = controls.throwDistance > 0 ? controls.throwDistance : autoCast;
  const lineCastCap = Math.max(1.5, line.length - 0.35 * rod.length);
  const maxCast = Math.min(lineCastCap, Math.max(2, baseCast * strengthFactor * hardFactor * payloadFactor * reelCastFactor));
  const actualCast = Math.min(requestedCast, maxCast);
  let idealRodDistance = {
    hand_rod: 1.6 * rod.length,
    match_rod: 4 * rod.length,
    bottom_rod: 3.5 * rod.length,
    lure_rod: 4 * rod.length,
  }[rodType];
  if (rodType === "bottom_rod" && items.sinker) idealRodDistance *= clamp(items.sinker.weight / 25, 0.75, 1.35);
  let distanceFactor = 0.4 + 0.6 * gauss(actualCast, idealRodDistance, 0.4 * idealRodDistance);
  if (items.sinker) distanceFactor = clamp(distanceFactor * (0.92 + 0.16 * clamp(items.sinker.stability)));
  const lineNeed = Math.sqrt(actualCast ** 2 + targetDepth ** 2) + 0.35 * rod.length;
  const reachFactor = clamp(line.length / Math.max(lineNeed, 0.1));
  const durabilityFactor = clamp(avg([rod.durability, line.durability, hookItem.durability, items.leader?.durability, items.reel?.durability, items.sinker?.durability, items.bait?.durability, items.lure?.durability].filter(Boolean).map((v) => v / 100)));
  const skillFactor = softcap(skills.skill, 6);
  const expFactor = softcap(skills.experience, 8);
  const endFactor = softcap(skills.endurance, 6);
  const ctrl = clamp((0.25 + 0.3 * skillFactor + 0.2 * expFactor + 0.1 * endFactor + 0.15 * clamp(rod.ergonomics / 10) + 0.15 * durabilityFactor) * reelControlFactor);
  const ambient = clamp(0.35 * clamp(env.cloud / 10) + 0.25 * clamp(env.rain / 20) + 0.25 * clamp(env.wind / 8) + 0.15 * clamp(env.waterFlow / 2.5));
  const lineForVision = items.leader || line;
  const rawLineVisibility = items.leader ? avg([line.visibility, items.leader.visibility]) : line.visibility;
  const lineVisibility = clamp((0.6 * rawLineVisibility + 0.4 * materialVisibility(lineForVision.material)) * (env.visibilityFactor ?? 1) * (1 - 0.35 * ambient));
  const hook = hookProfile(hookItem);
  const hookVisibility = clamp(hookItem.recognition * (1 - 0.25 * ambient) + 0.35 * hook.visibilitySnag);
  const reelPower = items.reel ? clamp(0.35 * (items.reel.gearRatio / 8) + 0.25 * (items.reel.speedMax / 12) + 0.4 * (items.reel.frictionMax / 6)) : 0.15;
  const floatLinePenalty = floatDetectionPenalty(targetDepth);
  const lureBase = lurePresentation(items, controls, action, targetLayer, ctrl, lineVisibility, hookVisibility, reelPower, null);
  const baitBase = baitPresentation(items, env, ctrl, lineVisibility, hookVisibility);
  const detectionScore = biteDetectionScore(rodType, items, targetDepth, floatLinePenalty);
  const hookPower = hookPowerScore(rodType, items, controls, reelPower, ctrl, detectionScore, lureBase.retrieveBase);
  const snagRate = snagChance({ rodType, targetDepth, actualCast, idealRodDistance, reachFactor, ctrl, durabilityFactor, env, region, items, lureBase, controls, hook });
  const tackleSafety = tackleSafetyProfile(items, controls);

  return {
    items,
    region,
    rodType,
    spot,
    castExpectationOffset,
    controls,
    skills,
    action,
    targetDepth,
    targetLayer,
    actualCast,
    idealRodDistance,
    distanceFactor,
    reachFactor,
    durabilityFactor,
    ctrl,
    ambient,
    lineVisibility,
    hookVisibility,
    reelPower,
    reelControlFactor,
    reelEconomyFactor,
    floatLinePenalty,
    detectionScore,
    hookPower,
    hookBonus: hook.bonus,
    hookSnag: hook.snag,
    baitBase,
    lureBase,
    payload,
    snagRate,
    tackleSafety,
  };
}

function castPayload(items, rodType) {
  if (rodType === "lure_rod") return items.lure?.weight ?? 4;
  const hookWeight = hookInternalSize(items.hook) * 0.08 + 0.08;
  const baitWeight = items.bait?.weight ?? 0.4;
  if (rodType === "bottom_rod") return (items.sinker?.weight ?? 12) + hookWeight + baitWeight;
  return hookWeight + baitWeight;
}

function rodWeightWindow(rod, rodType) {
  if (rodType === "lure_rod") return { min: rod.lureWeightMin, max: rod.lureWeightMax };
  const center = Math.max(2, rod.length * (rodType === "bottom_rod" ? 8 : 1.5) + rod.hardness * (rodType === "bottom_rod" ? 1.8 : 0.35));
  const span = rodType === "bottom_rod" ? Math.max(8, rod.maxTension * 1.6) : Math.max(2.2, rod.length * 0.8);
  return { min: Math.max(0.5, center - span), max: center + span };
}

function hookInternalSize(hookItem) {
  if (!hookItem) return 3;
  return Math.max((20 - hookItem.size) / 2, 0);
}

function floatDetectionPenalty(targetDepth) {
  const delta = Math.max(targetDepth - 1.5, 0);
  return clamp(Math.min(1 - 0.18 * delta, 1 - 0.12 * delta), 0.45, 1);
}

function biteDetectionScore(rodType, items, targetDepth, floatLinePenalty) {
  if (rodType === "hand_rod" || rodType === "match_rod") {
    const f = items.float || { sensitivity: 0.45, threshold: 24 };
    return clamp((0.35 + 0.65 * f.sensitivity) * clamp(18 / Math.max(6, f.threshold), 0.25, 1) * floatLinePenalty);
  }
  if (rodType === "bottom_rod") {
    return bottomDetectionMetrics(items).sensitivity;
  }
  const lineFactor = clamp(1 - 0.3 * (items.line?.visibility ?? 0.4));
  const rodFactor = clamp(0.5 + 0.05 * (items.rod?.hardness ?? 5));
  return clamp(0.35 + 0.25 * lineFactor + 0.24 * rodFactor + 0.16 * (items.reel ? items.reel.speedMax / 10 : 0.2));
}

function bottomDetectionMetrics(items) {
  const tipItem = items.tip || { sensitivity: 0.2, threshold: 42, testMin: 10, testMax: 40 };
  const sinkerWeight = items.sinker?.weight ?? 20;
  const tipMid = (tipItem.testMin + tipItem.testMax) / 2;
  const tipSpan = Math.max(4, (tipItem.testMax - tipItem.testMin) / 2);
  const tipWeight = gauss(sinkerWeight, tipMid, tipSpan);
  const tipSensitivity = clamp(0.25 + 0.45 * tipItem.sensitivity + 0.3 * tipWeight);
  const tipThreshold = Math.max(2, tipItem.threshold * (1.2 - 0.45 * tipSensitivity));
  const bellSensitivity = 0.1;
  const bellThreshold = 58;
  const sensitivity = clamp(0.65 * tipSensitivity + 0.35 * bellSensitivity);
  const threshold = Math.max(1, 0.7 * tipThreshold + 0.3 * bellThreshold - 3 * sensitivity);
  return { sensitivity, threshold, tipRawSensitivity: tipItem.sensitivity };
}

function hookPowerScore(rodType, items, controls, reelPower, ctrl, detectionScore, lureRetrieveBase = 0.75) {
  const transfer = clamp(1 - 0.55 * (items.line?.lineTension ?? 0.35));
  const dragWindow = gauss(controls.dragRatio, 0.45, 0.35);
  const hard = clamp((items.rod?.hardness ?? 5) / 10);
  if (rodType === "bottom_rod") return clamp(0.35 + 0.25 * clamp((items.sinker?.weight ?? 20) / 40) + 0.15 * dragWindow + 0.15 * reelPower + 0.1 * ctrl + 0.1 * transfer + 0.1 * detectionScore);
  if (rodType === "lure_rod") return clamp(0.3 + 0.2 * lureRetrieveBase + 0.2 * reelPower + 0.15 * ctrl + 0.15 * transfer + 0.1 * hard);
  return clamp(0.25 + 0.2 * (items.float?.sensitivity ?? 0.5) + 0.2 * ctrl + 0.15 * transfer + 0.1 * dragWindow + 0.1 * hard);
}

function baitPresentation(items, env, ctrl, lineVisibility, hookVisibility) {
  const baitItem = items.bait;
  const sink = clamp((items.sinker?.weight ?? 0) / 30);
  const motion = clamp(0.25 + 0.15 * colorStrength(baitItem?.color) + 0.15 * clamp(env.waterFlow / 2.5) + 0.15 * (items.float?.sensitivity ?? 0.25) + 0.1 * sink);
  const naturalness = clamp(0.45 + 0.2 * naturalColor(baitItem?.color) + 0.15 * ctrl - 0.15 * lineVisibility - 0.15 * hookVisibility);
  return { motion, naturalness };
}

function lurePresentation(items, controls, action, targetLayer, ctrl, lineVisibility, hookVisibility, reelPower, fishObj) {
  const lureItem = items.lure;
  if (!lureItem) return { retrieve: 0.4, retrieveBase: 0.4, actionFactor: 0.5, weightMatch: 0.5, motion: 0.25, naturalness: 0.25 };
  const actionSpeed = { steady_surface: 1.55, steady_mid: 1.2, bottom_hop: 0.72, mid_twitch: 1.38 }[action] ?? 1.2;
  const typeDelta = { topwater: 0.15, spoon: 0.08, minnow: 0, jig: -0.08, crank: -0.04 }[lureItem.lureType] ?? 0;
  const idealBase = Math.max(0.35, actionSpeed + typeDelta);
  const maxSpeed = items.reel?.speedMax ?? 1.2;
  const effectiveSpeed = Math.min(controls.reelSpeed, maxSpeed);
  const retrieveBase = gauss(effectiveSpeed, idealBase, Math.max(0.6, 0.55 * idealBase));
  let retrieve = retrieveBase;
  if (fishObj) {
    const agility = softcap(fishObj.agility);
    const alert = softcap(fishObj.alertness);
    const fishDelta = clamp(0.7 * (agility - 0.44) - 0.55 * (alert - 0.394), -0.25, 0.25);
    const ideal = Math.max(0.35, idealBase + fishDelta);
    retrieve = gauss(effectiveSpeed, ideal, Math.max(0.6, 0.55 * ideal));
  }
  const actionFactor = actionCompatibility(lureItem.lureType, action);
  const weightMatch = lureWeightMatch(items.rod, lureItem);
  const motionMul = { steady_surface: 0.92, steady_mid: 1, bottom_hop: 1.2, mid_twitch: 1.12 }[action] ?? 1;
  const naturalBonus = { steady_surface: 0.18, steady_mid: 0.22, bottom_hop: 0.08, mid_twitch: 0.1 }[action] ?? 0.12;
  const reflect = ({ surface: 1, mid: 0.7, deep: 0.45 }[targetLayer] ?? 0.7) * lureItem.reflectivity;
  const turb = ({ surface: 0.7, mid: 1, deep: 1 }[targetLayer] ?? 1) * lureItem.turbulence;
  const motion = clamp((0.35 * turb + 0.25 * reflect + 0.2 * lureItem.sound + 0.2 * retrieve) * weightMatch * motionMul * actionFactor);
  const naturalness = clamp((0.2 + 0.22 * retrieve + 0.18 * weightMatch + 0.15 * ctrl + naturalBonus - 0.1 * lineVisibility - 0.15 * hookVisibility) * (0.84 + 0.16 * actionFactor));
  return { retrieve, retrieveBase, actionFactor, weightMatch, motion, naturalness, reflect, turb, reelPower };
}

function actionCompatibility(type, action) {
  const matrix = {
    topwater: { steady_surface: 1, steady_mid: 0.55, bottom_hop: 0.35, mid_twitch: 0.76 },
    spoon: { steady_surface: 0.72, steady_mid: 1, bottom_hop: 0.5, mid_twitch: 0.84 },
    crank: { steady_surface: 0.52, steady_mid: 1, bottom_hop: 0.42, mid_twitch: 0.72 },
    jig: { steady_surface: 0.36, steady_mid: 0.62, bottom_hop: 1, mid_twitch: 0.7 },
    minnow: { steady_surface: 0.74, steady_mid: 0.82, bottom_hop: 0.46, mid_twitch: 1 },
  };
  return matrix[type]?.[action] ?? 0.65;
}

function lureWeightMatch(rodItem, lureItem) {
  if (!rodItem || !lureItem) return 0.5;
  let delta = 0;
  if (lureItem.weight < rodItem.lureWeightMin) delta = rodItem.lureWeightMin - lureItem.weight;
  if (lureItem.weight > rodItem.lureWeightMax) delta = lureItem.weight - rodItem.lureWeightMax;
  if (delta === 0) return 1;
  return gauss(delta, 0, Math.max(1, 0.6 * (rodItem.lureWeightMax - rodItem.lureWeightMin)));
}

function snagChance(ctx) {
  const bottom = clamp(ctx.targetDepth / Math.max(ctx.region.depthMax, 0.1));
  const contact = clamp((bottom - 0.55) / 0.45);
  const terrain = clamp(0.55 * clamp(ctx.env.waterFlow / 2.5) + 0.15 * clamp(ctx.env.wind / 8) + 0.1 * clamp(ctx.env.rain / 20) + 0.2 * bottom);
  const overcast = clamp((ctx.actualCast - ctx.idealRodDistance) / Math.max(ctx.idealRodDistance, 1));
  const lineDrag = clamp(0.5 * (ctx.items.line?.lineTension ?? 0.35) + 0.35 * clamp(((ctx.items.line?.diameter ?? 0.2) - 0.25) / 0.35) + 0.15 * (1 - ctx.reachFactor));
  let payload = 0.12;
  if (ctx.rodType === "bottom_rod") payload = clamp(0.35 + 0.35 * clamp((ctx.items.sinker?.weight ?? 20) / 35) + 0.3 * contact);
  else if (ctx.rodType === "lure_rod") payload = clamp(lureSnagType(ctx.items.lure?.lureType) + 0.25 * (1 - ctx.lureBase.retrieve) + 0.15 * (1 - ctx.lureBase.weightMatch) + 0.15 * contact);
  else payload = clamp(0.08 + 0.25 * clamp((ctx.controls.floatLengthCm || 120) / (100 * ctx.region.depthMax)) + 0.2 * contact);
  const risk = clamp(0.18 * terrain + 0.22 * contact + 0.22 * payload + 0.12 * ctx.hook.snag + 0.1 * overcast + 0.08 * lineDrag + 0.08 * (1 - ctx.ctrl) + 0.05 * (1 - ctx.durabilityFactor));
  return clamp(0.01 + 0.32 * risk, 0, 0.45);
}

function lureSnagType(type) {
  return { topwater: 0.04, spoon: 0.12, minnow: 0.16, crank: 0.22, jig: 0.38 }[type] ?? 0.16;
}

function fishDistanceFactor(presentation, fishObj, region) {
  const layerDelta = fishObj.waterLayer === "surface" ? -Math.min(1.4, 0.22 * region.depthMax) * rodLayerFactor(presentation.rodType) : fishObj.waterLayer === "deep" ? Math.min(2.2, 0.32 * region.depthMax) * rodLayerFactor(presentation.rodType) : 0;
  const castExpectationOffset = presentation.castExpectationOffset ?? activeCastOffset(region);
  const ideal = Math.max(1.5, presentation.idealRodDistance + castExpectationOffset + offshorePreference(fishObj, region) + layerDelta);
  const raw = gauss(presentation.actualCast, ideal, Math.max(3.2, 0.48 * ideal));
  return {
    ideal,
    raw,
    redistribution: clamp(0.7 + 0.3 * raw),
    factor: clamp(0.84 * presentation.distanceFactor + 0.16 * (0.72 + 0.28 * raw)),
  };
}

function rodLayerFactor(rodType) {
  return { hand_rod: 0.85, match_rod: 0.95, bottom_rod: 1.15, lure_rod: 1 }[rodType] ?? 1;
}

function offshorePreference(fishObj, region) {
  if (Number.isFinite(fishObj.offshorePreference)) return fishObj.offshorePreference;
  const size = (fishObj.sizeMin + fishObj.sizeMax) / 2;
  const waterBonus = region.waterType === "saltwater" ? 4.2 : 0.6;
  const migration = fishObj.migration === "migratory" ? 2.4 : 0;
  return clamp(size / 18 + waterBonus + migration, 0, 18);
}

function layerMatch(target, fishLayer) {
  if (target === fishLayer) return 1;
  const order = { surface: 0, mid: 1, deep: 2 };
  return Math.abs(order[target] - order[fishLayer]) === 1 ? 0.6 : 0.25;
}

function timeMatch(regionTime, hours) {
  if (!hours || !hours.length) return 0.72;
  let best = 0;
  for (const h of hours) {
    const d = Math.min(Math.abs(regionTime - h) % 24, 24 - (Math.abs(regionTime - h) % 24));
    best = Math.max(best, gauss(d, 0, 2.75));
  }
  return 0.2 + 0.8 * best;
}

function averageTimeMatch(hours) {
  if (!hours || !hours.length) return 0.72;
  const key = hours.join(",");
  if (AVERAGE_TIME_MATCH_CACHE.has(key)) return AVERAGE_TIME_MATCH_CACHE.get(key);
  let total = 0;
  for (let hour = 0; hour < 24; hour += 1) total += timeMatch(hour, hours);
  const value = total / 24;
  AVERAGE_TIME_MATCH_CACHE.set(key, value);
  return value;
}

function hookAndPayloadFactors(presentation, fishObj, poolEntry) {
  const representativeSize = (fishObj.sizeMin + fishObj.sizeMax) / 2;
  const popSize = poolEntry?.sizeModifier ?? 1;
  const mouth = (representativeSize * popSize) / 10;
  const payloadSize = presentation.rodType === "lure_rod" ? presentation.items.lure?.size ?? 4 : presentation.items.bait?.size ?? 3;
  const payloadMatch = gauss(payloadSize, mouth, 2.5);
  const hookSize = hookInternalSize(presentation.items.hook);
  const hookTarget = (presentation.rodType === "lure_rod" ? 1.1 : 0.9) * mouth;
  const rawHook = gauss(hookSize, hookTarget, 2);
  const hookSizeMatch = 1 - (1 - rawHook) * 0.5;
  return { mouth, payloadMatch, hookSizeMatch, hookSize };
}

function evaluateFish(presentation, fishObj, poolEntry, region, env, waitMultiplier = 1, groundbaitFactor = 1) {
  const dist = fishDistanceFactor(presentation, fishObj, region);
  const pref = preferenceMatch(presentation, fishObj);
  const layer = layerMatch(presentation.targetLayer, fishObj.waterLayer);
  const hookSize = hookAndPayloadFactors(presentation, fishObj, poolEntry);
  let notice = 0;
  let lick = 0;
  let bite = 0;
  let hookRate = 0;
  let retrieve = null;
  const alert = softcap(fishObj.alertness);
  const agility = softcap(fishObj.agility);
  const strength = softcap(fishObj.strength);

  if (presentation.rodType === "lure_rod") {
    const lure = lurePresentation(presentation.items, presentation.controls, presentation.action, presentation.targetLayer, presentation.ctrl, presentation.lineVisibility, presentation.hookVisibility, presentation.reelPower, fishObj);
    retrieve = lure.retrieve;
    const agg = clamp(0.34 * strength + 0.34 * agility + 0.18 * (1 - alert) + 0.08 * presentation.ambient + 0.06 * lure.motion);
    const actionProfile = actionProfileScore(presentation.action, agg, agility, alert, layer, lure.actionFactor);
    const lureBase = clamp(0.45 * lure.motion + 0.15 * colorStrength(presentation.items.lure?.color) + 0.15 * lure.weightMatch + 0.25 * lure.retrieve) * (0.78 + 0.22 * pref) * (0.78 + 0.32 * actionProfile);
    const hardPenalty = lureHardnessPenalty(presentation.items.rod, presentation.action);
    const spook = alert * (0.18 * presentation.lineVisibility + 0.12 * presentation.hookVisibility + 0.06 * colorStrength(presentation.items.lure?.color)) * (1 - 0.3 * presentation.ambient);
    notice = clamp(((0.28 + 0.3 * alert + 0.28 * agility + 0.14 * actionProfile) * lureBase * hardPenalty * layer * dist.factor - spook) * region.noticeMultiplier * hookNoticeBonus(hookSize.hookSizeMatch));
    const flash = alert * (0.18 * colorStrength(presentation.items.lure?.color) + 0.16 * presentation.hookVisibility + 0.16 * presentation.lineVisibility);
    const interest = clamp(0.1 + 0.28 * agg + 0.2 * lure.motion + 0.12 * lure.retrieve + 0.12 * hookSize.payloadMatch + 0.13 * layer + 0.07 * pref + 0.18 * actionProfile - 0.12 * flash);
    const commit = clamp(0.3 + 0.18 * agg + 0.16 * lure.retrieve + 0.1 * hookSize.hookSizeMatch + 0.09 * lure.weightMatch + 0.08 * lure.naturalness + 0.17 * actionProfile - 0.24 * flash);
    bite = clamp(interest * commit * waitMultiplier);
    lick = clamp(interest * (1 - 0.9 * commit) * (0.25 + 0.35 * alert + 0.4 * flash) * waitMultiplier);
    const agilityLinear = clamp(fishObj.agility / 5);
    hookRate = clamp(0.22 * 3.0 * clamp(0.45 * presentation.hookBonus + 0.25 * 0.85 * hookSize.hookSizeMatch + 0.1 * lure.retrieve + 0.2 * (1 - agilityLinear)));
  } else {
    const biteBase = (0.5 * presentation.baitBase.naturalness + 0.3 * pref + 0.2 * hookSize.payloadMatch) * (0.94 + 0.06 * dist.factor);
    const rodNotice = { hand_rod: 15.6, match_rod: 25.2, bottom_rod: 6, lure_rod: 7 }[presentation.rodType] ?? 8;
    notice = clamp(rodNotice * region.noticeMultiplier * clamp((1 - 0.4 * presentation.lineVisibility) * (1 - 0.2 * presentation.hookVisibility) * (0.3 + 0.5 * presentation.ambient) * 0.5 * pref + 0.15) * (1 / Math.max(fishObj.alertness, 0.5)) * (0.92 + 0.08 * dist.factor) * hookNoticeBonus(hookSize.hookSizeMatch));
    lick = clamp((0.5 * biteBase + 0.15) * waitMultiplier);
    bite = clamp(0.85 * biteBase * waitMultiplier * groundbaitFactor);
    const rodBite = { hand_rod: 1.3, match_rod: 2, bottom_rod: 1.1 }[presentation.rodType] ?? 1;
    ({ lick, bite } = capLickBite(lick * rodBite, bite * rodBite));
    const agilityLinear = clamp(fishObj.agility / 5);
    const rodHook = { hand_rod: 4, match_rod: 7, bottom_rod: 3.5 }[presentation.rodType] ?? 3;
    hookRate = clamp(0.22 * rodHook * clamp(0.5 * presentation.hookBonus + 0.3 * 0.85 * hookSize.hookSizeMatch + 0.2 * (1 - agilityLinear)));
  }

  ({ lick, bite } = capLickBite(lick, bite));
  const reelingRisk = expectedReelingOutcome(presentation, fishObj, poolEntry, env);
  const reelingSuccess = reelingRisk.reelingSuccess;
  return {
    dist,
    pref,
    layer,
    notice,
    lick,
    bite,
    hookRate,
    reelingSuccess,
    breakChance: reelingRisk.breakChance,
    escapeChance: reelingRisk.escapeChance,
    lineCutChance: reelingRisk.lineCutChance ?? 0,
    reelingRisk,
    hookSize,
    retrieve,
  };
}

function actionProfileScore(action, agg, agility, alert, layer, actionFactor) {
  const profile = {
    steady_surface: { agg: 0.42, sigma: 0.32, agility: 0.45, alertTau: 0.58, alertK: 0.65 },
    steady_mid: { agg: 0.5, sigma: 0.32, agility: 0.5, alertTau: 0.62, alertK: 0.58 },
    bottom_hop: { agg: 0.62, sigma: 0.3, agility: 0.38, alertTau: 0.56, alertK: 0.55 },
    mid_twitch: { agg: 0.6, sigma: 0.28, agility: 0.66, alertTau: 0.58, alertK: 0.78 },
  }[action] || { agg: 0.5, sigma: 0.3, agility: 0.5, alertTau: 0.6, alertK: 0.6 };
  const alertAction = clamp(1 - Math.max(0, alert - profile.alertTau) * profile.alertK);
  return clamp(0.18 + 0.34 * gauss(agg, profile.agg, profile.sigma) + 0.16 * gauss(agility, profile.agility, 0.28) + 0.16 * layer + 0.1 * actionFactor + 0.06 * alertAction);
}

function lureHardnessPenalty(rodItem, action) {
  if (!rodItem || (action !== "bottom_hop" && action !== "mid_twitch")) return 1;
  const target = action === "bottom_hop" ? 6.8 : 7.2;
  const soft = clamp((target - rodItem.hardness) / (target - 4));
  return clamp(1 - 0.35 * soft, 0.65, 1);
}

function hookNoticeBonus(hookSizeMatch) {
  const k = 1.22;
  return 1 + (k - 1) * hookSizeMatch;
}

function capLickBite(lick, bite) {
  const total = lick + bite;
  if (total <= 0.9) return { lick, bite };
  const scale = 0.9 / total;
  return { lick: lick * scale, bite: bite * scale };
}

function preferenceMatch(presentation, fishObj) {
  if (presentation.rodType === "lure_rod") {
    const current = presentation.items.lure?.lureType;
    if (!current || !fishObj.lurePreference) return 0.72;
    return current === fishObj.lurePreference ? 1 : 0.68;
  }
  const current = presentation.items.bait?.baitType;
  if (!current || !fishObj.baitPreference) return 0.72;
  return current === fishObj.baitPreference ? 1 : 0.68;
}

function reelingSuccessRate(presentation, fishObj, poolEntry, env) {
  return expectedReelingOutcome(presentation, fishObj, poolEntry, env).reelingSuccess;
}

function expectedReelingOutcome(presentation, fishObj, poolEntry, env) {
  const central = reelingOutcomeProfile(presentation, fishObj, poolEntry, env);
  if (canUseCentralReelingOutcome(presentation, fishObj, poolEntry, central)) return central;

  const shift = catchSizeShift(poolEntry);
  const totals = {
    reelingSuccess: 0,
    breakChance: 0,
    escapeChance: 0,
    lineCutChance: 0,
    rawTension: 0,
    lockedLineRisk: 0,
    sampleCount: 0,
  };
  const breakParts = new Map();

  for (let i = 1; i <= EXPECTED_REELING_SAMPLE_COUNT; i += 1) {
    const skew = haltonNormalish(i);
    for (const sampleSkew of [shift + skew, shift - skew]) {
      const sampleWeight = catchWeightFromSkew(fishObj, sampleSkew, 0, 0, presentation.region);
      const outcome = reelingOutcomeProfile(presentation, fishObj, poolEntry, env, sampleWeight);
      totals.reelingSuccess += outcome.reelingSuccess;
      totals.breakChance += outcome.breakChance;
      totals.escapeChance += outcome.escapeChance;
      totals.lineCutChance += outcome.lineCutChance ?? 0;
      totals.rawTension += outcome.rawTension;
      totals.lockedLineRisk += outcome.lockedLineRisk;
      totals.sampleCount += 1;
      if (outcome.breakPart && outcome.breakChance > 0) {
        breakParts.set(outcome.breakPart, (breakParts.get(outcome.breakPart) || 0) + outcome.breakChance);
      }
    }
  }

  const sampleCount = Math.max(totals.sampleCount, 1);
  return {
    reelingSuccess: clamp(totals.reelingSuccess / sampleCount, 0.01, 0.98),
    breakChance: clamp(totals.breakChance / sampleCount),
    escapeChance: clamp(totals.escapeChance / sampleCount),
    lineCutChance: clamp(totals.lineCutChance / sampleCount),
    rawTension: totals.rawTension / sampleCount,
    lockedLineRisk: clamp(totals.lockedLineRisk / sampleCount),
    breakPart: dominantBreakPart(breakParts),
  };
}

function canUseCentralReelingOutcome(presentation, fishObj, poolEntry, central) {
  if (central.breakChance > 0.01 || central.dragTension > central.weakTension * 0.92) return false;
  const shift = catchSizeShift(poolEntry);
  const upperWeight = catchWeightFromSkew(fishObj, shift + 2.4, 0, 0, presentation.region);
  const upperLoad = fishRawTensionEstimate(fishObj, upperWeight);
  if (upperLoad > central.weakTension * 0.92) return false;
  if (presentation.items.reel && upperLoad > Math.max(central.dragTension, 0.1)) {
    return lineLockedOverloadRisk(presentation, fishObj, upperWeight, upperLoad, central) < 0.02;
  }
  return true;
}

function reelingOutcomeProfile(presentation, fishObj, poolEntry, env, actualWeight = null) {
  const items = presentation.items;
  const initialWeight = Number.isFinite(actualWeight) && actualWeight > 0 ? actualWeight : fishInitialMassEstimate(fishObj, poolEntry, presentation.region);
  const fishLoad = fishRawTensionEstimate(fishObj, initialWeight) + fastReelExtraTension(presentation, initialWeight);
  const safety = tackleSafetyProfile(items, presentation.controls);
  const lineCutReason = autoLineCutReason(presentation, fishObj, poolEntry, initialWeight);
  if (lineCutReason) {
    return {
      reelingSuccess: 0,
      breakChance: 0,
      escapeChance: 0,
      lineCutChance: 1,
      lineCutReason,
      breakPart: null,
      weakPart: safety.weakPart,
      weakTension: safety.weakTension,
      dragTension: safety.dragTension,
      rawTension: fishLoad,
      appliedTension: Math.min(fishLoad, Math.max(safety.dragTension, 0.05)),
      stressRatio: 0,
      rawStressRatio: fishLoad / Math.max(safety.weakTension, 0.1),
      lockedLineRisk: 0,
    };
  }
  const dragThreshold = items.reel ? Math.max(safety.dragTension, 0.05) : 0;
  const freeLine = Math.max(0, (items.line?.length ?? 80) - initialLineOutMeters(presentation));
  const releaseBranch = Boolean(items.reel && fishLoad > dragThreshold && freeLine > 0);
  const releaseTension = releaseBranch ? Math.min(fishLoad, dragThreshold) : fishLoad;
  const lockedLineRisk = releaseBranch ? lineLockedOverloadRisk(presentation, fishObj, initialWeight, fishLoad, safety) : 0;
  const appliedTension = releaseTension * (1 - lockedLineRisk) + fishLoad * lockedLineRisk;
  const stressRatio = appliedTension / Math.max(safety.weakTension, 0.1);
  const releaseStressRatio = releaseTension / Math.max(safety.weakTension, 0.1);
  const rawStressRatio = fishLoad / Math.max(safety.weakTension, 0.1);
  const directBreakRisk = releaseStressRatio > 1 ? 1 : 0;
  const lockedBreakRisk = releaseBranch && rawStressRatio > 1 ? lockedLineRisk : 0;
  const breakChance = clamp(directBreakRisk + (1 - directBreakRisk) * lockedBreakRisk);
  const overloadRisk = clamp((stressRatio - 0.82) / 0.38);
  const safetyPenalty = clamp(0.72 * breakChance + 0.28 * overloadRisk);
  const usableDrag = items.reel ? Math.min(Math.max(safety.dragTension, 0.05), safety.weakTension) : safety.weakTension;
  const heavyRetrieveFactor = heavyFishRetrieveResistanceFactor(initialWeight, false);
  const reelControlFactor = items.reel ? clamp(items.reel.controlFactor ?? presentation.reelControlFactor ?? 1, 0.75, 1.25) : 1;
  const reelEconomyFactor = items.reel ? clamp(items.reel.economyFactor ?? presentation.reelEconomyFactor ?? 1, 0.75, 1.25) : 1;
  const strengthScore = clamp((safety.weakTension + 0.55 * usableDrag) / Math.max(0.3, fishLoad * 1.3), 0, 1.35) * heavyRetrieveFactor * reelControlFactor;
  const staminaScore = clamp((0.34 + 0.32 * softcap(presentation.skills.endurance, 8) + 0.18 * softcap(presentation.skills.strength, 9) + 0.16 * presentation.ctrl) * reelEconomyFactor);
  const lineReserve = clamp(items.line.length / Math.max(8, presentation.actualCast + presentation.targetDepth + items.rod.length));
  const weatherPenalty = 0.06 * clamp(env.wind / 8) + 0.04 * clamp(env.waterFlow / 2.5);
  const lineCutLineOutLimitM = presentation.controls.lineCutLineOutLimitM ?? presentation.controls.lineCutOut ?? 0;
  const cutPenalty = lineCutLineOutLimitM > 0 && presentation.actualCast > lineCutLineOutLimitM ? 0.14 : 0;
  const baseSuccess = clamp(0.08 + 0.42 * strengthScore + 0.18 * staminaScore + 0.14 * lineReserve + 0.12 * presentation.reelPower + 0.06 * presentation.hookPower - weatherPenalty - cutPenalty - 0.42 * safetyPenalty, 0.02, 0.98);
  const reelingSuccess = clamp(baseSuccess * (1 - breakChance), 0.01, 0.98);
  const escapeChance = clamp((1 - breakChance) * (1 - baseSuccess));
  return {
    reelingSuccess,
    breakChance,
    escapeChance,
    lineCutChance: 0,
    breakPart: breakChance > 0.01 ? safety.weakPart : null,
    weakPart: safety.weakPart,
    weakTension: safety.weakTension,
    dragTension: safety.dragTension,
    rawTension: fishLoad,
    appliedTension,
    stressRatio,
    rawStressRatio,
    lockedLineRisk,
  };
}

function autoLineCutReason(presentation, fishObj, poolEntry, actualWeight = null) {
  const lineOut = initialLineOutMeters(presentation);
  const limit = clamp(Number(presentation?.controls?.lineCutLineOutLimitM ?? presentation?.controls?.lineCutOut ?? 0), 0, LINE_CUT_LINE_OUT_LIMIT_MAX_M);
  if (limit > 0 && lineOut > limit) return "line_out";

  const rawRoundLimit = Number(presentation?.controls?.lineCutRoundLimit);
  if (!Number.isFinite(rawRoundLimit)) return null;
  const roundLimit = clamp(rawRoundLimit, 1, 500);
  if (lineOut <= 10) return null;
  const estimatedSeconds = estimatedReelingSecondsForWeight(presentation, fishObj, poolEntry, actualWeight);
  const estimatedRounds = Math.ceil(estimatedSeconds / REELING_PHASE_TICK_SECONDS);
  return estimatedRounds >= roundLimit ? "round_limit" : null;
}

function fishRawTensionEstimate(fishObj, initialWeight) {
  const mass = Math.max(Number(initialWeight) || 0, 0.003);
  const strength = Math.max(0, Number(fishObj?.strength) || 0);
  const agility = Math.max(0, Number(fishObj?.agility) || strength || 1);
  const fight = Math.max(0.2, 0.55 * strength + 0.45 * agility);
  const massScale = mass ** 0.55;
  const weightPressure = 0.32 * massScale;
  const averageStaminaPressure = 0.55 + 0.75 * 0.72;
  const averageBurstRoll = 1.05;
  const burstPressure = (0.24 + 0.18 * strength + 0.12 * fight) * massScale * averageStaminaPressure * averageBurstRoll;
  return compressRawTension(Math.max(0.2, weightPressure + burstPressure), mass);
}

function compressRawTension(rawTension, mass) {
  const dynamicCap = Math.max(
    REELING_RAW_TENSION_SOFTCAP_KG,
    REELING_RAW_TENSION_REFERENCE_LOW_TENSION_KG +
      (REELING_RAW_TENSION_REFERENCE_HIGH_TENSION_KG - REELING_RAW_TENSION_REFERENCE_LOW_TENSION_KG) *
        (Math.max(mass, 0) - REELING_RAW_TENSION_REFERENCE_LOW_WEIGHT_KG) /
        Math.max(1, REELING_RAW_TENSION_REFERENCE_HIGH_WEIGHT_KG - REELING_RAW_TENSION_REFERENCE_LOW_WEIGHT_KG),
  );
  if (rawTension <= dynamicCap) return rawTension;
  const overflow = rawTension - dynamicCap;
  return dynamicCap + (REELING_RAW_TENSION_OVERFLOW_PIVOT_KG * overflow) / (overflow + REELING_RAW_TENSION_OVERFLOW_PIVOT_KG);
}

function lineLockedOverloadRisk(presentation, fishObj, weight, fishLoad, safety) {
  const items = presentation.items;
  if (!items.reel) return clamp((fishLoad / Math.max(safety.weakTension, 0.1) - 1) / 1.2);
  const dragTension = Math.max(safety.dragTension, 0.1);
  if (fishLoad <= dragTension) return 0;
  const lineLength = Math.max(1, items.line?.length ?? 80);
  const freeLine = Math.max(0, lineLength - initialLineOutMeters(presentation));
  const pressureOverDrag = clamp((fishLoad - dragTension) / dragTension, 0, 3);
  const runDemand = fishRunDemandMeters(presentation, fishObj, weight) * pressureOverDrag;
  if (runDemand <= 0) return 0;
  return clamp((runDemand - freeLine) / Math.max(runDemand, 1));
}

function highReelPressure(presentation, staminaRatio = REELING_AUTO_SPEED_AVERAGE_STAMINA_RATIO) {
  const speed = actualReelSpeed(presentation, staminaRatio);
  return clamp(
    (speed - REELING_HIGH_REEL_PRESSURE_SPEED_START_MPS) /
      Math.max(0.1, REELING_HIGH_REEL_PRESSURE_SPEED_FULL_MPS - REELING_HIGH_REEL_PRESSURE_SPEED_START_MPS),
  );
}

function fastReelExtraTension(presentation, weight, staminaRatio = REELING_AUTO_SPEED_AVERAGE_STAMINA_RATIO) {
  if (!presentation?.items?.reel) return 0;
  const speedPressure = highReelPressure(presentation, staminaRatio);
  if (speedPressure <= 0) return 0;
  const weightPressure = clamp(
    (Math.max(0, Number(weight) || 0) - REELING_HIGH_REEL_TENSION_PRESSURE_START_WEIGHT_KG) /
      Math.max(1, REELING_HIGH_REEL_TENSION_PRESSURE_FULL_WEIGHT_KG - REELING_HIGH_REEL_TENSION_PRESSURE_START_WEIGHT_KG),
  );
  if (weightPressure <= 0) return 0;
  const staminaPressure = REELING_HIGH_REEL_TENSION_PRESSURE_STAMINA_FLOOR_RATIO +
    (1 - REELING_HIGH_REEL_TENSION_PRESSURE_STAMINA_FLOOR_RATIO) * clamp(staminaRatio) ** 2;
  const lineOut = initialLineOutMeters(presentation);
  const linePressure = 1 - clamp(
    (lineOut - REELING_HIGH_REEL_TENSION_PRESSURE_RELIEF_START_LINE_OUT_M) /
      Math.max(1, REELING_HIGH_REEL_TENSION_PRESSURE_RELIEF_FULL_LINE_OUT_M - REELING_HIGH_REEL_TENSION_PRESSURE_RELIEF_START_LINE_OUT_M),
  );
  return REELING_HIGH_REEL_TENSION_PRESSURE_MAX_KG * speedPressure * weightPressure * staminaPressure * linePressure;
}

function autoReelSpeedScore(skills = {}, staminaRatio = REELING_AUTO_SPEED_AVERAGE_STAMINA_RATIO) {
  return REELING_AUTO_SPEED_BASE +
    REELING_AUTO_SPEED_STRENGTH_SCALE * clamp((skills.strength ?? 0) / 120, 0, 0.25) +
    REELING_AUTO_SPEED_SKILL_SCALE * clamp((skills.skill ?? 0) / 100, 0, 0.35) +
    REELING_AUTO_SPEED_STAMINA_SCALE * (1 - clamp(staminaRatio));
}

function maxAutoReelSpeedScore() {
  return REELING_AUTO_SPEED_BASE +
    REELING_AUTO_SPEED_STRENGTH_SCALE * 0.25 +
    REELING_AUTO_SPEED_SKILL_SCALE * 0.35 +
    REELING_AUTO_SPEED_STAMINA_SCALE;
}

function autoReelSpeedFromItems(items, skills, staminaRatio = REELING_AUTO_SPEED_AVERAGE_STAMINA_RATIO) {
  const maxSpeed = Number(items?.reel?.speedMax);
  if (!Number.isFinite(maxSpeed) || maxSpeed <= 0) return 0;
  return maxSpeed * clamp(autoReelSpeedScore(skills, staminaRatio) / maxAutoReelSpeedScore(), 0, 1);
}

function actualReelSpeed(presentation, staminaRatio = REELING_AUTO_SPEED_AVERAGE_STAMINA_RATIO) {
  const configured = Math.max(0, Number(presentation?.controls?.reelSpeed) || 0);
  const maxSpeed = Number(presentation?.items?.reel?.speedMax);
  if (!Number.isFinite(maxSpeed) || maxSpeed <= 0) return configured;
  if (configured > 0) return Math.min(configured, maxSpeed);
  return autoReelSpeedFromItems(presentation?.items, presentation?.skills, staminaRatio);
}

function heavyFishRetrieveResistanceFactor(weight, sprinting = false) {
  const heavyRatio = clamp(
    (Math.max(0, Number(weight) || 0) - REELING_HEAVY_RETRIEVE_RESISTANCE_START_WEIGHT_KG) /
      Math.max(1, REELING_HEAVY_RETRIEVE_RESISTANCE_FULL_WEIGHT_KG - REELING_HEAVY_RETRIEVE_RESISTANCE_START_WEIGHT_KG),
  );
  const pressure = sprinting ? REELING_HEAVY_SPRINT_RETRIEVE_PRESSURE : REELING_HEAVY_NORMAL_RETRIEVE_PRESSURE;
  return clamp(1 - heavyRatio * pressure, REELING_HEAVY_RETRIEVE_MIN_FACTOR, 1);
}

function fishRunDemandMeters(presentation, fishObj, weight) {
  const mobility = 0.5 + 0.3 * clamp((fishObj?.agility ?? 1) / 5) + 0.2 * clamp((fishObj?.strength ?? 1) / 5);
  const controlRelief = 1.15 - 0.35 * clamp(presentation?.ctrl ?? 0.5);
  return (4 + Math.max(weight, 0.1) ** 0.55 * 8 + mobility * 8) * controlRelief;
}

function dominantBreakPart(parts) {
  let bestPart = null;
  let bestValue = 0;
  for (const [part, value] of parts.entries()) {
    if (value > bestValue) {
      bestPart = part;
      bestValue = value;
    }
  }
  return bestPart;
}

function estimatedBiteWindowSeconds(presentation) {
  const reactionTicks = Math.round((1 - clamp(presentation?.detectionScore ?? 0.5)) * 10);
  const floatDepthFactor = presentation?.rodType === "hand_rod" || presentation?.rodType === "match_rod"
    ? 1 + Math.max(0, (presentation.targetDepth ?? 0) - 1.5) * 0.14
    : 1;
  return clamp(BITE_WINDOW_BASE_SECONDS + reactionTicks * BITE_WINDOW_REACTION_TICK_SECONDS * floatDepthFactor, 4, 45);
}

function estimatedReelingSeconds(presentation, fishObj, poolEntry, evals = null) {
  const initialWeight = fishInitialMassEstimate(fishObj, poolEntry, presentation.region);
  return estimatedReelingSecondsForWeight(presentation, fishObj, poolEntry, initialWeight, evals);
}

function estimatedReelingSecondsForWeight(presentation, fishObj, poolEntry, initialWeight, evals = null) {
  const lineOut = initialLineOutMeters(presentation);
  const reelSpeed = Math.max(0.15, actualReelSpeed(presentation) || 0.8);
  const heavyRetrieveFactor = heavyFishRetrieveResistanceFactor(initialWeight, false);
  const reelControlFactor = presentation?.items?.reel ? clamp(presentation.items.reel.controlFactor ?? presentation.reelControlFactor ?? 1, 0.75, 1.25) : 1;
  const reelEconomyFactor = presentation?.items?.reel ? clamp(presentation.items.reel.economyFactor ?? presentation.reelEconomyFactor ?? 1, 0.75, 1.25) : 1;
  const retrieve = reelSpeed *
    (0.35 + 0.65 * (presentation?.reelPower ?? 0.5)) *
    (0.45 + 0.55 * (presentation?.ctrl ?? 0.5)) *
    heavyRetrieveFactor *
    reelControlFactor;
  const reelingSuccess = clamp(evals?.reelingSuccess ?? 0.6, 0.05, 0.98);
  const fishStamina = reelingFishStaminaMax(fishObj, initialWeight);
  return clamp(
    15 +
      lineOut / Math.max(retrieve, 0.15) * (1 + (1 - reelingSuccess) * 2) +
      fishStamina * REELING_STAMINA_SECONDS / reelEconomyFactor +
      Math.max(initialWeight, 0.1) ** 0.55 * REELING_MASS_SECONDS,
    15,
    480,
  );
}

function initialLineOutMeters(presentation) {
  const items = presentation?.items || {};
  const lineLength = items.line?.length ?? 80;
  const rodLength = items.rod?.length ?? 3;
  const cast = presentation?.actualCast ?? 0;
  const depth = presentation?.targetDepth ?? 0;
  return Math.min(lineLength, Math.max(1, Math.sqrt(cast ** 2 + depth ** 2) + 0.35 * rodLength));
}

function fishInitialMassEstimate(fishObj, poolEntry, region = null) {
  const minWeight = Math.max(0, Number(fishObj?.weightMin) || 0);
  const maxWeight = Math.max(minWeight, Number(fishObj?.weightMax) || minWeight);
  const sizeModifier = poolEntry?.sizeModifier ?? 1;
  return applyRegionWeightLimits((0.35 * minWeight + 0.65 * maxWeight) * sizeModifier, region);
}

function reelingFishStaminaMax(fishObj, initialWeight, weightCoefficient = REELING_FISH_STAMINA_WEIGHT_COEFFICIENT) {
  const endurance = Math.max(0, Number(fishObj?.endurance) || 0);
  const agility = Math.max(0, Number(fishObj?.agility) || 0);
  const mass = Math.max(0, Number(initialWeight) || 0);
  return Math.max(5, 6.5 * endurance + weightCoefficient * mass + 1.2 * agility);
}

function tackleSafetyProfile(items, controls) {
  const capacities = [
    { part: "rod", tension: tensionCapacity(items.rod, items.rod?.maxTension) },
    { part: "line", tension: tensionCapacity(items.line, items.line?.maxTension) },
  ];
  if (items.leader) capacities.push({ part: "leader", tension: tensionCapacity(items.leader, items.leader.maxTension) });
  if (items.reel) capacities.push({ part: "reel", tension: tensionCapacity(items.reel, 1.5 * items.reel.frictionMax) });

  const weakPoint = capacities
    .filter((row) => Number.isFinite(row.tension) && row.tension > 0)
    .reduce((weak, row) => (row.tension < weak.tension ? row : weak), { part: "unknown", tension: Infinity });
  const weakTension = Number.isFinite(weakPoint.tension) ? weakPoint.tension : 1;
  const dragInput = clamp(Number(controls.dragRatio), 0, 1);
  const dragRatio = items.reel && dragInput === 0
    ? (items.reel.frictionMax > 0 ? clamp((0.8 * weakTension) / items.reel.frictionMax) : 1)
    : dragInput;
  const dragTension = items.reel ? items.reel.frictionMax * dragRatio : 0;
  return {
    weakPart: weakPoint.part,
    weakTension,
    dragInput,
    dragRatio,
    dragTension,
    dragToWeakRatio: dragTension / Math.max(weakTension, 0.1),
  };
}

function tensionCapacity(item, baseTension) {
  if (!item || !Number.isFinite(baseTension)) return Infinity;
  return baseTension * Math.max((item.durability ?? 100) / 100, 0.1);
}

function candidateWeights(presentation, region, env, level) {
  const weather = Math.max(0.7, 1 - env.rain / 100 + env.cloud / 50) * (env.fishActivityFactor ?? 1);
  const base = [];
  let total = 0;
  for (const entry of region.fishPool) {
    const fishObj = byId(DATA.fish, entry.fishId);
    if (!fishObj) continue;
    const dist = fishDistanceFactor(presentation, fishObj, region);
    const timeWeight = env.timeAveraged ? averageTimeMatch(fishObj.biteHours) : timeMatch(env.regionTime, fishObj.biteHours);
    const weight = entry.population * timeWeight * layerMatch(presentation.targetLayer, fishObj.waterLayer) * weather;
    base.push({ fish: fishObj, entry, weight, dist });
    total += weight;
  }
  if (!total) return { encounterRate: 0, entries: [] };
  const averageDist = base.reduce((sum, row) => sum + row.weight * row.dist.redistribution, 0) / Math.max(total, 1e-6);
  const regionBonus = 1 + 0.25 * clamp(Number(els.proficiency.value) / 100);
  const sceneMultiplier = Math.max(0, Number(region.sceneMultiplier) || 1);
  const encounterRate = clamp(0.35 * ENCOUNTER_FISHING_INTERVAL_BITE_RATE_MULTIPLIER * sceneMultiplier * regionBonus * total);
  const adjusted = base.map((row) => ({
    ...row,
    adjustedWeight: row.weight * clamp(1 + 0.9 * (row.dist.redistribution - averageDist), 0.82, 1.18),
  }));
  const adjustedTotal = adjusted.reduce((sum, row) => sum + row.adjustedWeight, 0);
  return {
    encounterRate,
    entries: adjusted.map((row) => ({ ...row, encounterShare: row.adjustedWeight / Math.max(adjustedTotal, 1e-6) })),
  };
}

function estimateLoadout(loadout, controls, region, env, level, hours, waitMultiplier = 1.15, groundbaitConfig = currentGroundbaitConfig(loadout, region)) {
  const presentation = buildPresentation(loadout, controls, region, env, level);
  if (!presentation) return null;
  const weights = candidateWeights(presentation, region, env, level);
  const ticks = fishingTicksForHours(hours);
  let catchPerTick = 0;
  let bitePerTick = 0;
  let noticePerTick = 0;
  let breakPerTick = 0;
  let escapePerTick = 0;
  let lineCutPerTick = 0;
  let busySecondsPerTick = 0;
  let lineLockWeightedRisk = 0;
  let lineLockRiskWeight = 0;
  const fishRows = [];
  const breakParts = new Map();

  for (const row of weights.entries) {
    const groundbaitFactor = groundbaitMultiplier(groundbaitConfig, presentation, row.fish, 0, hours);
    const evals = evaluateFish(presentation, row.fish, row.entry, region, env, waitMultiplier, groundbaitFactor);
    const pEncounterFish = weights.encounterRate * row.encounterShare;
    const pNotice = pEncounterFish * evals.notice;
    const pBite = pNotice * evals.bite;
    const pHook = pBite * evals.hookRate;
    const pLineCut = pHook * (evals.lineCutChance ?? 0);
    const pCatch = pHook * evals.reelingSuccess * (1 - (evals.lineCutChance ?? 0)) * (1 - 0.22 * presentation.snagRate);
    const pBreak = pHook * evals.breakChance;
    const pEscape = pHook * evals.escapeChance;
    const weakTension = Math.max(evals.reelingRisk.weakTension ?? presentation.tackleSafety.weakTension, 0.1);
    const tailWeight = catchWeightFromSkew(row.fish, catchSizeShift(row.entry) + 2.4, 0, 0, region);
    const tailRawTension = fishRawTensionEstimate(row.fish, tailWeight) + fastReelExtraTension(presentation, tailWeight);
    const lockSafety = {
      ...presentation.tackleSafety,
      weakTension,
      dragTension: evals.reelingRisk.dragTension ?? presentation.tackleSafety.dragTension,
    };
    const centralLineLockRisk = evals.reelingRisk.lockedLineRisk ?? 0;
    const tailLineLockRisk = tailRawTension > Math.max(lockSafety.dragTension, 0.1)
      ? lineLockedOverloadRisk(presentation, row.fish, tailWeight, tailRawTension, lockSafety)
      : 0;
    const lineLockRisk = clamp(Math.max(centralLineLockRisk, tailRawTension > weakTension ? tailLineLockRisk : 0));
    catchPerTick += pCatch;
    bitePerTick += pBite;
    noticePerTick += pNotice;
    breakPerTick += pBreak;
    escapePerTick += pEscape;
    lineCutPerTick += pLineCut;
    lineLockWeightedRisk += pHook * lineLockRisk;
    lineLockRiskWeight += pHook;
    if (evals.reelingRisk.breakPart && pBreak > 0) {
      breakParts.set(evals.reelingRisk.breakPart, (breakParts.get(evals.reelingRisk.breakPart) || 0) + pBreak);
    }
    const reelingSeconds = estimatedReelingSeconds(presentation, row.fish, row.entry, evals);
    const lineCutChance = evals.lineCutChance ?? 0;
    busySecondsPerTick += pNotice * estimatedBiteWindowSeconds(presentation);
    busySecondsPerTick += pHook * (lineCutChance * REELING_PHASE_TICK_SECONDS + (1 - lineCutChance) * reelingSeconds);
    fishRows.push({
      fish: row.fish,
      entry: row.entry,
      region,
      lineLockRisk,
      dragRelianceRisk: lineLockRisk,
      catch: pCatch,
      equipmentBreak: pBreak,
      escape: pEscape,
      lineCut: pLineCut,
      bite: pBite,
      notice: pNotice,
      share: pCatch,
      evals,
    });
  }

  const fishingTimeFactor = FISHING_TICK_SECONDS / (FISHING_TICK_SECONDS + busySecondsPerTick);
  const effectiveTicks = ticks * fishingTimeFactor;
  for (const row of fishRows) {
    row.catch *= effectiveTicks;
    row.equipmentBreak *= effectiveTicks;
    row.escape *= effectiveTicks;
    row.lineCut *= effectiveTicks;
    row.bite *= effectiveTicks;
    row.notice *= effectiveTicks;
    row.share *= fishingTimeFactor;
  }
  const falseSignalRate = falseSignalChance(presentation, env);
  const snagEvents = presentation.snagRate * 0.08 * effectiveTicks;
  const expectedCatch = catchPerTick * effectiveTicks;
  const expectedBites = bitePerTick * effectiveTicks;
  const expectedNotices = noticePerTick * effectiveTicks + falseSignalRate * effectiveTicks;
  const equipmentBreaks = breakPerTick * effectiveTicks;
  const escapeEvents = escapePerTick * effectiveTicks;
  const lineCutEvents = lineCutPerTick * effectiveTicks;
  const catchPerHour = catchPerTick * FISHING_TICKS_PER_HOUR * fishingTimeFactor;
  const sortedFishRows = fishRows.sort((a, b) => b.catch - a.catch);
  return {
    presentation,
    weights,
    expectedCatch,
    expectedBites,
    expectedNotices,
    equipmentBreaks,
    escapeEvents,
    lineCutEvents,
    breakPart: dominantBreakPart(breakParts) || presentation.tackleSafety.weakPart,
    catchPerHour,
    biteRate: bitePerTick * fishingTimeFactor,
    encounterRate: weights.encounterRate,
    effectiveTicks,
    fishingTimeFactor,
    busySecondsPerTick,
    falseSignalRate,
    snagEvents,
    lineLockRisk: lineLockWeightedRisk / Math.max(lineLockRiskWeight, 1e-6),
    dragRelianceRisk: lineLockWeightedRisk / Math.max(lineLockRiskWeight, 1e-6),
    fishRows: sortedFishRows,
    weightStats: estimateWeightStatsFromRows(sortedFishRows, hours),
  };
}

function falseSignalChance(presentation, env) {
  const expFalse = clamp(1 - 0.015 * presentation.skills.experience, 0.35, 1);
  if (presentation.rodType === "hand_rod" || presentation.rodType === "match_rod") {
    const f = presentation.items.float || { sensitivity: 0.5, threshold: 18 };
    const envFloat = 0.7 + 0.55 * clamp(env.wind / 8) + 0.45 * clamp(env.waterFlow / 2.5) + 0.25 * clamp(env.rain / 25);
    const sens = 0.65 + 0.85 * f.sensitivity;
    const threshold = clamp(18 / Math.max(6, f.threshold), 0.5, 1.7);
    const lineFalse = clamp(1 + (1 - presentation.floatLinePenalty) * 0.55, 1, 1.8);
    return clamp(0.02 * envFloat * sens * threshold * lineFalse * expFalse, 0, 0.12);
  }
  if (presentation.rodType === "bottom_rod") {
    const bottom = bottomDetectionMetrics(presentation.items);
    const envBottom = 0.72 + 0.35 * clamp(env.waterFlow / 2.5) + 0.3 * clamp(env.wind / 8);
    const weatherNoise = 1 + bottom.tipRawSensitivity * (0.55 * clamp(env.wind / 8) + 0.45 * clamp(env.rain / 25));
    return clamp(0.02 * envBottom * (0.8 + bottom.sensitivity) * clamp(24 / Math.max(4, bottom.threshold), 0.4, 1.5) * weatherNoise * expFalse, 0, 0.12);
  }
  const lure = presentation.lureBase;
  const falseStim = clamp(0.25 + 0.28 * (lure.reflect ?? 0.4) + 0.26 * (lure.turb ?? 0.4) + 0.18 * (presentation.items.lure?.sound ?? 0.2) + 0.16 * (1 - lure.naturalness) + 0.12 * (1 - lure.retrieveBase), 0.4, 1.8);
  const actionMul = { steady_surface: 1.1, steady_mid: 0.95, mid_twitch: 1.2, bottom_hop: 0.85 }[presentation.action] ?? 1;
  const refuse = clamp(0.8 + 0.45 * (presentation.hookVisibility + presentation.lineVisibility), 0.75, 1.4);
  return clamp(0.018 * falseStim * actionMul * refuse * expFalse, 0, 0.11);
}

function generateRecommendations() {
  const region = getRegion();
  const env = getWeather(region);
  const level = currentLevel();
  const hours = clamp(Number(els.hours.value), 1, 72);
  const groundbaitConfig = currentGroundbaitConfig(state.loadout, region);
  const candidates = [];
  const rodTypes = ["hand_rod", "match_rod", "bottom_rod", "lure_rod"];

  for (const rodType of rodTypes) {
    const rods = recommendationRodCandidates(rodType, level);
    for (const rodItem of rods) {
      const baseLoadout = bestBaseLoadout(rodType, rodItem, level, region);
      const optimized = optimizeRecommendation(baseLoadout, rodType, region, env, level, hours, groundbaitConfig);
      if (optimized) candidates.push(optimized);
    }
  }
  return uniqueRecommendations(candidates.sort((a, b) => b.score - a.score)).slice(0, 5);
}

function recommendationRodCandidates(rodType, level) {
  return available(DATA.rods, level, (rodItem) => rodItem.rodType === rodType).slice(-6);
}

function optimizeRecommendation(loadout, rodType, region, env, level, hours, groundbaitConfig = currentGroundbaitConfig(loadout, region)) {
  let best = bestControlsForLoadout(loadout, rodType, region, env, level, hours, groundbaitConfig);
  if (!best) return null;

  for (let pass = 0; pass < 3; pass += 1) {
    let changed = false;
    for (const slot of optimizableSlots(rodType)) {
      let localBest = best;
      for (const item of recommendationSlotCandidates(slot, rodType, level)) {
        const trialLoadout = { ...best.loadout, [slot]: item.id || "" };
        const trial = scoreRecommendation(trialLoadout, best.controls, region, env, level, hours, groundbaitConfig);
        if (trial && trial.score > localBest.score) localBest = trial;
      }
      if (localBest.score > best.score) {
        best = localBest;
        changed = true;
      }
    }

    const tuned = bestControlsForLoadout(best.loadout, rodType, region, env, level, hours, groundbaitConfig);
    if (tuned && tuned.score > best.score) {
      best = tuned;
      changed = true;
    }
    if (!changed) break;
  }

  return best;
}

function optimizableSlots(rodType) {
  if (rodType === "hand_rod") return ["rod", "line", "hook", "bait", "float"];
  if (rodType === "match_rod") return ["rod", "reel", "line", "leader", "hook", "bait", "float"];
  if (rodType === "bottom_rod") return ["rod", "reel", "line", "leader", "hook", "bait", "sinker", "tip"];
  return ["rod", "reel", "line", "leader", "hook", "lure"];
}

function recommendationSlotCandidates(slot, rodType, level) {
  const collectionName = slotCollections()[slot];
  const candidates = available(DATA[collectionName], level, slot === "rod" ? (item) => item.rodType === rodType : () => true);
  return slot === "leader" ? [{ id: "" }, ...candidates] : candidates;
}

function bestControlsForLoadout(loadout, rodType, region, env, level, hours, groundbaitConfig = currentGroundbaitConfig(loadout, region)) {
  let best = null;
  for (const controls of controlVariants(rodType, region, loadout, level)) {
    const trial = scoreRecommendation(loadout, controls, region, env, level, hours, groundbaitConfig);
    if (trial && (!best || trial.score > best.score)) best = trial;
  }
  return best;
}

function scoreRecommendation(loadout, controls, region, env, level, hours, groundbaitConfig = currentGroundbaitConfig(loadout, region)) {
  const estimate = estimateLoadout(loadout, controls, region, env, level, hours, 1.2, groundbaitConfig);
  if (!estimate) return null;
  const weightStats = estimateWeightStats(estimate, hours);
  const score = riskAdjustedWeightScore(estimate, hours);
  return { loadout: { ...loadout }, controls: { ...controls }, estimate, score };
}

function riskAdjustedWeightScore(estimate, hours) {
  const weightStats = estimateWeightStats(estimate, hours);
  const safeHours = Math.max(hours, 1);
  const riskPenalty =
    estimate.snagEvents / safeHours * 0.08 +
    estimate.falseSignalRate * 0.22 +
    estimate.equipmentBreaks / safeHours * 0.22 +
    estimate.escapeEvents / safeHours * 0.035 +
    (estimate.lineLockRisk ?? estimate.dragRelianceRisk ?? 0) * 1.35;
  return weightStats.scorePerHour * (1 - clamp(riskPenalty, 0, 0.65));
}

function uniqueRecommendations(candidates) {
  const seen = new Set();
  const unique = [];
  for (const candidate of candidates) {
    const key = JSON.stringify({
      loadout: candidate.loadout,
      controls: {
        throwDistance: roundNumber(candidate.controls.throwDistance, 1),
        floatLengthCm: roundNumber(candidate.controls.floatLengthCm, 0),
        dragRatio: roundNumber(candidate.controls.dragRatio, 2),
        reelSpeed: roundNumber(candidate.controls.reelSpeed, 2),
        lureAction: candidate.controls.lureAction,
        lineCutRoundLimit: roundNumber(candidate.controls.lineCutRoundLimit ?? 100, 0),
        lineCutLineOutLimitM: roundNumber(candidate.controls.lineCutLineOutLimitM ?? candidate.controls.lineCutOut ?? 0, 0),
      },
    });
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(candidate);
  }
  return unique;
}

function bestBaseLoadout(rodType, rodItem, level, region) {
  const regionFish = region.fishPool.map((entry) => byId(DATA.fish, entry.fishId)).filter(Boolean);
  const lineChoices = available(DATA.lines, level).sort((a, b) => lineScore(b, regionFish) - lineScore(a, regionFish));
  const hookChoices = available(DATA.hooks, level).sort((a, b) => hookScore(b, regionFish, rodType) - hookScore(a, regionFish, rodType));
  const loadout = {
    rod: rodItem.id,
    line: lineChoices[0]?.id || "",
    hook: hookChoices[0]?.id || "",
    reel: "",
    leader: "",
    bait: "",
    float: "",
    lure: "",
    sinker: "",
    tip: "",
  };
  if (rodType !== "hand_rod") {
    loadout.reel = available(DATA.reels, level).sort((a, b) => reelScore(b, rodType) - reelScore(a, rodType))[0]?.id || "";
    loadout.leader = available(DATA.leaders, level).sort((a, b) => lineScore(b, regionFish) - lineScore(a, regionFish))[0]?.id || "";
  }
  if (rodType === "hand_rod" || rodType === "match_rod" || rodType === "bottom_rod") {
    loadout.bait = bestBait(level, regionFish);
  }
  if (rodType === "hand_rod" || rodType === "match_rod") {
    loadout.float = available(DATA.floats, level).sort((a, b) => b.sensitivity - a.sensitivity)[0]?.id || "";
  }
  if (rodType === "bottom_rod") {
    loadout.sinker = available(DATA.sinkers, level).sort((a, b) => b.stability * 1.4 + b.weight / 60 - (b.snagFactor ?? 0) - (a.stability * 1.4 + a.weight / 60 - (a.snagFactor ?? 0)))[0]?.id || "";
    loadout.tip = available(DATA.tips, level).sort((a, b) => b.sensitivity - a.sensitivity)[0]?.id || "";
  }
  if (rodType === "lure_rod") {
    loadout.lure = bestLure(level, regionFish, rodItem);
  }
  return loadout;
}

function lineScore(lineItem, fishes) {
  const maxWeight = Math.max(...fishes.map((f) => f.weightMax), 1);
  return Math.min(lineItem.maxTension / Math.max(maxWeight * 0.5, 1), 3) - lineItem.visibility * 0.8 + lineItem.length / 260;
}

function hookScore(hookItem, fishes, rodType) {
  const avgMouth = avg(fishes.map((f) => avg([f.sizeMin, f.sizeMax]) / 10));
  const target = rodType === "lure_rod" ? 1.1 * avgMouth : 0.9 * avgMouth;
  return gauss(hookInternalSize(hookItem), target, 2.4) + hookItem.escapeHoldFactor * 0.35 + hookItem.maxTension / 80 - hookItem.recognition * 0.25;
}

function reelScore(reelItem, rodType) {
  return reelItem.frictionMax * (rodType === "bottom_rod" ? 0.42 : 0.3) + reelItem.speedMax * (rodType === "lure_rod" ? 0.42 : 0.18) + reelItem.gearRatio * 0.12 + reelItem.lineCapacity / 500;
}

function bestBait(level, fishes) {
  const baitCounts = new Map();
  for (const f of fishes) baitCounts.set(f.baitPreference, (baitCounts.get(f.baitPreference) || 0) + 1);
  return available(DATA.baits, level)
    .sort((a, b) => ((baitCounts.get(b.baitType) || 0) + b.naturalness * 0.8) - ((baitCounts.get(a.baitType) || 0) + a.naturalness * 0.8))[0]?.id || "";
}

function bestLure(level, fishes, rodItem) {
  const lureCounts = new Map();
  for (const f of fishes) lureCounts.set(f.lurePreference, (lureCounts.get(f.lurePreference) || 0) + 1);
  return available(DATA.lures, level)
    .sort((a, b) => ((lureCounts.get(b.lureType) || 0) + lureWeightMatch(rodItem, b) + b.turbulence * 0.4 + b.reflectivity * 0.25) - ((lureCounts.get(a.lureType) || 0) + lureWeightMatch(rodItem, a) + a.turbulence * 0.4 + a.reflectivity * 0.25))[0]?.id || "";
}

function controlVariants(rodType, region, loadout, level = currentLevel()) {
  const base = defaultControls();
  const castOffset = activeCastOffset(region);
  if (rodType === "hand_rod" || rodType === "match_rod") {
    const depths = uniqueNumbers([
      450,
      550,
      650,
      region.depthMin * 100,
      0.35 * region.depthMax * 100,
      0.52 * region.depthMax * 100,
      0.82 * region.depthMax * 100,
    ].map((depth) => Math.round(clamp(depth, 35, 3000) / 10) * 10));
    const casts = uniqueNumbers([0, castOffset + 5, castOffset + 8, region.depthMin + 7].map((distance) => roundNumber(Math.max(0, distance), 1)));
    const drags = dragRatioCandidates(rodType, loadout, [0.42, 0.5, 0.7, 0.85, 0.95]);
    const speeds = reelSpeedCandidates(rodType, loadout, [1.25], level);
    const variants = depths.flatMap((floatLengthCm) => casts.flatMap((throwDistance) => speeds.flatMap((reelSpeed) => drags.map((dragRatio) => ({
      ...base,
      throwDistance,
      floatLengthCm,
      dragRatio,
      reelSpeed,
    })))));
    return expandLineCutRoundVariants(variants, rodType);
  }
  if (rodType === "bottom_rod") {
    const casts = uniqueNumbers([0, 0.9 * region.depthMax + 4, 1.35 * region.depthMax + 4, 1.8 * region.depthMax + 4].map((distance) => roundNumber(Math.max(0, distance), 1)));
    const drags = dragRatioCandidates(rodType, loadout, [0.42, 0.55, 0.7, 0.85, 0.95]);
    const speeds = reelSpeedCandidates(rodType, loadout, [0.6, 0.8, 1, 1.2], level);
    const variants = casts.flatMap((throwDistance) => drags.flatMap((dragRatio) => speeds.map((reelSpeed) => ({
      ...base,
      throwDistance,
      dragRatio,
      reelSpeed,
    }))));
    return expandLineCutRoundVariants(variants, rodType);
  }
  const lureItem = byId(DATA.lures, loadout.lure);
  const actions = ["auto", "steady_surface", "steady_mid", "bottom_hop", "mid_twitch"];
  const casts = uniqueNumbers([0, castOffset + 3, castOffset + 8, 1.2 * region.depthMax + 4].map((distance) => roundNumber(Math.max(0, distance), 1)));
  const speeds = reelSpeedCandidates(rodType, loadout, [lureItem?.lureType === "jig" ? 0.85 : 1.35, 0.85, 1.35, 1.45], level);
  const drags = dragRatioCandidates(rodType, loadout, [0.45, 0.7, 0.85, 0.95]);
  const variants = casts.flatMap((throwDistance) => actions.flatMap((lureAction) => speeds.flatMap((reelSpeed) => drags.map((dragRatio) => ({
    ...base,
    throwDistance,
    lureAction,
    dragRatio,
    reelSpeed,
  })))));
  return expandLineCutRoundVariants(variants, rodType);
}

function reelSpeedCandidates(rodType, loadout, fallback, level = currentLevel()) {
  if (rodType === "hand_rod") return [0];
  const items = getLoadoutItems(loadout);
  const maxSpeed = Number(items.reel?.speedMax);
  const base = uniqueNumbers(fallback).filter((speed) => speed > 0);
  if (!Number.isFinite(maxSpeed) || maxSpeed <= 0) return base;
  const skills = derivedSkills(level);
  const autoOpening = autoReelSpeedFromItems(items, skills, 1);
  const autoAverage = autoReelSpeedFromItems(items, skills, REELING_AUTO_SPEED_AVERAGE_STAMINA_RATIO);
  const autoTired = autoReelSpeedFromItems(items, skills, 0.15);
  const dynamic = [
    Math.min(1.2, maxSpeed * 0.45),
    autoOpening,
    autoAverage,
    autoTired,
    maxSpeed * 0.82,
    maxSpeed,
  ].map((speed) => roundNumber(clamp(speed, 0.15, maxSpeed), 2));
  return uniqueNumbers([...base, ...dynamic])
    .filter((speed) => speed <= maxSpeed + 1e-9)
    .sort((a, b) => a - b);
}

function dragRatioCandidates(rodType, loadout, fallback) {
  if (rodType === "hand_rod") return [0];
  const items = getLoadoutItems(loadout);
  if (!items.reel || !Number.isFinite(items.reel.frictionMax) || items.reel.frictionMax <= 0) return uniqueNumbers(fallback);
  const safeRatio = tackleSafetyProfile(items, { dragRatio: 0 }).weakTension / items.reel.frictionMax;
  const dynamic = [0.55, 0.72, 0.86, 0.98, 1.08]
    .map((scale) => roundNumber(clamp(safeRatio * scale, 0.05, 0.98), 3));
  return uniqueNumbers([0, ...dynamic, ...fallback]).sort((a, b) => a - b);
}

function expandLineCutRoundVariants(variants, rodType) {
  if (rodType === "hand_rod") return variants;
  const rounds = [100, 200];
  return variants.flatMap((controls) => rounds.map((lineCutRoundLimit) => ({
    ...controls,
    lineCutRoundLimit,
  })));
}

function uniqueNumbers(values) {
  return Array.from(new Set(values.filter(Number.isFinite).map((value) => Number(value))));
}

function renderRecommendations() {
  cancelAutoTuneTimer();
  const recs = generateRecommendations();
  els.recommendMeta.textContent = `${recs.length} 个方案`;
  if (!recs.length) {
    els.recommendations.innerHTML = `<div class="empty-state">当前等级没有可用完整钓组。</div>`;
    return;
  }
  els.recommendations.innerHTML = "";
  recs.forEach((rec, index) => {
    const div = document.createElement("div");
    div.className = "recommendation";
    const itemNames = loadoutText(rec.loadout);
    const weightStats = estimateWeightStats(rec.estimate, Number(els.hours.value));
    div.innerHTML = `
      <div class="rank">${index + 1}</div>
      <div class="rec-main">
        <div class="rec-title">
          <span>${ROD_LABELS[rec.estimate.presentation.rodType]} · ${primaryTarget(rec.estimate)}</span>
          <button type="button" data-apply="${index}">套用</button>
        </div>
        <div class="rec-items">${itemNames.map((text) => `<span>${escapeHtml(text)}</span>`).join("")}</div>
        <div class="rec-meta">
          <span>水层 ${LAYER_LABELS[rec.estimate.presentation.targetLayer]}</span>
          <span>抛距 ${rec.estimate.presentation.actualCast.toFixed(1)}m</span>
          <span>线深 ${rec.estimate.presentation.targetDepth.toFixed(1)}m</span>
          <span>上鱼 ${rec.estimate.catchPerHour.toFixed(2)}条/h</span>
          <span>爆装 ${(rec.estimate.equipmentBreaks / Math.max(Number(els.hours.value), 1)).toFixed(2)}次/h</span>
          <span>挂底 ${rec.estimate.presentation.snagRate.toPercent(1)}</span>
        </div>
      </div>
      <div class="rec-score">
        <strong>${weightStats.kgPerHour.toFixed(weightStats.kgPerHour >= 10 ? 1 : 2)}</strong>
        <span>kg/小时</span>
        <span>总重 ${formatWeightKg(weightStats.totalWeightKg)}</span>
        <span>大鱼 ${formatCatchCount(weightStats.heavyCatch)} 条</span>
      </div>
    `;
    div.querySelector("button").addEventListener("click", () => applyRecommendation(rec));
    els.recommendations.appendChild(div);
  });
}

Number.prototype.toPercent = function toPercent(digits = 0) {
  return `${(Number(this) * 100).toFixed(digits)}%`;
};

function primaryTarget(estimate) {
  const top = estimate.fishRows[0];
  return top ? `主攻 ${top.fish.name}` : "无目标";
}

function loadoutText(loadout) {
  const items = getLoadoutItems(loadout);
  return Object.entries({
    竿: items.rod?.name,
    轮: items.reel?.name,
    线: items.line?.name,
    前导: items.leader?.name,
    钩: items.hook?.name,
    饵: items.bait?.name,
    漂: items.float?.name,
    拟饵: items.lure?.name,
    坠: items.sinker?.name,
    梢: items.tip?.name,
  })
    .filter(([, name]) => name)
    .map(([label, name]) => `${label}:${name}`);
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function buildLoadoutExport() {
  state.controls = getControls();
  const loadout = {};
  for (const [slot, collectionName] of Object.entries(slotCollections())) {
    const id = state.loadout[slot];
    if (id && byId(DATA[collectionName], id)) loadout[slot] = id;
  }
  loadout.controls = {
    throw_distance: roundNumber(state.controls.throwDistance, 2),
    float_length_cm: roundNumber(state.controls.floatLengthCm, 0),
    drag_ratio: roundNumber(state.controls.dragRatio, 3),
    reel_speed: roundNumber(state.controls.reelSpeed, 2),
    lure_action: state.controls.lureAction || "auto",
    line_cut_round_limit: roundNumber(state.controls.lineCutRoundLimit ?? 100, 0),
    line_cut_line_out_limit_m: roundNumber(state.controls.lineCutLineOutLimitM ?? state.controls.lineCutOut ?? 0, 1),
  };

  const payload = {
    version: 1,
    source: "lazyfisher_simulator",
    loadout,
  };
  if (state.importMeta?.replayId) payload.replay_id = state.importMeta.replayId;
  return payload;
}

function roundNumber(value, digits = 2) {
  const scale = 10 ** digits;
  return Math.round(Number(value || 0) * scale) / scale;
}

async function exportLoadoutText() {
  const text = JSON.stringify(buildLoadoutExport(), null, 2);
  els.loadoutJson.value = text;
  try {
    await navigator.clipboard?.writeText(text);
    setTransferStatus("已导出并复制到剪贴板", "ok");
  } catch {
    setTransferStatus("已导出到文本框", "ok");
  }
}

function downloadLoadoutText() {
  const text = els.loadoutJson.value.trim() || JSON.stringify(buildLoadoutExport(), null, 2);
  els.loadoutJson.value = text;
  const blob = new Blob([text], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `lazyfisher-loadout-${Date.now()}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  setTransferStatus("已生成下载文件", "ok");
}

function importLoadoutText() {
  try {
    const rawText = els.loadoutJson.value.trim();
    if (!rawText) throw new Error("文本框为空。");
    const payload = JSON.parse(rawText);
    const result = applyImportedLoadout(payload);
    const notes = [`已导入 ${result.appliedCount} 件装备`];
    if (result.levelRaised) notes.push(`等级调至 Lv.${result.requiredLevel}`);
    if (result.missing.length) notes.push(`未识别 ${result.missing.length} 项`);
    setTransferStatus(notes.join("，"), result.missing.length ? "error" : "ok");
  } catch (error) {
    setTransferStatus(error.message || "导入失败", "error");
  }
}

function applyImportedLoadout(payload) {
  const loadoutNode = payload?.loadout && typeof payload.loadout === "object" ? payload.loadout : payload;
  if (!loadoutNode || typeof loadoutNode !== "object") throw new Error("没有找到 loadout。");

  const imported = {};
  const missing = [];
  for (const [slot, collectionName] of Object.entries(slotCollections())) {
    const id = loadoutNode[slot];
    if (!id) continue;
    const item = byId(DATA[collectionName], id);
    if (!item) {
      missing.push(`${slot}:${id}`);
      continue;
    }
    imported[slot] = id;
  }
  const appliedCount = Object.keys(imported).length;
  if (!appliedCount) throw new Error("没有识别到可用装备 ID。");

  const rod = imported.rod ? byId(DATA.rods, imported.rod) : null;
  const rodType = rod?.rodType || inferRodType(imported);
  const requiredLevel = getLoadoutRequiredLevel(imported);
  const previousLevel = currentLevel();
  if (requiredLevel > previousLevel) els.level.value = requiredLevel;

  state.importMeta = {
    source: payload.source || "",
    replayId: payload.replay_id,
  };
  state.rodType = rodType;
  state.loadout = { ...imported };
  state.controls = normalizeImportedControls(loadoutNode.controls || payload.controls || {});
  normalizeLoadout(state.rodType);
  syncControlsToInputs();
  renderTabs();
  renderManualFields();
  markResultsStale("已导入装备数据。点击“开始模拟”重新计算结果。");

  return {
    appliedCount,
    missing,
    requiredLevel,
    levelRaised: requiredLevel > previousLevel,
  };
}

function inferRodType(loadout) {
  if (loadout.lure) return "lure_rod";
  if (loadout.sinker || loadout.tip) return "bottom_rod";
  if (loadout.reel && loadout.float) return "match_rod";
  return "hand_rod";
}

function getLoadoutRequiredLevel(loadout) {
  let level = 1;
  for (const [slot, collectionName] of Object.entries(slotCollections())) {
    const item = byId(DATA[collectionName], loadout[slot]);
    if (item) level = Math.max(level, item.level || 1);
  }
  return level;
}

function normalizeImportedControls(raw) {
  const lineCutLineOutLimitM = controlNumber(
    raw,
    ["line_cut_line_out_limit_m", "line_cut_out", "line_cutout", "lineCutLineOutLimitM", "lineCutOut"],
    state.controls.lineCutLineOutLimitM ?? state.controls.lineCutOut,
    0,
    LINE_CUT_LINE_OUT_LIMIT_MAX_M,
  );
  return defaultControls({
    throwDistance: controlNumber(raw, ["throw_distance", "throwDistance"], state.controls.throwDistance, 0, 120),
    floatLengthCm: controlNumber(raw, ["float_length_cm", "floatLengthCm"], state.controls.floatLengthCm, 0, 3000),
    dragRatio: controlNumber(raw, ["drag_ratio", "dragRatio"], state.controls.dragRatio, 0, 1),
    reelSpeed: controlNumber(raw, ["reel_speed", "reelSpeed"], state.controls.reelSpeed, 0, 10),
    lureAction: controlText(raw, ["lure_action", "lureAction"], state.controls.lureAction || "auto"),
    lineCutRoundLimit: controlNumber(raw, ["line_cut_round_limit", "lineCutRoundLimit"], state.controls.lineCutRoundLimit ?? 100, 1, 500),
    lineCutLineOutLimitM,
    lineCutOut: lineCutLineOutLimitM,
  });
}

function controlNumber(source, keys, fallback, min, max) {
  for (const key of keys) {
    if (source?.[key] !== undefined && source[key] !== null && source[key] !== "") return clamp(Number(source[key]), min, max);
  }
  return clamp(Number(fallback), min, max);
}

function controlText(source, keys, fallback) {
  for (const key of keys) {
    if (source?.[key]) {
      const value = String(source[key]);
      return LURE_ACTION_LABELS[value] ? value : fallback;
    }
  }
  return fallback;
}

function setTransferStatus(message, tone = "") {
  els.transferStatus.textContent = message;
  els.transferStatus.classList.toggle("ok", tone === "ok");
  els.transferStatus.classList.toggle("error", tone === "error");
}

function applyRecommendation(rec) {
  state.rodType = rec.estimate.presentation.rodType;
  state.loadout = { ...rec.loadout };
  state.controls = { ...rec.controls };
  syncControlsToInputs();
  renderTabs();
  renderManualFields();
  runSimulation(false);
}

function tuneControlsForCurrentLoadout() {
  const region = getRegion();
  const env = getWeather(region);
  const level = currentLevel();
  const hours = clamp(Number(els.hours.value), 1, 72);
  const rodItem = byId(DATA.rods, state.loadout.rod);
  const rodType = rodItem?.rodType || state.rodType;
  const tuned = bestControlsForLoadout(state.loadout, rodType, region, env, level, hours, currentGroundbaitConfig(state.loadout, region));
  if (!tuned) return false;
  state.controls = { ...defaultControls(), ...tuned.controls };
  syncControlsToInputs();
  return true;
}

function syncControlsToInputs() {
  els.cast.value = state.controls.throwDistance;
  els.float.value = state.controls.floatLengthCm;
  els.drag.value = state.controls.dragRatio;
  els.dragOutput.textContent = Number(state.controls.dragRatio).toFixed(2);
  els.reelSpeed.value = state.controls.reelSpeed;
  els.lureAction.value = state.controls.lureAction;
  els.lineCutRound.value = state.controls.lineCutRoundLimit ?? 100;
  els.lineCut.value = state.controls.lineCutLineOutLimitM ?? state.controls.lineCutOut ?? 0;
}

function renderTabs() {
  document.querySelectorAll(".loadout-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.rodType === state.rodType);
  });
}

function simulate(loadout, controls, region, env, level, hours, groundbaitConfig = currentGroundbaitConfig(loadout, region)) {
  const presentation = buildPresentation(loadout, controls, region, env, level);
  if (!presentation) return null;
  const durationSeconds = Math.max(1, Number(hours) || 1) * 3600;
  const stats = {
    catches: 0,
    bites: 0,
    notices: 0,
    falseSignals: 0,
    hookMisses: 0,
    escaped: 0,
    equipmentBreaks: 0,
    lineCuts: 0,
    breakParts: new Map(),
    snagEvents: 0,
    saleValue: 0,
    totalWeightKg: 0,
    fish: new Map(),
  };
  let waitSeconds = 0;
  let elapsedSeconds = 0;
  let ticks = 0;
  while (elapsedSeconds < durationSeconds) {
    elapsedSeconds += FISHING_TICK_SECONDS;
    ticks += 1;
    const waitMultiplier = Math.min(2 ** Math.floor(waitSeconds / WAITING_BITE_STEP_SECONDS), WAITING_BITE_MULTIPLIER_CAP);
    if (Math.random() < presentation.snagRate * 0.08) stats.snagEvents += 1;
    const weights = candidateWeights(presentation, region, env, level);
    if (Math.random() >= weights.encounterRate) {
      if (Math.random() < falseSignalChance(presentation, env)) {
        stats.falseSignals += 1;
        stats.notices += 1;
        waitSeconds = 0;
      } else {
        waitSeconds += FISHING_TICK_SECONDS;
      }
      continue;
    }
    const row = roulette(weights.entries, (entry) => entry.encounterShare);
    if (!row) {
      waitSeconds += FISHING_TICK_SECONDS;
      continue;
    }
    const groundbaitFactor = groundbaitMultiplier(groundbaitConfig, presentation, row.fish, elapsedSeconds);
    const evals = evaluateFish(presentation, row.fish, row.entry, region, env, waitMultiplier, groundbaitFactor);
    if (Math.random() >= evals.notice) {
      waitSeconds += FISHING_TICK_SECONDS;
      continue;
    }
    stats.notices += 1;
    elapsedSeconds += estimatedBiteWindowSeconds(presentation);
    const roll = Math.random();
    if (roll < evals.bite) {
      stats.bites += 1;
      waitSeconds = 0;
      if (Math.random() < evals.hookRate) {
        elapsedSeconds += estimatedReelingSeconds(presentation, row.fish, row.entry, evals);
        const catchInfo = rollCatch(row.fish, row.entry, region);
        const outcome = reelingOutcomeProfile(presentation, row.fish, row.entry, env, catchInfo.weight);
        const outcomeRoll = Math.random();
        if (outcomeRoll < (outcome.lineCutChance ?? 0)) {
          stats.lineCuts += 1;
        } else if (outcomeRoll < (outcome.lineCutChance ?? 0) + outcome.breakChance) {
          stats.equipmentBreaks += 1;
          if (outcome.breakPart) {
            stats.breakParts.set(outcome.breakPart, (stats.breakParts.get(outcome.breakPart) || 0) + 1);
          }
        } else if (outcomeRoll < (outcome.lineCutChance ?? 0) + outcome.breakChance + outcome.reelingSuccess * (1 - 0.22 * presentation.snagRate)) {
          stats.catches += 1;
          stats.saleValue += catchInfo.value;
          stats.totalWeightKg += catchInfo.weight;
          const current = stats.fish.get(row.fish.id) || { fish: row.fish, count: 0, value: 0, totalWeightKg: 0, maxWeight: 0 };
          current.count += 1;
          current.value += catchInfo.value;
          current.totalWeightKg += catchInfo.weight;
          current.maxWeight = Math.max(current.maxWeight, catchInfo.weight);
          stats.fish.set(row.fish.id, current);
        } else {
          stats.escaped += 1;
        }
      } else {
        stats.hookMisses += 1;
      }
    } else if (roll < evals.bite + evals.lick) {
      stats.notices += 0;
      waitSeconds = 0;
    } else {
      waitSeconds += FISHING_TICK_SECONDS;
    }
  }
  return { presentation, stats, ticks };
}

function roulette(rows, getWeight) {
  const total = rows.reduce((sum, row) => sum + getWeight(row), 0);
  if (total <= 0) return null;
  let r = Math.random() * total;
  for (const row of rows) {
    r -= getWeight(row);
    if (r <= 0) return row;
  }
  return rows[rows.length - 1] || null;
}

function rollCatch(fishObj, poolEntry, region = null) {
  const latent = normalish();
  const weight = catchWeightFromSkew(
    fishObj,
    latent + catchSizeShift(poolEntry),
    gaussianNoise(0.035),
    gaussianNoise(0.05),
    region,
  );
  const rating = ratingFromRoll(normalCdf(latent));
  const multiplier = RATING_MULTIPLIERS[rating] ?? 1;
  return { weight, rating, value: fishObj.baseValue * weight * multiplier };
}

function normalish() {
  let sum = 0;
  for (let i = 0; i < 6; i += 1) sum += Math.random();
  return sum - 3;
}

function gaussianNoise(sigma) {
  return normalish() * Math.SQRT2 * sigma;
}

function catchSizeShift(poolEntry) {
  return 1.8 * ((poolEntry?.sizeModifier ?? 1) - 1);
}

function catchWeightFromSkew(fishObj, skew, sizeNoise = 0, densityNoise = 0, region = null) {
  const sizeRatio = clamp(CATCH_SIZE_RATIO_BASE + CATCH_SIZE_RATIO_LATENT_SCALE * skew + sizeNoise, 0.03, 0.998);
  const density = clamp(CATCH_DENSITY_BASE + CATCH_DENSITY_LATENT_SCALE * skew + densityNoise, 0.55, 1.35);
  const weightRatio = clamp((sizeRatio ** FISH_WEIGHT_RATIO_SIZE_EXPONENT) * density, 0.02, 1);
  return applyRegionWeightLimits(lerp(fishObj.weightMin, fishObj.weightMax, weightRatio), region);
}

function applyRegionWeightLimits(weight, region = null) {
  let limited = Math.max(0, Number(weight) || 0);
  const softLimit = Number(region?.softLimitKg);
  if (Number.isFinite(softLimit) && softLimit > 0 && limited > softLimit) {
    const overflow = limited - softLimit;
    limited = softLimit + (softLimit * overflow) / (softLimit + overflow);
  }
  const maxOverride = Number(region?.weightMaxOverride);
  if (Number.isFinite(maxOverride) && maxOverride > 0) limited = Math.min(limited, maxOverride);
  const minOverride = Number(region?.weightMinOverride);
  if (Number.isFinite(minOverride) && minOverride > 0) limited = Math.max(limited, minOverride);
  return limited;
}

function ratingFromRoll(u) {
  if (u > 0.9995) return "legendary";
  if (u > 0.985) return "epic";
  if (u > 0.9) return "rare";
  if (u > 0.38) return "standard";
  return "below";
}

function normalCdf(x) {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp(-x * x / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return x >= 0 ? 1 - p : p;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function runSimulation(useRandom = true) {
  cancelSimulationTimer();
  cancelAutoTuneTimer();
  cancelMapRevenueRanking();
  state.controls = getControls();
  const region = getRegion();
  const env = getWeather(region);
  const level = currentLevel();
  const hours = clamp(Number(els.hours.value), 1, 72);
  const groundbaitConfig = currentGroundbaitConfig(state.loadout, region);
  const estimate = estimateLoadout(state.loadout, state.controls, region, env, level, hours, 1.2, groundbaitConfig);
  const sim = useRandom ? simulate(state.loadout, state.controls, region, env, level, hours, groundbaitConfig) : null;
  renderResults(estimate, sim, hours, groundbaitConfig);
}

function scheduleRunSimulation(useRandom = false, delay = SIMULATION_DEBOUNCE_MS) {
  if (simulationTimer) clearTimeout(simulationTimer);
  simulationTimer = deferTask(() => {
    simulationTimer = null;
    runSimulation(useRandom);
  }, delay);
}

function scheduleAutoTuneAndSimulation({ recommendations = false } = {}) {
  if (autoTuneTimer) clearTimeout(autoTuneTimer);
  els.subtitle.textContent = "正在自动调校参数...";
  autoTuneTimer = deferTask(() => {
    autoTuneTimer = null;
    tuneControlsForCurrentLoadout();
    if (recommendations) scheduleRenderRecommendations();
    runSimulation(false);
  }, AUTO_TUNE_DEBOUNCE_MS);
}

function scheduleAutoTuneOnly({ recommendations = true } = {}) {
  if (autoTuneTimer) clearTimeout(autoTuneTimer);
  cancelSimulationTimer();
  cancelMapRevenueRanking();
  els.subtitle.textContent = "正在自动调校参数...";
  autoTuneTimer = deferTask(() => {
    autoTuneTimer = null;
    tuneControlsForCurrentLoadout();
    markResultsStale("装备已变更，参数已自动调校。点击“开始模拟”重新计算结果。", {
      recommendations,
      cancelAutoTune: false,
    });
  }, AUTO_TUNE_DEBOUNCE_MS);
}

function scheduleRenderRecommendations(delay = RECOMMENDATION_DEBOUNCE_MS) {
  if (recommendationTimer) clearTimeout(recommendationTimer);
  els.recommendMeta.textContent = "等待重算";
  recommendationTimer = deferTask(() => {
    recommendationTimer = null;
    renderRecommendations();
  }, delay);
}

function cancelSimulationTimer() {
  if (!simulationTimer) return;
  clearTimeout(simulationTimer);
  simulationTimer = null;
}

function cancelRecommendationTimer() {
  if (!recommendationTimer) return;
  clearTimeout(recommendationTimer);
  recommendationTimer = null;
}

function cancelAutoTuneTimer() {
  if (!autoTuneTimer) return;
  clearTimeout(autoTuneTimer);
  autoTuneTimer = null;
}

function markRecommendationsStale(label = "条件已变更") {
  cancelRecommendationTimer();
  els.recommendMeta.textContent = label;
}

function markResultsStale(message = "条件已变更。点击“开始模拟”重新计算结果。", options = {}) {
  const { recommendations = true, cancelAutoTune = true } = options;
  cancelSimulationTimer();
  if (cancelAutoTune) cancelAutoTuneTimer();
  cancelMapRevenueRanking();
  els.subtitle.textContent = message;
  els.mapRevenue.innerHTML = "";
  if (recommendations) markRecommendationsStale();
}

function deferTask(callback, delay) {
  const timer = setTimeout(callback, delay);
  if (timer && typeof timer.unref === "function") timer.unref();
  return timer;
}

function renderResults(estimate, sim, hours, groundbaitConfig = null) {
  if (!estimate) {
    els.summary.innerHTML = `<div class="empty-state">钓组不完整，无法模拟。</div>`;
    els.distribution.innerHTML = "";
    els.mapRevenue.innerHTML = "";
    cancelMapRevenueRanking();
    return;
  }
  const stats = sim?.stats;
  const catches = stats ? stats.catches : estimate.expectedCatch;
  const biteCount = stats ? stats.bites : estimate.expectedBites;
  const noticeCount = stats ? stats.notices : estimate.expectedNotices;
  const falseSignals = stats ? stats.falseSignals : estimate.falseSignalRate * (estimate.effectiveTicks ?? fishingTicksForHours(hours));
  const snags = stats ? stats.snagEvents : estimate.snagEvents;
  const equipmentBreaks = stats ? stats.equipmentBreaks : estimate.equipmentBreaks;
  const escaped = stats ? stats.escaped : estimate.escapeEvents;
  const lineCuts = stats ? stats.lineCuts ?? 0 : estimate.lineCutEvents ?? 0;
  const saleValue = stats ? stats.saleValue : estimateSaleValue(estimate);
  const weightStats = stats ? simulationWeightStats(stats, hours) : estimateWeightStats(estimate, hours);
  const activeFishingFactor = stats ? clamp((sim?.ticks || 0) / Math.max(fishingTicksForHours(hours, true), 1)) : estimate.fishingTimeFactor ?? 1;
  const groundbaitLabel = groundbaitSummary(groundbaitConfig, estimate.presentation);
  const tension = tensionSafetySummary(estimate.presentation);
  const breakPart = stats ? dominantBreakPart(stats.breakParts) || estimate.presentation.tackleSafety.weakPart : estimate.breakPart;
  els.subtitle.textContent = `${ROD_LABELS[estimate.presentation.rodType]} · ${getRegion().name} / ${getSpot(getRegion()).name} · 全天候均值${groundbaitLabel ? ` · ${groundbaitLabel}` : ""} · ${hours} 小时${stats ? "随机模拟" : "期望估算"}`;
  els.summary.innerHTML = [
    summaryCard("成功起鱼", catches.toFixed(stats ? 0 : 1), `${(catches / hours).toFixed(2)} 条/小时`),
    summaryCard("实咬次数", biteCount.toFixed(stats ? 0 : 1), `遭遇率 ${(estimate.encounterRate * 100).toFixed(1)}% / tick`),
    summaryCard("鱼讯总数", noticeCount.toFixed(stats ? 0 : 1), `含误判 ${falseSignals.toFixed(stats ? 0 : 1)} 次`),
    summaryCard("摩擦片张力", tension.value, tension.note),
    summaryCard("装备风险", `爆装 ${equipmentBreaks.toFixed(stats ? 0 : 1)}`, `逃鱼 ${escaped.toFixed(stats ? 0 : 1)} 次 · 切线 ${lineCuts.toFixed(stats ? 0 : 1)} 次 · 高风险 ${tensionPartLabel(breakPart)}`),
    summaryCard(stats ? "模拟重量" : "估算重量", formatWeightKg(weightStats.totalWeightKg), `${formatWeightKg(weightStats.kgPerHour)}/小时 · 大鱼 ${formatCatchCount(weightStats.heavyCatch)} 条 · 有效作钓 ${(activeFishingFactor * 100).toFixed(0)}%`),
    summaryCard("估算金币", money(saleValue), `保守鱼价 · 仅供参考 · 挂底约 ${snags.toFixed(stats ? 0 : 1)} 次`),
  ].join("");

  const rows = stats
    ? Array.from(stats.fish.values()).sort((a, b) => b.count - a.count).map((row) => ({ label: row.fish.name, value: row.count, note: `${formatWeightKg(row.totalWeightKg)} · ${money(row.value)} 金` }))
    : estimate.fishRows.filter((row) => row.catch > 0.02 || row.equipmentBreak > 0.02 || row.lineCut > 0.02).map((row) => {
      const effectiveReeling = row.evals.reelingSuccess * (1 - (row.evals.lineCutChance ?? 0));
      return { label: row.fish.name, value: row.catch, note: `${formatWeightKg(rowExpectedTotalWeight(row))} · ${effectiveReeling.toPercent(0)} 起鱼 · 爆装 ${row.equipmentBreak.toFixed(1)} · 切线 ${(row.lineCut ?? 0).toFixed(1)}` };
    });
  renderDistribution(rows);
  scheduleMapRevenueRanking(state.loadout, state.controls, currentLevel(), hours);
}

function summaryCard(label, value, note) {
  return `<div class="summary-card"><span class="summary-label">${label}</span><span class="summary-value">${value}</span><span class="summary-note">${note}</span></div>`;
}

function tensionSafetySummary(presentation) {
  const safety = presentation.tackleSafety || tackleSafetyProfile(presentation.items, presentation.controls);
  const weak = `${tensionPartLabel(safety.weakPart)} ${safety.weakTension.toFixed(1)}kg`;
  if (!presentation.items.reel) return { value: `${safety.weakTension.toFixed(1)}kg`, note: `无鱼轮 · 薄弱点 ${weak}` };
  const status = safety.dragToWeakRatio > 1 ? "偏高" : safety.dragToWeakRatio > 0.85 ? "临界" : "安全";
  return { value: `${safety.dragTension.toFixed(1)}kg`, note: `${status} · 薄弱点 ${weak}` };
}

function tensionPartLabel(part) {
  return { rod: "鱼竿", line: "主线", leader: "前导", reel: "鱼轮", hook: "鱼钩" }[part] || "钓组";
}

function estimateSaleValue(estimate) {
  return estimate.fishRows.reduce((sum, row) => sum + row.catch * expectedCatchValue(row.fish, row.entry, row.region), 0);
}

function estimateWeightStats(estimate, hours = 1) {
  if (!estimate) return emptyWeightStats(hours);
  if (estimate.weightStats && estimate.weightStats.hours === hours) return estimate.weightStats;
  return estimateWeightStatsFromRows(estimate.fishRows || [], hours);
}

function estimateWeightStatsFromRows(fishRows, hours = 1) {
  const safeHours = Math.max(Number(hours) || 1, 1);
  const rows = (fishRows || [])
    .map((row) => {
      const catchCount = Math.max(0, Number(row.catch) || 0);
      const expectedWeightKg = rowExpectedWeight(row);
      return {
        catch: catchCount,
        expectedWeightKg,
        totalWeightKg: catchCount * expectedWeightKg,
      };
    })
    .filter((row) => row.catch > 0 && row.expectedWeightKg > 0);
  if (!rows.length) return emptyWeightStats(safeHours);

  const totalCatch = rows.reduce((sum, row) => sum + row.catch, 0);
  const totalWeightKg = rows.reduce((sum, row) => sum + row.totalWeightKg, 0);
  const qualityWeightedKg = rows.reduce((sum, row) => sum + row.totalWeightKg * Math.sqrt(row.expectedWeightKg), 0);
  const averageWeightKg = totalWeightKg / Math.max(totalCatch, 1e-6);
  const heavyThresholdKg = heavyFishThreshold(rows, averageWeightKg);
  const heavyRows = rows.filter((row) => row.expectedWeightKg >= heavyThresholdKg);
  const heavyCatch = heavyRows.reduce((sum, row) => sum + row.catch, 0);
  const heavyWeightKg = heavyRows.reduce((sum, row) => sum + row.totalWeightKg, 0);
  const kgPerHour = totalWeightKg / safeHours;
  const qualityKgPerHour = qualityWeightedKg / safeHours;
  const heavyCatchPerHour = heavyCatch / safeHours;
  const scorePerHour = kgPerHour + qualityKgPerHour * 0.18 + heavyCatchPerHour * heavyThresholdKg * 0.35;

  return {
    hours: safeHours,
    totalCatch,
    totalWeightKg,
    kgPerHour,
    averageWeightKg,
    heavyThresholdKg,
    heavyCatch,
    heavyWeightKg,
    scorePerHour,
  };
}

function simulationWeightStats(stats, hours = 1) {
  const fishRows = Array.from(stats?.fish?.values?.() || []).map((row) => {
    const averageWeight = row.count > 0 ? row.totalWeightKg / row.count : 0;
    return {
      catch: row.count,
      fish: { weightMin: averageWeight, weightMax: averageWeight },
      entry: { sizeModifier: 1 },
    };
  });
  return estimateWeightStatsFromRows(fishRows, hours);
}

function emptyWeightStats(hours = 1) {
  return {
    hours,
    totalCatch: 0,
    totalWeightKg: 0,
    kgPerHour: 0,
    averageWeightKg: 0,
    heavyThresholdKg: 0,
    heavyCatch: 0,
    heavyWeightKg: 0,
    scorePerHour: 0,
  };
}

function rowExpectedTotalWeight(row) {
  return (Number(row?.catch) || 0) * rowExpectedWeight(row);
}

function rowExpectedWeight(row) {
  if (!row?.fish) return 0;
  return expectedCatchWeight(row.fish, row.entry, row.region);
}

function heavyFishThreshold(rows, averageWeightKg) {
  const maxWeight = Math.max(...rows.map((row) => row.expectedWeightKg), 0);
  if (!maxWeight) return 0;
  const percentileWeight = weightedWeightPercentile(rows, 0.7);
  return Math.min(maxWeight, Math.max(averageWeightKg * 1.35, percentileWeight));
}

function weightedWeightPercentile(rows, percentile) {
  const sorted = [...rows].sort((a, b) => a.expectedWeightKg - b.expectedWeightKg);
  const total = sorted.reduce((sum, row) => sum + row.catch, 0);
  const target = total * clamp(percentile);
  let cumulative = 0;
  for (const row of sorted) {
    cumulative += row.catch;
    if (cumulative >= target) return row.expectedWeightKg;
  }
  return sorted[sorted.length - 1]?.expectedWeightKg ?? 0;
}

function expectedCatchValue(fishObj, poolEntry, region = null) {
  return fishObj.baseValue * expectedCatchWeight(fishObj, poolEntry, region) * EXPECTED_RATING_MULTIPLIER;
}

function expectedCatchWeight(fishObj, poolEntry, region = null) {
  const shift = catchSizeShift(poolEntry);
  let total = 0;
  for (let i = 1; i <= EXPECTED_WEIGHT_SAMPLE_COUNT; i += 1) {
    const skew = haltonNormalish(i);
    total += catchWeightFromSkew(fishObj, shift + skew, 0, 0, region);
    total += catchWeightFromSkew(fishObj, shift - skew, 0, 0, region);
  }
  return total / (EXPECTED_WEIGHT_SAMPLE_COUNT * 2);
}

function haltonNormalish(index) {
  return halton(index, 2) + halton(index, 3) + halton(index, 5) + halton(index, 7) + halton(index, 11) + halton(index, 13) - 3;
}

function halton(index, base) {
  let result = 0;
  let fraction = 1 / base;
  let i = index;
  while (i > 0) {
    result += fraction * (i % base);
    i = Math.floor(i / base);
    fraction /= base;
  }
  return result;
}

function money(value) {
  return Number.isFinite(value) ? Math.round(value).toLocaleString("zh-CN") : "0";
}

function formatWeightKg(value) {
  const kg = Math.max(0, Number(value) || 0);
  if (kg < 1) return `${Math.round(kg * 1000)}g`;
  if (kg < 10) return `${kg.toFixed(2)}kg`;
  if (kg < 100) return `${kg.toFixed(1)}kg`;
  return `${Math.round(kg).toLocaleString("zh-CN")}kg`;
}

function formatCatchCount(value) {
  const count = Math.max(0, Number(value) || 0);
  if (count >= 10) return count.toFixed(0);
  if (count >= 1) return count.toFixed(1);
  return count.toFixed(2);
}

function renderDistribution(rows) {
  if (!rows.length) {
    els.distribution.innerHTML = `<div class="empty-state">当前方案没有形成稳定上鱼分布。</div>`;
    return;
  }
  const max = Math.max(...rows.map((row) => row.value), 1);
  els.distribution.innerHTML = rows.slice(0, 8).map((row) => `
    <div class="bar-row">
      <span class="bar-label" title="${escapeHtml(row.label)}">${escapeHtml(row.label)}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${clamp(row.value / max) * 100}%"></span></span>
      <span class="bar-value">
        <strong>${Number(row.value).toFixed(row.value >= 10 ? 0 : 1)}</strong>
        ${row.note ? `<small>${escapeHtml(row.note)}</small>` : ""}
      </span>
    </div>
  `).join("");
}

function mapRevenueTopRows(loadout, controls, level, hours) {
  const rows = [];
  for (const region of DATA.regions) {
    if (region.simulatorVirtual) continue;
    if ((region.level || 1) > level) continue;
    const env = getWeather(region);
    const spots = region.spots?.length ? region.spots : [defaultSpot()];
    let best = null;
    for (const spot of spots) {
      const groundbaitConfig = currentGroundbaitConfig(loadout, region);
      const estimate = withSpot(region, spot, () => estimateLoadout(loadout, controls, region, env, level, hours, 1.2, groundbaitConfig));
      if (!estimate) continue;
      const saleValue = estimateSaleValue(estimate);
      const weightStats = estimateWeightStats(estimate, hours);
      const row = {
        region,
        spot,
        saleValue,
        salePerHour: saleValue / Math.max(hours, 1),
        weightStats,
        equipmentBreaks: estimate.equipmentBreaks,
        riskScore: riskAdjustedWeightScore(estimate, hours),
        catchPerHour: estimate.catchPerHour,
        groundbaitLabel: groundbaitSummary(groundbaitConfig, estimate.presentation),
      };
      if (!best || row.riskScore > best.riskScore) best = row;
    }
    if (best) rows.push(best);
  }
  return rows.sort((a, b) => b.riskScore - a.riskScore).slice(0, 3);
}

function scheduleMapRevenueRanking(loadout, controls, level, hours) {
  cancelMapRevenueRanking(false);
  const requestId = ++mapRevenueRequestId;
  const loadoutSnapshot = { ...loadout };
  const controlsSnapshot = { ...controls };
  const safeHours = clamp(Number(hours), 1, 72);
  renderMapRevenuePending();
  mapRevenueTimer = deferTask(() => {
    mapRevenueTimer = null;
    if (requestId !== mapRevenueRequestId) return;
    renderMapRevenueRanking(mapRevenueTopRows(loadoutSnapshot, controlsSnapshot, level, safeHours));
  }, MAP_REVENUE_DEBOUNCE_MS);
}

function cancelMapRevenueRanking(incrementRequest = true) {
  if (mapRevenueTimer) clearTimeout(mapRevenueTimer);
  mapRevenueTimer = null;
  if (incrementRequest) mapRevenueRequestId += 1;
}

function renderMapRevenuePending() {
  els.mapRevenue.innerHTML = `
    <div class="map-revenue-head">
      <strong>当前装备地图收益 Top 3</strong>
      <span>计算中...</span>
    </div>
  `;
}

function renderMapRevenueRanking(rows) {
  if (!rows.length) {
    els.mapRevenue.innerHTML = "";
    return;
  }
  els.mapRevenue.innerHTML = `
    <div class="map-revenue-head">
      <strong>当前装备地图收益 Top 3</strong>
      <span>按重量收益评分排序</span>
    </div>
    ${rows.map((row, index) => `
      <div class="map-revenue-row">
        <span class="map-revenue-rank">${index + 1}</span>
        <span class="map-revenue-main">
          <strong>${escapeHtml(row.region.name)}</strong>
          <small>${escapeHtml(row.spot.name)}${row.groundbaitLabel ? ` · ${escapeHtml(row.groundbaitLabel)}` : ""}</small>
        </span>
        <span class="map-revenue-value">
          <strong>${formatWeightKg(row.weightStats.kgPerHour)}/小时</strong>
          <small>大鱼 ${formatCatchCount(row.weightStats.heavyCatch)} 条 · ${row.catchPerHour.toFixed(2)} 条/h · 爆装 ${(row.equipmentBreaks / Math.max(row.weightStats.hours, 1)).toFixed(2)} 次/h · 约 ${money(row.salePerHour)} 金/h</small>
        </span>
      </div>
    `).join("")}
  `;
}

function renderRegionOptions() {
  const current = els.region.value;
  els.region.innerHTML = DATA.regions.map((region) => {
    const tag = region.simulatorVirtual ? " · 官方模拟鱼池" : "";
    return `<option value="${region.id}">Lv.${region.level} · ${escapeHtml(region.name)}${tag}</option>`;
  }).join("");
  if (DATA.regions.some((region) => region.id === current)) els.region.value = current;
}

function renderSpotOptions() {
  const region = getRegion();
  const current = els.spot.value;
  const spots = region.spots?.length ? region.spots : [defaultSpot()];
  els.spot.innerHTML = spots.map((spot) => {
    const offset = spot.castOffset ? ` · 抛距${spot.castOffset > 0 ? "+" : ""}${spot.castOffset}m` : "";
    return `<option value="${spot.id}">${escapeHtml(spot.name)}${offset}</option>`;
  }).join("");
  if (spots.some((spot) => spot.id === current)) els.spot.value = current;
}

function renderWeatherOptions() {
  if (!DATA.weatherPresets?.length) return;
  const current = els.weather.value;
  els.weather.innerHTML = DATA.weatherPresets.map((weather) => `<option value="${weather.id}">${escapeHtml(weather.name)}</option>`).join("");
  if (DATA.weatherPresets.some((weather) => weather.id === current)) els.weather.value = current;
}

function renderGroundbaitOptions() {
  const current = els.groundbaitType.value;
  const types = groundbaitTypeOptions();
  els.groundbaitType.innerHTML = types.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(baitTypeLabel(type))}</option>`).join("");
  if (types.includes(current)) els.groundbaitType.value = current;
  else if (types.length) els.groundbaitType.value = types[0];
  updateGroundbaitControls();
}

function updateGroundbaitControls() {
  const shore = isShoreRegion();
  const enabled = shore && els.groundbaitMode.value !== "none";
  els.groundbaitMode.disabled = !shore;
  els.groundbaitType.disabled = !enabled || els.groundbaitMode.value !== "type";
  els.groundbaitAmount.disabled = !enabled;
  if (!shore) els.groundbaitMode.value = "none";
}

function init() {
  renderRegionOptions();
  renderSpotOptions();
  renderWeatherOptions();
  renderGroundbaitOptions();
  state.rodType = "hand_rod";
  normalizeLoadout(state.rodType);
  syncControlsToInputs();
  renderTabs();
  renderManualFields();
  tuneControlsForCurrentLoadout();
  bindEvents();
  updateTimeOutput();
  runSimulation(false);
  els.recommendMeta.textContent = "点击计算";
  els.recommendations.innerHTML = `<div class="empty-state">点击“推荐方案”后计算当前条件下的装备方案。</div>`;
}

function bindEvents() {
  els.time.addEventListener("input", () => {
    updateTimeOutput();
    markResultsStale();
  });
  els.drag.addEventListener("input", () => {
    els.dragOutput.textContent = Number(els.drag.value).toFixed(2);
    markResultsStale("参数已变更。点击“开始模拟”重新计算结果。", { recommendations: false });
  });
  els.recommendBtn.addEventListener("click", () => scheduleRenderRecommendations(0));
  els.simulateBtn.addEventListener("click", () => runSimulation(true));
  els.importLoadout.addEventListener("click", importLoadoutText);
  els.exportLoadout.addEventListener("click", exportLoadoutText);
  els.downloadLoadout.addEventListener("click", downloadLoadoutText);
  els.resetControls.addEventListener("click", () => {
    state.controls = defaultControls();
    syncControlsToInputs();
    markResultsStale("参数已重置。点击“开始模拟”重新计算结果。", { recommendations: false });
  });
  for (const el of [els.region, els.spot, els.level, els.hours, els.proficiency, els.strengthSkill, els.enduranceSkill, els.experienceSkill, els.techniqueSkill, els.weather]) {
    el.addEventListener("change", () => {
      if (el === els.region) renderSpotOptions();
      if (el === els.region) updateGroundbaitControls();
      if (el === els.level) {
        normalizeLoadout(state.rodType);
        renderManualFields();
      }
      markResultsStale("基础条件已变更。点击“开始模拟”或“推荐方案”重新计算。");
    });
  }
  for (const el of [els.groundbaitMode, els.groundbaitType, els.groundbaitAmount]) {
    el.addEventListener("change", () => {
      updateGroundbaitControls();
      markResultsStale("打窝条件已变更。点击“开始模拟”或“推荐方案”重新计算。");
    });
  }
  for (const el of [els.cast, els.float, els.drag, els.reelSpeed, els.lureAction, els.lineCutRound, els.lineCut]) {
    el.addEventListener("change", () => markResultsStale("参数已变更。点击“开始模拟”重新计算结果。", { recommendations: false }));
  }
  document.querySelectorAll(".loadout-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.rodType = tab.dataset.rodType;
      normalizeLoadout(state.rodType);
      renderTabs();
      renderManualFields();
      scheduleAutoTuneOnly();
    });
  });
  els.manualFields.addEventListener("change", (event) => {
    const slot = event.target.dataset.slot;
    if (!slot) return;
    state.loadout[slot] = event.target.value;
    if (slot === "rod") {
      const rodItem = byId(DATA.rods, event.target.value);
      if (rodItem) state.rodType = rodItem.rodType;
      normalizeLoadout(state.rodType);
      renderTabs();
      renderManualFields();
    }
    scheduleAutoTuneOnly();
  });
}

function updateTimeOutput() {
  els.timeOutput.textContent = "全天 24 小时平均";
}

init();
