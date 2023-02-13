function palindrome(str) {

    let newStr=str.toLowerCase().replace(/\W+|_+/g,'')
    if (newStr===newStr.split('').reverse().join('')) {
        return true
    }

    return false
}
  
  palindrome("0_0 (: /-\ :) 0-0E**y*e");