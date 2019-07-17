module.exports = {
    Helmet: 0,
    Chest: 1,
    Gloves: 2,
    Boots: 3,
    Ring: 4,
    Accessory: 5,
    Weapon: 6,
    OffHand: 10,
    Legs: 7,
    Mount: 8,
    Potion: 9,
    toString(type) {
        switch (type) {
            case ItemType.Weapon:
                return "main_hand";
            case ItemType.OffHand:
                return "off_hand";
            case ItemType.Helmet:
                return "helmet";
            case ItemType.Chest:
                return "chest";
            case ItemType.Gloves:
                return "gloves";
            case ItemType.Boots:
                return "boots";
            case ItemType.Ring:
                return "ring";
            case ItemType.Accessory:
                return "accessory";
            case ItemType.Legs:
                return "legs";
            case ItemType.Mount:
                return "mount";
            case ItemType.Potion:
                return "potion";
        }

        return "unknown_item_type";
    }
}