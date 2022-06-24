import { specialChars } from "./utils/specialChars";
import { digits } from "./utils/digits";
import { minLength } from "./utils/minLength";
import { maxLength } from "./utils/maxLength";

export type Response = {
  result: boolean;
  errors: string[];
};

export const checkPasswordValidation = (password: string): Response => {
  const response: Response = {
    result: true,
    errors: [],
  };

  if (password.length < minLength || password.length > maxLength) {
    response.result = false;
    response.errors.push("The password must contain 16 to 32 chars");
  }

  if (!digitValidation(password)) {
    response.result = false;
    response.errors.push("The password must contain one digit chars");
  }

  if (!specialCharsValidation(password)) {
    response.result = false;
    response.errors.push("The password must contain two special chars");
  }

  if (!upperCaseValidation(password)) {
    response.result = false;
    response.errors.push("The password must contain uppercase letter");
  }

  if (!lowerCaseValidation(password)) {
    response.result = false;
    response.errors.push("The password must contain lowercase letter");
  }

  if (!sequenceValidation(password)) {
    response.result = false;
    response.errors.push(
      "It cannot contain more than 3 sequences of characters, letters or numbers (abc or 123, for example)"
    );
  }

  return response;
};

const digitValidation = (password: string): boolean => {
  const digitsCharacters = password
    .split("")
    .filter((element) => digits.includes(element));
  return digitsCharacters.length < 1 ? false : true;
};

const specialCharsValidation = (password: string): boolean => {
  const specialCaracteres = password
    .split("")
    .filter((element) => specialChars.includes(element));
  return specialCaracteres.length < 2 ? false : true;
};

const removeDigitsAndSpecial = (element: string): boolean => {
  return digits.includes(element) || specialChars.includes(element)
    ? true
    : false;
};

const upperCaseValidation = (password: string): boolean => {
  let upCase = false;

  password.split("").forEach((element) => {
    if (removeDigitsAndSpecial(element)) return true;
    if (element.toUpperCase() === element) upCase = true;
  });
  return upCase;
};

const lowerCaseValidation = (password: string): boolean => {
  let lowCase = false;

  password.split("").forEach((element) => {
    if (removeDigitsAndSpecial(element)) return true;
    if (element.toLowerCase() === element) lowCase = true;
  });
  return lowCase;
};

const sequenceValidation = (password: string): boolean => {
  for (let i = 0; i < password.length; i++) {
    if (
      +password[i + 1] === +password[i] + 1 &&
      +password[i + 2] === +password[i] + 2
    ) {
      return false;
    }

    const sequenceLetters = password.toLowerCase();

    if (
      +sequenceLetters.charCodeAt(i + 1) ===
        +sequenceLetters.charCodeAt(i) + 1 &&
      +sequenceLetters.charCodeAt(i + 2) === +sequenceLetters.charCodeAt(i) + 2
    ) {
      return false;
    }
  }
  return true;
};

console.log(checkPasswordValidation("14386vfg23Kf!!241ahc"));
