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
const gandulf ={
    name: 'Gandulf GW Olofsson',
    class: 'Wizard',
    desc: 'A human wizard. ',
    rarity: 'legendary',
    level: 1,
    baseHp: 6,
    imageSrc: 'assets/images/characters/gandulf.png',
    imageAlt: 'Gandulf',
    imageTitle: 'Gandulf',
    lore: "test",
    stats: {
        str: 8,
        dex: 14,
        con: 12,
        int: 18,
        wis: 10,
        cha: 13
    },
    weapon: "quarterstaff",
    armor: "none",
    trinket: "none",
    offhand: "arcane focus"
}
const benbrytaren ={
    name: 'Benbrytaren',
    class: 'Barbarian',
    desc: 'A human barbarian. ',
    rarity: 'legendary',
    level: 1,
    baseHp: 12,
    imageSrc: 'assets/images/characters/benbrytaren.png',
    imageAlt: 'Benbrytaren',
    imageTitle: 'Benbrytaren',
    lore: "test",
    stats: {
        str: 16,
        dex: 13,
        con: 14,
        int: 10,
        wis: 12,
        cha: 8
    },
    weapon: "greataxe",
    armor: "none",
    trinket: "none",
    offhand: "none"
}
const tyr ={
    name: 'Tyr',
    class: 'Paladin',
    desc: 'A human paladin. ',
    rarity: 'legendary',
    level: 1,
    baseHp: 10,
    imageSrc: 'assets/images/characters/tyr.png',
    imageAlt: 'Tyr',
    imageTitle: 'Tyr',
    lore: "test",
    stats: {
        str: 13,
        dex: 10,
        con: 14,
        int: 12,
        wis: 8,
        cha: 16
    },
    weapon: "longsword",
    armor: "chainmail",
    trinket: "none",
    offhand: "shield"
}
const morningwood ={
    name: 'Morningwood',
    class: 'ranger',
    desc: 'A human ranger. ',
    rarity: 'legendary',
    level: 1,
    baseHp: 8,
    imageSrc: 'assets/images/characters/morningwood.png',
    imageAlt: 'Morningwood',
    imageTitle: 'Morningwood',
    lore: "test",
    stats: {
        str: 12,
        dex: 16,
        con: 14,
        int: 10,
        wis: 13,
        cha: 8
    },
    weapon: "longbow",
    armor: "leather",
    trinket: "none",
    offhand: "none"
}
const leyla ={
    name: 'Leyla',
    class: 'Sorcerer',
    desc: 'A human sorcerer. ',
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
    leyla: leyla,
    gandulf: gandulf,
    benbrytaren: benbrytaren,
    tyr: tyr,
    morningwood: morningwood
}
const commonCharacters = {

}
const rareCharacters = {
}
const legendaryCharacters = {
    rhaazk: rhaazk,
    knut: knut,
    greta: greta,
    gandulf: gandulf,
    benbrytaren: benbrytaren,
    tyr: tyr,
    morningwood: morningwood
}
const mythicCharacters = {
    leyla: leyla
}
export { characters, commonCharacters, rareCharacters, legendaryCharacters, mythicCharacters};