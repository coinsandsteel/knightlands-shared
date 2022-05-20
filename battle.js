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