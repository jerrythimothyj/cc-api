import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import * as R from 'ramda';

export function IsValidNumberOrNumberString(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsValidNumberOrNumberString',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          const incomingValueToString = R.type(value) !== 'String' && R.toString(value) || value;
          if (R.isEmpty(incomingValueToString) || R.test(/\s/g, incomingValueToString)) { return false; }
          return !isNaN(incomingValueToString);
        },
      },
    });
  };
}
