// Convert Akkadian transliteration to unicode cuneiform.
// Copyright 2015 Ralph Giles. GPLv3.

// Sign values from Huehnergard's "A Grammar of Akkadian",
// 3rd Edition, compiled by Angelika and published with
// the AkkadianStudy Yahoo Group. Unicode values from
// http://www.unicode.org/charts/PDF/U12000.pdf
var akkad_table = {
  'aš': '𒀸',
  'rum': '𒀸',
  'ḫal': '𒄬',
  'an': '𒀭',
  'maḫ': '𒈤',
  'la': '𒆷',
  'be': '𒍗', // or 𒁁?
  'bad': '𒍗',
  'bat': '𒍗',
  'baṭ': '𒍗',
  'til': '𒍗',
  'mu': '𒈬',
  'dim': '𒁴',
  'tim': '𒁴',
  'ṭim': '𒁴',
  'dem': '𒁴',
  'tem': '𒁴',
  'ṭem': '𒁴',
  'na': '𒈾',
  'nu': '𒉡',
  'ti': '𒋾',
  'ṭì`': '𒋾',
  'ḫu': '𒄷',
  'nam': '𒉆',
  'en': '𒂗',
  'ri': '𒊑',
  're': '𒊑',
  'tal': '𒊑',
  'ṭal': '𒊑',
  'zi': '𒍣',
  'ze': '𒍣',
  'sí': '𒍣',
  'sé': '𒍣',
  'ṣí': '𒍣',
  'ṣé'': '𒍣',
  'gi': '𒄀',
  'ge': '𒄀',
  'ag': '𒀝',
  'ak': '𒀝',
  'aq': '𒀝',
  'ig': '𒅅',
  'ik': '𒅅',
  'iq': '𒅅',
  'eg': '𒅅',
  'ek': '𒅅',
  'eq': '𒅅',
};

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
