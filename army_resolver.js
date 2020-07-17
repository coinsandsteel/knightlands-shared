import CharacterStat from "./character_stat";
import UnitAbilityType from "./unit_ability_type.json";

class ArmyResolver {
    constructor(abilitiesMeta, statResolver, unitsMeta) {
        this._meta = abilitiesMeta;
        this._statResolver = statResolver;
        this._unitsMeta = unitsMeta;
        this._abilityHandlers = {};

        for (let key in UnitAbilityType) {
            const typeValue = UnitAbilityType[key];
            // ability handler is in form of
            // _handler{Type}(troopQuantities, generalQuantities)
            this._abilityHandlers[typeValue] = this[`_${typeValue}`].bind(this);
        }
    }

    _getAbilityTemplate(isTroop, abilityId) {
        const abilityRecords = isTroop ? this._meta.troops : this._meta.generals;
        return abilityRecords[abilityId];
    }

    getAbilityLevelValue(unitStars, abilityId, isTroop) {
        const abilityTemplate = this._getAbilityTemplate(isTroop, abilityId);
        const levelRecord = abilityTemplate.levels[unitStars - 1];

        if (!levelRecord) {
            return 0;
        }

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

    _addOrModify(obj, key, value) {
        obj[key] = (obj[key] || 0) + value;
    }

    _initField(obj, key, value) {
        obj[key] = (obj[key] || value);
    }

    /**
     * 
     * @param {Array} units list of units to estimate damage for - usually will represent whole legion
     * @param {Object} ownedUnitsTable table of owned units indexed by type, weapon, element and stars
     */
    estimateDamageOutput(units, ownedUnitsTable) {
        const context = {
            quantities: {},
            unitBonuses: {},
            globalBonuses: {},
            bonusesByCategory: {},
            troops: [],
            generals: [],
            ownedUnits: ownedUnitsTable
        };

        // calculate troops and generals quantity by weapon type, element and unit type
        const troops = { weapon: {}, element: {}, type: {} };
        const generals = { type: {} };

        // prepare bonuses by category for constant modification of units of that category
        const troopBonuses = { weapon: {}, element: {}, type: {} };
        const generalBonuses = { type: {} };

        const length = units.length;
        for (let i = 0; i < length; ++i) {
            const unit = units[i]
            const unitTemplate = this._unitsMeta[unit.template];

            if (unitTemplate.troop) {
                this._addOrModify(troops.weapon, unitTemplate.weapon, 1);
                this._addOrModify(troops.element, unitTemplate.element, 1);
                this._addOrModify(troops.type, unitTemplate.unitType, 1);

                this._initField(troopBonuses.weapon, unitTemplate.weapon, { flat: 0, relative: 0 });
                this._initField(troopBonuses.element, unitTemplate.element, { flat: 0, relative: 0 });
                this._initField(troopBonuses.type, unitTemplate.unitType, { flat: 0, relative: 0 });

                context.troops.push({ unit, unitTemplate });
            } else {
                this._addOrModify(generals.type, unitTemplate.unitType, 1);
                this._initField(generalBonuses.type, unitTemplate.unitType, { flat: 0, relative: 0 });

                context.generals.push({ unit, unitTemplate });
            }

            context.unitBonuses[unit.template] = {
                flat: 0,
                relative: 0
            };
        }

        context.quantities.troops = troops;
        context.quantities.generals = generals;

        context.bonusesByCategory.troops = troopBonuses;
        context.bonusesByCategory.generals = generalBonuses;

        for (let i = 0; i < length; ++i) {
            const unit = units[i];
            const unitTemplate = this._unitsMeta[unit.template];
            const totalAbilities = unit.abilities.length;
            for (let j = 0; j < totalAbilities; ++j) {
                const abilityTemplate = this._getAbilityTemplate(unit.troop, unit.abilities[j]);
                if (!abilityTemplate) {
                    console.error(`ability template id ${unit.abilities[j]} doesn't exist`)
                    continue;
                }

                const stars = unit.promotion + unitTemplate.stars;
                this._abilityHandlers[abilityTemplate.type]({
                    context, abilityTemplate, unit, unitTemplate, stars
                });
            }
        }
    }


    /**
     * Ability Handlers
     */

    _getAbilityValue(abilityTemplate, stars) {
        return abilityTemplate.levels[stars - 1].statValue;
    }

    _addDamageToUnitsByType(context, damage, unitType, isTroop, isRelative) {
        this._addDamageToUnitsByCategory(context, damage, "type", unitType, isTroop, isRelative);
    }

    _addDamageToUnitsByWeapon(context, damage, weapon, isTroop, isRelative) {
        this._addDamageToUnitsByCategory(context, damage, "weapon", weapon, isTroop, isRelative);
    }

    _addDamageToUnitsByElement(context, damage, element, isTroop, isRelative) {
        this._addDamageToUnitsByCategory(context, damage, "element", element, isTroop, isRelative);
    }

    _addDamageToUnitsByCategory(context, damage, category, key, isTroop, isRelative) {
        let bonuses = isTroop ? context.bonusesByCategory.troops : context.bonusesByCategory.generals;
        bonuses = isRelative ? bonuses[category].relative : bonuses[category].flat;

        if (key == 0) {
            // add to all categories
            for (const k in bonuses) {
                this._addOrModify(bonuses, k, damage);    
            }
        } else {
            // or to certain key in category
            this._addOrModify(bonuses, key, damage);
        }
    }

    _addIncreasedDamageToUnit(context, unit, damage) {
        context.unitBonuses[unit.template].relative += damage;
    }

    _addExtraDamageToUnit(context, unit, damage) {
        context.unitBonuses[unit.template].flat += damage;
    }

    _addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef, isTroopTarget, isRelative }) {
        const totalUnitsOfType = isTroopRef ? context.quantities.troops[abilityTemplate.unitType2] : context.quantities.generals[abilityTemplate.unitType2];
        this._addDamageToUnitsByType(context, this._getAbilityValue(abilityTemplate, stars) * totalUnitsOfType, abilityTemplate.unitType, isTroopTarget, isRelative);
    }

    _increasedDamageWhenUnitsUsed({ context, abilityTemplate, unit, stars, isTroop }) {
        let quantities = isTroop ? context.quantities.troops : context.quantities.generals;
        if (quantities.types[abilityTemplate.unitType] >= abilityTemplate.unitCount) {
            this._addIncreasedDamageToUnit(context, unit, this._getAbilityValue(abilityTemplate, stars));
        }
    }

    _increasedDamageWhenGeneralsUsed(params) {
        this._increasedDamageWhenUnitsUsed({ ...params, isTroop: false });
    }

    _increasedDamageWhenTroopsUsed(params) {
        this._increasedDamageWhenUnitsUsed({ ...params, isTroop: true });
    }

    _increasedDamagePerGeneralTypeUsed({ context, abilityTemplate, stars }) {
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: false, isTroopTarget: true, isRelative: true });
    }

    _increasedDamagePerTroopTypeUsed({ context, abilityTemplate, stars }) {
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: true, isTroopTarget: true, isRelative: true });
    }

    _increasedDamagePerTroopTypeOwned() {

    }

    _increasedDamagePerTroopElementOwned() {

    }

    _increasedDamagePerGeneralTypeOwned() {

    }

    _increasedTroopsDamagePerTroopTypeUsed() {

    }

    _increasedTroopsDamagePerGeneralTypeUsed() {

    }

    _increasedTroopsDamage({ context, abilityTemplate, stars }) {
        this._addDamageToUnitsByType(context, _getAbilityValue(abilityTemplate, stars), abilityTemplate.unitType, true, true);
    }

    _extraTroopsDamage({ context, abilityTemplate, stars }) {
        this._addDamageToUnitsByType(context, _getAbilityValue(abilityTemplate, stars), abilityTemplate.unitType, true, false);
    }

    _extraTroopsDamagePerTroopType({ context, abilityTemplate, stars }) {
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: true, isTroopTarget: true, isRelative: false });
    }

    _extraTroopsDamagePerGeneralType({ context, abilityTemplate, stars }) {
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: true, isTroopTarget: false, isRelative: false });
    }

    _extraDamagePerGeneralTypeUsed() { }

    _extraDamageChance() { }

    _chanceToRestoreStamina() { }

    _chanceToRestoreEnergy() { }

    _chanceToHeal() { }

    _extraDamagePerTroopTypeUsed() { }

    _extraDamagePerGeneralTypeOwned() { }

    _extraDamagePerTroopTypeOwned() { }

    _extraStatToPlayer() { }

    _extraDamagePerTroopOwned() { }

    _extraDamagePerTroopWeaponUsed() { }

    _extraDamagePerTroopElementUsed() { }

    _increasedDamagePerTroopElementUsed() { }

    _extraDamagePerTroopWeaponOwned() { }

    _increasedDamagePerTroopOwned() { }

    _increasedDamageWhenTroopsWeaponUsed() { }

    _extraTroopsDamageWeapon() { }

    _extraTroopsDamageElement() { }

    _increasedTroopsDamageWeapon() { }

    increasedTroopsDamageElement() { }

    _extraGeneralsDamage() { }

    _increasedGeneralsDamage() { }

    _extraGeneralsDamagePerGeneralOwned() { }

    _increasedGeneralsDamagePerGeneralOwned() { }

    _extraDamageWhenTroopsUsed() { }

    _extraTroopsDamagePerGeneralOwned() { }

    _increasedTroopsDamagePerGeneralOwned() { }

    _extraTroopsDamagePerTroopOwned() { }

    _extraTroopsDamagePerTroopTypeOwned() { }

    _extraTroopsDamagePerGeneralTypeOwned() { }

    _increasedTroopsDamagePerGeneralTypeOwned() { }

    _increasedGeneralsDamagePerGeneralTypeUsed() { }

    _extraDamagePerGeneralOwned() { }

    _extraStatPerGeneralOwned() { }

    _extraStatPerTroopOwned() { }

    _increasedTroopsDamageWhenTroopsUsed() { }

    _increasedDamageWhenTroopsOwned() { }

    _extraStatPerTroopTypeUsed() { }

    _extraGeneralsDamagePerTroopTypeUsed() { }

    _extraGeneralsDamagePerTroopOwned() { }

    _extraGeneralsDamagePerTroopOwned() { }

    _increasedDamagePerTroopWeaponUsed() { }

    _increasedGeneralsDamagePerTroopOwned() { }
}

export default ArmyResolver;
