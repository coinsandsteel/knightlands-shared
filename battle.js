// Reward types
export const REWARD_TYPE_DAILY = 'reward_day';
export const REWARD_TYPE_RANKING = 'reward_ranking';
export const REWARD_TYPE_SQUAD = 'reward_squad';

// Things to buy
export const COMMODITY_ENERGY  = 'energy';
export const COMMODITY_COINS = 'coins';
export const COMMODITY_CRYSTALS  = 'crystals';
export const COMMODITY_CHEST = 'chest';

// Unit tribes
export const UNIT_TRIBE_KOBOLD = 'kobold';
export const UNIT_TRIBE_DWARF = 'dwarf';
export const UNIT_TRIBE_EGYPTIAN = 'egyptian';
export const UNIT_TRIBE_GOBLIN = 'goblin';
export const UNIT_TRIBE_INSECT = 'insect';
export const UNIT_TRIBE_ORC = 'orc';
export const UNIT_TRIBE_CLOCKWORK = 'clockwork';
export const UNIT_TRIBE_SKELETON = 'skeleton';
export const UNIT_TRIBE_ICE = 'ice';
export const UNIT_TRIBE_ELF = 'elf';
export const UNIT_TRIBE_ELDRITCH = 'eldritch';
export const UNIT_TRIBE_ASSEMBLING = 'assembling';
export const UNIT_TRIBE_FALLEN_KING = 'fallen_knight';
export const UNIT_TRIBE_LEGENDARY = 'legendary';
export const UNIT_TRIBE_TITAN = 'titan';

// Unit classes
export const UNIT_CLASS_RANGE = 'range';
export const UNIT_CLASS_MELEE = 'melee';
export const UNIT_CLASS_MAGE = 'mage';
export const UNIT_CLASS_TANK = 'tank';
export const UNIT_CLASS_SUPPORT = 'support';

// Ability groups
export const ABILITY_TYPE_ATTACK = 'attack';
export const ABILITY_TYPE_BUFF = 'buff';
export const ABILITY_TYPE_SELF_BUFF = 'self_buff';
export const ABILITY_TYPE_DE_BUFF = 'de_buff';
export const ABILITY_TYPE_JUMP = 'jump';
export const ABILITY_TYPE_HEALING = 'healing';

