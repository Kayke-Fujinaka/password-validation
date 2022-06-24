import { checkPasswordValidation, Response } from ".";

describe("checkPasswordValidation", () => {
  let SUT: Response;

  beforeEach(() => {
    SUT = {
      result: true,
      errors: [],
    };
  });

  it("Test to verify that the password is less than 16 Chars", () => {
    const error = "The password must contain 16 to 32 chars";
    SUT = checkPasswordValidation("IG5iDxf%Sc3%!");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password is more than 32 Chars", () => {
    const error = "The password must contain 16 to 32 chars";
    SUT = checkPasswordValidation("cBlPN72Bpu#L2JQdntLUY$V&&Rx!83nToZf");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password does not have one Digit Chars", () => {
    const error = "The password must contain one digit chars";
    SUT = checkPasswordValidation("TRmfTLfZwP&qMoay!T");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password does not have two Special Chars", () => {
    const error = "The password must contain two special chars";
    SUT = checkPasswordValidation("jkA6oEblsAXpLqQYeB");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password is not Uppercase", () => {
    const error = "The password must contain uppercase letter";
    SUT = checkPasswordValidation("em^9haid&p43v4a54k");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password is not Lowercase", () => {
    const error = "The password must contain lowercase letter";
    SUT = checkPasswordValidation("XWD!QV*ANQ6S^45N!");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Will check if the password has a sequence of letters, such as: abc, ghi", () => {
    const error =
      "It cannot contain more than 3 sequences of characters, letters or numbers (abc or 123, for example)";
    SUT = checkPasswordValidation("m9NI8iXRgIYxabc!!TBK0I");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Will check if the password has a sequence of numbers, such as: 123, 567", () => {
    const error =
      "It cannot contain more than 3 sequences of characters, letters or numbers (abc or 123, for example)";
    SUT = checkPasswordValidation("Tu$OBMgbd3vK!345vDPVP");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password does not pass in any case", () => {
    const allErrorList = [
      "The password must contain 16 to 32 chars",
      "The password must contain one digit chars",
      "The password must contain two special chars",
      "The password must contain uppercase letter",
      "The password must contain lowercase letter",
    ];
    SUT = checkPasswordValidation("");
    const { result, errors } = SUT;
    expect(result).toEqual(false);
    expect(errors).toEqual(allErrorList);
  });

  it("Test to verify that the password passes in all cases", () => {
    SUT = checkPasswordValidation("7JF!h&h3f JpFtd*T^k*^");
    const { result, errors } = SUT;
    expect(result).toEqual(true);
    expect(errors).toEqual([]);
  });
});
