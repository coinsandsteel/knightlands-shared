import CharacterStat from "./character_stat";
import UnitAbilityType from "./unit_ability_type.json";
import { WeaponCategory, ElementCategory, TypeCategory, UnitsIndex } from "./units_index";

class ArmyResolver {
    constructor(abilitiesMeta, statResolver, unitTemplates, troopsMeta, generalsMeta) {
        this._troopsMeta = troopsMeta;
        this._generalsMeta = generalsMeta;
        this._meta = abilitiesMeta;
        this._statResolver = statResolver;
        this._unitTemplates = unitTemplates;
        this._abilityHandlers = {};

        for (let key in UnitAbilityType) {
            const typeValue = UnitAbilityType[key];
            // ability handler is in form of
            if (!this[`_${typeValue}`]) {
                console.error(`unknown handler ${`_${typeValue}`}`);
                continue;
            }
            this._abilityHandlers[typeValue] = this[`_${typeValue}`].bind(this);
        }
    }

    _getAbilityTemplate(isTroop, abilityId) {
        const abilityRecords = isTroop ? this._meta.troops : this._meta.generals;
        return abilityRecords[abilityId];
    }

    getStars(unit) {
        // stars are based on stars + promotion level
        const template = this._unitTemplates[unit.template];
        return template.stars + unit.promotions;
    }

    getAbilityLevelValue(unit, abilityId) {
        const abilityTemplate = this._getAbilityTemplate(unit.troop, abilityId);
        const levelRecord = abilityTemplate.levels[this.getStars(unit) - 1];

        if (!levelRecord) {
            return 0;
        }

        return Math.floor(this._statResolver.powerToStatValue(levelRecord.statValue, CharacterStat.Attack) * 100)/100;
    }

    _addOrModify(obj, key, value) {
        obj[key] = (obj[key] || 0) + value;
    }

    _initField(obj, key, value) {
        obj[key] = (obj[key] || value);
    }

    /**
     * 
     * @param {Object} owned units inventory
     */
    buildUnitsIndex(units) {
        return new UnitsIndex(units, this._unitTemplates);
    }

    estimateDamage(unit, unitsIndex) {
        return this.estimateDamageOutput({ [unit.id]: unit }, unitsIndex);
    }

    getDamage(unit, nextLevel, nextStar) {
        let level = unit.level;
        let stars = this.getStars(unit) + (nextStar ? 1 : 0);
        if (nextLevel) {
            level++;
        }

        return this._getFlatDamage(unit, level, stars, false);
    }

    _getFlatDamage(unit, level, stars, includeItems) {
        let meta = unit.troop ? this._troopsMeta : this._generalsMeta;
        let totalDamage = meta.leveling.levelingSteps[level - 1].power;

        if (includeItems) {
            for (const itemId in unit.items) {
                const item = unit.items[itemId];
                if (item) {
                    const stats = this._statResolver.convertStats(item.template, item.level || 1, item.enchant || 0);
                    if (stats.attack) {
                        totalDamage += stats.attack;
                    }
                }
            }
        }

        let record = meta.fusionMeta.maxLevelByStars.find(x => x.stars == stars);
        if (!record) {
            record = meta.fusionMeta.maxLevelByStars.find(x => x.stars == stars - 1);
        }

        return totalDamage + record.power;
    }

