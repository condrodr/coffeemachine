const coffeeStock ={
    arabica:100,
    robusta:150,
    liberica:200
}
//Common JS
// module.exports={coffeeStock, isCoffeMachineReady};
// Sekarang ES6
// kalo 1 modul
// export default coffeeStock;
// kalo lebih dari 1 modul
const isCoffeeMachineReady = true;
export {coffeeStock,isCoffeeMachineReady};