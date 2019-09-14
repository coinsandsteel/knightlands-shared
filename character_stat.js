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