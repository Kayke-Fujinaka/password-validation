import { checkPasswordValid, Response } from ".";

describe("checkPasswordValid", () => {
  // System Under Test (SUT) = is the object or target of a performance measurement test or benchmark.
  // Set the SUT type to Response
  let SUT: Response;

  // beforeEach notation sets the SUT value before each test
  // SUT as the Response default
  beforeEach(() => {
    SUT = {
      result: true,
      errors: [],
    };
  });

  it("Test to verify that the password is less than 16 Chars", () => {
    // Sets the error value equal to the validation value of this error from index.ts
    const error = "The password must contain 16 to 32 chars";
    // Define the SUT variable receiving the password validation function and pass it as a parameter
    // Password less than 16
    SUT = checkPasswordValid("IG5iDxf%Sc3%!");
    // Desestruturing SUT Object
    const { result, errors } = SUT;
    // Set the expected values ​​of sut properties
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password is more than 32 Chars", () => {
    // Sets the error value equal to the validation value of this error from index.ts
    const error = "The password must contain 16 to 32 chars";
    // Define the SUT variable receiving the password validation function and pass it as a parameter
    // Password more than 32
    SUT = checkPasswordValid("cBlPN72Bpu#L2JQdntLUY$V&&Rx!83nToZf");
    // Desestruturing SUT Object
    const { result, errors } = SUT;
    // Set the expected values ​​of sut properties
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password does not have two Special Chars", () => {
    // Sets the error value equal to the validation value of this error from index.ts
    const error = "The password must contain two special chars";
    // Define the SUT variable receiving the password validation function and pass it as a parameter
    // Password with less than two special characters
    SUT = checkPasswordValid("jkA6oEblsAXpLqQYeB");
    // Desestruturing SUT Object
    const { result, errors } = SUT;
    // Set the expected values ​​of sut properties
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password is not Uppercase", () => {
    // Sets the error value equal to the validation value of this error from index.ts
    const error = "The password must contain uppercase letter";
    // Define the SUT variable receiving the password validation function and pass it as a parameter
    // Password without a uppercase letter
    SUT = checkPasswordValid("em^9haid&p43v4a54k");
    // Desestruturing SUT Object
    const { result, errors } = SUT;
    // Set the expected values ​​of sut properties
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password is not Lowercase", () => {
    // Sets the error value equal to the validation value of this error from index.ts
    const error = "The password must contain lowercase letter";
    // Define the SUT variable receiving the password validation function and pass it as a parameter
    // Password without a lowercase letter
    SUT = checkPasswordValid("XWD!QV*ANQ6S^45N!");
    // Desestruturing SUT Object
    const { result, errors } = SUT;
    // Set the expected values ​​of sut properties
    expect(result).toEqual(false);
    expect(errors).toEqual([error]);
  });

  it("Test to verify that the password does not pass in any case", () => {
    // Define the SUT variable receiving the password validation function and pass it as a parameter
    // Password with no requirement
    SUT = checkPasswordValid("");
    // Desestruturing SUT Object
    const { result, errors } = SUT;
    // Set the expected values ​​of sut properties
    expect(result).toEqual(false);
    expect(errors.length).not.toBe(0 | 1);
  });

  it("Test to verify that the password passes in all cases", () => {
    // Define the SUT variable receiving the password validation function and pass it as a parameter
    // Password with all requirements
    SUT = checkPasswordValid("7JF!h&h3fJpFtd*T^k*^");
    // Desestruturing SUT Object
    const { result, errors } = SUT;
    // Set the expected values ​​of sut properties
    expect(result).toEqual(true);
    expect(errors).toEqual([]);
  });
});
