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
export const UNIT_TRIBE_FALLEN_KNIGHT = 'fallen_knight';
export const UNIT_TRIBE_LEGENDARY = 'legendary';
export const UNIT_TRIBE_TITAN = 'titan';

// Unit classes
export const UNIT_CLASS_RANGE = 'range';
export const UNIT_CLASS_MELEE = 'melee';
export const UNIT_CLASS_MAGE = 'mage';
export const UNIT_CLASS_TANK = 'tank';
export const UNIT_CLASS_SUPPORT = 'support';

// Ability groups
export const ABILITY_GROUP_ATTACK = 'attack';
export const ABILITY_GROUP_BUFF = 'buff';
export const ABILITY_GROUP_SELF_BUFF = 'self_buff';
export const ABILITY_GROUP_DE_BUFF = 'de_buff';
export const ABILITY_GROUP_JUMP = 'jump';

// Abilities
export const ACCURATE_SHOT = "accurate_shot";
export const AGRESSION = "agression";
export const ARROW_CRUSH = "arrow_crush";
export const AXE_BLOW = "axe_blow";
export const AXE_CRUSH = "axe_crush";
export const BLADE_VORTEX = "blade_vortex";
export const CRUSH_OF_DOOM = "crush_of_doom";
export const CURSE = "curse";
export const DARK_VORTEX = "dark_vortex";
export const DASH = "dash";
export const DEATH_SHOT = "death_shot";
export const DOUBLE_SHOT = "double_shot";
export const DRAGON_BITE = "dragon_bite";
export const DRAGON_FURY = "dragon_fury";
export const ENERGY_BOLT = "energy_bolt";
export const FATAL_STRIKE = "fatal_strike";
export const FIRE_BLADE = "fire_blade";
export const FLAME_STRIKE = "flame_strike";
export const FLIGHT = "flight";
export const FROST_BLADE = "frost_blade";
export const FROZEN_ABYSS = "frozen_abyss";
export const FURY_CLAWS = "fury_claws";
export const GROUP_HEAL = "group_heal";
export const HAMSTRING = "hamstring";
export const HEAL = "heal";
export const HEAVY_ARROW = "heavy_arrow";
export const HEAVY_STRIKE = "heavy_strike";
export const HOLY_STRIKE = "holy_strike";
export const HUMMER_BLOW = "hummer_blow";
export const HURRICANE = "hurricane";
export const JAVELIN_THROW = "javelin_throw";
export const KUNAI_STRIKE = "kunai_strike";
export const LAZINESS = "laziness";
export const LETHAL_SHOT = "lethal_shot";
export const LETHAL_STRIKE = "lethal_strike";
export const MIGHT = "might";
export const MORTAL_BLOW = "mortal_blow";
export const POWER_SHOT = "power_shot";
export const POWER_STRIKE = "power_strike";
export const RAGE = "rage";
export const RETRIBUTION = "retribution";
export const RUSH = "rush";
export const SHIELD = "shield";
export const SHIELD_STRIKE = "shield_strike";
export const SHIELD_STUN = "shield_stun";
export const SHIELD_WALL = "shield_wall";
export const SPEAR_STRIKE = "spear_strike";
export const STRONG_PUNCH = "strong_punch";
export const STUN = "stun";
export const STUN_SHOT = "stun_shot";
export const SWORD_CRUSH = "sword_crush";
export const TELEPORTATION = "teleportation";
export const WEAKNESS = "weakness";
export const WIND_WALK = "wind_walk";
export const WOLF_BITE = "wolf_bite";
export const ZEALOT = "zealot";

// TODO Squad bonus classes
// export const BONUS_CLASS_TEST = 'test';

// Game modes
export const GAME_MODE_DUEL = 'duel';
export const GAME_MODE_ADVENTURE = 'adventure';

// Game difficulty levels
export const GAME_DIFFICULTY_NORMAL = 'normal';
export const GAME_DIFFICULTY_HARD = 'hard';
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

