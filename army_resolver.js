import CharacterStat from "./character_stat";
import UnitAbilityType from "./unit_ability_type.json";

const WeaponCategory = "weapon";
const ElementCategory = "element";
const TypeCategory = "type";
const TemplateCategory = "template";

function defaultRandomRange(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

class ArmyResolver {
    constructor(abilitiesMeta, statResolver, unitTemplates, randomRange = defaultRandomRange) {
        this._meta = abilitiesMeta;
        this._statResolver = statResolver;
        this._unitTemplates = unitTemplates;
        this._abilityHandlers = {};
        this._randomRange = randomRange;

        for (let key in UnitAbilityType) {
            const typeValue = UnitAbilityType[key];
            // ability handler is in form of
            // _handler{Type}(troopQuantities, generalQuantities)
            this._abilityHandlers[typeValue] = this[`_${typeValue}`].bind(this);
        }
    }

    _isTriggered(chance) {
        return this._randomRange(1, 100) <= chance;
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

    _getStarGroup(unit, unitTemplate) {
        const stars = unit.promotion + unitTemplate.stars;
        return stars < 4 ? 1 : 2;
    }

    /**
     * 
     * @param {Array} owned units inventory
     */
    buildOwnedUnitsIndex(units) {
        let index = {
            [TemplateCategory]: {},
            troops: {
                [TypeCategory]: {},
                [ElementCategory]: {},
                [WeaponCategory]: {}
            },
            generals: {
                [TypeCategory]: {}
            }
        };

        for (let stars = 1; stars <= 5; ++stars) {
            this._initField(index[TemplateCategory], stars, {});

            this._initField(index.troops[TypeCategory], stars, {});
            this._initField(index.troops[ElementCategory], stars, {});
            this._initField(index.troops[WeaponCategory], stars, {});

            this._initField(index.generals[TypeCategory], stars, {});
        }

        // all passives require "at least X stars" for unit to be included
        // for constant time query of all units of X stars and higher 
        // index must have units separated by each star
        const totalUnits = units.length;
        for (let i = 0; i < totalUnits; ++i) {
            const unit = units[i];
            const unitTemplate = this._unitTemplates[unit.template];
            let stars = unit.promotion + unitTemplate.stars;
            // treat units higher than 5 stars as 5 stars for simplicity
            if (stars > 5) {
                stars = 5;
            }

            this._addOrModify(index[TemplateCategory][stars], unitTemplate.id, 1);

            if (unitTemplate.troop) {
                this._addOrModify(index.troops[TypeCategory][stars], unitTemplate.unitType, 1);
                this._addOrModify(index.troops[ElementCategory][stars], unitTemplate.element, 1);
                this._addOrModify(index.troops[WeaponCategory][stars], unitTemplate.weapon, 1);
            } else {
                this._addOrModify(index.generals[TypeCategory][stars], unitTemplate.unitType, 1);
            }
        }

        return index;
    }

    /**
     * 
     * @param {Array} units list of units to estimate damage for - usually will represent whole legion
     * @param {Object} ownedUnitsIndex table of owned units indexed by type, weapon, element and stars
     */
    estimateDamageOutput(units, ownedUnitsIndex) {
        const context = {
            quantities: {},
            unitBonuses: {},
            globalBonuses: {},
            bonusesByCategory: {},
            troops: [],
            generals: [],
            ownedUnits: ownedUnitsIndex,
            triggers: {}
        };

        // calculate troops and generals quantity by weapon type, element and unit type
        const troopQuantities = { weapon: {}, element: {}, type: {} };
        const generalQuantities = { type: {} };

        // prepare bonuses by category for constant modification of units of that category
        const troopBonuses = { weapon: {}, element: {}, type: {} };
        const generalBonuses = { type: {} };

        const length = units.length;
        for (let i = 0; i < length; ++i) {
            const unit = units[i]
            const unitTemplate = this._unitTemplates[unit.template];

            if (unitTemplate.troop) {
                this._addOrModify(troopQuantities.weapon, unitTemplate.weaponType, 1);
                this._addOrModify(troopQuantities.element, unitTemplate.element, 1);
                this._addOrModify(troopQuantities.type, unitTemplate.unitType, 1);

                this._initField(troopBonuses.weapon, unitTemplate.weaponType, { flat: 0, relative: 0 });
                this._initField(troopBonuses.element, unitTemplate.element, { flat: 0, relative: 0 });
                this._initField(troopBonuses.type, unitTemplate.unitType, { flat: 0, relative: 0 });

                context.troops.push({ unit, unitTemplate });
            } else {
                this._addOrModify(generalQuantities.type, unitTemplate.unitType, 1);
                this._initField(generalBonuses.type, unitTemplate.unitType, { flat: 0, relative: 0 });

                context.generals.push({ unit, unitTemplate });
            }

            context.unitBonuses[unit.template] = {
                flat: 0,
                relative: 0
            };
        }

        context.quantities.troops = troopQuantities;
        context.quantities.generals = generalQuantities;

        context.bonusesByCategory.troops = troopBonuses;
        context.bonusesByCategory.generals = generalBonuses;

        for (let i = 0; i < length; ++i) {
            const unit = units[i];
            const unitTemplate = this._unitTemplates[unit.template];
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

        let totalDamageOutput = 0;
        let unitsDamageOutput = {};

        // last iteration will apply category bonuses to each unit 
        // after apply relative increases to final flat damage
        for (let i = 0; i < length; ++i) {
            const unit = units[i];
            const unitTemplate = this._unitTemplates[unit.template];

            const finalBonuses = context.unitBonuses[unit.template];
            const categoryBonuses = unitTemplate.troop ? context.bonusesByCategory.troops : context.bonusesByCategory.generals;

            let bonuses = categoryBonuses.type[unitTemplate.unitType];
            finalBonuses.flat += bonuses.flat;
            finalBonuses.relative += bonuses.relative;

            if (unitTemplate.troop) {
                bonuses = categoryBonuses.weapon[unitTemplate.weaponType];
                finalBonuses.flat += bonuses.flat;
                finalBonuses.relative += bonuses.relative;

                bonuses = categoryBonuses.element[unitTemplate.element];
                finalBonuses.flat += bonuses.flat;
                finalBonuses.relative += bonuses.relative;
            }

            // apply relative bonus to flat
            unitsDamageOutput[unit.id] = Math.floor(finalBonuses.flat + finalBonuses.flat * (100 + finalBonuses.relative) / 100);
            totalDamageOutput += unitsDamageOutput[unit.id];
        }

        return { totalDamageOutput, unitsDamageOutput };
    }

    /**
     * 
     * Ability handler helpers
     */

    _getAbilityValue(abilityTemplate, stars) {
        return abilityTemplate.levels[stars - 1].statValue;
    }

    _addDamageToUnitsByType(context, damage, unitType, isTroop, isRelative) {
        this._addDamageToUnitsByCategory(context, damage, TypeCategory, unitType, isTroop, isRelative);
    }

    _addDamageToUnitsByWeapon(context, damage, weapon, isTroop, isRelative) {
        this._addDamageToUnitsByCategory(context, damage, WeaponCategory, weapon, isTroop, isRelative);
    }

    _addDamageToUnitsByElement(context, damage, element, isTroop, isRelative) {
        this._addDamageToUnitsByCategory(context, damage, ElementCategory, element, isTroop, isRelative);
    }

    _addDamageToUnitsByCategory(context, damage, category, key, isTroop, isRelative) {
        let bonuses = isTroop ? context.bonusesByCategory.troops : context.bonusesByCategory.generals;
        bonuses = bonuses[category];
        const damageKey = isRelative ? "relative" : "flat";

        if (key == 0) {
            // add to all categories
            for (const k in bonuses) {
                bonuses[k][damageKey] += damage;
            }
        } else {
            // or to certain key in category
            bonuses[key][damageKey] += damage;
        }
    }

    _addIncreasedDamageToUnit(context, unit, damage) {
        context.unitBonuses[unit.template].relative += damage;
    }

    _addExtraDamageToUnit(context, unit, damage) {
        context.unitBonuses[unit.template].flat += damage;
    }

    _addDamagePerUnitsTypeUsed({ abilityTemplate, ...params }) {
        this._addDamagePerUnitsCategoryUsed({ ...params, category: TypeCategory, key: abilityTemplate.unitType })
    }

    _addDamagePerUnitsWeaponUsed({ abilityTemplate, ...params }) {
        this._addDamagePerUnitsCategoryUsed({ ...params, category: WeaponCategory, key: abilityTemplate.weapon })
    }

    _addDamagePerUnitsElementUsed({ abilityTemplate, ...params }) {
        this._addDamagePerUnitsCategoryUsed({ ...params, category: ElementCategory, key: abilityTemplate.element })
    }

    _addDamagePerUnitsCategoryUsed({ context, abilityTemplate, stars, category, key, isTroopRef, isRelative }) {
        const quantities = isTroopRef ? context.quantities.troops : context.quantities.generals;
        const totalUnitsOfCategory = quantities[category][key]
        const damage = this._getAbilityValue(abilityTemplate, stars) * totalUnitsOfCategory;
        if (isRelative) {
            this._addIncreasedDamageToUnit(context, unit, damage);
        } else {
            this._addExtraDamageToUnit(context, unit, damage);
        }
    }

    _addUnitsDamageWhenUnitsUsed({ context, abilityTemplate, stars, category, key, isTroopRef, isTroopTarget, isRelative }) {
        const totalUnitsOfType = isTroopRef ? context.quantities.troops[category][key] : context.quantities.generals[category][key];
        if (totalUnitsOfType >= abilityTemplate.unitCount) {
            const damage = this._getAbilityValue(abilityTemplate, stars) * totalUnitsOfType;
            this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, isTroopTarget, isRelative);
        }
    }

    _addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef, isTroopTarget, isRelative }) {
        const totalUnitsOfType = isTroopRef ? context.quantities.troops.type[abilityTemplate.unitType2] : context.quantities.generals.type[abilityTemplate.unitType2];
        this._addDamageToUnitsByType(context, this._getAbilityValue(abilityTemplate, stars) * totalUnitsOfType, abilityTemplate.unitType, isTroopTarget, isRelative);
    }

    _addUnitsDamagePerUnitsOwned({ context, targetUnitsType, category, key, stars, isTroopRef, isTroopTarget, isRelative }) {
        const totalUnits = this._queryOwnedUnits(context, isTroopRef, stars, category, key)
        this._addDamageToUnitsByType(context, this._getAbilityValue(abilityTemplate, stars) * totalUnits, targetUnitsType, isTroopTarget, isRelative);
    }

    _addDamageWhenUnitsUsed({ context, abilityTemplate, category, key, unit, stars, isTroop, isRelative }) {
        let quantities = isTroop ? context.quantities.troops : context.quantities.generals;
        if (quantities[category][key] >= abilityTemplate.unitCount) {
            if (isRelative) {
                this._addIncreasedDamageToUnit(context, unit, this._getAbilityValue(abilityTemplate, stars));
            } else {
                this._addExtraDamageToUnit(context, unit, this._getAbilityValue(abilityTemplate, stars));
            }
        }
    }

    _queryOwnedUnits(context, isTroop, stars, category, key) {
        let totalUnits = 0;
        let categoryIndex;
        if (category == TemplateCategory) {
            categoryIndex = context.ownedUnits[category];
        } else {
            let baseIndex = isTroop ? context.ownedUnits.troops : context.ownedUnits.generals;
            categoryIndex = baseIndex[category];
        }

        for (let i = stars; i <= 5; ++i) {
            totalUnits += categoryIndex[stars][key];
        }

        return totalUnits;
    }

    /**
     * Ability Handlers
     */

    _increasedDamageWhenGeneralsUsed(params) {
        this._addDamageWhenUnitsUsed({ ...params, isTroop: false, category: TypeCategory, key: abilityTemplate.unitType, isRelative: true });
    }

    _increasedDamageWhenTroopsUsed(params) {
        this._addDamageWhenUnitsUsed({ ...params, isTroop: true, category: TypeCategory, key: abilityTemplate.unitType, isRelative: true });
    }

    _increasedDamagePerGeneralTypeUsed({ context, abilityTemplate, stars }) {
        this._addDamagePerUnitsTypeUsed({ context, abilityTemplate, stars, isTroopRef: false, isRelative: true });
    }

    _increasedDamagePerTroopTypeUsed({ context, abilityTemplate, stars }) {
        this._addDamagePerUnitsTypeUsed({ context, abilityTemplate, stars, isTroopRef: true, isRelative: true });
    }

    _increasedDamagePerTroopTypeOwned() {

    }

    _increasedDamagePerTroopElementOwned() {

    }

    _increasedDamagePerGeneralTypeOwned() {

    }

    _increasedTroopsDamagePerTroopTypeUsed() {
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: true, isTroopTarget: true, isRelative: true });
    }

    _increasedTroopsDamagePerGeneralTypeUsed() {
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: false, isTroopTarget: true, isRelative: true });
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
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: false, isTroopTarget: true, isRelative: false });
    }

    _extraDamagePerGeneralTypeUsed({ context, abilityTemplate, stars }) {
        this._addDamagePerUnitsTypeUsed({ context, abilityTemplate, stars, isTroopRef: false, isRelative: false });
    }

    _extraDamageChance({ context, abilityTemplate, stars }) {
        if (this._isTriggered(abilityTemplate.chance)) {
            context.triggers[abilityTemplate.id] = {
                damage: this._getAbilityValue(abilityTemplate, stars)
            };
        }
    }

    _chanceToRestoreStamina({ context, abilityTemplate, stars }) { 
        if (this._isTriggered(abilityTemplate.chance)) {
            context.triggers[abilityTemplate.id] = {
                stamina: this._getAbilityValue(abilityTemplate, stars)
            }
        }
    }

    _chanceToRestoreEnergy({ context, abilityTemplate, stars }) { 
        if (this._isTriggered(abilityTemplate.chance)) {
            context.triggers[abilityTemplate.id] = {
                energy: this._getAbilityValue(abilityTemplate, stars)
            }
        }
    }

    _chanceToHeal({ context, abilityTemplate, stars }) { 
        if (this._isTriggered(abilityTemplate.chance)) {
            context.triggers[abilityTemplate.id] = {
                heal: this._getAbilityValue(abilityTemplate, stars)
            }
        }
    }

    _extraDamagePerTroopTypeUsed({ context, abilityTemplate, stars }) {
        this._addDamagePerUnitsTypeUsed({ context, abilityTemplate, stars, isTroopRef: true, isRelative: false });
    }

    _extraDamagePerGeneralTypeOwned() { }

    _extraDamagePerTroopTypeOwned() { }

    _extraStatToPlayer() { }

    _extraDamagePerTroopOwned() { }

    _extraDamagePerTroopWeaponUsed({ context, abilityTemplate, stars }) {
        this._addDamagePerUnitsWeaponUsed({ context, abilityTemplate, stars, isTroopRef: true, isRelative: false });
    }

    _extraDamagePerTroopElementUsed({ context, abilityTemplate, stars }) {
        this._addDamagePerUnitsElementUsed({ context, abilityTemplate, stars, isTroopRef: true, isRelative: false });
    }

    _increasedDamagePerTroopElementUsed({ context, abilityTemplate, stars }) {
        this._addDamagePerUnitsElementUsed({ context, abilityTemplate, stars, isTroopRef: true, isRelative: true });
    }

    _extraDamagePerTroopWeaponOwned() { }

    _increasedDamagePerTroopOwned() { }

    _increasedDamageWhenTroopsWeaponUsed() {
        this._addDamageWhenUnitsUsed({ ...params, isTroop: true, category: WeaponCategory, key: abilityTemplate.weapon, isRelative: true });
    }

    _extraTroopsDamageWeapon({ context, abilityTemplate, stars }) {
        this._addDamageToUnitsByWeapon(context, this._getAbilityValue(abilityTemplate, stars), abilityTemplate.weapon, true, false);
    }

    _extraTroopsDamageElement({ context, abilityTemplate, stars }) {
        this._addDamageToUnitsByElement(context, this._getAbilityValue(abilityTemplate, stars), abilityTemplate.element, true, false);
    }

    _increasedTroopsDamageWeapon({ context, abilityTemplate, stars }) {
        this._addDamageToUnitsByWeapon(context, this._getAbilityValue(abilityTemplate, stars), abilityTemplate.weapon, true, true);
    }

    _increasedTroopsDamageElement({ context, abilityTemplate, stars }) {
        this._addDamageToUnitsByElement(context, this._getAbilityValue(abilityTemplate, stars), abilityTemplate.element, true, true);
    }

    _extraGeneralsDamage({ context, abilityTemplate, stars }) {
        this._addDamageToUnitsByType(context, this._getAbilityValue(abilityTemplate, stars), abilityTemplate.unitType, false, false);
    }

    _increasedGeneralsDamage({ context, abilityTemplate, stars }) {
        this._addDamageToUnitsByType(context, this._getAbilityValue(abilityTemplate, stars), abilityTemplate.unitType, false, true);
    }

    _extraGeneralsDamagePerGeneralOwned() { }

    _increasedGeneralsDamagePerGeneralOwned() { }

    _extraDamageWhenTroopsUsed(params) {
        this._addDamageWhenUnitsUsed({ ...params, isTroop: true, category: TypeCategory, key: abilityTemplate.unitType, isRelative: false });
    }

    _extraTroopsDamagePerGeneralOwned() { }

    _increasedTroopsDamagePerGeneralOwned() { }

    _extraTroopsDamagePerTroopOwned() { }

    _extraTroopsDamagePerTroopTypeOwned({ context, abilityTemplate, stars }) {
        this._addUnitsDamagePerUnitsOwned({
            context,
            targetUnitsType: abilityTemplate.unitType,
            TypeCategory,
            key: abilityTemplate.unitType2,
            stars,
            isTroopRef: true,
            isTroopTarget: true,
            isRelative: false
        });
    }

    _extraTroopsDamagePerGeneralTypeOwned() { }

    _increasedTroopsDamagePerGeneralTypeOwned() { }

    _increasedGeneralsDamagePerGeneralTypeUsed({ context, abilityTemplate, stars }) {
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: false, isTroopTarget: false, isRelative: true });
    }

    _extraDamagePerGeneralOwned() { }

    _extraStatPerGeneralOwned() { }

    _extraStatPerTroopOwned() { }

    _increasedTroopsDamageWhenTroopsUsed({ context, abilityTemplate, stars }) {
        this._addUnitsDamageWhenUnitsUsed({
            context, abilityTemplate, stars, isTroopRef: true, isTroopTarget: true, isRelative: true,
            category: TypeCategory,
            key: abilityTemplate.unitType2
        });
    }

    _increasedDamageWhenTroopsOwned() { }

    _extraStatPerTroopTypeUsed() { }

    _extraGeneralsDamagePerTroopTypeUsed({ context, abilityTemplate, stars }) {
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: true, isTroopTarget: false, isRelative: false });
    }

    _extraGeneralsDamagePerTroopOwned() { }

    _extraGeneralsDamagePerTroopOwned() { }

    _increasedDamagePerTroopWeaponUsed({ context, abilityTemplate, stars }) {
        this._addDamagePerUnitsWeaponUsed({ context, abilityTemplate, stars, isTroopRef: true, isRelative: true });
    }

    _increasedGeneralsDamagePerTroopOwned() { }
}

export default ArmyResolver;