// Abilities
export const ABILITY_ACCURATE_SHOT = "accurate_shot";
export const ABILITY_AGRESSION = "agression";
export const ABILITY_ARROW_CRUSH = "arrow_crush";
export const ABILITY_AXE_BLOW = "axe_blow";
export const ABILITY_AXE_CRUSH = "axe_crush";
export const ABILITY_BLADE_VORTEX = "blade_vortex";
export const ABILITY_CRUSH_OF_DOOM = "crush_of_doom";
export const ABILITY_CURSE = "curse";
export const ABILITY_DARK_VORTEX = "dark_vortex";
export const ABILITY_DASH = "dash";
export const ABILITY_DEATH_SHOT = "death_shot";
export const ABILITY_DOUBLE_SHOT = "double_shot";
export const ABILITY_DRAGON_BITE = "dragon_bite";
export const ABILITY_DRAGON_FURY = "dragon_fury";
export const ABILITY_ENERGY_BOLT = "energy_bolt";
export const ABILITY_FATAL_STRIKE = "fatal_strike";
export const ABILITY_FIRE_BLADE = "fire_blade";
export const ABILITY_FLAME_STRIKE = "flame_strike";
export const ABILITY_FLIGHT = "flight";
export const ABILITY_FROST_BLADE = "frost_blade";
export const ABILITY_FROZEN_ABYSS = "frozen_abyss";
export const ABILITY_FURY_CLAWS = "fury_claws";
export const ABILITY_GROUP_HEAL = "group_heal";
export const ABILITY_HAMSTRING = "hamstring";
export const ABILITY_HEAL = "heal";
export const ABILITY_INITIATIVE = "initiative";
export const ABILITY_HEAVY_ARROW = "heavy_arrow";
export const ABILITY_HEAVY_STRIKE = "heavy_strike";
export const ABILITY_HOLY_STRIKE = "holy_strike";
export const ABILITY_HUMMER_BLOW = "hummer_blow";
export const ABILITY_HURRICANE = "hurricane";
export const ABILITY_JAVELIN_THROW = "javelin_throw";
export const ABILITY_KUNAI_STRIKE = "kunai_strike";
export const ABILITY_LAZINESS = "laziness";
export const ABILITY_LETHAL_SHOT = "lethal_shot";
export const ABILITY_LETHAL_STRIKE = "lethal_strike";
export const ABILITY_MIGHT = "might";
export const ABILITY_MORTAL_BLOW = "mortal_blow";
export const ABILITY_POWER_SHOT = "power_shot";
export const ABILITY_POWER_STRIKE = "power_strike";
export const ABILITY_RAGE = "rage";
export const ABILITY_RETRIBUTION = "retribution";
export const ABILITY_RUSH = "rush";
export const ABILITY_SHIELD = "shield";
export const ABILITY_SHIELD_STRIKE = "shield_strike";
export const ABILITY_SHIELD_STUN = "shield_stun";
export const ABILITY_SHIELD_WALL = "shield_wall";
export const ABILITY_SPEAR_STRIKE = "spear_strike";
export const ABILITY_STRONG_PUNCH = "strong_punch";
export const ABILITY_STUN = "stun";
export const ABILITY_STUN_SHOT = "stun_shot";
export const ABILITY_SWORD_CRUSH = "sword_crush";
export const ABILITY_TELEPORTATION = "teleportation";
export const ABILITY_WEAKNESS = "weakness";
export const ABILITY_WIND_WALK = "wind_walk";
export const ABILITY_WOLF_BITE = "wolf_bite";
export const ABILITY_ZEALOT = "zealot";
export const ABILITY_MOVE = "move";
export const ABILITY_ATTACK = "attack";

