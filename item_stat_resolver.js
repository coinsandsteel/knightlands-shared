'use strict';

const {
    getSlot
} = require("./equipment_slot");
const ItemType = require("./item_type");

export default class ItemStatResolver {
    constructor(statConversions, itemPower, slotFactors, charmPowerFactor) {
        this._conversions = statConversions;
        this._itemPower = itemPower;
        this._slotFactors = slotFactors;
        this._charmPowerFactor = charmPowerFactor;
    }

    inverseStats(stats) {
        let total = 0;
        for (let stat in stats) {
            let statConversionRate = this._conversions[stat];
            if (statConversionRate === undefined) {
                statConversionRate = 1;
            }

            total += stats[stat] * statConversionRate;
        }

        return Math.floor(total);
    }

    powerToStatValue(powerValue, stat) {
        let statConversionRate = this._conversions[stat];
        if (statConversionRate === undefined) {
            statConversionRate = 1;
        }
        return powerValue * statConversionRate;
    }

    getStatValue(itemRarity, itemSlot, itemLevel, enchantingLevel, stat, statWeight) {
        const enchantingFactor = 1 + (enchantingLevel || 0) * 0.1;
        let itemTargetPower = this._itemPower[itemRarity][itemLevel - 1];
        let statConversionRate = this._conversions[stat];
        if (statConversionRate === undefined) {
            statConversionRate = 1;
        }

        // statWeight is already normalized
        let slotFactor = this._slotFactors[itemSlot] || 1;
        let value = (itemTargetPower * statWeight * slotFactor / statConversionRate * enchantingFactor);
        return Number.isNaN(value) ? 0 : value;
    }

    getStatValueForCharm(itemRarity, itemLevel, enchantingLevel, stat, statWeight) {
        const enchantingFactor = 1 + (enchantingLevel || 0) * 0.1;
        let itemTargetPower = this._itemPower[itemRarity][itemLevel - 1];
        let statConversionRate = this._conversions[stat];
        if (statConversionRate === undefined) {
            statConversionRate = 1;
        }

        let value = (itemTargetPower * statWeight * this._charmPowerFactor / statConversionRate * enchantingFactor);
        return Number.isNaN(value) ? 0 : value;
    }

    convertStats(template, itemLevel, enchantingLevel) {
        let stats = {};
        const powerFactor = template.powerFactor < 0.001 ? 0 : template.powerFactor;

        let statFunc;
        if (template.type == ItemType.Charm) {
            statFunc = this.getStatValueForCharm.bind(this, template.rarity, itemLevel, enchantingLevel);
        } else {
            statFunc = this.getStatValue.bind(this, template.rarity, getSlot(template.equipmentType), itemLevel, enchantingLevel);
        }

        if (template.statWeights) {
            for (let statWeight of template.statWeights) {
                let statValue = statFunc(statWeight.stat, statWeight.valueWeight) * powerFactor;
                if (statValue) {
                    stats[statWeight.stat] = Math.ceil(statValue);
                }
            }
        }

        return stats;
    }
}
