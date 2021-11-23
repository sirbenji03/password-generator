// Assignment 
//password values characters
var lowerString= "abcdefghijkklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
console.log(lowerArray)

var upperArray = lowerString.toUpperCase().split("");
console.log(upperArray);

var numericString = "0123456789";
var numericArray = numericString.split("");
console.log(numericString)

var specialcagrString="!@#%^&";
var specialcharArray = specialcagrString.split("");
console.log(specialcagrString);


//generate random password
function getOptions () {
  var passLength = parseInt(prompt("how many characters would you like to use"))
  if (passLength < 8 || passLength > 128){
    alert("Try Again");
    return undefined;
  }
  var isLower = confirm("Would you like lower case letters in your password");
  var isUpper = confirm("would like upper case letters in your password");
  var isNumeric =confirm("would like numbers in your password");
  var isSpecialchar = confirm("Would like special characters in your password");
  
  var options ={
    passLength,
    isUpper,
    isLower,
    isNumeric,
    isSpecialchar
  }
  return options
}

//create for loop to choose password characters
function generatePassword(){
  var myOptions = getOptions();
  if (myOptions == null) {
    return "";
  }

  var supperArray = [];
  var results =[];

  if (myOptions.isLower === true){
    supperArray = supperArray.concat(lowerArray)
    console.log(supperArray)
  }


if (myOptions.isUpper === true){
    supperArray = supperArray.concat(upperArray)
    console.log(supperArray)
  }

  if (myOptions.isNumeric === true){
    supperArray = supperArray.concat(numericArray)
    console.log(supperArray)
  }

  if (myOptions.isSpecialchar === true){
    supperArray = supperArray.concat(specialcharArray)
    console.log(supperArray)
  }
for( var i = 0; i < myOptions.passLength; i++){
  var index = Math.floor(Math.random()*supperArray.length);
  var digit = supperArray[index];
  results.push(digit)
  console.log(digit)
}
return results.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// add eventlistener

generateBtn.addEventListener("click", writePassword);


