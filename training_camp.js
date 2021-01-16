import UpgradableStats from "./upgradable_character_stats";

export default {
    getStatCost(stat, level) {
        return 500 + 250 * level;
    },

    getStatResourceCost(stat, level) {
        return Math.ceil(Math.pow(level + 1, 0.4) * 1.1);
    },

    getMaxStat(characterLevel) {
        return characterLevel * 5;
    }
}
