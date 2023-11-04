// app.js
const Tambah = require('./Module1');
const Kurang = require('./Module2');
const Bagi = require('./Module3');
const Kali = require('./Module4');

var angka1 = 8;
var angka2 = 4;

console.log("Di Bawah ini Hasil penjumlahan : ");
console.log(Tambah(angka1, angka2));
console.log("Di Bawah ini Hasil Pengurangan : ");
console.log(Kurang(angka1, angka2));
console.log("Di Bawah ini Hasil Pembagian : ");
console.log(Bagi(angka1, angka2));
console.log("Di Bawah ini Hasil Perkalian : ");
console.log(Kali(angka1, angka2));