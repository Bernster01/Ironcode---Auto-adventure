function uiStarterFunction() {
    document.getElementById("expand-collapse-characters").addEventListener("click", function () {
        let container = document.getElementById("active-characters-wrapper");

        if (container.classList.contains("collapsed")) {
            container.classList.remove("collapsed");
            container.classList.add("expanded");
        } else {
            container.classList.remove("expanded");
            container.classList.add("collapsed");
        }
    });
    document.getElementById("character-selecting-container").addEventListener("click", function (e) {
        //close if not clicking on a child
        if (e.target.id == "character-selecting-container") {
            document.getElementById("character-selecting-container").style.display = "none";
        }
    });
    document.querySelectorAll(".character-portrait").forEach(element => {
        element.addEventListener("click", function () {
          document.getElementById("character-selecting-container").style.display = "flex";
          console.log(document.getElementById("character-selecting-container"));
          //remove characters from wrapper if they exist in active slots
            let activeCharacters = document.querySelectorAll(".active-character-container");
            activeCharacters.forEach(element => {
                let ownedCharacter = document.getElementById(element.dataset.character+"-owned");
                if (ownedCharacter) {
                    ownedCharacter.remove();
                }
            });
        });
    });
    
}
function loadActiveCharacter(target, character) {
    let container = document.getElementById("character"+target);
    let portrait = document.getElementById("character"+target+"-image");
    let name = document.getElementById("character"+target+"-name");
    let desc = document.getElementById("character"+target+"-desc");
    //stats
    let strength = document.getElementById("character"+target+"-strength");
    let dexterity = document.getElementById("character"+target+"-dexterity");
    let constitution = document.getElementById("character"+target+"-constitution");
    let intelligence = document.getElementById("character"+target+"-intelligence");
    let wisdom = document.getElementById("character"+target+"-wisdom");
    let charisma = document.getElementById("character"+target+"-charisma");

    container.style.borderColor = getBorderColorFromRarity(character.rarity);
    container.dataset.character = character.name;
    portrait.src = character.imageSrc;
    portrait.alt = character.imageAlt;
    portrait.title = character.imageTitle;

    name.innerHTML = character.name;
    desc.innerHTML = character.desc;

    strength.innerHTML = character.stats.str;
    dexterity.innerHTML = character.stats.dex;
    constitution.innerHTML = character.stats.con;
    intelligence.innerHTML = character.stats.int;
    wisdom.innerHTML = character.stats.wis;
    charisma.innerHTML = character.stats.cha;

}
function getBorderColorFromRarity(rarity) {
    switch (rarity) {
        case "common":
            return "#fcf4e3";
        case "rare":
            return "#006eff";
        case "legendary":
            return "#ff9b05";
        case "mythic":
            return "#a100e0";
        default:
            return "#f7e6c7";
    }
}

document.addEventListener("DOMContentLoaded", uiStarterFunction);
const ui = {
    loadActiveCharacter: loadActiveCharacter,
    getBorderColorFromRarity: getBorderColorFromRarity
}
export { ui };