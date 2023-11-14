//cara biasa / promise
/*
function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}
makeCoffee();
*/

//cara salah
/*
function makeCoffee() {
    const coffee = getCoffee();
    console.log(coffee);
}
 
makeCoffee();

//promise masih pending
*/

//cara Aync Wait

async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
makeCoffee();

// kode Async agar makeCoffee dijalankan asynchronus, lalu await untuk menghentikan baca kode lanjut sampai getCoffee mengembalikan nilai promise resolve ( fullfilled ) jika ada reject maka gunakan try catch

// Chaining promis using Async Await
async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}