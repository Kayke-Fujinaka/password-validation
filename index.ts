const password = "1234567812345678!!aA";

const numbers = "0123456789";
const minLength = 16;
const maxLength = 32;
const specialCharacters =
  '&!?@#$*+%=.,/\\[]{}();: ¨ ^~¨´`ç"“”‘’‚„‹›<>«»ºª–­-_  ¯…¦•‣¶§';

export type Response = {
  result: boolean;
  error: string[];
};

// Vai validar se tem um número e se tem dois caracteres especiais na senha
const passwordValidOfNumberAndSpecialChar = (
  password: string,
  type: string,
  charLength: number
) => {
  const passwordValid = password.split("").filter((valuePassword) => {
    if (type === "numbers") return numbers.includes(valuePassword);
    if (type === "specialCharacters") {
      return specialCharacters.includes(valuePassword);
    }
  });
  return passwordValid.length < charLength ? false : true;
};

// Vai validar se tem o tamanho de caracteres exigidos
const lengthValidation = (password: string): boolean => {
  return password.length <= minLength || password.length >= maxLength
    ? false
    : true;
};

function includeAndSpecialChar(element: string) {
  if (numbers.includes(element) || specialCharacters.includes(element)) {
    return true;
  }
  return false;
}

function upperCaseValidation(password: string): boolean {
  let upCase = false;
  password.split("").forEach((element) => {
    if (includeAndSpecialChar(element)) return true;
    if (element.toUpperCase() === element) {
      upCase = true;
    }
  });
  return upCase;
}

function lowerCaseValidation(password: string): boolean {
  let lowCase = false;
  password.split("").forEach((element) => {
    if (includeAndSpecialChar(element)) return true;
    if (element.toLowerCase() === element) {
      lowCase = true;
    }
  });
  return lowCase;
}

// Vai verificar se as validações estõ certas
const checkPasswordValidations = (password: string): object => {
  const errorsResult: Response = {
    result: true,
    error: [],
  };

  if (!passwordValidOfNumberAndSpecialChar(password, "numbers", 1)) {
    errorsResult.result = false;
    errorsResult.error.push("A senha deve conter um número");
  }

  if (!passwordValidOfNumberAndSpecialChar(password, "specialCharacters", 2)) {
    errorsResult.result = false;
    errorsResult.error.push("A senha deve conter 2 caracteres especiais");
  }

  if (!upperCaseValidation(password)) {
    errorsResult.result = false;
    errorsResult.error.push("A senha deve conter letra maiúscula");
  }
  if (!lowerCaseValidation(password)) {
    errorsResult.result = false;
    errorsResult.error.push("A senha deve conter letra minúscula");
  }

  if (!lengthValidation(password)) {
    errorsResult.result = false;
    errorsResult.error.push("A senha deve conter de 16 a 32 caracteres");
  }

  return errorsResult;
};

console.log(checkPasswordValidations(password));

// npm run build - Conversão entre Typescript e Javascript
// node index - Para executar
