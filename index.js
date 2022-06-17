"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const password = "1234567812345678!!aA";
const numbers = "0123456789";
const minLength = 16;
const maxLength = 32;
const specialCharacters = '&!?@#$*+%=.,/\\[]{}();: ¨ ^~¨´`ç"“”‘’‚„‹›<>«»ºª–­-_  ¯…¦•‣¶§';
// Vai validar se tem um número e se tem dois caracteres especiais na senha
const passwordValidOfNumberAndSpecialChar = (password, type, charLength) => {
    const passwordValid = password.split("").filter((valuePassword) => {
        if (type === "numbers")
            return numbers.includes(valuePassword);
        if (type === "specialCharacters") {
            return specialCharacters.includes(valuePassword);
        }
    });
    return passwordValid.length < charLength ? false : true;
};
// Vai validar se tem o tamanho de caracteres exigidos
const lengthValidation = (password) => {
    return password.length <= minLength || password.length >= maxLength
        ? false
        : true;
};
function includeAndSpecialChar(element) {
    if (numbers.includes(element) || specialCharacters.includes(element)) {
        return true;
    }
    return false;
}
function uppercaseValidation(password) {
    let upCase = false;
    password.split("").forEach((element) => {
        if (includeAndSpecialChar(element))
            return true;
        if (element.toUpperCase() === element) {
            upCase = true;
        }
    });
    return upCase;
}
function lowercaseValidation(password) {
    let lowCase = false;
    password.split("").forEach((element) => {
        if (includeAndSpecialChar(element))
            return true;
        if (element.toLowerCase() === element) {
            lowCase = true;
        }
    });
    return lowCase;
}
// Vai verificar se as validações estõ certas
const checkPasswordValidations = (password) => {
    const errorsResult = {
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
    if (!uppercaseValidation(password)) {
        errorsResult.result = false;
        errorsResult.error.push("Não tem letra maiuscula");
    }
    if (!lowercaseValidation(password)) {
        errorsResult.result = false;
        errorsResult.error.push("Não tem letra minuscula");
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
