function rot13(str) {
    let regex = /[A-Z]/;
    str = str.split('');
    console.log(str);
  
    for(let i = 0; i < str.length; i++) {
      if(regex.test(str[i])) {
        let toAscii = str[i].charCodeAt(0);
        if(toAscii + 13 > 90) {
          let translatedChar = toAscii - 13;
          str[i] = String.fromCharCode(translatedChar);
        }
        else if(toAscii + 13 <= 90) {
          let translatedChar = toAscii + 13;
          str[i] = String.fromCharCode(translatedChar);
        }
      }
    }
    str = str.join('');
    return str;
  }
  
  rot13("SERR PBQR PNZC");