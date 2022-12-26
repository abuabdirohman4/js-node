// const fs = require("fs")

// fs.copyFileSync("text.txt", "text2.txt")
// console.log('text.txt was copied to text2.txt');

// Module NPM
// const hero = require("superheroes")
// const nameHero = hero.random()

// // console.log(nameHero)

// for (let index = 0; index < 10; index++) {
//     // console.log(nameHero)
//     console.log(hero.random())
// }

const op = require("./module")

const moduleTambah = op.tambah(10, 5)
const moduleKali = op.kali(10, 5)

console.log(op.title)
console.log(moduleTambah)
console.log(moduleKali)