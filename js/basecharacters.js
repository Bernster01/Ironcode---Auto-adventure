const rhaazk ={
    name: 'Rhaazk',
    class: 'Fighter',
    desc: 'A lizardfolk fighter with a strong sense of justice and a penchant for violence.',
    rarity: 'legendary',
    level: 1,
    baseHp: 10,
    imageSrc: 'assets/images/characters/rhaazk.png',
    imageAlt: 'Rhaazk',
    imageTitle: 'Rhaazk',
    lore: "test",
    stats: {
        str: 14,
        dex: 13,
        con: 15,
        int: 10,
        wis: 8,
        cha: 12
    },
    weapon: "battleaxe",
    armor: "halfplate",
    trinket: "none",
    offhand: "shield"
}
const knut ={
    name: 'Knut',
    class: 'Rouge',
    desc: 'A halfling that suffers from kleptomaniac.',
    rarity: 'legendary',
    level: 1,
    baseHp: 8,
    imageSrc: 'assets/images/characters/knut.png',
    imageAlt: 'Knut',
    imageTitle: 'Knut',
    lore: "test",
    stats: {
        str: 8,
        dex: 16,
        con: 12,
        int: 13,
        wis: 10,
        cha: 14
    },
    weapon: "rapier",
    armor: "leather",
    trinket: "none",
    offhand: "crossbow"
}
const greta ={
    name: 'Greta Rockhard',
    class: 'cleric',
    desc: 'A dwarven cleric that is a bit too fond of her ale and she or he are very ugly.',
    rarity: 'legendary',
    level: 1,
    baseHp: 10,
    imageSrc: 'assets/images/characters/greta.png',
    imageAlt: 'Greta',
    imageTitle: 'Greta',
    lore: "test",
    stats: {
        str: 13,
        dex: 8,
        con: 14,
        int: 10,
        wis: 16,
        cha: 12
    },
    weapon: "warhammer",
    armor: "chainmail",
    trinket: "none",
    offhand: "shield"
}
const leyla ={
    name: 'Leyla',
    class: 'Sorcerer',
    desc: 'A human sorcerer that host a primordal god inside.',
    rarity: 'mythic',
    level: 1,
    baseHp: 8,
    imageSrc: 'assets/images/characters/leyla.png',
    imageAlt: 'Leyla',
    imageTitle: 'Leyla',
    lore: "test",
    stats: {
        str: 18,
        dex: 13,
        con: 15,
        int: 13,
        wis: 13,
        cha: 19
    },
    weapon: "indomitable odachi",
    armor: "chainmail",
    trinket: "none",
    offhand: "sword of unsealing"

}
const characters = {
    rhaazk: rhaazk,
    knut: knut,
    greta: greta,
    leyla: leyla
}
const commonCharacters = {
    rhaazk: rhaazk,
    knut: knut,
    greta: greta
}
const rareCharacters = {
    rhaazk: rhaazk,
    knut: knut,
    greta: greta
}
const legendaryCharacters = {
    leyla: leyla
}
export { characters, commonCharacters, rareCharacters, legendaryCharacters };