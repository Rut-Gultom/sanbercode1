// Rut Gultom

const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mengajukan pertanyaan kepada pengguna
rl.question("Input bilangan genap: ", function(input) {
    var x = parseInt(input);

    if (x < 0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil");
    } else {
        var result = Math.sqrt(x);
        console.log("Akar pangkat 2 dari " + x + " adalah " + result);
    }

    rl.close();
});

