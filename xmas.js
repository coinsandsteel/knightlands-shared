import _ from 'lodash';

export const BASE_EXP = 10000;

export const CURRENCY_SANTABUCKS = 'santa_bucks';
export const CURRENCY_GOLD = 'gold';
export const CURRENCY_UNIT_ESSENCE = 'unit_essence';
export const CURRENCY_CHRISTMAS_POINTS = 'christmas_points';
export const CURRENCY_SHINIES = 'shinies';

export const TOWER_PERK_CYCLE_DURATION = 'cycle_duration';
export const TOWER_PERK_INCOME = 'income';
export const TOWER_PERK_UPGRADE = 'upgrade';
export const TOWER_PERK_AUTOCYCLES_COUNT = 'autocycles_count';
export const TOWER_PERK_BOOST = 'boost';
export const TOWER_PERK_SPEED = 'speed';
export const TOWER_PERK_SUPER_BOOST = 'super_boost';
export const TOWER_PERK_SUPER_SPEED = 'super_speed';
export const TOWER_PERK_PRESENT = 'present';
export const TOWER_PERK_SLEEP = 'sleep';

export const currencies = [
    CURRENCY_SANTABUCKS,
    CURRENCY_GOLD,
    CURRENCY_UNIT_ESSENCE,
    CURRENCY_CHRISTMAS_POINTS,
    CURRENCY_SHINIES
];

export const farmConfig = {
    1: {
        currency: CURRENCY_SANTABUCKS,
        currencyConvertDivider: 1,
        baseBuildingPrice: 50,
        baseIncome: 2
    },
    2: {
        currency: CURRENCY_GOLD,
        currencyConvertDivider: 1,
        baseBuildingPrice: 100,
        baseIncome: 4
    },
    3: {
        currency: CURRENCY_UNIT_ESSENCE,
        currencyConvertDivider: 6,
        baseBuildingPrice: 300,
        baseIncome: 12
    },
    4: {
        currency: CURRENCY_CHRISTMAS_POINTS,
        currencyConvertDivider: 1000,
        baseBuildingPrice: 1200,
        baseIncome: 48
    },
    5: {
        currency: CURRENCY_SANTABUCKS,
        currencyConvertDivider: 1,
        baseBuildingPrice: 6000,
        baseIncome: 240
    },
    6: {
        currency: CURRENCY_SHINIES,
        currencyConvertDivider: 76000,
        baseBuildingPrice: 36000,
        baseIncome: 1440
    },
    7: {
        currency: CURRENCY_CHRISTMAS_POINTS,
        currencyConvertDivider: 1000,
        baseBuildingPrice: 252000,
        baseIncome: 10080
    },
    8: {
        currency: CURRENCY_CHRISTMAS_POINTS,
        currencyConvertDivider: 1000,
        baseBuildingPrice: 2016000,
        baseIncome: 80640
    },
    9: {
        currency: CURRENCY_CHRISTMAS_POINTS,
        currencyConvertDivider: 1000,
        baseBuildingPrice: 18144000,
        baseIncome: 725760
    },
}

export const balance = {
    [CURRENCY_SANTABUCKS]: 1000000000000,
    [CURRENCY_GOLD]: 0,
    [CURRENCY_UNIT_ESSENCE]: 0,
    [CURRENCY_CHRISTMAS_POINTS]: 0,
    [CURRENCY_SHINIES]: 0
};

export const initialSlotState = {
    launched: false,
    lastLaunch: null,
    level: 0,
    accumulated: {
        currency: 0,
        exp: 0
    },
    progress: {
        percentage: 0,
        autoCyclesLeft: 0,
        autoCyclesSpent: 0
    },
    stats: {
        cycleLength: 1,
        upgrade: {
            value: 0,
            nextLevel: 1
        },
        income: {
            current: {
                expPerSecond: 0,
                expPerCycle: 0,
                currencyPerSecond: 0,
                currencyPerCycle: 0
            },
            next: {
                expPerSecond: 0,
                expPerCycle: 0,
                currencyPerSecond: 0,
                currencyPerCycle: 0
            }
        }
    }
};
export const slots = Object.fromEntries(
    Array.from({ length: 9 }, (v, i) => [i + 1, _.cloneDeep(initialSlotState)])
);

