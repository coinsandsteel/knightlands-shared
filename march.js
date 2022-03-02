export const UNIT_CLASS_PET = 'pet';

// Artifacts
export const UNIT_CLASS_BALL_LIGHTNING = 'ballLightning';
export const UNIT_CLASS_DRAGON_BREATH = 'dragonBreath';
export const UNIT_CLASS_BOMB = 'bomb';
export const UNIT_CLASS_BOW = 'bow';

// Containers
export const UNIT_CLASS_CHEST = 'chest';
export const UNIT_CLASS_BARREL = 'barrel';

// Enemies
export const UNIT_CLASS_ENEMY = 'enemy';
export const UNIT_CLASS_ENEMY_BOSS = 'enemyBoss';
export const UNIT_CLASS_TRAP = 'trap';

// Loot
export const UNIT_CLASS_HP = 'hp';
export const UNIT_CLASS_EXTRA_HP = 'extraHp';
export const UNIT_CLASS_ARMOR = 'armor';
export const UNIT_CLASS_GOLD = 'gold';

export const DIRECTION_RANDOM5 = 'random5';
export const DIRECTION_ALL = 'all';
export const DIRECTION_CROSS = 'cross';

export const CURRENCY_SESSION_GOLD = 'sessionGold';
export const CURRENCY_GOLD = 'gold';
export const CURRENCY_TICKETS = 'tickets';

export const BOOSTER_HP = 'maxHealth';
export const BOOSTER_LIFE = 'extraLife';
export const BOOSTER_KEY = 'key';

export const TICKET_ITEM_ID = 3461;

export const ADJACENT_CELLS = [
  [1, 3],
  [0, 2, 4],
  [1, 5],
  [0, 4, 6],
  [1, 3, 5, 7],
  [2, 4, 8],
  [3, 7],
  [4, 6, 8],
  [5, 7]
]

export const PETS_PRICE = [
  [0, 300, 450],
  [300, 600, 900],
  [450, 900, 1350],
  [600, 1200, 1800],
  [750, 1500, 2250],
];

export const BOOSTERS = {
  [BOOSTER_HP]: 100,
  [BOOSTER_LIFE]: 140,
  [BOOSTER_KEY]: 180,
};

const FLESH_USD_RATE = 0.75;
const SHINES_USD_RATE = 1 / 100;

export const SHOP = [
  {
    "quantity": 100,
    "price": 2.49,
    'hardPrice': 2.49.toFixed(1) / SHINES_USD_RATE,
    'fleshPrice': (2.49 / FLESH_USD_RATE).toFixed(2)
  },
  {
    "quantity": 250,
    "price": 5.89,
    'hardPrice': 5.89.toFixed(1) / SHINES_USD_RATE,
    'fleshPrice': (5.89 / FLESH_USD_RATE).toFixed(2)
  },
  {
    "quantity": 500,
    "price": 10.59,
    'hardPrice': 10.59.toFixed(1) / SHINES_USD_RATE,
    'fleshPrice': (10.59 / FLESH_USD_RATE).toFixed(2)
  },
  {
    "quantity": 1000,
    "price": 19.99,
    'hardPrice': 19.99.toFixed(1) / SHINES_USD_RATE,
    'fleshPrice': (19.99 / FLESH_USD_RATE).toFixed(2)
  },
  {
    "quantity": 2500,
    "price": 49.99,
    'hardPrice': 49.99.toFixed(1) / SHINES_USD_RATE,
    'fleshPrice': (49.99 / FLESH_USD_RATE).toFixed(2)
  }
];

export const PET_ABILITIES = [
  [
    {},
    { name: "Health booster value +1???" },
    { name: "Armor booster value +1???" }
  ],
  [
    { name: "Bow damage +1???" },
    { name: "When 2 bows are stacked, +2 damage???" },
    { name: "Bomb explosion does not damage???" }
  ],
  [
    { name: "Max HP +1???" },
    { name: "50% chance to block 1 damage???" },
    { name: "Extra life at the start of the session???" }
  ],
  [
    { name: "Gold +1 from gold card???" },
    { name: "+20% extra gold per session???" },
    { name: "Chest opens without mini-game???" }
  ],
  [
    { name: "All barrels have only good content???" },
    {
      name:
        "HP can exceed the maximum, but if the maximum is exceeded, then the booster does not have an effect???"
    },
    { name: "Turns armor into ball lightning???" }
  ]
];
