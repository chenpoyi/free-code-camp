function translatePigLatin(str) {
  return str[0].match(/[^aeiou]/) ? str.replace(/(\w+?)([aeiou]\w+)/i,'$2$1')+'ay' : str + 'way';

}

translatePigLatin("consonant");