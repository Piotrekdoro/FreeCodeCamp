function telephoneCheck(str) {
    //1(Counry Code) 555(Area Code)-555-555(Phone Number)
    //Must have Area Code, if Country Code is providem it must be '1'
    //Formatting:
    //            - spacing with '-', ' ' or no spacing, spacing only betwee Arena & Country Codes & Number
    //            - must have 9 numbers
    //            - area code can be enclosed in '(...)'
  
    let test = (/^(1?|1 ?)(\(\d{3}\) ?|\d{3}-?|\d{3} ?)(\d{3} ?\d{4}|\d{3}-\d{4})$/).test(str);
    
    console.log(test);
    return test;
  }
  
  telephoneCheck("1 555 555 5555");