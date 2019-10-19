import TrialCardModifiers from "./trial_card_modifiers";

class TrialCardsResolver {
    constructor(leveledModifiers, cardModifiers) {
        this._leveledModifiers = leveledModifiers;
        this._cardModifiers = cardModifiers;
    }

    getCurrentValue(fightMeta, cardEffect) {
        const cardMeta = fightMeta && fightMeta.cards ? fightMeta.cards[cardEffect] : null;
        const cardBaseValue = cardMeta ? cardMeta.value : 0;
        const modValue = this._modifyValue(cardBaseValue, cardEffect);
        return modValue;
    }

    isMaxLevel(cardEffect) {
        let level = (this._leveledModifiers[cardEffect] || 0);
        return modifier.levels.length <= level + 1;
    }

    getNextValue(cardEffect) {
        return this._modifyValue(0, cardEffect, true);
    }

    _modifyValue(value, cardEffect, next = false) {
        const modifier = this._cardModifiers[cardEffect];

        // no modifier, do not do anything
        if (!modifier) {
            return value;
        }

        let level = (this._leveledModifiers[cardEffect] || 0);
        if (next) {
            level++;
        }

        if (modifier.levels.length <= level) {
            level = modifier.levels.length - 1;
        }

        const modValue = modifier.levels[level].value;

        if (next) {
            value = modValue;
        } else {
            switch (modifier.type) {
                case TrialCardModifiers.FlatValue:
                    value += modValue;
                    break;

                case TrialCardModifiers.IncreaseRelatively:
                    value = Math.floor(value * (100 + modValue) / 100);
                    break;

                case TrialCardModifiers.DecreaseRelatively:
                    value = Math.floor(value * (100 - modValue) / 100);
                    break;
            }
        }



        return value;
    }
}

export default TrialCardsResolver;