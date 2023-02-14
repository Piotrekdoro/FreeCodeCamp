function rot13(str) {
  
    let alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let rotNum=13;
    let shiftedStr='';
    
    shiftedStr=str.toUpperCase().split('').map(char => {
      if (char.match(/[A-Z]/)) {
        if (alphabet.indexOf(char)-rotNum>=0) {
          return alphabet[alphabet.indexOf(char)-rotNum];
        } else {
          return alphabet[alphabet.length-rotNum+alphabet.indexOf(char)];
        }
      } else {
        return char;
      }
    }).join('');
  
    console.log(shiftedStr);
    return shiftedStr;
  }
  //n
  rot13('SERR PBQR PNZC');
  rot13('SERR CVMMN!');
  rot13('SERR YBIR?');
  rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');