// Shop
const FLESH_USD_RATE = 0.75;
const SHINES_USD_RATE = 1 / 100;

export const SHOP = [{
    "quantity": 100,
    "price": 2.49,
    'hardPrice': 249, // 2.49 / SHINES_USD_RATE,
    'fleshPrice': 2.49 / FLESH_USD_RATE
  },
  {
    "quantity": 250,
    "price": 5.89,
    'hardPrice': 589, // 5.89 / SHINES_USD_RATE,
    'fleshPrice': 5.89 / FLESH_USD_RATE
  },
  {
    "quantity": 500,
    "price": 10.59,
    'hardPrice': 1059, // 10.59 / SHINES_USD_RATE,
    'fleshPrice': 10.59 / FLESH_USD_RATE
  },
  {
    "quantity": 1000,
    "price": 19.99,
    'hardPrice': 1999, // 19.99 / SHINES_USD_RATE,
    'fleshPrice': 19.99 / FLESH_USD_RATE
  },
  {
    "quantity": 2500,
    "price": 49.99,
    'hardPrice': 4999, // 49.99 / SHINES_USD_RATE,
    'fleshPrice': 49.99 / FLESH_USD_RATE
  }
];

export const CHARACTERISTICS = {
  [UNIT_CLASS_MELEE]: [
    // Tier 1
    [
      { hp: 71, damage: 7, defence: 3, speed: 2, initiative: 4 },
      { hp: 74, damage: 7, defence: 3, speed: 2, initiative: 4 },
      { hp: 78, damage: 8, defence: 3, speed: 2, initiative: 4 },
      { hp: 81, damage: 8, defence: 3, speed: 2, initiative: 4 },
      { hp: 85, damage: 8, defence: 4, speed: 2, initiative: 4 },
      { hp: 88, damage: 9, defence: 4, speed: 2, initiative: 4 },
      { hp: 92, damage: 9, defence: 4, speed: 2, initiative: 4 },
      { hp: 95, damage: 10, defence: 4, speed: 2, initiative: 4 },
      { hp: 99, damage: 10, defence: 4, speed: 2, initiative: 4 },
      { hp: 103, damage: 10, defence: 4, speed: 2, initiative: 4 },
      { hp: 106, damage: 11, defence: 4, speed: 2, initiative: 4 },
      { hp: 110, damage: 11, defence: 4, speed: 2, initiative: 4 },
      { hp: 113, damage: 11, defence: 5, speed: 2, initiative: 4 },
      { hp: 117, damage: 12, defence: 5, speed: 2, initiative: 4 },
      { hp: 120, damage: 12, defence: 5, speed: 2, initiative: 4 },
    ],
    // Tier 2
    [
      { hp: 95, damage: 10, defence: 6, speed: 2, initiative: 4 },
      { hp: 100, damage: 10, defence: 6, speed: 2, initiative: 4 },
      { hp: 105, damage: 11, defence: 7, speed: 2, initiative: 4 },
      { hp: 110, damage: 11, defence: 7, speed: 2, initiative: 4 },
      { hp: 115, damage: 11, defence: 7, speed: 2, initiative: 4 },
      { hp: 119, damage: 12, defence: 7, speed: 2, initiative: 4 },
      { hp: 124, damage: 12, defence: 8, speed: 2, initiative: 4 },
      { hp: 129, damage: 13, defence: 8, speed: 2, initiative: 4 },
      { hp: 134, damage: 13, defence: 8, speed: 2, initiative: 4 },
      { hp: 138, damage: 14, defence: 8, speed: 2, initiative: 4 },
      { hp: 143, damage: 14, defence: 9, speed: 2, initiative: 4 },
      { hp: 148, damage: 15, defence: 9, speed: 2, initiative: 4 },
      { hp: 153, damage: 15, defence: 9, speed: 2, initiative: 4 },
      { hp: 158, damage: 16, defence: 9, speed: 2, initiative: 4 },
      { hp: 162, damage: 16, defence: 10, speed: 2, initiative: 4 },
    ],
    // Tier 3
    [
      { hp: 129, damage: 13, defence: 11, speed: 3, initiative: 6 },
      { hp: 135, damage: 14, defence: 11, speed: 3, initiative: 6 },
      { hp: 142, damage: 14, defence: 12, speed: 3, initiative: 6 },
      { hp: 148, damage: 15, defence: 12, speed: 3, initiative: 6 },
      { hp: 155, damage: 15, defence: 12, speed: 3, initiative: 6 },
      { hp: 161, damage: 16, defence: 12, speed: 3, initiative: 6 },
      { hp: 168, damage: 17, defence: 13, speed: 3, initiative: 6 },
      { hp: 174, damage: 17, defence: 13, speed: 3, initiative: 6 },
      { hp: 180, damage: 18, defence: 13, speed: 3, initiative: 6 },
      { hp: 187, damage: 19, defence: 13, speed: 3, initiative: 6 },
      { hp: 193, damage: 19, defence: 14, speed: 3, initiative: 6 },
      { hp: 200, damage: 20, defence: 14, speed: 3, initiative: 6 },
      { hp: 206, damage: 21, defence: 14, speed: 3, initiative: 6 },
      { hp: 213, damage: 21, defence: 14, speed: 3, initiative: 6 },
      { hp: 219, damage: 22, defence: 15, speed: 3, initiative: 6 },
    ]
  ],
  [UNIT_CLASS_RANGE]: [
    // Tier 1
    [
      //{ hp: 10, damage: 3, defence: 7, initiative: 1, speed: 4 }
      { hp: 49, damage: 9, defence: 2, speed: 3, initiative: 6 },
      { hp: 52, damage: 10, defence: 2, speed: 3, initiative: 6 },
      { hp: 54, damage: 10, defence: 2, speed: 3, initiative: 6 },
      { hp: 57, damage: 11, defence: 2, speed: 3, initiative: 6 },
      { hp: 59, damage: 11, defence: 3, speed: 3, initiative: 6 },
      { hp: 62, damage: 11, defence: 3, speed: 3, initiative: 6 },
      { hp: 64, damage: 12, defence: 3, speed: 3, initiative: 6 },
      { hp: 67, damage: 12, defence: 3, speed: 3, initiative: 6 },
      { hp: 69, damage: 13, defence: 3, speed: 3, initiative: 6 },
      { hp: 72, damage: 13, defence: 3, speed: 3, initiative: 6 },
      { hp: 74, damage: 14, defence: 3, speed: 3, initiative: 6 },
      { hp: 77, damage: 14, defence: 3, speed: 3, initiative: 6 },
      { hp: 79, damage: 15, defence: 4, speed: 3, initiative: 6 },
      { hp: 82, damage: 15, defence: 4, speed: 3, initiative: 6 },
      { hp: 84, damage: 16, defence: 4, speed: 3, initiative: 6 },
    ],
    // Tier 2
    [
      { hp: 67, damage: 12, defence: 4, speed: 3, initiative: 6 },
      { hp: 70, damage: 13, defence: 4, speed: 3, initiative: 6 },
      { hp: 74, damage: 14, defence: 4, speed: 3, initiative: 6 },
      { hp: 77, damage: 14, defence: 4, speed: 3, initiative: 6 },
      { hp: 80, damage: 15, defence: 5, speed: 3, initiative: 6 },
      { hp: 84, damage: 16, defence: 5, speed: 3, initiative: 6 },
      { hp: 87, damage: 16, defence: 5, speed: 3, initiative: 6 },
      { hp: 90, damage: 17, defence: 5, speed: 3, initiative: 6 },
      { hp: 94, damage: 17, defence: 5, speed: 3, initiative: 6 },
      { hp: 97, damage: 18, defence: 6, speed: 3, initiative: 6 },
      { hp: 100, damage: 19, defence: 6, speed: 3, initiative: 6 },
      { hp: 104, damage: 19, defence: 6, speed: 3, initiative: 6 },
      { hp: 107, damage: 20, defence: 6, speed: 3, initiative: 6 },
      { hp: 110, damage: 20, defence: 6, speed: 3, initiative: 6 },
      { hp: 114, damage: 21, defence: 7, speed: 3, initiative: 6 },
    ],
    // Tier 3
    [
      { hp: 90, damage: 17, defence: 7, speed: 4, initiative: 8 },
      { hp: 95, damage: 18, defence: 7, speed: 4, initiative: 8 },
      { hp: 99, damage: 18, defence: 7, speed: 4, initiative: 8 },
      { hp: 104, damage: 19, defence: 7, speed: 4, initiative: 8 },
      { hp: 108, damage: 20, defence: 7, speed: 4, initiative: 8 },
      { hp: 113, damage: 21, defence: 8, speed: 4, initiative: 8 },
      { hp: 117, damage: 22, defence: 8, speed: 4, initiative: 8 },
      { hp: 122, damage: 23, defence: 8, speed: 4, initiative: 8 },
      { hp: 126, damage: 23, defence: 8, speed: 4, initiative: 8 },
      { hp: 131, damage: 24, defence: 8, speed: 4, initiative: 8 },
      { hp: 135, damage: 25, defence: 9, speed: 4, initiative: 8 },
      { hp: 140, damage: 26, defence: 9, speed: 4, initiative: 8 },
      { hp: 144, damage: 27, defence: 9, speed: 4, initiative: 8 },
      { hp: 149, damage: 28, defence: 9, speed: 4, initiative: 8 },
      { hp: 153, damage: 28, defence: 9, speed: 4, initiative: 8 },
    ]
  ],
  [UNIT_CLASS_MAGE]: [
    // Tier 1
    [
      //{ hp: 10, damage: 3, defence: 7, initiative: 1, speed: 4 }
      { hp: 42, damage: 11, defence: 1, speed: 2, initiative: 4 },
      { hp: 45, damage: 11, defence: 1, speed: 2, initiative: 4 },
      { hp: 47, damage: 12, defence: 1, speed: 2, initiative: 4 },
      { hp: 49, damage: 12, defence: 1, speed: 2, initiative: 4 },
      { hp: 51, damage: 13, defence: 2, speed: 2, initiative: 4 },
      { hp: 53, damage: 13, defence: 2, speed: 2, initiative: 4 },
      { hp: 55, damage: 14, defence: 2, speed: 2, initiative: 4 },
      { hp: 57, damage: 14, defence: 2, speed: 2, initiative: 4 },
      { hp: 59, damage: 15, defence: 2, speed: 2, initiative: 4 },
      { hp: 62, damage: 15, defence: 2, speed: 2, initiative: 4 },
      { hp: 64, damage: 16, defence: 2, speed: 2, initiative: 4 },
      { hp: 66, damage: 16, defence: 2, speed: 2, initiative: 4 },
      { hp: 68, damage: 17, defence: 3, speed: 2, initiative: 4 },
      { hp: 70, damage: 18, defence: 3, speed: 2, initiative: 4 },
      { hp: 72, damage: 18, defence: 3, speed: 2, initiative: 4 },
    ],
    // Tier 2
    [
      { hp: 57, damage: 14, defence: 3, speed: 2, initiative: 4 },
      { hp: 60, damage: 15, defence: 3, speed: 2, initiative: 4 },
      { hp: 63, damage: 16, defence: 3, speed: 2, initiative: 4 },
      { hp: 66, damage: 16, defence: 3, speed: 2, initiative: 4 },
      { hp: 69, damage: 17, defence: 3, speed: 2, initiative: 4 },
      { hp: 72, damage: 18, defence: 4, speed: 2, initiative: 4 },
      { hp: 74, damage: 19, defence: 4, speed: 2, initiative: 4 },
      { hp: 77, damage: 19, defence: 4, speed: 2, initiative: 4 },
      { hp: 80, damage: 20, defence: 4, speed: 2, initiative: 4 },
      { hp: 83, damage: 21, defence: 4, speed: 2, initiative: 4 },
      { hp: 86, damage: 21, defence: 4, speed: 2, initiative: 4 },
      { hp: 89, damage: 22, defence: 4, speed: 2, initiative: 4 },
      { hp: 92, damage: 23, defence: 4, speed: 2, initiative: 4 },
      { hp: 95, damage: 24, defence: 5, speed: 2, initiative: 4 },
      { hp: 97, damage: 24, defence: 5, speed: 2, initiative: 4 },
    ],
    // Tier 3
    [
      { hp: 77, damage: 19, defence: 5, speed: 3, initiative: 6 },
      { hp: 81, damage: 20, defence: 5, speed: 3, initiative: 6 },
      { hp: 85, damage: 21, defence: 5, speed: 3, initiative: 6 },
      { hp: 89, damage: 22, defence: 5, speed: 3, initiative: 6 },
      { hp: 93, damage: 23, defence: 5, speed: 3, initiative: 6 },
      { hp: 97, damage: 24, defence: 5, speed: 3, initiative: 6 },
      { hp: 101, damage: 25, defence: 6, speed: 3, initiative: 6 },
      { hp: 104, damage: 26, defence: 6, speed: 3, initiative: 6 },
      { hp: 108, damage: 27, defence: 6, speed: 3, initiative: 6 },
      { hp: 112, damage: 28, defence: 6, speed: 3, initiative: 6 },
      { hp: 116, damage: 29, defence: 6, speed: 3, initiative: 6 },
      { hp: 120, damage: 30, defence: 6, speed: 3, initiative: 6 },
      { hp: 124, damage: 31, defence: 6, speed: 3, initiative: 6 },
      { hp: 128, damage: 32, defence: 6, speed: 3, initiative: 6 },
      { hp: 131, damage: 33, defence: 7, speed: 3, initiative: 6 },
    ]
  ],
  [UNIT_CLASS_TANK]: [
    // Tier 1
    [
      //{ hp: 10, damage: 3, defence: 7, initiative: 1, speed: 4 }
      { hp: 92, damage: 5, defence: 10, speed: 2, initiative: 4 },
      { hp: 97, damage: 5, defence: 10, speed: 2, initiative: 4 },
      { hp: 101, damage: 5, defence: 11, speed: 2, initiative: 4 },
      { hp: 106, damage: 6, defence: 11, speed: 2, initiative: 4 },
      { hp: 110, damage: 6, defence: 11, speed: 2, initiative: 4 },
      { hp: 115, damage: 6, defence: 12, speed: 2, initiative: 4 },
      { hp: 120, damage: 6, defence: 12, speed: 2, initiative: 4 },
      { hp: 124, damage: 7, defence: 12, speed: 2, initiative: 4 },
      { hp: 129, damage: 7, defence: 13, speed: 2, initiative: 4 },
      { hp: 133, damage: 7, defence: 13, speed: 2, initiative: 4 },
      { hp: 138, damage: 7, defence: 13, speed: 2, initiative: 4 },
      { hp: 142, damage: 8, defence: 14, speed: 2, initiative: 4 },
      { hp: 147, damage: 8, defence: 14, speed: 2, initiative: 4 },
      { hp: 152, damage: 8, defence: 14, speed: 2, initiative: 4 },
      { hp: 156, damage: 8, defence: 15, speed: 2, initiative: 4 },
    ],
    // Tier 2
    [
      { hp: 124, damage: 7, defence: 15, speed: 2, initiative: 4 },
      { hp: 130, damage: 7, defence: 15, speed: 2, initiative: 4 },
      { hp: 137, damage: 7, defence: 15, speed: 2, initiative: 4 },
      { hp: 143, damage: 8, defence: 16, speed: 2, initiative: 4 },
      { hp: 149, damage: 8, defence: 16, speed: 2, initiative: 4 },
      { hp: 155, damage: 8, defence: 16, speed: 2, initiative: 4 },
      { hp: 161, damage: 9, defence: 17, speed: 2, initiative: 4 },
      { hp: 168, damage: 9, defence: 17, speed: 2, initiative: 4 },
      { hp: 174, damage: 9, defence: 17, speed: 2, initiative: 4 },
      { hp: 180, damage: 10, defence: 18, speed: 2, initiative: 4 },
      { hp: 186, damage: 10, defence: 18, speed: 2, initiative: 4 },
      { hp: 192, damage: 10, defence: 18, speed: 2, initiative: 4 },
      { hp: 199, damage: 11, defence: 19, speed: 2, initiative: 4 },
      { hp: 205, damage: 11, defence: 19, speed: 2, initiative: 4 },
      { hp: 211, damage: 11, defence: 19, speed: 2, initiative: 4 },
    ],
    // Tier 3
    [
      { hp: 168, damage: 9, defence: 19, speed: 3, initiative: 6 },
      { hp: 176, damage: 9, defence: 20, speed: 3, initiative: 6 },
      { hp: 184, damage: 10, defence: 20, speed: 3, initiative: 6 },
      { hp: 193, damage: 10, defence: 20, speed: 3, initiative: 6 },
      { hp: 201, damage: 11, defence: 21, speed: 3, initiative: 6 },
      { hp: 209, damage: 11, defence: 21, speed: 3, initiative: 6 },
      { hp: 218, damage: 12, defence: 21, speed: 3, initiative: 6 },
      { hp: 226, damage: 12, defence: 22, speed: 3, initiative: 6 },
      { hp: 235, damage: 13, defence: 22, speed: 3, initiative: 6 },
      { hp: 243, damage: 13, defence: 22, speed: 3, initiative: 6 },
      { hp: 251, damage: 14, defence: 23, speed: 3, initiative: 6 },
      { hp: 260, damage: 14, defence: 23, speed: 3, initiative: 6 },
      { hp: 268, damage: 14, defence: 23, speed: 3, initiative: 6 },
      { hp: 276, damage: 15, defence: 24, speed: 3, initiative: 6 },
      { hp: 285, damage: 15, defence: 24, speed: 3, initiative: 6 },
    ]
  ],
  [UNIT_CLASS_SUPPORT]: [
    // Tier 1
    [
      //{ hp: 10, damage: 3, defence: 7, initiative: 1, speed: 4 }
      { hp: 49, damage: 5, defence: 10, speed: 2, initiative: 4 },
      { hp: 52, damage: 5, defence: 10, speed: 2, initiative: 4 },
      { hp: 54, damage: 5, defence: 11, speed: 2, initiative: 4 },
      { hp: 57, damage: 6, defence: 11, speed: 2, initiative: 4 },
      { hp: 59, damage: 6, defence: 11, speed: 2, initiative: 4 },
      { hp: 62, damage: 6, defence: 12, speed: 2, initiative: 4 },
      { hp: 64, damage: 6, defence: 12, speed: 2, initiative: 4 },
      { hp: 67, damage: 7, defence: 12, speed: 2, initiative: 4 },
      { hp: 69, damage: 7, defence: 13, speed: 2, initiative: 4 },
      { hp: 72, damage: 7, defence: 13, speed: 2, initiative: 4 },
      { hp: 74, damage: 7, defence: 13, speed: 2, initiative: 4 },
      { hp: 77, damage: 8, defence: 14, speed: 2, initiative: 4 },
      { hp: 79, damage: 8, defence: 14, speed: 2, initiative: 4 },
      { hp: 82, damage: 8, defence: 14, speed: 2, initiative: 4 },
      { hp: 84, damage: 8, defence: 15, speed: 2, initiative: 4 },
    ],
    // Tier 2
    [
      { hp: 67, damage: 7, defence: 15, speed: 2, initiative: 4 },
      { hp: 70, damage: 7, defence: 15, speed: 2, initiative: 4 },
      { hp: 74, damage: 7, defence: 15, speed: 2, initiative: 4 },
      { hp: 77, damage: 8, defence: 16, speed: 2, initiative: 4 },
      { hp: 80, damage: 8, defence: 16, speed: 2, initiative: 4 },
      { hp: 84, damage: 8, defence: 16, speed: 2, initiative: 4 },
      { hp: 87, damage: 9, defence: 17, speed: 2, initiative: 4 },
      { hp: 90, damage: 9, defence: 17, speed: 2, initiative: 4 },
      { hp: 94, damage: 9, defence: 17, speed: 2, initiative: 4 },
      { hp: 97, damage: 10, defence: 18, speed: 2, initiative: 4 },
      { hp: 100, damage: 10, defence: 18, speed: 2, initiative: 4 },
      { hp: 104, damage: 10, defence: 18, speed: 2, initiative: 4 },
      { hp: 107, damage: 11, defence: 19, speed: 2, initiative: 4 },
      { hp: 110, damage: 11, defence: 19, speed: 2, initiative: 4 },
      { hp: 114, damage: 11, defence: 19, speed: 2, initiative: 4 },
    ],
    // Tier 3
    [
      { hp: 90, damage: 9, defence: 19, speed: 3, initiative: 6 },
      { hp: 95, damage: 9, defence: 20, speed: 3, initiative: 6 },
      { hp: 99, damage: 10, defence: 20, speed: 3, initiative: 6 },
      { hp: 104, damage: 10, defence: 20, speed: 3, initiative: 6 },
      { hp: 108, damage: 11, defence: 21, speed: 3, initiative: 6 },
      { hp: 113, damage: 11, defence: 21, speed: 3, initiative: 6 },
      { hp: 117, damage: 12, defence: 21, speed: 3, initiative: 6 },
      { hp: 122, damage: 12, defence: 22, speed: 3, initiative: 6 },
      { hp: 126, damage: 13, defence: 22, speed: 3, initiative: 6 },
      { hp: 131, damage: 13, defence: 22, speed: 3, initiative: 6 },
      { hp: 135, damage: 14, defence: 23, speed: 3, initiative: 6 },
      { hp: 140, damage: 14, defence: 23, speed: 3, initiative: 6 },
      { hp: 144, damage: 14, defence: 23, speed: 3, initiative: 6 },
      { hp: 149, damage: 15, defence: 24, speed: 3, initiative: 6 },
      { hp: 153, damage: 15, defence: 24, speed: 3, initiative: 6 },
    ]
  ],
}

