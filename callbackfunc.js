const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        //agar var coffee dapat dipakai, dipanggil kembali setelah 3 detik
        //data dari asynchronus agar bisa dipakai di symchronus
        callback(coffee);
        
    }, 3000);
}
 
 
orderCoffee(coffee => {
    console.log(coffee);
});

