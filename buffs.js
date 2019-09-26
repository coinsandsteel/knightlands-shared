import {
    DefaultStats
}
    from "./character_stat";

class Buffs {
    constructor(rawStats, buffs) {
        this._rawStats = rawStats;
        this._buffs = buffs;

        this.bonusStats = { };
        this.finalStats = { ...DefaultStats };
    }

    calculate(raidId) {
        this.bonusStats = { ...DefaultStats };

        let i = 0;
        const length = this._buffs.length;

        for (; i < length; ++i) {
            const buff = this._buffs[i];
            if (raidId != buff.raid) {
                continue;
            }

            let value = buff.value;
            if (buff.relative) {
                value = this._rawStats[buff.stat] * buff.value / 100;
            }

            this.bonusStats[buff.stat] += value;
        }

        this.finalStats = { ...DefaultStats };
        for (let stat in this.bonusStats) {
            this.finalStats[stat] = this.bonusStats[stat] + this._rawStats[stat];
        }
    }
}

export default Buffs;