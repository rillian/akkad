// Convert Akkadian transliteration to unicode cuneiform.
// Copyright 2015 Ralph Giles. GPLv3.

var convert = function(text) {
  var wedges = [];
  for (word of text.split(' ')) {
    var code = '';
    for (sign of word.split('-')) {
      if (sign == 'an') {
        code += '𒀭';
      } else if (sign == 'na') {
        code += '𒈾';
      } else {
        code += sign;
      }
    }
    wedges.push(code)
  }
  return wedges.join();
}
