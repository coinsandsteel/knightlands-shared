// Ability types
export const ABILITY_TYPE_ATTACK = "attack";
export const ABILITY_TYPE_BUFF = "buff";
export const ABILITY_TYPE_SELF_BUFF = "self_buff";
export const ABILITY_TYPE_DE_BUFF = "de_buff";
export const ABILITY_TYPE_JUMP = "jump";
export const ABILITY_TYPE_HEALING = "healing";

// Reward types
export const REWARD_TYPE_DAILY = "reward_day";
export const REWARD_TYPE_RANKING = "reward_ranking";
export const REWARD_TYPE_SQUAD = "reward_squad";

// Things to buy
export const COMMODITY_ENERGY = "energy";
export const COMMODITY_COINS = "coins";
export const COMMODITY_CRYSTALS = "crystals";
export const COMMODITY_CHEST = "chest";
export const COMMODITY_STARTER_PACK = "starter_pack";

// Unit tribes
export const UNIT_TRIBE_KOBOLD = "kobold";
export const UNIT_TRIBE_DWARF = "dwarf";
export const UNIT_TRIBE_EGYPTIAN = "egyptian";
export const UNIT_TRIBE_GOBLIN = "goblin";
export const UNIT_TRIBE_INSECT = "insect";
export const UNIT_TRIBE_ORC = "orc";
export const UNIT_TRIBE_CLOCKWORK = "clockwork";
export const UNIT_TRIBE_SKELETON = "skeleton";
export const UNIT_TRIBE_ICE = "ice";
export const UNIT_TRIBE_ELF = "elf";
export const UNIT_TRIBE_ELDRITCH = "eldritch";
export const UNIT_TRIBE_ASSEMBLING = "assembling";
export const UNIT_TRIBE_FALLEN_KING = "fallenKing";
export const UNIT_TRIBE_LEGENDARY = "legendary";
export const UNIT_TRIBE_TITAN = "titan";

// Unit classes
export const UNIT_CLASS_RANGE = "range";
export const UNIT_CLASS_MELEE = "melee";
export const UNIT_CLASS_MAGE = "mage";
export const UNIT_CLASS_TANK = "tank";
export const UNIT_CLASS_SUPPORT = "support";

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

// Terrain
export const TERRAIN_ICE = "ice";
export const TERRAIN_SWAMP = "swamp";
export const TERRAIN_LAVA = "lava";
export const TERRAIN_THORNS = "thorns";
export const TERRAIN_WOODS = "woods";
export const TERRAIN_HILL = "hill";

