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

export const farmConfig = {
  1: {
    currency: CURRENCY_SANTABUCKS,
    currencyConvertDivider: 1,
    baseBuildingPrice: 5,
    baseIncome: 2
  },
  2: {
    currency: CURRENCY_GOLD,
    currencyConvertDivider: 1,
    baseBuildingPrice: 10,
    baseIncome: 4
  },
  3: {
    currency: CURRENCY_UNIT_ESSENCE,
    currencyConvertDivider: 3,
    baseBuildingPrice: 30,
    baseIncome: 12
  },
  4: {
    currency: CURRENCY_CHRISTMAS_POINTS,
    currencyConvertDivider: 1000,
    baseBuildingPrice: 120,
    baseIncome: 48
  },
  5: {
    currency: CURRENCY_SANTABUCKS,
    currencyConvertDivider: 1,
    baseBuildingPrice: 600,
    baseIncome: 240
  },
  6: {
    currency: CURRENCY_SHINIES,
    currencyConvertDivider: 1440,
    baseBuildingPrice: 3600,
    baseIncome: 1440
  },
  7: {
    currency: CURRENCY_CHRISTMAS_POINTS,
    currencyConvertDivider: 1000,
    baseBuildingPrice: 25200,
    baseIncome: 10080
  },
  8: {
    currency: CURRENCY_CHRISTMAS_POINTS,
    currencyConvertDivider: 1000,
    baseBuildingPrice: 201600,
    baseIncome: 80640
  },
  9: {
    currency: CURRENCY_CHRISTMAS_POINTS,
    currencyConvertDivider: 1000,
    baseBuildingPrice: 1814400,
    baseIncome: 725760
  },
}

const mainTowerPerkValue = (perkName, perkLevel, baseValue) => {
  let levelStep = 0;
  let multiplier = 1;

  if ([TOWER_PERK_CYCLE_DURATION, TOWER_PERK_INCOME].includes(perkName)) {
    baseValue = 0.05;
    multiplier = 1.05;
  } else if (TOWER_PERK_UPGRADE == perkName) {
    baseValue = 0.01;
    multiplier = 1.05;
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

  return baseValue * (levelStep + perkLevel * multiplier);
}

const getMainTowerPerkValue = function(tier, perkName, perkLevel) {
  let currency = farmConfig[tier].currency;

  switch (currency) {
    case CURRENCY_SANTABUCKS: {
      return mainTowerPerkValue(perkName, perkLevel, TOWER_PERK_AUTOCYCLES_COUNT == perkName ? 42 : -1);
    }
    case CURRENCY_GOLD: {
      return mainTowerPerkValue(perkName, perkLevel, TOWER_PERK_AUTOCYCLES_COUNT == perkName ? 180 : -1);
    }
    case CURRENCY_UNIT_ESSENCE: {
      return mainTowerPerkValue(perkName, perkLevel, TOWER_PERK_AUTOCYCLES_COUNT == perkName ? 90 : -1);
    }
    case CURRENCY_CHRISTMAS_POINTS: {
      const tierBaseValues = {
        4: 45,
        7: 6,
        8: 3,
        9: 1
      };
      return mainTowerPerkValue(perkName, perkLevel, TOWER_PERK_AUTOCYCLES_COUNT == perkName ? tierBaseValues[tier] : -1);
    }
    case CURRENCY_SHINIES: {
      return mainTowerPerkValue(perkName, perkLevel, TOWER_PERK_AUTOCYCLES_COUNT == perkName ? 2 : -1);
    }
  }
}

export const getTowerLevelBoundaries = function() {
  let map = {};
  for (let i = 1; i <= 500; i++) {
    map[i] = 100 + Math.pow(1.5, i - 1);
  }
  return map;
}

export const getFarmUpgradeData = function(tier, level, perks) {
  let upgradeData = {
    upgradeMultiplier: 1 + (0.01 * tier),
    baseSaleBuilding: farmConfig[tier].baseBuildingPrice,
    perksMultiplier: 1 + getMainTowerPerkValue(tier, TOWER_PERK_UPGRADE, perks.upgradePerkLevel)
  };
  let upgradePrice = (upgradeData.baseSaleBuilding / upgradeData.perksMultiplier) * Math.pow(upgradeData.upgradeMultiplier, level - 1);
  return {
    upgradePrice
  };
}

export const getFarmTimeData = function(tier, perks) {
  let baseTime = 2;
  let reductionTime = 1;
  let cycleDurationPerk = getMainTowerPerkValue(tier, TOWER_PERK_CYCLE_DURATION, perks.cycleDurationPerkLevel);
  let baseCycleLength = Math.pow(baseTime, tier - 1);
  let cycleLength = baseCycleLength * reductionTime * (perks[TOWER_PERK_SPEED] ? 0.5 : 1) * (perks[TOWER_PERK_SUPER_SPEED] ? 0.2 : 1) / (1 + cycleDurationPerk);
  console.log('[Tier ' + tier + ']', {
    cycleLength,
    cycleDurationPerk
  });
  return {
    cycleLength
  };
}

export const getFarmIncomeData = function(tier, level, perks) {
  let farmTimeData = getFarmTimeData(tier, {
    cycleDurationPerkLevel: perks.cycleDurationPerkLevel
  });
  let incomePerk = getMainTowerPerkValue(tier, TOWER_PERK_INCOME, perks.incomePerkLevel);
  let expIncomePerSecond = (1 + incomePerk) * farmConfig[tier].baseIncome * level * ((tier == 6 ? 0 : 1) + 0.01 * tier) * (perks[TOWER_PERK_BOOST] ? 2 : 1) * (perks[TOWER_PERK_SUPER_BOOST] ? 5 : 1);
  let expIncomePerCycle = farmTimeData.cycleLength * expIncomePerSecond;
  let currencyDivider = farmConfig[tier].currencyConvertDivider;
  return {
    expIncomePerSecond,
    expIncomePerCycle,
    currencyIncomePerSecond: expIncomePerSecond / currencyDivider,
    currencyIncomePerCycle: expIncomePerCycle / currencyDivider
  };
}

export function abbreviateNumber(value) {
  let newValue = value;
  const suffixes = ["", "K", "M", "B", "T"];
  let suffixNum = 0;
  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }
  newValue = newValue.toPrecision(3);
  newValue += suffixes[suffixNum];
  return newValue;
}