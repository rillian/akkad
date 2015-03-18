// Convert Akkadian transliteration to unicode cuneiform.
// Copyright 2015 Ralph Giles. GPLv3.


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
