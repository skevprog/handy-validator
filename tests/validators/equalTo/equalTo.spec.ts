// @ts-nocheck
import HandyValidator from '../../../src/index';
import equalToErrors from '../../../src/validators/equalTo/equalTo.errors';

describe('equalTo validator', () => {
  let HandyVal: HandyValidator;
  const validator = 'equalTo';

  beforeAll(() => {
    HandyVal = new HandyValidator();
  });

  describe('arrayOfElementsNotAnArray Error', () => {
    let HandyValidatorResult: boolean;
    let jestSpy: jest.SpyInstance;

    beforeAll(() => {
      jestSpy = jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

      const value = 'Value';
      const validationArguments = 'Hemlo!';
      // @ts-ignore
      HandyValidatorResult = HandyVal.validate(validator, value, validationArguments);
    });

    it('should Handy Validator Result be false', () => {
      expect(HandyValidatorResult).toBeFalsy();
    });

    it('should call console.error once', () => {
      expect(jestSpy.mock.calls.length).toBe(1);
    });

    it('should console.error message be validatorArrayGroupNotAnArray', () => {
      const mockError = new Error(equalToErrors.arrayOfElementsNotAnArray);
      expect(jestSpy.mock.calls[0][0]).toEqual(mockError);
    });

    afterAll(() => {
      jestSpy.mockRestore();
    });
  });

  describe('Validator tests', () => {
    it('should return true', () => {
      const value = 'Good_value';
      const validationArguments = ['Good_value', 'Bad_Value'];
      expect(HandyVal.validate(validator, value, validationArguments)).toBeTruthy();
    });

    it('should return true', () => {
      const value = NaN;
      const validationArguments = ['Good_value', NaN, 'Bad_Value'];
      expect(HandyVal.validate(validator, value, validationArguments)).toBeTruthy();
    });

    it('should return false', () => {
      const value = 'Good_value';
      const validationArguments = ['Bad_value_1', 'Bad_value_2', NaN];
      expect(HandyVal.validate(validator, value, validationArguments)).toBeFalsy();
    });

    it('should return false', () => {
      const value = 'Good_value';
      expect(HandyVal.validate(validator, value)).toBeFalsy();
    });
  });
});