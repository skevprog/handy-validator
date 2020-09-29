import { IStringOperator, IOperatorArguments, IOperatorConditions } from '../interfaces';
import { processOperatorArgumentsValidations } from '../utils';

export class StartsWithStringOperator implements IStringOperator {
  static errors = {
    operatorArgumentsLengthInvalid: 'HVP_STRING_OPERATOR_ARGUMENTS_LENGTH_INVALID',
    operatorArgumentsTypesError: 'HVP_STRING_OPERATOR_ARGUMENTS_TYPES_ERROR',
  }

  public callback = (x: string, y: string): boolean => x.indexOf(y) === 0;

  public validateOperatorArguments(operatorArguments: IOperatorArguments): void {
    const operatorConditions: IOperatorConditions[] = [
      {
        condition: this.isOperatorArgumentsLengthCorrect.bind(this),
        assumption: false,
        error: StartsWithStringOperator.errors.operatorArgumentsLengthInvalid,
      },
      {
        condition: this.isOperatorSecondArgumentString,
        assumption: false,
        error: StartsWithStringOperator.errors.operatorArgumentsTypesError,
      },
    ];
    processOperatorArgumentsValidations(operatorConditions, operatorArguments);
  }

  private isOperatorArgumentsLengthCorrect(operatorArguments: IOperatorArguments): boolean {
    return operatorArguments.length === this.callback.length;
  }

  private isOperatorSecondArgumentString(operatorArguments: IOperatorArguments): boolean {
    return typeof operatorArguments[1] === 'string';
  }
}
