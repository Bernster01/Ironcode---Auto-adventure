import { characters } from "./basecharacters.js";
import { ui } from "./ui.js";
import { player } from "./player.js";
let gameState= {
    baseIncome: 0,
    characters: {
        "1": null,
        "2": null,
        "3": null,
        "4": null
    }
}
class character {
    constructor(baseCharacter) {
        this.name = clone(baseCharacter.name);
        this.class = clone(baseCharacter.class);
        this.desc = clone(baseCharacter.desc);
        this.rarity = clone(baseCharacter.rarity);
        this.level = clone(baseCharacter.level);
        this.baseHp = clone(baseCharacter.baseHp);
        this.buffs = clone(baseCharacter.buffs);
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
    buffs = [];
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
function startGame(){
    updateGame();
    gameTick();
}
function updateGame(){
    //update buffs
    player.buffs = [];
    gameState.characters["1"].buffs.forEach(element => {
        player.buffs.push(element);
    });
    gameState.characters["2"].buffs.forEach(element => {
        player.buffs.push(element);
    });
    gameState.characters["3"].buffs.forEach(element => {
        player.buffs.push(element);
    });
    gameState.characters["4"].buffs.forEach(element => {
        player.buffs.push(element);
    });
    //update stats
    //update hp
    //update gold
}
function gameTick() {
    console.log("tick", player.gold);
    generateGold();
    setTimeout(gameTick, 1000);
}
function generateGold() {
    let goldModifier = 1;
    let goldFlat = 0;
    player.buffs.forEach(element => {
        if (element.type == "gold") {
            goldModifier += element.modifier;
            goldFlat += element.flat;
        }
    });
    let gold = Math.floor(Math.random() * 10)/9 + gameState.baseIncome;
    gold += goldFlat;
    gold = Math.floor(gold * goldModifier);
    console.log("generating gold.. Modifer is "+goldModifier+" and flat is "+goldFlat+" and base income is "+gameState.baseIncome+" and gold is "+gold+".");
    player.gold += gold;
}
function clone(obj){
    return JSON.parse(JSON.stringify(obj));
}
function addCharacter(targerCharacter, targetSlot){
    console.log(gameState.characters);
    let newCharacter = new character(targerCharacter);
    gameState.characters[targetSlot] = newCharacter;
    gameState.baseIncome+=1;
    ui.loadActiveCharacter(targetSlot, newCharacter);
}
addCharacter(characters.rhaazk, 1);
addCharacter(characters.knut, 2);
addCharacter(characters.greta, 3);
addCharacter(characters.squire, 4);
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
startGame();