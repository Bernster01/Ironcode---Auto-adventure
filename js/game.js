import { characters } from "./basecharacters.js";
import { ui } from "./ui.js";
import { player } from "./player.js";
class character {
    constructor(baseCharacter) {
        this.name = clone(baseCharacter.name);
        this.class = clone(baseCharacter.class);
        this.desc = clone(baseCharacter.desc);
        this.rarity = clone(baseCharacter.rarity);
        this.level = clone(baseCharacter.level);
        this.baseHp = clone(baseCharacter.baseHp);
        this.imageSrc = clone(baseCharacter.imageSrc);
        this.imageAlt = clone(baseCharacter.imageAlt);
        this.imageTitle = clone(baseCharacter.imageTitle);
        this.lore = clone(baseCharacter.lore);
        this.stats = clone(baseCharacter.stats);
        this.weapon = clone(baseCharacter.weapon);
        this.armor = clone(baseCharacter.armor);
        this.trinket = clone(baseCharacter.trinket);
        this.offhand = clone(baseCharacter.offhand);
    }
    stats = {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    };
    name = "Character";
    class = "Class";
    desc = "A character.";
    rarity = "common";
    level = 1;
    baseHp = 10;
    weapon = "none";
    armor = "none";
    trinket = "none";
    offhand = "none";
    imageSrc = "assets/images/character/character.png";
    imageAlt = "Character";
    imageTitle = "Character";
    lore = "";
    currentHp = 10;
    maxHp = 10;

}
function clone(obj){
    return JSON.parse(JSON.stringify(obj));
}

let rhaazk = new character(characters.rhaazk);
let knut = new character(characters.knut);
let greta = new character(characters.greta);
let leyla = new character(characters.leyla);
ui.loadActiveCharacter(1, rhaazk);
ui.loadActiveCharacter(2, knut);
ui.loadActiveCharacter(3, greta);
ui.loadActiveCharacter(4, leyla);
player.ownedCharacters.forEach(element => {
    let newElement = document.createElement("div");
    newElement.classList.add("character");
    newElement.style.borderColor = ui.getBorderColorFromRarity(element.rarity);
    newElement.id = element.name+"-owned";
    let img = document.createElement("img");
    img.src = element.imageSrc;
    img.alt = element.imageAlt;
    img.title = element.imageTitle;
    newElement.appendChild(img);
    let name = document.createElement("h3");
    name.innerHTML = element.name;
    newElement.appendChild(name);
    console.log(newElement);
    document.getElementById("character-selecting-wrapper").appendChild(newElement);
});