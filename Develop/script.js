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
  var length = parseInt (
    prompt('How many characters would you like to include in your password?'),
  );

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }

  var hasUppercaseLetter = confirm(
    'Click OK to confirm including uppercase letters.'
  );

  var hasLowercaseLetter = confirm(
    'Click OK to confirm including lowercase letters.'
  );

  var hasSpecialCharacter = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasNumericCharacter = confirm(
    'Click OK to confirm including numeric characters.'
  );

  var options = {
    length: length,
    hasUppercaseLetter: hasUppercaseLetter,
    hasLowercaseLetter: hasLowercaseLetter,
    hasSpecialCharacter: hasSpecialCharacter,
    hasNumericCharacter: hasNumericCharacter,
  };

  return options;
}

function generatePasswordWithOptions(passwordOptions) {
  var password = [];
  var availableCharacters = [];

  console.log(passwordOptions);
  if (passwordOptions.hasUppercaseLetter) {
    availableCharacters = availableCharacters.concat(uppercaseLetters);
  }

  if (passwordOptions.hasLowercaseLetter) {
    availableCharacters = availableCharacters.concat(lowercaseLetters);
  }

  if (passwordOptions.hasSpecialCharacter) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }

  if (passwordOptions.hasNumericCharacter) {
    availableCharacters = availableCharacters.concat(numericCharacters);
  }

  for (var i=0; i < passwordOptions.length; i++) {
    var character = getRandom(availableCharacters);
    password.push(character);
  }

  return password.join('');
}

function getRandom(availableCharacters) {
  var randIndex = Math.floor(Math.random() * availableCharacters.length);
  var randElement = availableCharacters[randIndex];

  return randElement;
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
