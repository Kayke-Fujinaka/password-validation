// Store the Password.
const password = "635153721536357613Aa!!";
// Stores the Digits from 0 to 9.
const digit = "0123456789";
// Stores the Special Chars.
const specialChars =
  '&!?@#$*+%=.,/\\[]{}();: ¨ ^~¨´`ç"“”‘’‚„‹›<>«»ºª–­-_  ¯…¦•‣¶§';
// Store the Maximum Length.
const minLength = 16;
// Store the Minimun Length.
const maxLength = 32;

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
  // Validation if the Password Contains one Number.
  if (!digitAndSpecialCharsValid(password, "digit", 1)) {
    response.result = false;
    response.errors.push("The password must contain one digit");
  }
  // It'll Check if Function is True. If False, Returns an Error.
  // Validation it the Password Contains two Special Chars.
  if (!digitAndSpecialCharsValid(password, "specialChars", 2)) {
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
    response.errors.push("The password must contain lettercase letter");
  }
  // It'll Check if Function is True. If False, Returns an Error.
  // Validation it the Password Contains the Required Length.
  if (!lengthValid(password)) {
    response.result = false;
    response.errors.push("The password must contain 16 to 32 chars");
  }

  // if (!sequenceValid(password)) {
  //   response.result = false;
  //   response.errors.push("The password must contain a string that is not 3 characters followed by numbers or letters.");
  // }

  // Return the response.
  return response;
};

// Reusing a Function that had Different Validations, but the Same Logic, that is, I made a Function for these Two Cases.
// I'll pass as a parameter the password, the type or what's the validation and the length of chars required. Will be passed in checkPasswordValid.
// The function will check if the password has one digit and if it has two special chars.
const digitAndSpecialCharsValid = (
  password: string,
  type: string,
  charLength: number
): boolean => {
  // It'll split the password separating at each char. Additionaly, it filtering the value of the password, each char being.
  const passwordValid = password.split("").filter((valuePassword) => {
    // Conditional that'll check if the passed parameter is equal to "digit".
    // Will return checking if the elements of the var "digit" are present in each char of the password.
    if (type === "digit") return digit.includes(valuePassword);
    // Conditional that'll check if the passed parameter is equal to "specialChars".
    // Will return checking if the elements of the var "specialChars" are present in each char of the password.
    if (type === "specialChars") return specialChars.includes(valuePassword);
  });
  // Conditional that'll check if the variable above contains the required number of chars.
  return passwordValid.length < charLength ? false : true;
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
    // Will lower every element and compare if there is an equivalent.
    if (element.toLowerCase() === element) lowCase = true;
  });
  // If it returns as false it is an error and if it is true, everything is ok with the password.
  return lowCase;
};

// Will validate if it has the required character size.
const lengthValid = (password: string): boolean => {
  // Conditional that'll check if the password contains the required character length.
  return password.length < minLength || password.length > maxLength
    ? false
    : true;
};

// const sequenceValid = (password: string): boolean => {
  
//   return true; 
// };

console.log(checkPasswordValid(password));

// npm run build - Conversion between Typescript and Javascript.
// node index - To run code.
