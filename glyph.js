// Convert Akkadian transliteration to unicode cuneiform.
// Copyright 2015 Ralph Giles. GPLv3.

// Sign values from Huehnergard's "A Grammar of Akkadian",
// 3rd Edition, compiled by Angelika and published with
// the AkkadianStudy Yahoo Group. Unicode values from
// http://www.unicode.org/charts/PDF/U12000.pdf
var akkad_readings = {

  // Lesson 9 signs.
  '𒀸': ['aš', 'rum'],
  '𒄬': ['ḫal'],
  '𒀭': ['an'],
  '𒈤': ['maḫ'],
  '𒆷': ['la'],
  '𒉡': ['nu'],
  '𒁴': ['dim', 'tim', 'ṭim', 'dem', 'tem', 'ṭem'],
  '𒍗': ['be', 'bad', 'bat', 'baṭ', 'til'], // or 𒁁?
  '𒈾': ['na'],
  '𒈬': ['mu'],

  // Lesson 10
  '𒋾': ['ti', 'tì'],
  '𒄷': ['ḫu'],
  '𒉆': ['nam'],
  '𒂗': ['en'],
  '𒊑': ['ri', 're', 'tal', 'ṭal'],
  '𒍣': ['zi', 'ze', 'sí', 'sé', 'ṣí', 'ṣé'],
  '𒄀': ['gi', 'ge'],
  '𒀝': ['ag', 'ak', 'aq'],
  '𒅅': ['ig', 'ik', 'iq', 'eg', 'ek', 'eq'],

  // Lesson 11
  '𒋗': ['šu'],
  '𒄥': ['gur'],
  '𒋛': ['si', 'se'],
  '𒊒': ['ru'],
  '𒌒': ['ub', 'up'],
  '𒊓': ['sa'],
  '𒌝': ['um'],
  '𒀜': ['ad', 'at', 'aṭ'],
  '𒀊': ['ab', 'ap'],
  '𒍢': ['ṣi', 'ṣe', 'zí', 'zé'],
};

var akkad_table = {};
for (sign in akkad_readings) {
  for (reading of akkad_readings[sign]) {
    akkad_table[reading] = sign;
  }
}

var convert = function(text) {
  var wedges = [];
  for (word of text.split(' ')) {
    var code = '';
    for (sign of word.split('-')) {
      if (sign in akkad_table) {
        code += akkad_table[sign];
      } else {
        code += sign;
      }
    }
    wedges.push(code)
  }
  return wedges.join(' ');
}
