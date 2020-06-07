import CharacterStat from "./character_stat";

class AbilityResolver {
    constructor(abilitiesMeta, statResolver) {
        this._meta = abilitiesMeta;
        this._statResolver = statResolver;
    }

    getAbilityLevelValue(unitStars, abilityId, isTroop) {
        const abilityRecords = isTroop ? this._meta.troops : this._meta.generals;
        const abilityTemplate = abilityRecords[abilityId];
        const levelRecord = abilityTemplate.levels[unitStars - 1];
        if (!levelRecord) return 0;
        let value = {};
        if (levelRecord.power) {
            value.damage = this._statResolver.powerToStatValue(levelRecord.power, CharacterStat.Attack);
        } else if (levelRecord.damage) {
            value.damage = levelRecord.damage;
        } else {
            value.statValue = this._statResolver.powerToStatValue(levelRecord.statValue, abilityTemplate.stat);
        }
        return value;
    }
}

export default AbilityResolver;
