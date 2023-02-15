function convertToRoman(num) {

  let newNum=num;
  let romanNum = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
  let arabicNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  let newRomanNum = [];
  let newArabicNum=[];

while(newNum>0) {
  //Additive rule
  for(let i=romanNum.length-1; i>=0; i--) {
    if(newNum-arabicNum[i]>=0) {
      newRomanNum.push(romanNum[i])
      newArabicNum.push(arabicNum[i])
      newNum-=arabicNum[i]
      break
    }
  }  
}
return newRomanNum.join('');
}


convertToRoman(9);