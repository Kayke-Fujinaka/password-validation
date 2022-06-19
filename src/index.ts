// Stores the Digits from 0 to 9.
const digit: string = "0123456789";
// Stores the Special Chars.
const specialChars: string =
  '&!?@#$*+%=.,/\\[]{}();: ¨ ^~¨´`ç"“”‘’‚„‹›<>«»ºª–­-_  ¯…¦•‣¶§';
// Store the Maximum Length.
const minLength: number = 16;
// Store the Minimun Length.
const maxLength: number = 32;

// Apply the Result Typing.
export type Response = {
  result: boolean;
  errors: string[];
};

// It'll Check if the Validations are Correct. Basically like a Validation Checklist.
// It'll Receive the Password as a Parameter and Pass to the Other Functions that it'll Call.
export const checkPasswordValid = (password: string): Response => {
  // In Case of an Error, It'll Change the Result to False and Store the Errors in an Array.
  const response: Response = {
    result: true,
    errors: [],
  };

  // It'll Check if Function is True. If False, Returns an Error.
  // Validation it the Password Contains the Required Length.
  if (password.length < minLength || password.length > maxLength) {
    response.result = false;
    response.errors.push("The password must contain 16 to 32 chars");
  }

  // It'll Check if Function is True. If False, Returns an Error.
  // Validation it the Password Contains one Digit Chars.
  if (!digitValid(password)) {
    response.result = false;
    response.errors.push("The password must contain one digit chars");
  }

  // It'll Check if Function is True. If False, Returns an Error.
  // Validation it the Password Contains two Special Chars.
  if (!specialCharsValid(password)) {
    response.result = false;
    response.errors.push("The password must contain two special chars");
  }

  // It'll Check if Function is True. If False, Returns an Error.
  // Validation it the Password Contains one Uppercase Letter.
  if (!upperCaseValid(password)) {
    response.result = false;
    response.errors.push("The password must contain uppercase letter");
  }

  // It'll Check if Function is True. If False, Returns an Error.
  // Validation it the Password Contains one Lowercase Letter.
  if (!lowerCaseValid(password)) {
    response.result = false;
    response.errors.push("The password must contain lowercase letter");
  }

  if (!sequenceValid(password)) {
    response.result = false;
    response.errors.push(
      "It cannot contain more than 3 sequences of characters, letters or numbers (abc or 123, for example)"
    );
  }

  // Return the response.
  return response;
};

// The function will check if the password has one digit.
const digitValid = (password: string): boolean => {
  const digitCharacters = password
    .split("")
    .filter((element) => digit.includes(element));
  return digitCharacters.length < 1 ? false : true;
};

// The function will check if the password has two special chars.
const specialCharsValid = (password: string): boolean => {
  const specialCaracteres = password
    .split("")
    .filter((element) => specialChars.includes(element));
  return specialCaracteres.length < 2 ? false : true;
};

// Function that'll be declared in another function to not repeat the same line of code.
// It'll check if the character is a digit or a special char.
// If it is true, it'll take the element out of the validation, because numbers and special characters count as uppercase and lowercase letters.
const includeDigitAndSpecialChar = (element: string): boolean => {
  return digit.includes(element) || specialChars.includes(element)
    ? true
    : false;
};

// Function that'll validate if it has a uppercase letter
const upperCaseValid = (password: string): boolean => {
  // Var that stores a boolean. If it returns false, it'll go through the password verification and return an error.
  let upCase = false;
  // Execute a function on each element of an array.
  password.split("").forEach((element) => {
    // Will call the function passing the element.
    // It'll return saying that it has a digit or special character. Thus, eliminating from the check.
    // If it is a letter it'll return as false
    if (includeDigitAndSpecialChar(element)) return true;
    // Will lower every element and compare if there is an equivalent.
    if (element.toUpperCase() === element) upCase = true;
  });
  // If it returns as false it is an error and if it is true, everything is ok with the password.
  return upCase;
};

// Function that will validate if it has a lowercase letter
const lowerCaseValid = (password: string): boolean => {
  // Var that stores a boolean. If it returns false, it'll go through the password verification and return an error.
  let lowCase = false;
  // Execute a function on each element of an array.
  password.split("").forEach((element) => {
    // Will call the function passing the element.
    // It'll return saying that it has a digit or special character. Thus, eliminating from the check.
    // If it is a letter it'll return as false
    if (includeDigitAndSpecialChar(element)) return true;
    if (element.toLowerCase() === element)
      // Will lower every element and compare if there is an equivalent.
      lowCase = true;
  });
  // If it returns as false it is an error and if it is true, everything is ok with the password.
  return lowCase;
};

// It'll check if the password contains sequential characters, for example: 'abc', '123', etc.
const sequenceValid = (password: string): boolean => {
  for (let i = 0; i < password.length; i++) {
    if (
      +password[i + 1] === +password[i] + 1 &&
      +password[i + 2] === +password[i] + 2
    ) {
      return false;
    }
    if (
      +password.charCodeAt(i + 1) == +password.charCodeAt(i) + 1 &&
      +password.charCodeAt(i + 2) == +password.charCodeAt(i) + 2
    ) {
      return false;
    }
  }
  return true;
};