export const ABILITY_TYPES = {
  [ABILITY_HEAL]: ABILITY_TYPE_HEALING,
  [ABILITY_GROUP_HEAL]: ABILITY_TYPE_HEALING,
  
  [ABILITY_DASH]: ABILITY_TYPE_JUMP,
  [ABILITY_FLIGHT]: ABILITY_TYPE_JUMP,
  [ABILITY_RUSH]: ABILITY_TYPE_JUMP,
  [ABILITY_TELEPORTATION]: ABILITY_TYPE_JUMP,
  
  [ABILITY_MIGHT]: ABILITY_TYPE_BUFF,
  [ABILITY_SHIELD]: ABILITY_TYPE_BUFF,
  [ABILITY_WIND_WALK]: ABILITY_TYPE_BUFF,
  
  [ABILITY_CURSE]: ABILITY_TYPE_DE_BUFF,
  [ABILITY_FROZEN_ABYSS]: ABILITY_TYPE_DE_BUFF,
  [ABILITY_HAMSTRING]: ABILITY_TYPE_DE_BUFF,
  [ABILITY_LAZINESS]: ABILITY_TYPE_DE_BUFF,
  [ABILITY_SHIELD_STUN]: ABILITY_TYPE_DE_BUFF,
  [ABILITY_STUN]: ABILITY_TYPE_DE_BUFF,
  [ABILITY_STUN_SHOT]: ABILITY_TYPE_DE_BUFF,
  [ABILITY_WEAKNESS]: ABILITY_TYPE_DE_BUFF,
  
  [ABILITY_HEAVY_ARROW]: ABILITY_TYPE_SELF_BUFF,
  [ABILITY_RAGE]: ABILITY_TYPE_SELF_BUFF,
  [ABILITY_SHIELD_WALL]: ABILITY_TYPE_SELF_BUFF,
  [ABILITY_ZEALOT]: ABILITY_TYPE_SELF_BUFF,
  
  [ABILITY_ACCURATE_SHOT]: ABILITY_TYPE_ATTACK,
  [ABILITY_AGRESSION]: ABILITY_TYPE_ATTACK,
  [ABILITY_ARROW_CRUSH]: ABILITY_TYPE_ATTACK,
  [ABILITY_AXE_BLOW]: ABILITY_TYPE_ATTACK,
  [ABILITY_AXE_CRUSH]: ABILITY_TYPE_ATTACK,
  [ABILITY_BLADE_VORTEX]: ABILITY_TYPE_ATTACK,
  [ABILITY_CRUSH_OF_DOOM]: ABILITY_TYPE_ATTACK,
  [ABILITY_DARK_VORTEX]: ABILITY_TYPE_ATTACK,
  [ABILITY_DEATH_SHOT]: ABILITY_TYPE_ATTACK,
  [ABILITY_DOUBLE_SHOT]: ABILITY_TYPE_ATTACK,
  [ABILITY_DRAGON_BITE]: ABILITY_TYPE_ATTACK,
  [ABILITY_DRAGON_FURY]: ABILITY_TYPE_ATTACK,
  [ABILITY_ENERGY_BOLT]: ABILITY_TYPE_ATTACK,
  [ABILITY_FATAL_STRIKE]: ABILITY_TYPE_ATTACK,
  [ABILITY_FIRE_BLADE]: ABILITY_TYPE_ATTACK,
  [ABILITY_FLAME_STRIKE]: ABILITY_TYPE_ATTACK,
  [ABILITY_FROST_BLADE]: ABILITY_TYPE_ATTACK,
  [ABILITY_FURY_CLAWS]: ABILITY_TYPE_ATTACK,
  [ABILITY_HEAVY_STRIKE]: ABILITY_TYPE_ATTACK,
  [ABILITY_HOLY_STRIKE]: ABILITY_TYPE_ATTACK,
  [ABILITY_HUMMER_BLOW]: ABILITY_TYPE_ATTACK,
  [ABILITY_HURRICANE]: ABILITY_TYPE_ATTACK,
  [ABILITY_JAVELIN_THROW]: ABILITY_TYPE_ATTACK,
  [ABILITY_KUNAI_STRIKE]: ABILITY_TYPE_ATTACK,
  [ABILITY_LETHAL_SHOT]: ABILITY_TYPE_ATTACK,
  [ABILITY_LETHAL_STRIKE]: ABILITY_TYPE_ATTACK,
  [ABILITY_MORTAL_BLOW]: ABILITY_TYPE_ATTACK,
  [ABILITY_POWER_SHOT]: ABILITY_TYPE_ATTACK,
  [ABILITY_POWER_STRIKE]: ABILITY_TYPE_ATTACK,
  [ABILITY_RETRIBUTION]: ABILITY_TYPE_ATTACK,
  [ABILITY_SHIELD_STRIKE]: ABILITY_TYPE_ATTACK,
  [ABILITY_SPEAR_STRIKE]: ABILITY_TYPE_ATTACK,
  [ABILITY_STRONG_PUNCH]: ABILITY_TYPE_ATTACK,
  [ABILITY_SWORD_CRUSH]: ABILITY_TYPE_ATTACK,
  [ABILITY_WOLF_BITE]: ABILITY_TYPE_ATTACK,
  [ABILITY_ATTACK]: ABILITY_TYPE_ATTACK,
};

// TODO Squad bonus classes
// export const BONUS_CLASS_TEST = 'test';

// Game modes
export const GAME_MODE_DUEL = 'duel';
export const GAME_MODE_ADVENTURE = 'adventure';

// Game difficulty levels
export const GAME_DIFFICULTY_LOW = 'low';
export const GAME_DIFFICULTY_MEDIUM = 'medium';
export const GAME_DIFFICULTY_HIGH = 'high';

// Combat results
export const COMBAT_RESULT_WIN = 'win';
export const COMBAT_RESULT_LOOSE = 'loose';

