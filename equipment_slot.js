const EquipmentType = require("./equipment_type");

const EquipmentSlot = {
    MainHand: "main_hand",
    OffHand: "off_hand",
    Ring: "ring",
    Necklace: "ring",
    Pet: "pet",
    Boots: "boots",
    Helmet: "helmet",
    Chest: "chest",
    Gloves: "gloves",
    Cape: "cape",

    getSlot(equipmentType) {
        switch (equipmentType) {
            case EquipmentType.Axe:
            case EquipmentType.Bow:
            case EquipmentType.Sword:
            case EquipmentType.Spear:
            case EquipmentType.Wand:
                return this.MainHand;

            case EquipmentType.Axe:
            case EquipmentType.Bow:
            case EquipmentType.Sword:
            case EquipmentType.Spear:
            case EquipmentType.Wand:
                return this.OffHand;

            case EquipmentType.Chest:
                return this.Chest;

            case EquipmentType.Helmet:
                return this.Helmet;

            case EquipmentType.Boots:
                return this.Boots;

            case EquipmentType.Gloves:
                return this.Gloves;

            case EquipmentType.Cape:
                return this.Cape;

            case EquipmentType.Ring:
                return this.Ring;

            case EquipmentType.Necklace:
                return this.Necklace;

            case EquipmentType.Pet:
                return this.Pet;
        }
    }
};

module.exports = EquipmentSlot;