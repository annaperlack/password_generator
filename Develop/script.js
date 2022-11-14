// Assignment Code
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '?',]; 
var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var generatedPasswordWithOptions = generatePasswordWithOptions(passwordOptions);
  return generatedPasswordWithOptions;
}

function getPasswordOptions() {
  var options = {
    length: 10,
    hasUppercaseLetter: true,
    hasLowercaseLetter: true,
    hasSpecialCharacter: true,
    hasNumericCharacter: true,
  };
  return options;
}

function generatePasswordWithOptions(passwordOptions) {
  var password = [];
  var availableCharacters = [];

  if (passwordOptions.hasUppercaseLetter) {
    availableCharacters = availableCharacters.concat(hasUppercaseLetter);
  }

  if (passwordOptions.hasLowercaseLetter) {
    availableCharacters = availableCharacters.concat(hasLowercaseLetter);
  }

  if (passwordOptions.hasSpecialCharacter) {
    availableCharacters = availableCharacters.concat(hasSpecialCharacter);
  }

  if (passwordOptions.hasNumericCharacter) {
    availableCharacters = availableCharacters.concat(hasNumericCharacter);
  }

  return password.join('');
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
