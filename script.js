// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let passwordText = document.querySelector("#password");
let userInput = [];
let passwordOptions = [];
let password = "";

// Function to prompt user for password options
function getPasswordOptions() {
  password = "";
  let passwordCharacterOption = prompt(
    "Please enter the number of characters you would like in your password. This must be between 10 and 64",
    ""
  );
  passwordLength = parseInt(passwordCharacterOption, 0);
  if (passwordLength >= 10 && passwordLength <= 64) {
    alert(`You selected ${passwordLength}`);

    // userInput[0].passwordLength = passwordLength;
    userInput.push({ PasswordLength: passwordLength });
  } else {
    alert("Input is invalid, Please select a value between 10 and 64");
  }
  if (passwordLength >= 10 && passwordLength <= 64) {
    let lowerCharacter = confirm(
      "Should your password contain lowercase letters? Click OK to include or Cancel not to include in your password"
    );

    let upperCharacter = confirm(
      "Should your password contain uppercase letters? Click OK to include or Cancel not to include in your password"
    );

    let specialCharacter = confirm(
      "Should your password contain special characters? Click OK to include or Cancel not to include in your password"
    );
    let numericCharacter = confirm(
      "Should your password contain numbers? Click OK to include or Cancel not to include in your password"
    );

    if (lowerCharacter) {
      passwordOptions.push(lowerCasedCharacters);
    }
    if (upperCharacter) {
      passwordOptions.push(upperCasedCharacters);
    }
    if (specialCharacter) {
      passwordOptions.push(specialCharacters);
    }
    if (numericCharacter) {
      passwordOptions.push(numericCharacters);
    }
    if (passwordOptions.length === 0) {
      alert(
        "you must select at least one type of character to include in your password. Please try again."
      );
      getPasswordOptions();
    } else {
      generatePassword();
      passwordOptions = [];
    }
  }
}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  for (let i = 0; i < this.passwordLength; i++) {
    passwordOptions = passwordOptions.flat();
    password += getRandom(passwordOptions);
  }
}
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