// Buff list
export const BUFFS = {
  [TERRAIN_ICE]: {
    img: null,
    positive: false,
    cases: [
      // Schema according to unit's bonuses
      "Stops the units. Incoming damage +25%",
      "Stops the units. Incoming damage +18% (squad bonus)",
      "Stops the units. Incoming damage +12% (squad bonus)",
      "Stops the units. Incoming damage +6% (squad bonus)",
      "Stops the units. Incoming damage +0% (squad bonus)",
    ],
  },
  [TERRAIN_HILL]: {
    img: null,
    positive: true,
    cases: [
      // Schema according to unit's bonuses
      "Damage +25%",
      "Damage +31% (squad bonus)",
      "Damage +37% (squad bonus)",
      "Damage +43% (squad bonus)",
      "Damage +50% (squad bonus)",
    ],
  },
  [TERRAIN_WOODS]: {
    img: null,
    positive: true,
    cases: [
      // Schema according to unit's bonuses
      "Defense +25%",
      "Defense +31% (squad bonus)",
      "Defense +37% (squad bonus)",
      "Defense +43% (squad bonus)",
      "Defense +50% (squad bonus)",
    ],
  },
  [TERRAIN_SWAMP]: {
    img: null,
    positive: false,
    cases: [
      // Schema according to unit's bonuses
      "Stops the units. Speed -50% in the next turn",
      "Stops the units. Speed -37% in the next turn (squad bonus)",
      "Stops the units. Speed -25% in the next turn (squad bonus)",
      "Stops the units. Speed -12% in the next turn (squad bonus)",
      "Stops the units. Speed -0% in the next turn (squad bonus)",
    ],
  },
  [ABILITY_STUN]: {
    img: null,
    positive: false,
    cases: [
      // Levels of ability
      "Stun for 1 turn with a 50% chance",
      "Stun for 1 turn with a 60% chance",
      "Stun for 1 turn with a 70% chance",
      "Stun for 1 turn with a 80% chance",
      "Stun for 1 turn with a 90% chance",
      "Stun for 1 turn with a 100% chance",
      "Stun for 1 turn with a 100% chance and for 1 more turn with a 15% chance",
      "Stun for 1 turn with a 100% chance and for 1 more turn with a 25% chance",
    ],
  },
  [ABILITY_RAGE]: {
    img: null,
    positive: true,
    cases: [
      // Levels of ability
      "Damage +15%",
      "Damage +20%",
      "Damage +25%",
      "Damage +30%",
      "Damage +35%",
      "Damage +40%",
      "Damage +45%",
      "Damage +50%",
    ],
  },
  [ABILITY_ZEALOT]: {
    img: null,
    positive: true,
    cases: [
      // Levels of ability
      "Damage +15%",
      "Damage +20%",
      "Damage +25%",
      "Damage +30%",
      "Damage +35%",
      "Damage +40%",
      "Damage +45%",
      "Damage +50%",
    ],
  },
  [ABILITY_STUN_SHOT]: {
    img: null,
    positive: false,
    cases: [
      // Levels of ability
      "Stun for 1 turn with a 50% chance",
      "Stun for 1 turn with a 60% chance",
      "Stun for 1 turn with a 70% chance",
      "Stun for 1 turn with a 80% chance",
      "Stun for 1 turn with a 90% chance",
      "Stun for 1 turn with a 100% chance",
      "Stun for 1 turn with a 100% chance and for 1 more turn with a 15% chance",
      "Stun for 1 turn with a 100% chance and for 1 more turn with a 25% chance",
    ],
  },
  [ABILITY_HEAVY_ARROW]: {
    img: null,
    positive: true,
    cases: [
      // Levels of ability
      "Damage +15%",
      "Damage +20%",
      "Damage +25%",
      "Damage +30%",
      "Damage +35%",
      "Damage +40%",
      "Damage +45%",
      "Damage +50%",
    ],
  },
  [ABILITY_AGRESSION]: {
    img: null,
    positive: false,
    cases: [
      // Levels of ability
      "Forces to counter-attack for 1 turn with a 50% chance",
      "Forces to counter-attack for 1 turn with a 55% chance",
      "Forces to counter-attack for 1 turn with a 60% chance",
      "Forces to counter-attack for 1 turn with a 65% chance",
      "Forces to counter-attack for 1 turn with a 70% chance",
      "Forces to counter-attack for 1 turn with a 75% chance",
      "Forces to counter-attack for 1 turn with a 80% chance",
      "Forces to counter-attack for 1 turn with a 85% chance",
      "Forces to counter-attack for 1 turn with a 90% chance",
      "Forces to counter-attack for 1 turn with a 95% chance",
      "Forces to counter-attack for 1 turn with a 100% chance and for 1 more turn with a 10% chance",
      "Forces to counter-attack for 1 turn with a 100% chance and for 1 more turn with a 20% chance",
      "Forces to counter-attack for 1 turn with a 100% chance and for 1 more turn with a 30% chance",
      "Forces to counter-attack for 1 turn with a 100% chance and for 1 more turn with a 40% chance",
      "Forces to counter-attack for 1 turn with a 100% chance and for 1 more turn with a 50% chance",
    ],
  },
  [ABILITY_SHIELD_STUN]: {
    img: null,
    positive: false,
    cases: [
      // Levels of ability
      "Stun for 1 turn with a 70% chance",
      "Stun for 1 turn with a 100% chance",
      "Stun for 1 turn with a 100% chance and for 1 more turn with a 30% chance",
    ],
  },
  [ABILITY_SHIELD_WALL]: {
    img: null,
    positive: true,
    cases: [
      // Levels of ability
      "Defense +75% for 1 turn. The unit cannot move.",
      "Defense +100% for 1 turn. The unit cannot move.",
      "Defense +125% for 1 turn. The unit cannot move.",
    ],
  },
  [ABILITY_SHIELD]: {
    img: null,
    positive: true,
    cases: [
      // Levels of ability
      "Defence +15%",
      "Defence +18%",
      "Defence +20%",
      "Defence +21%",
      "Defence +24%",
      "Defence +27%",
      "Defence +30%",
      "Defence +32%",
      "Defence +35%",
      "Defence +38%",
      "Defence +40%",
      "Defence +42%",
      "Defence +45%",
      "Defence +48%",
      "Defence +50%",
    ],
  },
  [ABILITY_CURSE]: {
    img: null,
    positive: false,
    cases: [
      // Levels of ability
      "Defence -15%",
      "Defence -18%",
      "Defence -20%",
      "Defence -21%",
      "Defence -24%",
      "Defence -27%",
      "Defence -30%",
      "Defence -32%",
      "Defence -35%",
      "Defence -38%",
      "Defence -40%",
      "Defence -42%",
      "Defence -45%",
      "Defence -48%",
      "Defence -50%",
    ],
  },
  [ABILITY_MIGHT]: {
    img: null,
    positive: true,
    cases: [
      // Levels of ability
      "Damage +15%",
      "Damage +20%",
      "Damage +25%",
      "Damage +30%",
      "Damage +35%",
      "Damage +40%",
      "Damage +45%",
      "Damage +50%",
    ],
  },
  [ABILITY_WEAKNESS]: {
    img: null,
    positive: false,
    cases: [
      // Levels of ability
      "Damage -15%",
      "Damage -20%",
      "Damage -25%",
      "Damage -30%",
      "Damage -35%",
      "Damage -40%",
      "Damage -45%",
      "Damage -50%",
    ],
  },
  [ABILITY_WIND_WALK]: {
    img: null,
    positive: true,
    cases: [
      // Levels of ability
      "Speed +20%",
      "Speed +25%",
      "Speed +30%",
    ],
  },
  [ABILITY_LAZINESS]: {
    img: null,
    positive: false,
    cases: [
      // Levels of ability
      "Initiative -20%",
      "Initiative -25%",
      "Initiative -30%",
    ],
  },
};

