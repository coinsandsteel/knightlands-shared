import UpgradableStats from "./upgradable_character_stats";

export default {
    getStatCost(stat, level) {
        level += 1;
        switch (stat) {
            case UpgradableStats.Health:
                return Math.ceil(Math.pow(level, 2) * 2.3);
            case UpgradableStats.Attack:
                return Math.ceil(Math.pow(level, 2.1) * 3);
            case UpgradableStats.Luck:
                return Math.ceil(Math.pow(level, 2) * 2);
            case UpgradableStats.Energy:
                return Math.ceil(Math.pow(level, 2.4) * 2);
            case UpgradableStats.Stamina:
                return Math.ceil(Math.pow(level, 2.6) * 2);
        }
    },

    getMaxStat(characterLevel) {
        return characterLevel * 5;
    }
}