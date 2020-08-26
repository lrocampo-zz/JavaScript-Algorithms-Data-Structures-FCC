function telephoneCheck(str) {
  // Write regular expressions here so that the Booleans contain the correct values
  let regex = /^1?\s?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/g;
  let regex11 = /^1\s?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/g;
  let regexParenthesis = /\(\d{3}\)/;
  let regexChars = /\?/g;
  let largo = str.replace(/\D/g, '').length;
  if(regexChars.test(str)) {
    return false;
  }
  // si no tiene parentesis y tiene 10 digitos
  if(regex.test(str) && largo != 11) {
    return true;
  }
  // si tiene parentesis
  if(regexParenthesis.test(str) && largo == 10) {
    regex = /^1?\s?\(\d{3}\)[-.\s]?\d{3}[-.\s]?\d{4}/g;
    if(regex.test(str)) {
      return true;
    }
  }
  // si no tiene parentesis y tiene 11 digitos
  else if (regex11.test(str)){
    return true;
  }
  // si tiene parentesis
  else {
    if(regexParenthesis.test(str)) {
      regex11 = /^1\s?\(\d{3}\)[-.\s]?\d{3}[-.\s]?\d{4}/g;
      if(regex11.test(str)) {
        return true;
      }
    }
    return false;
  }
}

console.log(telephoneCheck("(555)555-5555"));