import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import * as luhn from 'luhn';

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
          return luhn.validate(value);
        },
      },
    });
  };
}
