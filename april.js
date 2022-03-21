export const UNIT_CLASS_HERO = 'hero';
export const UNIT_CLASS_TEETH = 'teeth';
export const UNIT_CLASS_CLOWN = 'clown';
export const UNIT_CLASS_JACK = 'jack';
export const UNIT_CLASS_HARLEQUIN = 'harlequin';
export const UNIT_CLASS_BOSS = 'boss';

export const HERO_CLASS_KNIGHT = 'knight';
export const HERO_CLASS_PALADIN = 'paladin';
export const HERO_CLASS_ROGUE = 'rogue';

export const CARD_CLASS_PAWN = 'pawn';
export const CARD_CLASS_KNIGHT = 'knight';
export const CARD_CLASS_KING = 'king';
export const CARD_CLASS_BISHOP = 'bishop';
export const CARD_CLASS_ROOK = 'rook';
export const CARD_CLASS_QUEEN = 'queen';

export const CURRENCY_SESSION_GOLD = 'sessionGold';
export const CURRENCY_GOLD = 'gold';

export const BOOSTER_CARD = 'booster_card';
export const BOOSTER_HP = 'booster_hp';

export const SESSION_RESULT_SUCCESS = 'session_success';
export const SESSION_RESULT_FAIL = 'session_fail';

export const REWARD_TYPE_HOUR = 'reward_hour';
export const REWARD_TYPE_DAILY = 'reward_day';
export const REWARD_TYPE_RANKING = 'reward_ranking';
export const REWARD_TYPE_HERO = 'reward_hero';

export const HEROES = [
  /* 0 */
  {
    name: "Knight",
    heroClass: HERO_CLASS_KNIGHT,
    price: 100,
    ability: 'hero-knight-ability'
  },
  /* 1 */
  {
    name: "Paladin",
    heroClass: HERO_CLASS_PALADIN,
    price: 200,
    ability: 'hero-paladin-ability'
  },
  /* 2 */
  {
    name: "Rogue",
    heroClass: HERO_CLASS_ROGUE,
    price: 300,
    ability: 'hero-rogue-ability'
  }
];

const FLESH_USD_RATE = 0.75;
const SHINES_USD_RATE = 1 / 100;

export const SHOP = [{
    "quantity": 100,
    "price": 2.49,
    'hardPrice': 2.49 / SHINES_USD_RATE,
    'fleshPrice': 2.49 / FLESH_USD_RATE
  },
  {
    "quantity": 250,
    "price": 5.89,
    'hardPrice': 5.89 / SHINES_USD_RATE,
    'fleshPrice': 5.89 / FLESH_USD_RATE
  },
  {
    "quantity": 500,
    "price": 10.59,
    'hardPrice': 10.59 / SHINES_USD_RATE,
    'fleshPrice': 10.59 / FLESH_USD_RATE
  },
  {
    "quantity": 1000,
    "price": 19.99,
    'hardPrice': 19.99 / SHINES_USD_RATE,
    'fleshPrice': 19.99 / FLESH_USD_RATE
  },
  {
    "quantity": 2500,
    "price": 49.99,
    'hardPrice': 49.99 / SHINES_USD_RATE,
    'fleshPrice': 49.99 / FLESH_USD_RATE
  }
];