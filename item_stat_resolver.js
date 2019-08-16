'use strict';

class ItemStatResolver {
    constructor(statConversions, itemPower) {
        this._conversions = statConversions;
        this._itemPower = itemPower;
    }

    getStatValue(itemRarity, itemLevel, stat, statWeight) {
        let itemTargetPower = this._itemPower[itemRarity][itemLevel - 1];
        let statConversionRate = this._conversions[stat];
        if (statConversionRate === undefined) {
            statConversionRate = 0;
        }

        // statWeight is already normalized
        return Math.ceil(itemTargetPower * statWeight);
    }

    convertStats(template, itemLevel) {
        let stats = {};
        const powerFactor = template.powerFactor < 0.001 ? 0 : 1;

        for (let idx in template.statWeights) {
            let statWeight = template.statWeights[idx];

            let statValue = this.getStatValue(template.rarity, itemLevel, statWeight.stat, statWeight.valueWeight) * powerFactor;
            if (statValue != 0) {
                stats[statWeight.stat] = statValue;
            }
        }

        return stats;
    }
}

export default ItemStatResolver;