"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const password = "1234567812345678!@";
// Eles estão armazenas, pois facilitarão caso precise alterar alguma exigência
// Variável para armazenar os números de 0 a 9
const numbers = "0123456789";
// Variáveis para armazenar o menor e o maior tamanho da senha
const minLength = 16;
const maxLength = 32;
// Variável para armazenar os caracteres especiais
const specialCharacters = '&!?@#$*+%=.,/\\[]{}();: ¨ ^~¨´`ç"“”‘’‚„‹›<>«»ºª–­-_  ¯…¦•‣¶§';
const numberValid = (password) => {
    const numberValid = password.split("").filter((e) => numbers.includes(e));
    if (numberValid.length < 1) {
        return false;
    }
    return true;
};
const lengthValid = (password) => {
    return password.length <= minLength || password.length >= maxLength
        ? false
        : true;
};
const specialCharactersValid = (password) => {
    const specialValid = password
        .split("")
        .filter((e) => specialCharacters.includes(e));
    if (specialValid.length < 2) {
        return false;
    }
    return true;
};
const passwordValid = (password) => {
    const errorsResult = {
        result: true,
        error: [],
    };
    if (!numberValid(password)) {
        errorsResult.error.push("A senha deve conter um número");
        errorsResult.result = false;
    }
    if (!lengthValid(password)) {
        errorsResult.error.push("A senha deve conter de 16 a 32 caracteres");
        errorsResult.result = false;
    }
    if (!specialCharactersValid(password)) {
        errorsResult.error.push("A senha deve conter 2 caracteres especiais");
        errorsResult.result = false;
    }
    return errorsResult;
};
const callFunction = passwordValid(password);
console.log(callFunction);
console.log(specialCharactersValid(password));
// npm run build - Conversão entre Typescript e Javascript
// node index - Para executar
