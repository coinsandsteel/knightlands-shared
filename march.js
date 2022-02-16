export const UNIT_CLASS_PET = 'pet';

// Artifacts
export const UNIT_CLASS_BALL_LIGHTNING = 'ball_lightning';
export const UNIT_CLASS_DRAGON_BREATH = 'dragon_breath';
export const UNIT_CLASS_BOMB = 'bomb';
export const UNIT_CLASS_BOW = 'bow';

// Containers
export const UNIT_CLASS_CHEST = 'chest';
export const UNIT_CLASS_BARREL = 'barrel';

// Enemies
export const UNIT_CLASS_ENEMY = 'enemy';
export const UNIT_CLASS_ENEMY_BOSS = 'enemy_boss';
export const UNIT_CLASS_TRAP = 'trap';

// Loot
export const UNIT_CLASS_HP = 'hp';
export const UNIT_CLASS_EXTRA_HP = 'extra_hp';
export const UNIT_CLASS_ARMOR = 'armor';
export const UNIT_CLASS_GOLD = 'gold';

export const DIRECTION_RANDOM5 = 'random5';
export const DIRECTION_ALL = 'all';
export const DIRECTION_CROSS = 'cross';

export const CURRENCY_GOLD = 'gold';
export const CURRENCY_TICKETS = 'tickets';

export const BOOSTER_HP = 'maxHealth';
export const BOOSTER_LIFE = 'extraLife';
export const BOOSTER_KEY = 'key';

export const BOMB_TIMER = 10;

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

export const UNIT_PROBABILITIES = {
  [UNIT_CLASS_ENEMY]: 0.37,
  [UNIT_CLASS_TRAP]: 0.074,
  [UNIT_CLASS_HP]: 0.37 / 3,
  [UNIT_CLASS_ARMOR]: 0.37 / 3,
  [UNIT_CLASS_BOW]: 0.37 / 3,
  [UNIT_CLASS_BARREL]: 0.111,
  [UNIT_CLASS_GOLD]: 0.074
}

