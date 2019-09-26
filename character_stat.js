const CharacterStat = {
    Attack: "attack",
    Defense: "defense",
    Health: "health",
    Energy: "energy",
    Stamina: "stamina",
    Luck: "luck",
    CriticalChance: "criticalChance",
    Honor: "honor",
    Dodge: "dodge",
    CriticalDamage: "criticalDamage",
    ExtraGold: "extraGold",
    ExtraExp: "extraExp",
    ExtraDkt: "extraDkt",
    RaidDamage: "raidDamage"
};

export default CharacterStat;

let conversions = {};
conversions[CharacterStat.Attack] = 1;
conversions[CharacterStat.Defense] = 1;
conversions[CharacterStat.Health] = 20;
conversions[CharacterStat.Energy] = 1;
conversions[CharacterStat.Stamina] = 1;
conversions[CharacterStat.Luck] = 1;
conversions[CharacterStat.CriticalChance] = 1;
conversions[CharacterStat.Honor] = 1;

export const StatConversions = conversions;

let DefaultStats = {}
DefaultStats[CharacterStats.Health] = 50;
DefaultStats[CharacterStats.Attack] = 5;
DefaultStats[CharacterStats.CriticalChance] = 2;
DefaultStats[CharacterStats.Energy] = 30;
DefaultStats[CharacterStats.CriticalDamage] = 50;
DefaultStats[CharacterStats.Stamina] = 5;
DefaultStats[CharacterStats.Honor] = 1;
DefaultStats[CharacterStats.Luck] = 0;
DefaultStats[CharacterStats.Defense] = 0;
DefaultStats[CharacterStats.ExtraDkt] = 0;
DefaultStats[CharacterStats.ExtraExp] = 0;
DefaultStats[CharacterStats.ExtraGold] = 0;
DefaultStats[CharacterStats.RaidDamage] = 0;

export const DefaultStats = DefaultStats; 