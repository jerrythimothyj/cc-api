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
          return luhn.validate(R.replace(/\s/g, '', value));
        },
      },
    });
  };
}
