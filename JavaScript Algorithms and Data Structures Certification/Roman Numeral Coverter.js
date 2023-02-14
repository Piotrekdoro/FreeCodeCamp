function convertToRoman(num) {
 
    /*  Rule 1: When certain numerals are repeated, the number represented by them is their sum. For example, II = 1 + 1 = 2, or XX = 10 + 10 = 20, or, XXX = 10 + 10 + 10 = 30.
    
        Rule 2: It is to be noted that no Roman numerals can come together more than 3 times. For example, we cannot write 40 as XXXX
    
        Rule 3: The letters V, L, and D are not repeated.
    
        Rule 4: Only I, X, and C can be used as subtractive numerals. There can be 6 combinations when we subtract. These are IV = 5 - 1 = 4; IX = 10 - 1 = 9; XL = 50 - 10 = 40; XC = 100 - 10 = 90; CD = 500 - 100 = 400; and CM = 1000 - 100 = 900
    
        Rule 5: When a Roman numeral is placed after another Roman numeral of greater value, the result is the sum of the numerals. For example, VIII = 5 + 1 + 1 + 1 = 8, or, XV = 10 + 5 = 15,
    
        Rule 6: When a Roman numeral is placed before another Roman numeral of greater value, the result is the difference between the numerals. For example, IV = 5 - 1 = 4, or, XL = 50 - 10 = 40, or XC = 100 - 10 = 90
    
        Rule 7: When a Roman numeral of a smaller value is placed between two numerals of greater value, it is subtracted from the numeral on its right. For example, XIV = 10 + (5 - 1) = 14, or, XIX = 10 + (10 - 1) = 19
     */
    
    
    let romanNum = ['M','D','C','L','X','V','I'];
    let arabicNum = [1000,500,100,50,10,5,1];
    let newRomanNum = [];
    let newArabicNum=[];
    
    
    while(num>0) {
      //additive rule
      for(let i=0; i<romanNum.length; i++) {
        if(num>=arabicNum[i]) {
          newRomanNum.push(romanNum[i]);
          newArabicNum.push(arabicNum[i]);
          num-=arabicNum[i];
          break;
        }; 
      };
     let repetitionCounter=0;
        for(let j=newRomanNum.length-1; j>=0; j--) {
          if (newRomanNum[j]==newRomanNum[newRomanNum.length-1]) {
            repetitionCounter++;
          } else {
            break;
          };
        };
        //Substractive rule
        if(repetitionCounter>3) {
          let numToConvert=0;
          for (let j=newRomanNum.length-1; j>=newRomanNum.length-2-repetitionCounter; j--) {
            numToConvert+=newRomanNum[j];
          };
          for (let j=repetitionCounter+1; j>0; j--) {
            newRomanNum.pop()
          }
          /* Teraz wez numToConvert i zrob petle w ktorej odejmujesz od numToCov elementy romanNum,
             ale nie od najwiekszej do najmniejszej jak wyzej a od najmniejszego jaki sie miesci,
             np dla 10 zamiast VIIII wstawiasz pierwszy ktory sie nie mieści czyli X i odejmujesz 
             mniejsze od X romanNum, ale tylko te: I, X i C struktura taka:
    
             for(szukam pierwszej ktora sie nie miesci)
             ...
             while (odejmuje mniejsze od tej ktora sie nie miesci az nie bedzie sie rownac numToConv
             ...
             if (uzywam tylko I, X i C do odejmowania)
          */
        };  
    };
    
      console.log(newRomanNum);
      console.log(newArabicNum);
     return num;
    };
    
    convertToRoman(19);
    
    /*
    //Repetition rule   
        let repetitionCounter=0;
        for(let j=newRomanNum.length-1; j>=0; j--) {
          if (newRomanNum[j]==newRomanNum[newRomanNum.length-1]) {
            repetitionCounter++;
          } else {
            break;
          };
        };
        //Substractive rule
        if(repetitionCounter>3) {
    
        }; 
        */