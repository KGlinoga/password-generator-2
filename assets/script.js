// Assignment Code
var length;
var availableChars = "";

function generatePassword () {
  var password = ""
// prompt user for parameters
// prompt for length, special chars, nmbers, uppercase, lowercase.
getParameters();

// 2nd half: create random password from available characters
// maybe a for loop that runs the number of times in the length entry, adding a random character to the password string each time.

for(i=0; i<length; i++){

}

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getParameters() {
  // set length via prompt
  var length = prompt("Select password length with a number between 8 and 128") 
    if (length || length >=8 || length <=129){
      confirm("Tap OK if your password requires Special Characters. Tap Cancel if not.")
     {
      confirm("Tap OK if your password requires numbers. Tap Cancel if not.")
    } {
      confirm("Tap OK if your password requires Upper Case letters. Tap Cancel if not." )
    } {
      confirm("Tap OK if your password requires Lower Case letters. Tap Cancel if not.")
    }
  }
  // add characters to availableChars via **confirm (not prompt)
}