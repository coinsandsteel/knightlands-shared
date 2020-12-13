export const WeaponCategory = "weapon";
export const ElementCategory = "element";
export const TypeCategory = "type";
export const TemplateCategory = "template";


/* 
    all passives require "at least X stars" for unit to be included
    for constant time query of all units of X stars and higher 
    index must have units separated by each star
 */
export class UnitsIndex {
    constructor(units, reserve, unitTemplates) {
        this._unitTemplates = unitTemplates;
        this.index = {
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
        this.reserveIndex = {
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
            this._initField(this.index[TemplateCategory], stars, {});
            this._initField(this.index.troops[TypeCategory], stars, {});
            this._initField(this.index.troops[ElementCategory], stars, {});
            this._initField(this.index.troops[WeaponCategory], stars, {});
            this._initField(this.index.generals[TypeCategory], stars, {});

            this._initField(this.reserveIndex[TemplateCategory], stars, {});
            this._initField(this.reserveIndex.troops[TypeCategory], stars, {});
            this._initField(this.reserveIndex.troops[ElementCategory], stars, {});
            this._initField(this.reserveIndex.troops[WeaponCategory], stars, {});
            this._initField(this.reserveIndex.generals[TypeCategory], stars, {});
        }

        this._build(units, reserve);
    }

    _addOrModify(obj, key, value) {
        obj[key] = (obj[key] || 0) + value;
    }

    _initField(obj, key, value) {
        obj[key] = (obj[key] || value);
    }

    _build(units, reserve) {
        for (let id in units) {
            const unit = units[id];
            this._indexUnit(this.index, unit);
        }

        for (let key in reserve) {
            const unit = reserve[key];
            this._indexUnit(this.reserveIndex, unit);
        }
    }

    _indexUnit(index, unit, indexTemplate) {
        const unitTemplate = this._unitTemplates[unit.template];
        let stars = unit.promotions + unitTemplate.stars;

        // treat units higher than 5 stars as 5 stars for simplicity
        if (stars > 5) {
            stars = 5;
        }

        // it might be a reserved unit, and will have explicit count field
        const count = unit.count || 1;
        this._addOrModify(index[TemplateCategory][stars], unitTemplate.id, count);

        if (unitTemplate.troop) {
            this._addOrModify(index.troops[TypeCategory][stars], unitTemplate.unitType, count);
            this._addOrModify(index.troops[ElementCategory][stars], unitTemplate.element, count);
            this._addOrModify(index.troops[WeaponCategory][stars], unitTemplate.weapon, count);
        } else {
            this._addOrModify(index.generals[TypeCategory][stars], unitTemplate.unitType, count);
        }
    }

    update(newUnits, removedUnits) {
        this._build(newUnits);
    }

    queryOwnedUnits(isTroop, stars, category, key, fromReserve) {
        return this._queryOwnedUnits(isTroop, stars, category, key, fromReserve ? this.reserveIndex : this.index);
    }
    
    _queryOwnedUnits(isTroop, stars, category, key, index) {
        let totalUnits = 0;
        let categoryIndex;
        if (category == TemplateCategory) {
            categoryIndex = index[TemplateCategory];
        } else {
            let baseIndex = isTroop ? index.troops : index.generals;
            categoryIndex = baseIndex[category];
        }

        for (let i = stars; i <= 5; ++i) {
            totalUnits += categoryIndex[stars][key] || 0;
        }

        return totalUnits;
    }
}
