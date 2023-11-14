//Common JS
// const {coffeeStock, isCoffeMachineReady} = require('./state');

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }
 
// makeCoffee("robusta", 80);

// console.log(coffeeStock);
// console.log(isCoffeMachineReady);

//Sekarang ES6
import {coffeeStock as stock, isCoffeeMachineReady }from  "./state.js";
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
displayStock(stock);
console.log(stock);
console.log(isCoffeeMachineReady);