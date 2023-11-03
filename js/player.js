import { characters } from "./basecharacters.js";
let ownedCharacters = [
    characters.rhaazk, 
    characters.knut, 
    characters.greta, 
    characters.leyla, 
    characters.gandulf, 
    characters.benbrytaren, 
    characters.tyr, 
    characters.morningwood,
    characters.squire];
const player = {
    gold: 0,
    buffs: [],
    ownedCharacters: ownedCharacters
}
export { player }