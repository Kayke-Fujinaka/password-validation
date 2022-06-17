import { checkPasswordValid, Response } from ".";

describe("checkPasswordValid", () => {
  let sut: Response;

  beforeEach(() => {
    sut = {
      result: false,
      errors: [""],
    };
  });

 test('A senha deve ter mais de 16 caracteres', () => {
   const error = 'Senha muito curta'
   sut = checkPasswordValid('1234567812345678!!Aa')
   const { result, errors } = sut
   expect(result).toEqual(false)
   expect(errors).toEqual([error])
 })
});
