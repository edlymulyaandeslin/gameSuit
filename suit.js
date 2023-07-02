var ulang = true;
while (ulang) {
  // pilihan player
  var p = prompt('pilih : gajah, semut, orang').toLowerCase();
  if (!p) {
    p = '-';
  }

  // pilih komputer
  // membuat pilih random
  var comp = Math.random();

  if (comp < 0.39) {
    comp = 'semut';
  } else if (comp > 0.39 && comp <= 0.69) {
    comp = 'orang';
  } else {
    comp = 'gajah';
  }

  // rules games
  var hasil = '';
  if (p == comp) {
    hasil = 'SERI!';
  } else if (p == 'orang') {
    // operator ternary
    hasil = comp == 'semut' ? 'MENANG!' : 'KALAH!';
  } else if (p == 'semut') {
    hasil = comp == 'gajah' ? 'MENANG!' : 'KALAH!';
  } else if (p == 'gajah') {
    hasil = comp == 'orang' ? 'MENANG!' : 'KALAH!';
  } else {
    hasil = ' memasukkan input yang salah';
  }

  // hasil
  if (hasil == 'SERI!') {
    alert(
      'Kamu memilih :  ' +
        p +
        ' \nComputer memilih : ' +
        comp +
        ' \nHasilnya : ' +
        hasil
    );
  } else {
    alert(
      'Kamu memilih :  ' +
        p +
        ' \nComputer memilih : ' +
        comp +
        ' \nHasilnya : Kamu ' +
        hasil
    );
  }
  ulang = confirm('main lagi?');
}
alert('Terima kasih telah bermain');
