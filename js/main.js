import prompt from 'async-prompt'
import { getAllProfile, postProfile } from "./module/camper.js";


//console.log(await getAllProfile());

let name = await prompt("ingrese el nombre: ");
console.log(await postProfile(name));