// Game modes
export const GAME_MODE_DUEL = "duel";
export const GAME_MODE_ADVENTURE = "adventure";

// Game difficulty levels
export const GAME_DIFFICULTY_LOW = "low";
export const GAME_DIFFICULTY_MEDIUM = "medium";
export const GAME_DIFFICULTY_HIGH = "high";

// Combat results
export const COMBAT_RESULT_WIN = "win";
export const COMBAT_RESULT_LOOSE = "loose";

export const TERRAIN_GRASS = "grass";
export const TERRAIN_GRASS_HILL = "grass_hill";
export const TERRAIN_GRASS_SWAMP = "grass_swamp";
export const TERRAIN_GRASS_SWAMP_A = "grass_swamp_a";
export const TERRAIN_GRASS_SWAMP_B = "grass_swamp_b";
export const TERRAIN_GRASS_SWAMP_C = "grass_swamp_c";
export const TERRAIN_GRASS_SWAMP_D = "grass_swamp_d";
export const TERRAIN_GRASS_SWAMP_X = "grass_swamp_x";
export const TERRAIN_GRASS_SWAMP_Y = "grass_swamp_y";
export const TERRAIN_GRASS_SWAMP_Z = "grass_swamp_z";
export const TERRAIN_GRASS_SWAMP1 = "grass_swamp1";
export const TERRAIN_GRASS_SWAMP2 = "grass_swamp2";
export const TERRAIN_GRASS_WOODS = "grass_woods";
export const TERRAIN_SAND = "sand";
export const TERRAIN_SAND_HILL = "sand_hill";
export const TERRAIN_SAND_LAVA = "sand_lava";
export const TERRAIN_SAND_LAVA_A = "sand_lava_a";
export const TERRAIN_SAND_LAVA_B = "sand_lava_b";
export const TERRAIN_SAND_LAVA_C = "sand_lava_c";
export const TERRAIN_SAND_LAVA_D = "sand_lava_d";
export const TERRAIN_SAND_LAVA1 = "sand_lava1";
export const TERRAIN_SAND_LAVA2 = "sand_lava2";
export const TERRAIN_SAND_QUICKSAND = "sand_quicksand";
export const TERRAIN_SAND_THORNS = "sand_thorns";
export const TERRAIN_SNOW = "snow";
export const TERRAIN_SNOW_HILL = "snow_hill";
export const TERRAIN_SNOW_ICE = "snow_ice";
export const TERRAIN_SNOW_ICE_1 = "snow_ice_1";
export const TERRAIN_SNOW_ICE_1_1 = "snow_ice_1-1";
export const TERRAIN_SNOW_ICE_A = "snow_ice_a";
export const TERRAIN_SNOW_ICE_B = "snow_ice_b";
export const TERRAIN_SNOW_ICE_C = "snow_ice_c";
export const TERRAIN_SNOW_ICE_D = "snow_ice_d";
export const TERRAIN_SNOW_WOODS = "snow_woods";