export const burstPerksTree = {
    [TOWER_PERK_PRESENT]: {
        enabled: false,
        level: 0,
        price: 0,
        lastActivated: null
    },
    [TOWER_PERK_SLEEP]: {
        enabled: false,
        level: 0,
        price: 0,
        lastActivated: null
    }
}

const perksBranch = {
    [TOWER_PERK_AUTOCYCLES_COUNT]: { enabled: true, level: 0 },
    [TOWER_PERK_UPGRADE]: { enabled: false, level: 0 },

    [TOWER_PERK_INCOME]: { enabled: false, level: 0 },
    [TOWER_PERK_CYCLE_DURATION]: { enabled: false, level: 0 },

    [TOWER_PERK_BOOST]: { enabled: false, level: 0, price: 0, lastActivated: null },
    [TOWER_PERK_SPEED]: { enabled: false, level: 0, price: 0, lastActivated: null },

    [TOWER_PERK_SUPER_BOOST]: { enabled: false, level: 0, price: 0, lastActivated: null },
    [TOWER_PERK_SUPER_SPEED]: { enabled: false, level: 0, price: 0, lastActivated: null }
};

export const basePerkLevel = [
    [TOWER_PERK_AUTOCYCLES_COUNT],
    [TOWER_PERK_UPGRADE],
    [TOWER_PERK_INCOME, TOWER_PERK_CYCLE_DURATION],
    [TOWER_PERK_BOOST, TOWER_PERK_SPEED],
    [TOWER_PERK_SUPER_BOOST, TOWER_PERK_SUPER_SPEED],
]

export const perkLevels = {
    [CURRENCY_SANTABUCKS]: basePerkLevel,
    [CURRENCY_GOLD]: basePerkLevel,
    [CURRENCY_UNIT_ESSENCE]: basePerkLevel,
    [CURRENCY_CHRISTMAS_POINTS]: {
        "7": [
            [TOWER_PERK_AUTOCYCLES_COUNT],
            [TOWER_PERK_UPGRADE],
            [TOWER_PERK_INCOME],
            [TOWER_PERK_BOOST],
            [TOWER_PERK_SUPER_BOOST]
        ],
        "9": [
            [TOWER_PERK_AUTOCYCLES_COUNT],
            [TOWER_PERK_UPGRADE],
            [TOWER_PERK_INCOME],
            [TOWER_PERK_BOOST],
            [TOWER_PERK_SUPER_BOOST]
        ],
        "4": [
            [TOWER_PERK_AUTOCYCLES_COUNT],
            [TOWER_PERK_UPGRADE],
            [TOWER_PERK_CYCLE_DURATION],
            [TOWER_PERK_SPEED],
            [TOWER_PERK_SUPER_SPEED]
        ],
        "8": [
            [TOWER_PERK_AUTOCYCLES_COUNT],
            [TOWER_PERK_UPGRADE],
            [TOWER_PERK_CYCLE_DURATION],
            [TOWER_PERK_SPEED],
            [TOWER_PERK_SUPER_SPEED]
        ]
    },
    [CURRENCY_SHINIES]: [
        [TOWER_PERK_AUTOCYCLES_COUNT],
        [TOWER_PERK_UPGRADE],
        [TOWER_PERK_CYCLE_DURATION],
        [TOWER_PERK_INCOME]
    ]
}

export const perksUnlock = {
    [TOWER_PERK_AUTOCYCLES_COUNT]: [TOWER_PERK_INCOME, TOWER_PERK_CYCLE_DURATION],
    [TOWER_PERK_UPGRADE]: [TOWER_PERK_INCOME, TOWER_PERK_CYCLE_DURATION],

    [TOWER_PERK_INCOME]: [TOWER_PERK_BOOST, TOWER_PERK_SPEED],
    [TOWER_PERK_CYCLE_DURATION]: [TOWER_PERK_BOOST, TOWER_PERK_SPEED],

    [TOWER_PERK_BOOST]: [TOWER_PERK_SUPER_BOOST, TOWER_PERK_SUPER_SPEED],
    [TOWER_PERK_SPEED]: [TOWER_PERK_SUPER_BOOST, TOWER_PERK_SUPER_SPEED],

    [TOWER_PERK_SUPER_BOOST]: [TOWER_PERK_PRESENT],
    [TOWER_PERK_SUPER_SPEED]: [TOWER_PERK_PRESENT]
}