export const UNIT_POOL = [
  {
    stepsToBoss: 10,
    unitStat: {
      // Enemies
      [UNIT_CLASS_ENEMY]: { min: 1, max: 4 },
      // Traps
      [UNIT_CLASS_TRAP]: { min: 1, max: 1 },
      // Boosters - hp, armor, bow
      [UNIT_CLASS_HP]: { min: 1, max: 3 },
      [UNIT_CLASS_ARMOR]: { min: 1, max: 3 },
      [UNIT_CLASS_BOW]: { min: 1, max: 3 },
      // Gold
      [UNIT_CLASS_GOLD]: { min: 1, max: 3 },
      // Barrel
      [UNIT_CLASS_BARREL]: { min: 2, max: 2 },
      // Boss
      [UNIT_CLASS_ENEMY_BOSS]: { min: 10, max: 10 },
    }
  },
  {
    stepsToBoss: 11,
    unitStat: {
      // Enemies
      [UNIT_CLASS_ENEMY]: { min: 1, max: 5 },
      // Traps
      [UNIT_CLASS_TRAP]: { min: 1, max: 2 },
      // Boosters - hp, armor, bow
      [UNIT_CLASS_HP]: { min: 1, max: 4 },
      [UNIT_CLASS_ARMOR]: { min: 1, max: 4 },
      [UNIT_CLASS_BOW]: { min: 1, max: 4 },
      // Gold
      [UNIT_CLASS_GOLD]: { min: 1, max: 4 },
      // Barrel
      [UNIT_CLASS_BARREL]: { min: 2, max: 2 },
      // Boss
      [UNIT_CLASS_ENEMY_BOSS]: { min: 12, max: 12 },
    }
  },
  {
    stepsToBoss: 12,
    unitStat: {
      // Enemies
      [UNIT_CLASS_ENEMY]: { min: 1, max: 6 },
      // Traps
      [UNIT_CLASS_TRAP]: { min: 1, max: 2 },
      // Boosters - hp, armor, bow
      [UNIT_CLASS_HP]: { min: 1, max: 4 },
      [UNIT_CLASS_ARMOR]: { min: 1, max: 4 },
      [UNIT_CLASS_BOW]: { min: 1, max: 4 },
      // Gold
      [UNIT_CLASS_GOLD]: { min: 1, max: 5 },
      // Barrel
      [UNIT_CLASS_BARREL]: { min: 2, max: 3 },
      // Boss
      [UNIT_CLASS_ENEMY_BOSS]: { min: 14, max: 14 },
    }
  },
  {
    stepsToBoss: 13,
    unitStat: {
      // Enemies
      [UNIT_CLASS_ENEMY]: { min: 1, max: 7 },
      // Traps
      [UNIT_CLASS_TRAP]: { min: 1, max: 3 },
      // Boosters - hp, armor, bow
      [UNIT_CLASS_HP]: { min: 1, max: 5 },
      [UNIT_CLASS_ARMOR]: { min: 1, max: 5 },
      [UNIT_CLASS_BOW]: { min: 1, max: 5 },
      // Gold
      [UNIT_CLASS_GOLD]: { min: 1, max: 6 },
      // Barrel
      [UNIT_CLASS_BARREL]: { min: 2, max: 3 },
      // Boss
      [UNIT_CLASS_ENEMY_BOSS]: { min: 18, max: 18 },
    }
  },
  {
    stepsToBoss: 10,
    unitStat: {
      // Enemies
      [UNIT_CLASS_ENEMY]: { min: 1, max: 8 },
      // Traps
      [UNIT_CLASS_TRAP]: { min: 1, max: 3 },
      // Boosters - hp, armor, bow
      [UNIT_CLASS_HP]: { min: 1, max: 5 },
      [UNIT_CLASS_ARMOR]: { min: 1, max: 5 },
      [UNIT_CLASS_BOW]: { min: 1, max: 5 },
      // Gold
      [UNIT_CLASS_GOLD]: { min: 1, max: 7 },
      // Barrel
      [UNIT_CLASS_BARREL]: { min: 2, max: 3 },
      // Boss
      [UNIT_CLASS_ENEMY_BOSS]: { min: 22, max: 22 },
    }
  },
  {
    stepsToBoss: 14,
    unitStat: {
      // Enemies
      [UNIT_CLASS_ENEMY]: { min: 1, max: 9 },
      // Traps
      [UNIT_CLASS_TRAP]: { min: 1, max: 5 },
      // Boosters - hp, armor, bow
      [UNIT_CLASS_HP]: { min: 1, max: 6 },
      [UNIT_CLASS_ARMOR]: { min: 1, max: 6 },
      [UNIT_CLASS_BOW]: { min: 1, max: 6 },
      // Gold
      [UNIT_CLASS_GOLD]: { min: 1, max: 8 },
      // Barrel
      [UNIT_CLASS_BARREL]: { min: 2, max: 4 },
      // Boss
      [UNIT_CLASS_ENEMY_BOSS]: { min: 26, max: 26 },
    }
  },
  {
    stepsToBoss: 15,
    unitStat: {
      // Enemies
      [UNIT_CLASS_ENEMY]: { min: 1, max: 10 },
      // Traps
      [UNIT_CLASS_TRAP]: { min: 1, max: 5 },
      // Boosters - hp, armor, bow
      [UNIT_CLASS_HP]: { min: 1, max: 6 },
      [UNIT_CLASS_ARMOR]: { min: 1, max: 6 },
      [UNIT_CLASS_BOW]: { min: 1, max: 6 },
      // Gold
      [UNIT_CLASS_GOLD]: { min: 1, max: 9 },
      // Barrel
      [UNIT_CLASS_BARREL]: { min: 2, max: 4 },
      // Boss
      [UNIT_CLASS_ENEMY_BOSS]: { min: 30, max: 30 },
    }
  },
]

export const UNIT_LOOT = {
  [UNIT_CLASS_BARREL + '+']: [
    UNIT_CLASS_ARMOR,
    UNIT_CLASS_HP,
    UNIT_CLASS_BOW,
    UNIT_CLASS_ENEMY,
  ],
  [UNIT_CLASS_CHEST + '-']: [
    UNIT_CLASS_ENEMY,
    UNIT_CLASS_TRAP,
    UNIT_CLASS_ARMOR,
    UNIT_CLASS_HP,
    UNIT_CLASS_BOW,
  ],
  [UNIT_CLASS_CHEST + '+']: [
    UNIT_CLASS_EXTRA_HP,
    UNIT_CLASS_BALL_LIGHTNING,
    UNIT_CLASS_DRAGON_BREATH,
    UNIT_CLASS_BOMB,
  ],
};