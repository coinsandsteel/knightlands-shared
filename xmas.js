export const CURRENCY_SANTABUCKS = 'santa_bucks';
export const CURRENCY_GOLD = 'gold';
export const CURRENCY_UNIT_ESSENCE = 'unit_essence';
export const CURRENCY_CHRISTMAS_POINTS = 'christmas_points';
export const CURRENCY_SHINIES = 'shinies';

/*
  Tier 1 - Santabucks;
  Tier 2 - Gold;
  Tier 3 - Unit Essence;
  Tier 4 - CP;
  Tier 5 - Santabucks;
  Tier 6 - Shinies;
  Tier 7 - CP;
  Tier 8 - CP;
  Tier 9 - CP.
*/
export const tierCurrencies = {
  1: CURRENCY_SANTABUCKS,
  2: CURRENCY_GOLD,
  3: CURRENCY_UNIT_ESSENCE,
  4: CURRENCY_CHRISTMAS_POINTS,
  5: CURRENCY_SANTABUCKS,
  6: CURRENCY_SHINIES,
  7: CURRENCY_CHRISTMAS_POINTS,
  8: CURRENCY_CHRISTMAS_POINTS,
  9: CURRENCY_CHRISTMAS_POINTS
};

export const tierLevelMap = {
  1: {
    1: { upgradePrice: 1000 },
    10: { upgradePrice: 10000 },
    100: { upgradePrice: 100000 },
    1000: { upgradePrice: 1000000 },
  },
  2: {
    1: { upgradePrice: 1000 },
    10: { upgradePrice: 10000 },
    100: { upgradePrice: 100000 },
    1000: { upgradePrice: 1000000 },
  },
  3: {
    1: { upgradePrice: 1000 },
    10: { upgradePrice: 10000 },
    100: { upgradePrice: 100000 },
    1000: { upgradePrice: 1000000 },
  },
  4: {
    1: { upgradePrice: 1000 },
    10: { upgradePrice: 10000 },
    100: { upgradePrice: 100000 },
    1000: { upgradePrice: 1000000 },
  },
  5: {
    1: { upgradePrice: 1000 },
    10: { upgradePrice: 10000 },
    100: { upgradePrice: 100000 },
    1000: { upgradePrice: 1000000 },
  },
  6: {
    1: { upgradePrice: 1000 },
    10: { upgradePrice: 10000 },
    100: { upgradePrice: 100000 },
    1000: { upgradePrice: 1000000 },
  },
  7: {
    1: { upgradePrice: 1000 },
    10: { upgradePrice: 10000 },
    100: { upgradePrice: 100000 },
    1000: { upgradePrice: 1000000 },
  },
  8: {
    1: { upgradePrice: 1000 },
    10: { upgradePrice: 10000 },
    100: { upgradePrice: 100000 },
    1000: { upgradePrice: 1000000 },
  },
  9: {
    1: { upgradePrice: 1000 },
    10: { upgradePrice: 10000 },
    100: { upgradePrice: 100000 },
    1000: { upgradePrice: 1000000 },
  },
};

export function abbreviateNumber(value) {
  let newValue = value;
  const suffixes = ["", "K", "M", "B","T"];
  let suffixNum = 0;
  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }

  newValue = newValue.toPrecision(3);

  newValue += suffixes[suffixNum];
  return newValue;
}