// Shop
const FLESH_USD_RATE = 0.75;
const SHINES_USD_RATE = 1 / 100;

export const SHOP_STARTER_PACK = "shop-starter-pack";
export const SHOP_DAILY_REWARD = "shop-daily-reward";
export const SHOP_ENERGY_CHEST = "shop-energy-chest";
export const SHOP_COIN_CHEST = "shop-coin-chest";
export const SHOP_DONATION_CHEST = "shop-donation-chest";
export const SHOP_SQUAD1_CHEST = "shop-squad1-chest";
export const SHOP_SQUAD2_CHEST = "shop-squad2-chest";
export const SHOP_SQUAD3_CHEST = "shop-squad3-chest";

export const SHOP = [
  {
    name: SHOP_STARTER_PACK,
    claimable: true,
    quantity: 1,
    dailyMax: 1,
    commodity: COMMODITY_STARTER_PACK,
    descriptions: ["10 units: tier I - 98.5%, tier II - 1%, tier III - 0.5%"],
  },
  {
    name: SHOP_DAILY_REWARD,
    claimable: true,
    quantity: 1,
    dailyMax: 2,
    commodity: REWARD_TYPE_DAILY,
    descriptions: ["3 units: tier I - 97%, tier II - 2%, tier III - 1%"],
  },
  {
    name: SHOP_ENERGY_CHEST,
    claimable: false,
    commodity: COMMODITY_ENERGY,
    quantity: 1,
    dailyMax: 6,
    // hardPrice: 249,
    fleshPrice: 3 / FLESH_USD_RATE,
    descriptions: ["+18 energy"],
  },
  {
    name: SHOP_COIN_CHEST,
    claimable: false,
    commodity: COMMODITY_CHEST,
    quantity: 1,
    dailyMax: 2,
    ancientCoinsPrice: 1200,
    descriptions: ["3 units: tier I - 97%, tier II - 2%, tier III - 1%"],
  },
  {
    name: SHOP_DONATION_CHEST,
    claimable: false,
    commodity: COMMODITY_CHEST,
    quantity: 1,
    fleshPrice: 5 / FLESH_USD_RATE,
    descriptions: ["3 units: tier I - 95%, tier II - 4%, tier III - 1%"],
  },
  {
    name: SHOP_SQUAD1_CHEST,
    claimable: false,
    commodity: COMMODITY_CHEST,
    quantity: 1,
    fleshPrice: 15 / FLESH_USD_RATE,
    descriptions: ["1 units: tier I - 97%, tier II - 2%, tier III - 1%"],
  },
  {
    name: SHOP_SQUAD2_CHEST,
    claimable: false,
    commodity: COMMODITY_CHEST,
    quantity: 1,
    fleshPrice: 20 / FLESH_USD_RATE,
    descriptions: ["3 units: tier I - 97%, tier II - 2%, tier III - 1%"],
  },
  {
    name: SHOP_SQUAD3_CHEST,
    claimable: false,
    commodity: COMMODITY_CHEST,
    quantity: 1,
    fleshPrice: 30 / FLESH_USD_RATE,
    descriptions: ["5 units: tier I - 97%, tier II - 2%, tier III - 1%"],
  },
];

export const BATTLE_MAX_ENERGY = 36;

export const ADVENTURE_ENEGRY_PRICE = {
  [GAME_DIFFICULTY_MEDIUM]: 8,
  [GAME_DIFFICULTY_HIGH]: 12,
};

export const DUEL_REWARDS = {
  win: { crystals: 25, rank: 1 },
  loose: { crystals: -5, rank: -2 }
};

