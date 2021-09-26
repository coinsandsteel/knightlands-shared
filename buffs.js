import CharacterStat, {
    DefaultStats
}
from "./character_stat";

let EmptyStats = {...DefaultStats };
delete EmptyStats[CharacterStat.DropItemQuest]
delete EmptyStats[CharacterStat.DropItemInRaid]
delete EmptyStats[CharacterStat.ArmyDamageInRaidElement]

for (let stat in EmptyStats) {
    EmptyStats[stat] = 0;
}

class Buffs {
    constructor() {
        this.bonuses = {};
        this.flatBonuses = {};
        this.relativeBonuses = {};
        this.finalStats = {...EmptyStats };
    }

    _countBonuses(now, buffs, raidId) {
        this.flatBonuses = {...EmptyStats };
        this.relativeBonuses = {...EmptyStats };

        let i = 0;
        const length = buffs.length;

        for (; i < length; ++i) {
            const buff = buffs[i];
            const timeElapsed = (now - buff.applyTime) / 1000;
            if (buff.duration < timeElapsed || (buff.raid > -1 && raidId != buff.raid)) {
                continue;
            }

            let value = buff.value;
            if (buff.relative) {
                this.relativeBonuses[buff.stat] += buff.value / 100;
            } else {
                this.flatBonuses[buff.stat] += value;
            }
        }
    }

    calculateBonuses(now, stats, buffs, raidId) {
        this._countBonuses(now, buffs, raidId);

        const bonuses = {...EmptyStats };
        for (const stat in bonuses) {
            bonuses[stat] = Math.floor(stats[stat] - stats[stat] / (this.relativeBonuses[stat] + 1) + this.flatBonuses[stat]);
        }

        this.bonuses = bonuses;
    }

    calculate(now, rawStats, buffs, raidId) {
        this._countBonuses(now, buffs, raidId);

        this.finalStats = {...EmptyStats };
        for (let stat in rawStats) {
            if (typeof rawStats[stat] == 'object') {
                this.finalStats[stat] = rawStats[stat];
                continue;
            }
            this.finalStats[stat] = this.flatBonuses[stat] + rawStats[stat];
            this.finalStats[stat] = Math.floor(this.finalStats[stat] * (this.relativeBonuses[stat] + 1));
        }
    }
}

export default Buffs;