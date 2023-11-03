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
const ui = {
    loadActiveCharacter: loadActiveCharacter
}
document.addEventListener("DOMContentLoaded", uiStarterFunction);
export { ui };