export const ADVENTURES = [
  {
    name: "Dark Forest",
    levels: [
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 70, coins: 100 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 1,
            abilities: [1, 0, 0],
            templates: [4, 24, 27, 78, 81],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 116, coins: 175 },
          enemies: {
            level: 11,
            abilities: [4, 0, 0],
            templates: [4, 24, 27, 78, 81],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 88, coins: 200 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 2,
            abilities: [1, 0, 0],
            templates: [39, 57, 60, 155, 160],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 144, coins: 350 },
          enemies: {
            level: 11,
            abilities: [4, 0, 0],
            templates: [39, 57, 60, 155, 160],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 109, coins: 300 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 3,
            abilities: [1, 0, 0],
            templates: [84, 87, 182, 125, 128],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 180, coins: 525 },
          enemies: {
            level: 12,
            abilities: [4, 0, 0],
            templates: [84, 87, 182, 125, 128],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 137, coins: 400 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 4,
            abilities: [2, 0, 0],
            templates: [194, 137, 134, 203, 81],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 226, coins: 700 },
          enemies: {
            level: 12,
            abilities: [4, 0, 0],
            templates: [194, 137, 134, 203, 81],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 171, coins: 500 },
          bossReward: { coins: 10500, crystals: 25 },
          enemies: {
            level: 5,
            abilities: [2, 0, 0],
            templates: [4, 11, 14, 17, 20],
            boss: 14,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 282, coins: 875 },
          enemies: {
            level: 13,
            abilities: [5, 0, 0],
            templates: [4, 11, 14, 17, 20],
          },
        },
      },
    ],
  },
  {
    name: "Swampy Trail",
    levels: [
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 250, coins: 600 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 6,
            abilities: [2, 0, 0],
            templates: [209, 137, 134, 155, 221],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 413, coins: 1050 },
          enemies: {
            level: 13,
            abilities: [5, 0, 0],
            templates: [209, 137, 134, 155, 221],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 288, coins: 700 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 7,
            abilities: [3, 0, 0],
            templates: [105, 182, 185, 125, 128],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 474, coins: 1225 },
          enemies: {
            level: 14,
            abilities: [5, 0, 0],
            templates: [105, 182, 185, 125, 128],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 331, coins: 800 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 8,
            abilities: [3, 0, 0],
            templates: [163, 60, 114, 173, 66],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 546, coins: 1400 },
          enemies: {
            level: 14,
            abilities: [5, 0, 0],
            templates: [163, 60, 114, 173, 66],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 380, coins: 900 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 9,
            abilities: [3, 0, 0],
            templates: [224, 24, 27, 233, 81],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 627, coins: 1575 },
          enemies: {
            level: 15,
            abilities: [5, 0, 0],
            templates: [224, 24, 27, 233, 81],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 437, coins: 1000 },
          bossReward: { coins: 15750, crystals: 25 },
          enemies: {
            level: 10,
            abilities: [4, 0, 0],
            templates: [99, 102, 105, 108, 111],
            boss: 99,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 721, coins: 1750 },
          enemies: {
            level: 15,
            abilities: [5, 0, 0],
            templates: [99, 102, 105, 108, 111],
          },
        },
      },
    ],
  },
  {
    name: "Death Path",
    levels: [
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 515, coins: 1100 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 16,
            abilities: [6, 1, 0],
            templates: [9, 118, 25, 37, 21],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 850, coins: 1925 },
          enemies: {
            level: 26,
            abilities: [9, 3, 0],
            templates: [9, 118, 25, 37, 21],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 567, coins: 1200 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 17,
            abilities: [6, 1, 0],
            templates: [210, 123, 216, 64, 67],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 935, coins: 2100 },
          enemies: {
            level: 26,
            abilities: [9, 3, 0],
            templates: [210, 123, 216, 64, 67],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 623, coins: 1300 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 18,
            abilities: [6, 1, 0],
            templates: [106, 150, 186, 109, 161],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 1028, coins: 2275 },
          enemies: {
            level: 27,
            abilities: [9, 3, 0],
            templates: [106, 150, 186, 109, 161],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 685, coins: 1400 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 19,
            abilities: [7, 1, 0],
            templates: [195, 31, 34, 174, 177],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 1131, coins: 2450 },
          enemies: {
            level: 27,
            abilities: [9, 3, 0],
            templates: [195, 31, 34, 174, 177],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 754, coins: 1500 },
          bossReward: { coins: 21000, crystals: 40 },
          enemies: {
            level: 20,
            abilities: [7, 2, 0],
            templates: [115, 118, 123, 126, 129],
            boss: 123,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 1244, coins: 2625 },
          enemies: {
            level: 28,
            abilities: [10, 4, 0],
            templates: [115, 118, 123, 126, 129],
          },
        },
      },
    ],
  },
  {
    name: "Hot Sands",
    levels: [
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 835, coins: 1600 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 21,
            abilities: [7, 2, 0],
            templates: [43, 228, 138, 49, 237],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 1461, coins: 2800 },
          enemies: {
            level: 30,
            abilities: [10, 4, 0],
            templates: [43, 228, 138, 49, 237],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 877, coins: 1700 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 22,
            abilities: [8, 2, 0],
            templates: [85, 58, 147, 94, 67],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 1534, coins: 2975 },
          enemies: {
            level: 33,
            abilities: [11, 5, 1],
            templates: [86, 59, 148, 95, 68],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 921, coins: 1800 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 23,
            abilities: [8, 2, 0],
            templates: [225, 135, 73, 234, 144],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 1611, coins: 3150 },
          enemies: {
            level: 35,
            abilities: [12, 5, 1],
            templates: [226, 136, 74, 235, 145],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 967, coins: 1900 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 24,
            abilities: [8, 3, 0],
            templates: [180, 198, 171, 189, 207],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 1692, coins: 3325 },
          enemies: {
            level: 37,
            abilities: [13, 7, 1],
            templates: [181, 199, 172, 190, 208],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1015, coins: 2000 },
          bossReward: { coins: 31500, crystals: 40 },
          enemies: {
            level: 25,
            abilities: [9, 3, 0],
            templates: [180, 183, 186, 189, 192],
            boss: 189,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 1776, coins: 3500 },
          enemies: {
            level: 40,
            abilities: [14, 7, 2],
            templates: [181, 184, 187, 190, 193],
          },
        },
      },
    ],
  },
  {
    name: "Snow Valley",
    levels: [
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1075, coins: 2100 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 31,
            abilities: [10, 4, 1],
            templates: [13, 59, 62, 19, 68],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 1881, coins: 3675 },
          enemies: {
            level: 41,
            abilities: [14, 7, 2],
            templates: [13, 59, 62, 19, 68],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1129, coins: 2300 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 32,
            abilities: [10, 4, 1],
            templates: [41, 35, 47, 38, 53],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 1975, coins: 4025 },
          enemies: {
            level: 41,
            abilities: [14, 7, 2],
            templates: [41, 35, 47, 38, 53],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1185, coins: 2500 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 33,
            abilities: [10, 4, 1],
            templates: [86, 154, 92, 159, 162],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 2074, coins: 4375 },
          enemies: {
            level: 42,
            abilities: [14, 7, 2],
            templates: [86, 154, 92, 159, 162],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1244, coins: 2700 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 34,
            abilities: [11, 5, 1],
            templates: [196, 77, 202, 80, 208],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 2178, coins: 4725 },
          enemies: {
            level: 42,
            abilities: [14, 7, 2],
            templates: [196, 77, 202, 80, 208],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1307, coins: 2900 },
          bossReward: { coins: 34300, crystals: 55 },
          enemies: {
            level: 35,
            abilities: [11, 5, 1],
            templates: [148, 151, 154, 159, 162],
            boss: 151,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 2287, coins: 5075 },
          enemies: {
            level: 43,
            abilities: [15, 7, 2],
            templates: [148, 151, 154, 159, 162],
          },
        },
      },
    ],
  },
  {
    name: "Ice Canyon",
    levels: [
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1400, coins: 3100 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 36,
            abilities: [12, 5, 1],
            templates: [211, 119, 124, 220, 223],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 2450, coins: 5425 },
          enemies: {
            level: 43,
            abilities: [15, 7, 2],
            templates: [211, 119, 124, 220, 223],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1470, coins: 3300 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 37,
            abilities: [12, 6, 1],
            templates: [226, 139, 136, 235, 238],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 2573, coins: 5775 },
          enemies: {
            level: 44,
            abilities: [15, 8, 2],
            templates: [226, 139, 136, 235, 238],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1544, coins: 3500 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 38,
            abilities: [12, 6, 1],
            templates: [107, 104, 184, 190, 113],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 2701, coins: 6125 },
          enemies: {
            level: 44,
            abilities: [15, 8, 2],
            templates: [107, 104, 184, 190, 113],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1621, coins: 3700 },
          bossReward: { coins: 0, crystals: 0 },
          enemies: {
            level: 39,
            abilities: [12, 6, 1],
            templates: [166, 169, 199, 205, 208],
            boss: 0,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 2836, coins: 6475 },
          enemies: {
            level: 45,
            abilities: [15, 8, 3],
            templates: [166, 169, 199, 205, 208],
          },
        },
      },
      {
        [GAME_DIFFICULTY_MEDIUM]: {
          reward: { xp: 1702, coins: 3900 },
          bossReward: { coins: 51450, crystals: 55 },
          enemies: {
            level: 40,
            abilities: [14, 7, 2],
            templates: [211, 214, 217, 220, 223],
            boss: 220,
          },
        },
        [GAME_DIFFICULTY_HIGH]: {
          reward: { xp: 2978, coins: 6825 },
          enemies: {
            level: 45,
            abilities: [15, 8, 3],
            templates: [211, 214, 217, 220, 223],
          },
        },
      },
    ],
  },
];
