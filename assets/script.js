// Assignment Code
var length; //=user input from prompt;
var availableUpperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var availableLowerCasechars = ["a", "b", "c", "d", "e", "f", "g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var availableSpecialChars = ["!", "@", "#", "$","%","^","&","*","(",")"];
var availableNumbers = ["1","2","3","4","5","6","7","8","9","0"];
var availPWChars = "";


// character pool, how to merge arrays, AKA concatentating.  
function generatePassword () {
  var password = ""
  // prompt for length, special chars, nmbers, uppercase, lowercase.
  // prompt user for parameters - OK yes, there are prompts for parameters, but we're not saving them anywhere?  maybe variables? 
getParameters();
useParameters();


// 2nd half: create random password from available characters
// maybe a for loop that runs the number of times in the length entry, adding a random character to the password string each time.

for(i=0; i<length; i++){
  return availableLowerCasechars
  console.log(availableLowerCasechars)
  return (availableLowerCasechars[Math.floor(Math.random()*availableLowerCasechars.length)])
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
  var length = prompt("Select password length with a number between 8 and 128.") 
    if (length >=8 && length <=129){
      //confirm: add SpecialChars to availPWChars, else NO SpecialChars
      confirm("Tap OK if your password requires Special Characters. Tap Cancel if not.");
      if (window.confirm()) 
        window.open()
      };
      {
       //confirm: add Numbers to availPWChars, else no Numbers
      confirm("Tap OK if your password requires numbers. Tap Cancel if not.");
    
     };
     {
       //confirm: add Upper Case letters to availPWChars, else no Upper Case letters
      confirm("Tap OK if your password requires Upper Case letters. Tap Cancel if not." );
          };
           {
             // confirm: add Lower Case letters to to availPWChars, else no action.
      confirm("Tap OK if your password requires Lower Case letters. Tap Cancel if not.");
    }
  }
  // add characters to availableChars via **confirm (not prompt)

// conditions based on their prompts 
function useParameters() {

}