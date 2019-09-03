'use strict';

const {
    getSlot
  } = require("./equipment_slot");

class ItemStatResolver {
    constructor(statConversions, itemPower, slotFactors) {
        this._conversions = statConversions;
        this._itemPower = itemPower;
        this._slotFactors = slotFactors;
    }

    getStatValue(itemRarity, itemSlot, itemLevel, stat, statWeight) {
        let itemTargetPower = this._itemPower[itemRarity][itemLevel - 1];
        let statConversionRate = this._conversions[stat];
        if (statConversionRate === undefined) {
            statConversionRate = 0;
        }

        // statWeight is already normalized
        let slotFactor = this._slotFactors[itemSlot] || 1;
        let value = Math.ceil(itemTargetPower * statWeight * slotFactor / statConversionRate);
        return Number.isNaN(value) ? 0 : value;
    }

    convertStats(template, itemLevel) {
        let stats = {};
        const powerFactor = template.powerFactor < 0.001 ? 0 : 1;

        for (let idx in template.statWeights) {
            let statWeight = template.statWeights[idx];

            let statValue = this.getStatValue(template.rarity, getSlot(template.equipmentType), itemLevel, statWeight.stat, statWeight.valueWeight) * powerFactor;
            if (statValue != 0) {
                stats[statWeight.stat] = statValue;
            }
        }

        return stats;
    }
}

export default ItemStatResolver;