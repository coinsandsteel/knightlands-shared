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
export const CURRENCY_TICKETS = 'tickets';
export const CURRENCY_POINTS = 'points';

export const BOOSTER_THIRD_ACTION = 'thirdAction';
export const BOOSTER_SKIP_A_TURN = 'skipATurn';

export const BOOSTERS = {
  [BOOSTER_THIRD_ACTION]: 100,
  [BOOSTER_SKIP_A_TURN]: 100,
};

export const HEROES_PRICE = {
  [HERO_CLASS_KNIGHT]: 100,
  [HERO_CLASS_PALADIN]: 200,
  [HERO_CLASS_ROGUE]: 300,
};

export const HERO_ABILITIES = {
  [HERO_CLASS_KNIGHT]: 'hero-knight-ability',
  [HERO_CLASS_PALADIN]: 'hero-paladin-ability',
  [HERO_CLASS_ROGUE]: 'hero-rogue-ability',
};

const FLESH_USD_RATE = 0.75;
const SHINES_USD_RATE = 1 / 100;

export const SHOP = [
  {
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

export const EVENT_REWARDS = [
  {"items":[{"item":3110,"quantity":50},{"item":2982,"quantity":10},{"item":812,"quantity":5},{"item":817,"quantity":20},{"item":2383,"quantity":25000000}]},
  {"items":[{"item":3110,"quantity":40},{"item":2982,"quantity":8},{"item":812,"quantity":4},{"item":817,"quantity":16},{"item":2383,"quantity":20000000}]},
  {"items":[{"item":3110,"quantity":30},{"item":2982,"quantity":6},{"item":812,"quantity":3},{"item":817,"quantity":12},{"item":2383,"quantity":15000000}]},
  {"items":[{"item":3110,"quantity":20},{"item":2982,"quantity":4},{"item":812,"quantity":2},{"item":817,"quantity":8},{"item":2383,"quantity":10000000}]},
  {"items":[{"item":3110,"quantity":10},{"item":2982,"quantity":2},{"item":812,"quantity":1},{"item":817,"quantity":4},{"item":2383,"quantity":5000000}]}
];