// Locations
export const LOCATIONS = [
  {
    id: 1,
    name: 'location 1',
    levels: [
      { id: 1, exp: [125, 188], reward: [100, 150] },
      { id: 2, exp: [225, 338], reward: [200, 300] },
      { id: 3, exp: [330, 495], reward: [300, 450] },
      { id: 4, exp: [440, 660], reward: [400, 600] },
      { id: 5, exp: [550, 825], reward: [500, 750] },
    ]
  },
  {
    id: 2,
    name: 'location 2',
    levels: [
      { id: 1, exp: [625, 938], reward: [600, 900] },
      { id: 2, exp: [750, 1125], reward: [700, 1050] },
      { id: 3, exp: [825, 1238], reward: [800, 1200] },
      { id: 4, exp: [950, 1425], reward: [900, 1350] },
      { id: 5, exp: [1025, 1538], reward: [1000, 1500] },
    ]
  },
  {
    id: 3,
    name: 'location 3',
    levels: [
      { id: 1, exp: [1150, 1725], reward: [1100, 1650] },
      { id: 2, exp: [1225, 1838], reward: [1200, 1800] },
      { id: 3, exp: [1350, 2025], reward: [1300, 1950] },
      { id: 4, exp: [1425, 2138], reward: [1400, 2100] },
      { id: 5, exp: [1550, 2325], reward: [1500, 2250] },
    ]
  },
  {
    id: 4,
    name: 'location 4',
    levels: [
      { id: 1, exp: [1625, 2438], reward: [1600, 2400] },
      { id: 2, exp: [1750, 2625], reward: [1700, 2550] },
      { id: 3, exp: [1825, 2738], reward: [1800, 2700] },
      { id: 4, exp: [1950, 2925], reward: [1900, 2850] },
      { id: 5, exp: [2025, 3038], reward: [2000, 3000] },
    ]
  },
  {
    id: 5,
    name: 'location 5',
    levels: [
      { id: 1, exp: [2150, 3225], reward: [2100, 3150] },
      { id: 2, exp: [2325, 3488], reward: [2200, 3450] },
      { id: 3, exp: [2550, 3825], reward: [2300, 3750] },
      { id: 4, exp: [2755, 4133], reward: [2400, 4050] },
      { id: 5, exp: [2970, 4455], reward: [2500, 4350] },
    ]
  },
  {
    id: 6,
    name: 'location 6',
    levels: [
      { id: 1, exp: [3125, 4688], reward: [3100, 4650] },
      { id: 2, exp: [3350, 5025], reward: [3300, 4950] },
      { id: 3, exp: [3450, 5175], reward: [3500, 5250] },
      { id: 4, exp: [3600, 5400], reward: [3700, 5550] },
      { id: 5, exp: [3880, 5820], reward: [3900, 5850] },
    ]
  },
];

// const TERRAIN_GRASS = 'grass';
// const TERRAIN_SAND = 'sand';
// const TERRAIN_SNOW = 'snow';
// const TERRAIN_FOREST = 'forest';
// const TERRAIN_HILL = 'hill';
// const TERRAIN_SWAM = 'swam';
// const TERRAIN_LAVA = 'lava';
// const TERRAIN_ICE = 'ice';
// const TERRAIN_BUSHES = 'bushes';

