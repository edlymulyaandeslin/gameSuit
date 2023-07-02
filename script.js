// var jlhAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;
// while (noAngkot <= angkotBeroperasi) {
//   console.log('Angkot No. ' + noAngkot + ' ' + 'beroperasi dengan baik.');
//   noAngkot++;
// }
// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jlhAngkot; noAngkot++) {
//   console.log('Angkot No. ' + noAngkot + ' ' + ' sedang tidak beroperasi.');
// }

// while (noAngkot <= jlhAngkot) {
//   if (noAngkot <= angkotBeroperasi && noAngkot !== 1) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//   } else if (noAngkot === 8 || noAngkot === 10) {
//     console.log('angkot No. ' + noAngkot + ' sedang lembur');
//   } else {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//   }
//   noAngkot++;
// }
var s = '';
for (var i = 0; i <= 10; i++) {
  for (var j = 0; j <= i; j++) {
    s += '*';
  }
  s += '\n';
}
console.log(s);