export const perksTree = {
    [CURRENCY_SANTABUCKS]: {
        unlocked: true,
        tiers: {
            all: _.cloneDeep(perksBranch)
        }
    },
    [CURRENCY_GOLD]: {
        unlocked: false,
        tiers: {
            all: _.cloneDeep(perksBranch)
        }
    },
    [CURRENCY_UNIT_ESSENCE]: {
        unlocked: false,
        tiers: {
            all: _.cloneDeep(perksBranch)
        }
    },
    [CURRENCY_SHINIES]: {
        unlocked: false,
        tiers: {
            all: {
                [TOWER_PERK_INCOME]: { enabled: false, level: 0 },
                [TOWER_PERK_UPGRADE]: { enabled: false, level: 0 },
                [TOWER_PERK_CYCLE_DURATION]: { enabled: false, level: 0 },
                [TOWER_PERK_AUTOCYCLES_COUNT]: { enabled: true, level: 0 },
            }
        }
    },
    [CURRENCY_CHRISTMAS_POINTS]: {
        unlocked: false,
        tiers: {
            '4': {
                [TOWER_PERK_AUTOCYCLES_COUNT]: { enabled: true, level: 0 },
                [TOWER_PERK_UPGRADE]: { enabled: false, level: 0 },
                [TOWER_PERK_CYCLE_DURATION]: { enabled: false, level: 0 },
                [TOWER_PERK_SPEED]: { enabled: false, level: 0, price: 0, lastActivated: null },
                [TOWER_PERK_SUPER_SPEED]: { enabled: false, level: 0, price: 0, lastActivated: null }
            },
            '7': {
                [TOWER_PERK_AUTOCYCLES_COUNT]: { enabled: true, level: 0 },
                [TOWER_PERK_UPGRADE]: { enabled: false, level: 0 },
                [TOWER_PERK_INCOME]: { enabled: false, level: 0 },
                [TOWER_PERK_BOOST]: { enabled: false, level: 0, price: 0, lastActivated: null },
                [TOWER_PERK_SUPER_BOOST]: { enabled: false, level: 0, price: 0, lastActivated: null }
            },
            '8': {
                [TOWER_PERK_AUTOCYCLES_COUNT]: { enabled: true, level: 0 },
                [TOWER_PERK_UPGRADE]: { enabled: false, level: 0 },
                [TOWER_PERK_CYCLE_DURATION]: { enabled: false, level: 0 },
                [TOWER_PERK_SPEED]: { enabled: false, level: 0, price: 0, lastActivated: null },
                [TOWER_PERK_SUPER_SPEED]: { enabled: false, level: 0, price: 0, lastActivated: null }
            },
            '9': {
                [TOWER_PERK_AUTOCYCLES_COUNT]: { enabled: true, level: 0 },
                [TOWER_PERK_UPGRADE]: { enabled: false, level: 0 },
                [TOWER_PERK_INCOME]: { enabled: false, level: 0 },
                [TOWER_PERK_BOOST]: { enabled: false, level: 0, price: 0, lastActivated: null },
                [TOWER_PERK_SUPER_BOOST]: { enabled: false, level: 0, price: 0, lastActivated: null }
            },
        }
    },
};

export const getTowerLevelBoundaries = function() {
    let map = { 1: 0 };
    for (let i = 2; i <= 500; i++) {
        map[i] = BASE_EXP + Math.pow(1.4, i - 1) + map[i - 1];
    }
    return map;
}

const mainTowerPerkValue = (perkName, perkLevel, baseValue) => {
    let levelStep = 0;
    let multiplier = 1;

    if ([TOWER_PERK_CYCLE_DURATION, TOWER_PERK_INCOME].includes(perkName)) {
        baseValue = 0.05;
        multiplier = 1.025;
    } else if (TOWER_PERK_UPGRADE == perkName) {
        baseValue = 0.01;
        multiplier = 1.025;
    } else if (TOWER_PERK_AUTOCYCLES_COUNT == perkName) {
        multiplier = 1;
    } else if ([TOWER_PERK_BOOST, TOWER_PERK_SPEED, TOWER_PERK_SUPER_BOOST, TOWER_PERK_SUPER_SPEED].includes(perkName)) {
        if (perkName == TOWER_PERK_BOOST || perkName == TOWER_PERK_SPEED) {
            baseValue = 50;
        } else {
            baseValue = 20;
        }
        multiplier = 0.1;
        levelStep = 1;
    }

    //console.log('mainTowerPerkValue', { baseValue, levelStep, perkLevel, multiplier });
    return baseValue * (levelStep + perkLevel * multiplier);
}

