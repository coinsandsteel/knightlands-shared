import CharacterStat from "./character_stat";
import UnitAbilityType from "./unit_ability_type.json";
import { WeaponCategory, ElementCategory, TypeCategory, UnitsIndex, TemplateCategory } from "./units_index";

function defaultRandomRange(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

class ArmyResolver {
    constructor(abilitiesMeta, statResolver, unitTemplates, troopsMeta, generalsMeta, randomRange = defaultRandomRange) {
        this._troopsMeta = troopsMeta;
        this._generalsMeta = generalsMeta;
        this._meta = abilitiesMeta;
        this._statResolver = statResolver;
        this._unitTemplates = unitTemplates;
        this._abilityHandlers = {};
        this._randomRange = randomRange;

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

    _isTriggered(chance) {
        return this._randomRange(1, 100, true) <= chance;
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

        return Math.floor(this._statResolver.powerToStatValue(levelRecord.statValue, CharacterStat.Attack) * 100) / 100;
    }

    _addOrModify(obj, key, value) {
        obj[key] = (obj[key] || 0) + value;
    }

    _initField(obj, key, value) {
        obj[key] = (obj[key] || value);
    }

    /**
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
    resolve(units, unitsIndex) {
        const context = {
            quantities: {},
            unitBonuses: {},
            globalBonuses: {},
            bonusesByCategory: {},
            troops: [],
            generals: [],
            index: unitsIndex,
            damageTriggers: {},
            stamina: {},
            energy: {},
            health: {},
            stats: {},
            raidBonuses: {}
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
                
                this._abilityHandlers[abilityTemplate.type]({
                    context, abilityTemplate, unit, unitTemplate, stars
                });
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

            let bonuses = categoryBonuses.type[unitTemplate.unitType];
            finalBonuses.flat += bonuses.flat;
            finalBonuses.relative += bonuses.relative;

            if (unit.troop) {
                bonuses = categoryBonuses.weapon[unitTemplate.weaponType];
                finalBonuses.flat += bonuses.flat;
                finalBonuses.relative += bonuses.relative;

                bonuses = categoryBonuses.element[unitTemplate.element];
                finalBonuses.flat += bonuses.flat;
                finalBonuses.relative += bonuses.relative;
            }

            // apply relative bonus to flat
            unitsDamageOutput[unit.id] = Math.floor(finalBonuses.flat * (100 + finalBonuses.relative) / 100);
            totalDamageOutput += unitsDamageOutput[unit.id];

            // scale proc'd damages
            const damageProcd = context.damageTriggers[unit.id];
            if (damageProcd) {
                context.damageTriggers[unit.id] = Math.floor(damageProcd * (100 + finalBonuses.relative) / 100);
                // contribute to total damage inflicted
                totalDamageOutput += context.damageTriggers[unit.id];
            }
        }

        return { 
            totalDamageOutput, 
            unitsDamageOutput,
            damageProcs: context.damageTriggers,
            stamina: context.stamina,
            energy: context.energy,
            health: context.health,
            playerStats: context.stats
        };
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
        this._addDamagePerUnitsCategoryUsed({ ...params, abilityTemplate, category: TypeCategory, key: abilityTemplate.unitType })
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
        const totalUnitsOfCategory = this._getUnitQuantity(context, isTroop, category, key);
        if (totalUnitsOfCategory >= abilityTemplate.unitCount) {
            if (isRelative) {
                this._addIncreasedDamageToUnit(context, unit, this._getAbilityValue(abilityTemplate, stars));
            } else {
                this._addExtraDamageToUnit(context, unit, this._getAbilityValue(abilityTemplate, stars));
            }
        }
    }

    _queryOwnedUnits(context, isTroop, stars, category, key, max = -1) {
        let count = context.index.queryOwnedUnits(isTroop, stars, category, key);
        if (max != -1 && count > max) {
            count = max;
        }
        return count;
    }

    _addStat(context, stat, value) {
        this._addOrModify(context.stats, stat, value);
    }

    /**
     * Ability Handlers
     */

    _extraDamage({ context, abilityTemplate, unit, stars }) {
        this._addExtraDamageToUnit(context, unit, this._getAbilityValue(abilityTemplate, stars));
    }

    _increasedDamageWhenGeneralsUsed({ abilityTemplate, ...params }) {
        this._addDamageWhenUnitsUsed({ ...params, abilityTemplate, isTroop: false, category: TypeCategory, key: abilityTemplate.unitType, isRelative: true });
    }

    _increasedDamageWhenTroopsUsed({ abilityTemplate, ...params }) {
        this._addDamageWhenUnitsUsed({ ...params, abilityTemplate, isTroop: true, category: TypeCategory, key: abilityTemplate.unitType, isRelative: true });
    }

    _increasedDamagePerGeneralTypeUsed(params) {
        this._addDamagePerUnitsTypeUsed({ ...params, isTroopRef: false, isRelative: true });
    }

    _increasedDamagePerTroopTypeUsed(params) {
        this._addDamagePerUnitsTypeUsed({ ...params, isTroopRef: true, isRelative: true });
    }

    _increasedDamagePerTroopTypeOwned({ context, abilityTemplate, stars, unit }) {
        const totalUnits = this._queryOwnedUnits(context, true, stars, TypeCategory, abilityTemplate.unitType2, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addIncreasedDamageToUnit(context, damage, abilityTemplate.unitType, true, false);
    }

    _increasedDamagePerTroopElementOwned({ context, abilityTemplate, stars, unit }) {
        const totalUnits = this._queryOwnedUnits(context, true, stars, ElementCategory, abilityTemplate.element, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addIncreasedDamageToUnit(context, unit, damage);
    }

    _increasedDamagePerGeneralTypeOwned({ context, abilityTemplate, stars, unit }) {
        const totalUnits = this._queryOwnedUnits(context, false, stars, TypeCategory, abilityTemplate.unitType2, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addIncreasedDamageToUnit(context, unit, damage);
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

    _extraDamageChance({ context, unit, abilityTemplate, stars }) {
        if (this._isTriggered(abilityTemplate.chance)) {
            this._addOrModify(context.damageTriggers, unit.id, this._getAbilityValue(abilityTemplate, stars));
        }
    }

    _chanceToRestoreStamina({ unit, context, abilityTemplate, stars }) {
        if (this._isTriggered(abilityTemplate.chance)) {
            this._addOrModify(context.stamina, unit.id, this._getAbilityValue(abilityTemplate, stars));
        }
    }

    _chanceToRestoreEnergy({ unit, context, abilityTemplate, stars }) {
        if (this._isTriggered(abilityTemplate.chance)) {
            this._addOrModify(context.energy, unit.id, this._getAbilityValue(abilityTemplate, stars));
        }
    }

    _chanceToHeal({ unit, context, abilityTemplate, stars }) {
        if (this._isTriggered(abilityTemplate.chance)) {
            this._addOrModify(context.health, unit.id, this._getAbilityValue(abilityTemplate, stars));
        }
    }

    _extraDamagePerTroopTypeUsed(params) {
        this._addDamagePerUnitsTypeUsed({ ...params, isTroopRef: true, isRelative: false });
    }

    _extraDamagePerGeneralTypeOwned({ context, unit, abilityTemplate, stars }) { 
        const totalUnits = this._queryOwnedUnits(context, false, stars, TypeCategory, abilityTemplate.unitType, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addExtraDamageToUnit(context, unit, damage);
    }

    _extraDamagePerTroopTypeOwned({ context, unit, abilityTemplate, stars }) {
        const totalUnits = this._queryOwnedUnits(context, true, stars, TypeCategory, abilityTemplate.unitType, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addExtraDamageToUnit(context, unit, damage);
     }

    _extraStatToPlayer({ context, stars, abilityTemplate }) { 
        const statValue = this._getAbilityValue(abilityTemplate, stars);
        this._addStat(context, abilityTemplate.stat, statValue);
    }

    _extraDamagePerTroopOwned({ context, unit, abilityTemplate, stars }) { 
        const totalUnits = this._queryOwnedUnits(context, true, stars, TemplateCategory, abilityTemplate.troop, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addExtraDamageToUnit(context, unit, damage);
    }

    _extraDamagePerTroopWeaponUsed(params) {
        this._addDamagePerUnitsWeaponUsed({ ...params, isTroopRef: true, isRelative: false });
    }

    _extraDamagePerTroopElementUsed(params) {
        this._addDamagePerUnitsElementUsed({ ...params, isTroopRef: true, isRelative: false });
    }

    _increasedDamagePerTroopElementUsed(params) {
        this._addDamagePerUnitsElementUsed({ ...params, isTroopRef: true, isRelative: true });
    }

    _extraDamagePerTroopWeaponOwned({ context, unit, abilityTemplate, stars }) { 
        const totalUnits = this._queryOwnedUnits(context, true, stars, WeaponCategory, abilityTemplate.weaponType, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addExtraDamageToUnit(context, unit, damage);
    }

    _increasedDamagePerTroopOwned({ context, unit, abilityTemplate, stars }) { 
        const totalUnits = this._queryOwnedUnits(context, true, stars, TemplateCategory, abilityTemplate.troop, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addIncreasedDamageToUnit(context, unit, damage);
    }

    _increasedDamageWhenTroopsWeaponUsed({ ...params, abilityTemplate }) {
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

    _extraGeneralsDamagePerGeneralOwned({ context, abilityTemplate, stars }) { 
        const totalUnits = this._queryOwnedUnits(context, false, stars, TemplateCategory, abilityTemplate.general, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, false, false);
    }

    _increasedGeneralsDamagePerGeneralOwned({ context, abilityTemplate, stars }) {
        const totalUnits = this._queryOwnedUnits(context, false, stars, TemplateCategory, abilityTemplate.general, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, false, true);
     }

    _extraDamageWhenTroopsUsed(params) {
        this._addDamageWhenUnitsUsed({ ...params, isTroop: true, category: TypeCategory, key: abilityTemplate.unitType, isRelative: false });
    }

    _extraTroopsDamagePerGeneralOwned({ context, abilityTemplate, stars }) { 
        const totalUnits = this._queryOwnedUnits(context, false, stars, TemplateCategory, abilityTemplate.general, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, true, false);
    }

    _increasedTroopsDamagePerGeneralOwned({ context, abilityTemplate, stars }) { 
        const totalUnits = this._queryOwnedUnits(context, false, stars, TemplateCategory, abilityTemplate.general, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, true, true);
    }

    _extraTroopsDamagePerTroopOwned({ context, abilityTemplate, stars }) { 
        const totalUnits = this._queryOwnedUnits(context, true, stars, TemplateCategory, abilityTemplate.troop, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, true, false);
    }

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

    _extraTroopsDamagePerGeneralTypeOwned({ context, abilityTemplate, stars }) {
        const totalUnits = this._queryOwnedUnits(context, false, stars, TypeCategory, abilityTemplate.unitType2, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, true, false);
     }

    _increasedTroopsDamagePerGeneralTypeOwned({ context, abilityTemplate, stars }) {
        const totalUnits = this._queryOwnedUnits(context, false, stars, TypeCategory, abilityTemplate.unitType2, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, true, true);
     }

    _increasedGeneralsDamagePerGeneralTypeUsed({ context, abilityTemplate, stars }) {
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: false, isTroopTarget: false, isRelative: true });
    }

    _extraDamagePerGeneralOwned() { 
        const totalUnits = this._queryOwnedUnits(context, true, stars, TemplateCategory, abilityTemplate.general, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addExtraDamageToUnit(context, damage, abilityTemplate.unitType, true, false);
    }

    _extraStatPerGeneralOwned({ context, stars, abilityTemplate }) { 
        const totalUnits = this._queryOwnedUnits(context, false, stars, TemplateCategory, abilityTemplate.general, abilityTemplate.max);
        const statValue = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addStat(context, abilityTemplate.stat, statValue);
    }

    _extraStatPerTroopOwned({ context, stars, abilityTemplate }) { 
        const totalUnits = this._queryOwnedUnits(context, true, stars, TemplateCategory, abilityTemplate.troop, abilityTemplate.max);
        const statValue = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addStat(context, abilityTemplate.stat, statValue);
    }

    _increasedTroopsDamageWhenTroopsUsed({ context, abilityTemplate, stars }) {
        this._addUnitsDamageWhenUnitsUsed({
            context, abilityTemplate, stars, isTroopRef: true, isTroopTarget: true, isRelative: true,
            category: TypeCategory,
            key: abilityTemplate.unitType2
        });
    }

    _increasedDamageWhenTroopsOwned({ context, unit, stars, abilityTemplate }) {
        const totalUnits = this._queryOwnedUnits(context, true, stars, TypeCategory, abilityTemplate.unitType);
        if (totalUnits >= abilityTemplate.unitCount) {
            this._addIncreasedDamageToUnit(context, unit, this._getAbilityValue(abilityTemplate, stars));
        }
    }

    _extraStatPerTroopTypeUsed({ context, abilityTemplate, stars }) {
        const totalUnitsOfType = this._getUnitQuantity(context, true, TypeCategory, abilityTemplate.unitType2);
        const statValue = this._getAbilityValue(abilityTemplate, stars) * totalUnitsOfType;
        this._addStat(context, abilityTemplate.stat, statValue);
    }

    _extraGeneralsDamagePerTroopTypeUsed({ context, abilityTemplate, stars }) {
        this._addUnitsDamagePerUnitsUsed({ context, abilityTemplate, stars, isTroopRef: true, isTroopTarget: false, isRelative: false });
    }

    _extraGeneralsDamagePerTroopOwned({ context, abilityTemplate, stars }) { 
        const totalUnits = this._queryOwnedUnits(context, true, stars, TemplateCategory, abilityTemplate.troop, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, false, false);
    }

    _increasedDamagePerTroopWeaponUsed({ context, abilityTemplate, stars }) {
        this._addDamagePerUnitsWeaponUsed({ context, abilityTemplate, stars, isTroopRef: true, isRelative: true });
    }

    _increasedGeneralsDamagePerTroopOwned({ context, abilityTemplate, stars }) { 
        const totalUnits = this._queryOwnedUnits(context, true, stars, TemplateCategory, abilityTemplate.troop, abilityTemplate.max);
        const damage = totalUnits * this._getAbilityValue(abilityTemplate, stars);
        this._addDamageToUnitsByType(context, damage, abilityTemplate.unitType, false, true);
    }

    _extraDamageVsRaid({ context, abilityTemplate, stars }) { 

    }

    _increasedTroopsDamageVsRaid({ context, abilityTemplate, stars }) {

    }
}

export default ArmyResolver;