export const ABILITIES = {
  [UNIT_CLASS_MELEE]: {
    [POWER_STRIKE]: [
      [12, 14, 16, 17, 19], // Unit tier 1
      [16, 19, 21, 24, 26], // Unit tier 2
      [22, 25, 28, 32, 35], // Unit tier 3
    ],
    [AXE_BLOW]: [
      [12, 14, 16, 17, 19],
      [16, 19, 21, 24, 26],
      [22, 25, 28, 32, 35],
    ],
    [SPEAR_STRIKE]: [
      [12, 14, 16, 17, 19],
      [16, 19, 21, 24, 26],
      [22, 25, 28, 32, 35],
    ],
    [STRONG_PUNCH]: [
      [12, 14, 16, 17, 19],
      [16, 19, 21, 24, 26],
      [22, 25, 28, 32, 35],
    ],
    [DRAGON_BITE]: [
      [18, 20, 23, 26, 28],
      [24, 27, 31, 35, 38],
      [32, 37, 42, 47, 52],
    ],
    [SWORD_CRUSH]: [
      null,
      [26, 30, 33, 37],
      [35, 40, 45, 50],
    ],
    [AXE_CRUSH]: [
      null,
      [26, 30, 33, 37],
      [35, 40, 45, 50],
    ],
    [WOLF_BITE]: [
      null,
      [26, 30, 33, 37],
      [35, 40, 45, 50],
    ],
    [FURY_CLAWS]: [
      null,
      [26, 30, 33, 37],
      [35, 40, 45, 50],
    ],
    [KUNAI_STRIKE]: [
      null,
      [26, 30, 33, 37],
      [35, 40, 45, 50],
    ],
    [FIRE_BLADE]: [
      null,
      [26, 30, 33, 37],
      [35, 40, 45, 50],
    ],
    [FROST_BLADE]: [
      null,
      [26, 30, 33, 37],
      [35, 40, 45, 50],
    ],
    [RUSH]: [
      null,
      [7, 8, 9, 10],
      [10, 11, 13, 14],
    ],
    [STUN_SHOT]: [
      null,
      [7, 8, 9, 10],
      [10, 11, 13, 14],
    ],
    [LETHAL_STRIKE]: [
      null,
      null,
      [46, 56, 66],
    ],
    [FATAL_STRIKE]: [
      null,
      null,
      [46, 56, 66],
    ],
    [BLADE_VORTEX]: [
      null,
      null,
      [46, 56, 66],
    ],
    [CRUSH_OF_DOOM]: [
      null,
      null,
      [46, 56, 66],
    ],
    [DRAGON_FURY]: [
      null,
      null,
      [46, 56, 66],
    ],
    [FROZEN_ABYSS]: [
      null,
      null,
      [39, 47, 55],
    ],
  },
  [UNIT_CLASS_RANGE]: {
    [JAVELIN_THROW]: [
      [16, 18, 20, 23, 25],
      [21, 24, 27, 31, 34],
      [28, 33, 37, 41, 46],
    ],
    [POWER_SHOT]: [
      [16, 18, 20, 23, 25],
      [21, 24, 27, 31, 34],
      [28, 33, 37, 41, 46],
    ],
    [DOUBLE_SHOT]: [
      null,
      [34, 39, 43, 48],
      [46, 52, 59, 65],
    ],
    [ACCURATE_SHOT]: [
      null,
      [34, 39, 43, 48],
      [46, 52, 59, 65],
    ],
    [ARROW_CRUSH]: [
      null,
      [34, 39, 43, 48],
      [46, 52, 59, 65],
    ],
    [STUN_SHOT]: [
      null,
      [10, 11, 12, 13],
      [13, 15, 16, 18],
    ],
    [DEATH_SHOT]: [
      null,
      null,
      [60, 73, 85],
    ],
    [LETHAL_SHOT]: [
      null,
      null,
      [60, 73, 85],
    ],
    [HAMSTRING]: [
      null,
      null,
      [50, 61, 71],
    ],
  },
  [UNIT_CLASS_MAGE]: {
    [FLAME_STRIKE]: [
      [18, 21, 23, 26, 29],
      [24, 28, 32, 35, 39],
      [33, 38, 43, 48, 53],
    ],
    [ENERGY_BOLT]: [
      null,
      [39, 45, 50, 55],
      [53, 60, 68, 75],
    ],
    [HURRICANE]: [
      null,
      [39, 45, 50, 55],
      [53, 60, 68, 75],
    ],
    [DARK_VORTEX]: [
      null,
      null,
      [70, 84, 99],
    ],
  },
  [UNIT_CLASS_TANK]: {
    [HOLY_STRIKE]: [
      [8 , 10, 11, 12, 13],
      [11, 13, 15, 16, 18],
      [15, 18, 20, 22, 25],
    ],
    [MORTAL_BLOW]: [
      [8 , 10, 11, 12, 13],
      [11, 13, 15, 16, 18],
      [15, 18, 20, 22, 25],
    ],
    [HEAVY_STRIKE]: [
      [8 , 10, 11, 12, 13],
      [11, 13, 15, 16, 18],
      [15, 18, 20, 22, 25],
    ],
    [SHIELD_STRIKE]: [
      null,
      [18, 21, 23, 26],
      [25, 28, 32, 35],
    ],
    [RUSH]: [
      null,
      [5, 6, 7, 7],
      [7, 8, 9, 10],
    ],
    [HUMMER_BLOW]: [
      null,
      null,
      [32, 39, 46],
    ],
    [RETRIBUTION]: [
      null,
      null,
      [32, 39, 46],
    ],
    [SHIELD_STUN]: [
      null,
      null,
      [8, 9, 11],
    ],
  },
}