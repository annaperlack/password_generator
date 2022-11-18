// password character options
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '?',]; 
var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

//generate a password with options
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var generatedPasswordWithOptions = generatePasswordWithOptions(passwordOptions);
  return generatedPasswordWithOptions;
}

//prompt for how many characters user wants in password 
function getPasswordOptions() {
  var lengthResponse = prompt('How many characters would you like to include in your password?');
  var length = parseInt(lengthResponse);

  //validating password length and type 
  if (Number.isNaN(length) || length < 8 || length > 129) {
    alert('Password length must be a number that is between 8 and 128 characters');
    return null;
  }

  //password type confirmations
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

//confirming that user has selected at least 1 character type
  if (
    hasUppercaseLetter === false &&
    hasLowercaseLetter === false &&
    hasSpecialCharacter === false &&
    hasNumericCharacter === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

//returning the options 
  return {
    length: length,
    hasUppercaseLetter: hasUppercaseLetter,
    hasLowercaseLetter: hasLowercaseLetter,
    hasSpecialCharacter: hasSpecialCharacter,
    hasNumericCharacter: hasNumericCharacter,
  };
}

//generate password given user password selections
function generatePasswordWithOptions(passwordOptions) {
  var password = [];
  var availableCharacters = [];
  var guaranteedCharacters = [];

/*
combining character type arrays intor available character list
selecting random character and adding into guaranteed character list
*/

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

//selecting a random character from available charcters list
function getRandom(availableCharacters) {
  return availableCharacters[Math.floor(Math.random()*availableCharacters.length)];
}

//loop to select a random character from available character list and adding character to password
  for (var i=0; i < passwordOptions.length; i++) {
    var character = getRandom(availableCharacters);
    password.push(character);
  }

 //loop to get character from guaranteed character list and adding it to password to ensure at least 1 character of each selected type
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    password[i] = guaranteedCharacters[i];
  }
//joining all characters together to create string password
  return password.join('');
}

//generating password and displaying generated password to user 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//referencing the id of the generate button in HTML
var generateBtn = document.querySelector("#generate");

//adding functionality to run "write Password" when button is clicked
generateBtn.addEventListener("click", writePassword);

