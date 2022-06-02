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
    levels: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ]
  },
  {
    id: 2,
    levels: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ]
  },
  {
    id: 3,
    levels: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
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