export const getMainTowerPerkValue = function(tier, perkName, perkLevel, currency) {
    if (farmConfig[tier]) {
        currency = farmConfig[tier].currency;
    }

    switch (currency) {
        case CURRENCY_SANTABUCKS:
            {
                return mainTowerPerkValue(perkName, perkLevel, TOWER_PERK_AUTOCYCLES_COUNT == perkName ? 42 : -1);
            }
        case CURRENCY_GOLD:
            {
                return mainTowerPerkValue(perkName, perkLevel, TOWER_PERK_AUTOCYCLES_COUNT == perkName ? 180 : -1);
            }
        case CURRENCY_UNIT_ESSENCE:
            {
                return mainTowerPerkValue(perkName, perkLevel, TOWER_PERK_AUTOCYCLES_COUNT == perkName ? 90 : -1);
            }
        case CURRENCY_CHRISTMAS_POINTS:
            {
                const tierBaseValues = {
                    4: 45,
                    7: 6,
                    8: 3,
                    9: 1
                };
                return mainTowerPerkValue(perkName, perkLevel, TOWER_PERK_AUTOCYCLES_COUNT == perkName ? tierBaseValues[tier] : -1);
            }
        case CURRENCY_SHINIES:
            {
                return mainTowerPerkValue(perkName, perkLevel, TOWER_PERK_AUTOCYCLES_COUNT == perkName ? 2 : -1);
            }
    }
}

export const getFarmUpgradeData = function(tier, level, perks) {
    let upgradeData = {
        upgradeMultiplier: 1 + 0.03 * tier,
        baseSaleBuilding: farmConfig[tier].baseBuildingPrice,
        perksMultiplier: 1 + getMainTowerPerkValue(tier, TOWER_PERK_UPGRADE, perks.upgradePerkLevel)
    };
    let upgrade = (upgradeData.baseSaleBuilding / upgradeData.perksMultiplier) * Math.pow(upgradeData.upgradeMultiplier, level - 1);
    //console.log(`[Tier ${tier} upgrade]`, { ...upgradeData, upgradePrice });
    return {
        upgrade
    };
}

export const getFarmTimeData = function(tier, perks) {
    let baseTime = 2;
    let reductionTime = 1;
    let cycleDurationPerk = getMainTowerPerkValue(tier, TOWER_PERK_CYCLE_DURATION, perks.cycleDurationPerkLevel);
    let baseCycleLength = Math.pow(baseTime, tier - 1);
    let cycleLength = baseCycleLength * reductionTime * (perks[TOWER_PERK_SPEED] ? 0.5 : 1) * (perks[TOWER_PERK_SUPER_SPEED] ? 0.2 : 1) / (1 + cycleDurationPerk);
    //console.log(`[Tier ${tier} time]`, { cycleLength, baseCycleLength, cycleDurationPerk, baseTime, reductionTime });
    return {
        cycleLength
    };
}

export const getFarmIncomeData = function(tier, level, perks) {
    let farmTimeData = getFarmTimeData(tier, {
        cycleDurationPerkLevel: perks.cycleDurationPerkLevel
    });
    let incomePerk = getMainTowerPerkValue(tier, TOWER_PERK_INCOME, perks.incomePerkLevel);
    let expPerSecond = (1 + incomePerk) * farmConfig[tier].baseIncome * level * (1 + 0.01 * tier) * (perks[TOWER_PERK_BOOST] ? 2 : 1) * (perks[TOWER_PERK_SUPER_BOOST] ? 5 : 1) / farmTimeData.cycleLength;
    let expPerCycle = expPerSecond * farmTimeData.cycleLength;
    let currencyDivider = farmConfig[tier].currencyConvertDivider;
    let result = {
        expPerSecond,
        expPerCycle,
        currencyPerSecond: expPerSecond / currencyDivider,
        currencyPerCycle: expPerCycle / currencyDivider
    };
    //console.log(`[Tier ${tier} income]`, { ...result, incomePerk, currencyDivider });
    return result;
}

export function abbreviateNumber(value) {
    let newValue = value;
    const suffixes = ["", "K", "M", "B", "T", "QV", "QN", "S"];
    let suffixNum = 0;
    while (newValue >= 1000) {
        newValue /= 1000;
        suffixNum++;
    }
    newValue = newValue.toPrecision(3);
    newValue += suffixes[suffixNum];
    return newValue;
}