    /**
     * 
     * @param {Array} units list of units to estimate damage for - usually will represent whole legion
     * @param {Object} unitsIndex table of owned units indexed by type, weapon, element and stars
     */
    estimateDamageOutput(units, unitsIndex) {
        const context = {
            quantities: {},
            unitBonuses: {},
            globalBonuses: {},
            bonusesByCategory: {},
            troops: [],
            generals: [],
            index: unitsIndex
        };

        // calculate troops and generals quantity by weapon type, element and unit type
        const troopQuantities = { weapon: {}, element: {}, type: {} };
        const generalQuantities = { type: {} };

        // prepare bonuses by category for constant modification of units of that category
        const troopBonuses = { weapon: {}, element: {}, type: {} };
        const generalBonuses = { type: {} };

        for (let i in units) {
            const unit = units[i]
            const unitTemplate = this._unitTemplates[unit.template];

            if (unit.troop) {
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
                flat: this._getFlatDamage(unit, unit.level, this.getStars(unit), true),
                relative: 0
            };
        }

        context.quantities.troops = troopQuantities;
        context.quantities.generals = generalQuantities;

        context.bonusesByCategory.troops = troopBonuses;
        context.bonusesByCategory.generals = generalBonuses;

        for (let i in units) {
            const unit = units[i];
            const unitTemplate = this._unitTemplates[unit.template];
            const totalAbilities = unit.abilities.length;
            for (let j = 0; j < totalAbilities; ++j) {
                const abilityTemplate = this._getAbilityTemplate(unit.troop, unit.abilities[j]);
                if (!abilityTemplate) {
                    console.error(`ability template id ${unit.abilities[j]} doesn't exist`)
                    continue;
                }

                const stars = unit.promotions + unitTemplate.stars;

                if (!this._abilityHandlers[abilityTemplate.type]) {
                    console.error(`no handler for ability ${abilityTemplate.type}`);
                }
                console.log(`call _${abilityTemplate.type}`)
                this._abilityHandlers[abilityTemplate.type]({
                    context, abilityTemplate, unit, unitTemplate, stars
                });

                console.log(context);
            }
        }

        let totalDamageOutput = 0;
        let unitsDamageOutput = {};

        // last iteration will apply category bonuses to each unit 
        // after apply relative increases to final flat damage
        for (let i in units) {
            const unit = units[i];
            const unitTemplate = this._unitTemplates[unit.template];

            const finalBonuses = context.unitBonuses[unit.template];
            const categoryBonuses = unit.troop ? context.bonusesByCategory.troops : context.bonusesByCategory.generals;

            for (let t in categoryBonuses.type) {
                if (unitTemplate.unitType == t) {
                    finalBonuses.flat += categoryBonuses.type[t].flat;
                    finalBonuses.relative += categoryBonuses.type[t].relative;
                    break;
                }
            }

            if (unit.troop) {
                for (let w in categoryBonuses.weapon) {
                    if (unitTemplate.weaponType == w) {
                        finalBonuses.flat += categoryBonuses.weapon[w].flat;
                        finalBonuses.relative += categoryBonuses.weapon[w].relative;
                        break;
                    }
                }

                for (let e in categoryBonuses.element) {
                    if (unitTemplate.element == e) {
                        finalBonuses.flat += categoryBonuses.element[e].flat;
                        finalBonuses.relative += categoryBonuses.element[e].relative;
                        break;
                    }
                }
            }

            // apply relative bonus to flat
            unitsDamageOutput[unit.id] = Math.floor(finalBonuses.flat * (100 + finalBonuses.relative) / 100);
            totalDamageOutput += unitsDamageOutput[unit.id];
        }
        console.log({ totalDamageOutput, unitsDamageOutput })
        return { totalDamageOutput, unitsDamageOutput };
    }

    _getUnitQuantity(context, isTroop, category, key) {
        const quantities = isTroop ? context.quantities.troops : context.quantities.generals;
        return quantities[category][key] || 0;
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
        } else if (bonuses[key]) {
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
        this._addDamagePerUnitsCategoryUsed({ ...params, abilityTemplate,  category: TypeCategory, key: abilityTemplate.unitType })
    }

    _addDamagePerUnitsWeaponUsed({ abilityTemplate, ...params }) {
        this._addDamagePerUnitsCategoryUsed({ ...params, abilityTemplate, category: WeaponCategory, key: abilityTemplate.weapon })
    }

    _addDamagePerUnitsElementUsed({ abilityTemplate, ...params }) {
        this._addDamagePerUnitsCategoryUsed({ ...params, abilityTemplate, category: ElementCategory, key: abilityTemplate.element })
    }

    _addDamagePerUnitsCategoryUsed({ context, abilityTemplate, unit, stars, category, key, isTroopRef, isRelative }) {
        const totalUnitsOfCategory = this._getUnitQuantity(context, isTroopRef, category, key);
        const damage = this._getAbilityValue(abilityTemplate, stars) * totalUnitsOfCategory;
        if (isRelative) {
            this._addIncreasedDamageToUnit(context, unit, damage);
        } else {
            this._addExtraDamageToUnit(context, unit, damage);
        }
    }

