import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import * as luhn from 'luhn';
import * as R from 'ramda';

export function IsValidCreditCardNumber(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsValidCreditCardNumber',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          const incomingValueToString = R.type(value) !== 'String' && R.toString(value) || value;
          return luhn.validate(R.replace(/\s/g, '', incomingValueToString));
        },
      },
    });
  };
}
