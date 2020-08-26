function reverseString(str) {
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join(""); 
    
    return joinArray; 
}

function palindrome(str) {
  const regex = /[^A-Za-z0-9]/;
  str = str.replace(/\s/g, '');
  console.log(str);
  const posicion = str.search(regex) + 1;
  str = str.toLowerCase();
  str = str.replace(/[^A-Za-z0-9]/g, '');
  console.log(str)
  const myReverseStr = reverseString(str);
  
  if(myReverseStr === str) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("A man, a plan, a canal. Panama");