    _addUnitsDamageWhenUnitsUsed({ context, abilityTemplate, stars, category, key, isTroopRef, isTroopTarget, isRelative }) {
        const totalUnitsOfType = this._getUnitQuantity(context, isTroopRef, category, key);
        if (totalUnitsOfType >= abilityTemplate.unitCount) {
            const damage = this._getAbilityValue(abilityTemplate, stars) * totalUnitsOfType;
            this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, isTroopTarget, isRelative);
        }
    }

    _addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef, isTroopTarget, isRelative }) {
        const totalUnitsOfType = this._getUnitQuantity(context, isTroopRef, "type", abilityTemplate.unitType2);
        this._addDamageToUnitsByType(context, this._getAbilityValue(abilityTemplate, stars) * totalUnitsOfType, abilityTemplate.unitType, isTroopTarget, isRelative);
    }

    _addUnitsDamagePerUnitsOwned({ context, targetUnitsType, category, key, stars, isTroopRef, isTroopTarget, isRelative }) {
        const totalUnits = this._queryOwnedUnits(context, isTroopRef, stars, category, key);
        this._addDamageToUnitsByType(context, this._getAbilityValue(abilityTemplate, stars) * totalUnits, targetUnitsType, isTroopTarget, isRelative);
    }

    _addDamageWhenUnitsUsed({ context, abilityTemplate, category, key, unit, stars, isTroop, isRelative }) {
        const totalUnitsOfCategory = this._getUnitQuantity(context, isTroop,category, key);
        if (totalUnitsOfCategory >= abilityTemplate.unitCount) {
            if (isRelative) {
                this._addIncreasedDamageToUnit(context, unit, this._getAbilityValue(abilityTemplate, stars));
            } else {
                this._addExtraDamageToUnit(context, unit, this._getAbilityValue(abilityTemplate, stars));
            }
        }
    }

    _queryOwnedUnits(context, isTroop, stars, category, key) {
        return context.index.queryOwnedUnits(isTroop, stars, category, key);
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

    _increasedDamagePerGeneralTypeUsed(params) {
        this._addDamagePerUnitsTypeUsed({ ...params, isTroopRef: false, isRelative: true });
    }

    _increasedDamagePerTroopTypeUsed(params) {
        this._addDamagePerUnitsTypeUsed({ ...params, isTroopRef: true, isRelative: true });
    }

    _increasedDamagePerTroopTypeOwned() {

    }

    _increasedDamagePerTroopElementOwned() {

    }

    _increasedDamagePerGeneralTypeOwned() {

    }

    _increasedDamageWhenTroopUsed({ context, abilityTemplate, stars, unit }) {
        if (context.index.hasUnit(unit)) {
            this._addIncreasedDamageToUnit(context, unit, this._getAbilityValue(abilityTemplate, stars));
        }
    }

    _increasedTroopsDamagePerTroopTypeUsed(params) {
        this._addUnitsDamagePerUnitsUsed({ ...params, isTroopRef: true, isTroopTarget: true, isRelative: true });
    }

    _increasedTroopsDamagePerGeneralTypeUsed(params) {
        this._addUnitsDamagePerUnitsUsed({ ...params, isTroopRef: false, isTroopTarget: true, isRelative: true });
    }

    _increasedTroopsDamage({ context, abilityTemplate, stars }) {
        this._addDamageToUnitsByType(context, this._getAbilityValue(abilityTemplate, stars), abilityTemplate.unitType, true, true);
    }

    _extraTroopsDamage({ context, abilityTemplate, stars }) {
        this._addDamageToUnitsByType(context, this._getAbilityValue(abilityTemplate, stars), abilityTemplate.unitType, true, false);
    }

    _extraTroopsDamagePerTroopType(params) {
        this._addUnitsDamagePerUnitsUsed({ ...params, isTroopRef: true, isTroopTarget: true, isRelative: false });
    }

    _extraTroopsDamagePerGeneralType(params) {
        this._addUnitsDamagePerUnitsUsed({ ...params, isTroopRef: false, isTroopTarget: true, isRelative: false });
    }

    _extraDamagePerGeneralTypeUsed(params) { 
        this._addDamagePerUnitsTypeUsed({ ...params, isTroopRef: false, isRelative: false });
    }

    _extraDamageChance() { }

    _chanceToRestoreStamina() { }

    _chanceToRestoreEnergy() { }

    _chanceToHeal() { }

    _extraDamagePerTroopTypeUsed(params) { 
        this._addDamagePerUnitsTypeUsed({ ...params, isTroopRef: true, isRelative: false });
    }

    _extraDamagePerGeneralTypeOwned() { }

    _extraDamagePerTroopTypeOwned() { }

    _extraStatToPlayer() { }

    _extraDamagePerTroopOwned() { }

    _extraDamagePerTroopWeaponUsed(params) { 
        this._addDamagePerUnitsWeaponUsed({ ...params, isTroopRef: true, isRelative: false });
    }

    _extraDamagePerTroopElementUsed(params) { 
        this._addDamagePerUnitsElementUsed({ ...params, isTroopRef: true, isRelative: false });
    }

    _increasedDamagePerTroopElementUsed(params) { 
        this._addDamagePerUnitsElementUsed({ ...params, isTroopRef: true, isRelative: true });
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

    _extraDamageVsRaid() {}

    _increasedTroopsDamageVsRaid() {}
}

export default ArmyResolver;
