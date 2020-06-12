export default class LegionResolver {
    constructor(abilityResolver, troopsMeta, generalsMeta) {
        this._abilityResolver = abilityResolver;
        this._troopsMeta = troopsMeta;
        this._generalsMeta = generalsMeta;
    }

    getDamage(legion, units, templates) {
        let totalDamage = 0;

        for (const slotId in legion.units) {
            const unitId = legion.units[slotId];
            const unit = units[unitId];
            const template = templates[unit.template];

            const stars = unit.promotions + template.stars;

            totalDamage += this.getUnitDamage(unit, false);

            for (const abilityId of unit.abilities) {
                totalDamage += this._abilityResolver.getAbilityLevelValue(stars, abilityId, unit.troop);
            }
        }

        return totalDamage;
    }

    getUnitDamage(unit, next) {
        let meta = unit.troop ? this._troopsMeta.leveling : this._generalsMeta.leveling;
        let level = unit.level;
        if (next) {
            level++;
        }
        return meta.levelingSteps[level - 1].power;
    }
}
