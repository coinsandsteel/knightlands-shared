const ItemType = {
    Equipment: "equipment",
    Consumable: "consumable",
    Resource: "resource",
    Pet: "pet",
    // Troop: "troop",
    // General: "general",
    Key: "key",
    Currency: "currency",
    Charm: "charm",
    Lunar: "lunarResource",
    March: "marchResource",
    April: "aprilResource",
    Battle: "battleResource",
};

const EventItemType = [
    ItemType.Lunar,
    ItemType.March,
    ItemType.April,
    ItemType.Battle
];

module.exports = { ItemType, EventItemType };