export const TERRAIN_GRASS = 'grass';
export const TERRAIN_GRASS_HILL = 'grass_hill';
export const TERRAIN_GRASS_SWAMP = 'grass_swamp';
export const TERRAIN_GRASS_SWAMP_A = 'grass_swamp_a';
export const TERRAIN_GRASS_SWAMP_B = 'grass_swamp_b';
export const TERRAIN_GRASS_SWAMP_C = 'grass_swamp_c';
export const TERRAIN_GRASS_SWAMP_D = 'grass_swamp_d';
export const TERRAIN_GRASS_SWAMP_X = 'grass_swamp_x';
export const TERRAIN_GRASS_SWAMP_Y = 'grass_swamp_y';
export const TERRAIN_GRASS_SWAMP_Z = 'grass_swamp_z';
export const TERRAIN_GRASS_SWAMP1 = 'grass_swamp1';
export const TERRAIN_GRASS_SWAMP2 = 'grass_swamp2';
export const TERRAIN_GRASS_WOODS = 'grass_woods';
export const TERRAIN_SAND = 'sand';
export const TERRAIN_SAND_HILL = 'sand_hill';
export const TERRAIN_SAND_LAVA = 'sand_lava';
export const TERRAIN_SAND_LAVA_A = 'sand_lava_a';
export const TERRAIN_SAND_LAVA_B = 'sand_lava_b';
export const TERRAIN_SAND_LAVA_C = 'sand_lava_c';
export const TERRAIN_SAND_LAVA_D = 'sand_lava_d';
export const TERRAIN_SAND_LAVA1 = 'sand_lava1';
export const TERRAIN_SAND_LAVA2 = 'sand_lava2';
export const TERRAIN_SAND_QUICKSAND = 'sand_quicksand';
export const TERRAIN_SAND_THORNS = 'sand_thorns';
export const TERRAIN_SNOW = 'snow';
export const TERRAIN_SNOW_HILL = 'snow_hill';
export const TERRAIN_SNOW_ICE = 'snow_ice';
export const TERRAIN_SNOW_ICE_1 = 'snow_ice_1';
export const TERRAIN_SNOW_ICE_1_1 = 'snow_ice_1-1';
export const TERRAIN_SNOW_ICE_A = 'snow_ice_a';
export const TERRAIN_SNOW_ICE_B = 'snow_ice_b';
export const TERRAIN_SNOW_ICE_C = 'snow_ice_c';
export const TERRAIN_SNOW_ICE_D = 'snow_ice_d';
export const TERRAIN_SNOW_WOODS = 'snow_woods';

// Shop
const FLESH_USD_RATE = 0.75;
const SHINES_USD_RATE = 1 / 100;

export const SHOP_STARTER_PACK = 'shop-starter-pack';
export const SHOP_DAILY_REWARD = 'shop-daily-reward';
export const SHOP_ENERGY_CHEST = 'shop-energy-chest';
export const SHOP_COIN_CHEST = 'shop-coin-chest';
export const SHOP_DONATION_CHEST = 'shop-donation-chest';
export const SHOP_SQUAD1_CHEST = 'shop-squad1-chest';
export const SHOP_SQUAD2_CHEST = 'shop-squad2-chest';
export const SHOP_SQUAD3_CHEST = 'shop-squad3-chest';

export const SHOP = [
  {
    name: SHOP_STARTER_PACK,
    claimable: true,
    quantity: 1,
  },
  {
    name: SHOP_DAILY_REWARD,
    claimable: true,
    quantity: 1,
  },
  {
    name: SHOP_ENERGY_CHEST,
    claimable: false,
    quantity: 1,
    hardPrice: 249,
    fleshPrice: 2.49 / FLESH_USD_RATE
  },
  {
    name: SHOP_COIN_CHEST,
    claimable: false,
    quantity: 1,
    hardPrice: 249,
    fleshPrice: 2.49 / FLESH_USD_RATE
  },
  {
    name: SHOP_DONATION_CHEST,
    claimable: false,
    quantity: 1,
    hardPrice: 249,
    fleshPrice: 2.49 / FLESH_USD_RATE
  },
  {
    name: SHOP_SQUAD1_CHEST,
    claimable: false,
    quantity: 1,
    hardPrice: 249,
    fleshPrice: 2.49 / FLESH_USD_RATE
  },
  {
    name: SHOP_SQUAD2_CHEST,
    claimable: false,
    quantity: 1,
    hardPrice: 249,
    fleshPrice: 2.49 / FLESH_USD_RATE
  },
  {
    name: SHOP_SQUAD3_CHEST,
    claimable: false,
    quantity: 1,
    hardPrice: 249,
    fleshPrice: 2.49 / FLESH_USD_RATE
  },
];

export const BATTLE_MAX_ENERGY = 36;