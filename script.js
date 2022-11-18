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

  if (Number.isNaN(length) || length < 8 || length > 129) {
    alert('Password length must be a number that is between 8 and 128 characters');
    return null;
  }

  var hasUppercaseLetter = confirm(
    'Click OK if you would like to include uppercase letters.'
  );

  var hasLowercaseLetter = confirm(
    'Click OK if you would like to include lowercase letters.'
  );

  var hasSpecialCharacter = confirm(
    'Click OK if you would like to include special characters.'
  );

  var hasNumericCharacter = confirm(
    'Click OK if you would like to include numbers.'
  );

  if (
    hasUppercaseLetter === false &&
    hasLowercaseLetter === false &&
    hasSpecialCharacter === false &&
    hasNumericCharacter === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

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
  var guaranteedCharacters = [];

  if (passwordOptions.hasUppercaseLetter) {
    availableCharacters = availableCharacters.concat(uppercaseLetters);
    guaranteedCharacters.push(getRandom(uppercaseLetters));
  }

  if (passwordOptions.hasLowercaseLetter) {
    availableCharacters = availableCharacters.concat(lowercaseLetters);
    guaranteedCharacters.push(getRandom(lowercaseLetters));
  }

  if (passwordOptions.hasSpecialCharacter) {
    availableCharacters = availableCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (passwordOptions.hasNumericCharacter) {
    availableCharacters = availableCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  for (var i=0; i < passwordOptions.length; i++) {
    var character = getRandom(availableCharacters);
    password.push(character);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    password[i] = guaranteedCharacters[i];
  }

  return password.join('');
}

function getRandom(availableCharacters) {
  var randIndex = Math.floor(Math.random() * availableCharacters.length);
  var randElement = availableCharacters[randIndex];

  return randElement;
}

 
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
