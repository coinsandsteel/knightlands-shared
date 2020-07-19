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
    constructor(units, unitTemplates) {
        this._unitTemplates = unitTemplates;
        this._units = { ...units };
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

        for (let stars = 1; stars <= 5; ++stars) {
            this._initField(this.index[TemplateCategory], stars, {});

            this._initField(this.index.troops[TypeCategory], stars, {});
            this._initField(this.index.troops[ElementCategory], stars, {});
            this._initField(this.index.troops[WeaponCategory], stars, {});

            this._initField(this.index.generals[TypeCategory], stars, {});
        }

        this._build(units);
    }

    _addOrModify(obj, key, value) {
        obj[key] = (obj[key] || 0) + value;
    }

    _initField(obj, key, value) {
        obj[key] = (obj[key] || value);
    }

    _build(units) {
        let index = this.index;

        for (let id in units) {
            const unit = units[id];
            const unitTemplate = this._unitTemplates[unit.template];
            let stars = unit.promotions + unitTemplate.stars;
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
    }

    hasUnit(unit) {
        return !!this._units[unit.id];
    }

    update(newUnits, removedUnits) {
        this._build(newUnits);
    }

    queryOwnedUnits(context, isTroop, stars, category, key) {
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
}
