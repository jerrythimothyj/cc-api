import { Test, TestingModule } from '@nestjs/testing';
import { IsValidCreditCardNumber } from './is-valid-credit-card.service';
import { CreditCardDto } from '../../credit-card/credit-card.dto';
import { Validator } from 'class-validator';
import * as R from 'ramda';

describe('IsValidCreditCardNumber', () => {

  const validator = new Validator();

  it('should be able to validate positive scenarios', async () => {
    const ccNumbers = [
      '4024007176710456',
      '4532845049275850455',
      '5162276248967910',
      '6011122172253296223',
      '5020532190829892',
      '6378975343274928',
      '6378975343274928',
    ];
    class CreditCard {
      @IsValidCreditCardNumber({
        message: 'number should be a valid credit card number',
      })
      number: string;
    }

    for (const element of ccNumbers) {
      const model = new CreditCard();
      model.number = element;
      const errors = await validator.validate(model);
      expect(errors.length).toEqual(0);
    }
  });

  it('should be able to validate negative scenarios', async () => {
    const ccNumbers = [
      '40240071767104561',
      '45328450492758504551',
      '51622762489679101',
      '60111221722532962231',
      '50205321908298921',
      '63789753432749281',
      '63789753432749281',
      null,
      undefined,
      'something',
      '---------',
    ];
    // tslint:disable-next-line:max-classes-per-file
    class CreditCard {
      @IsValidCreditCardNumber({
        message: 'number0 should be a valid credit card number',
      })
      number0: string;

      @IsValidCreditCardNumber({
        message: 'number1 should be a valid credit card number',
      })
      number1: string;
    }

    for (const element of ccNumbers) {
      const model = new CreditCard();
      model.number0 = element;
      model.number1 = element;
      const errors = await validator.validate(model);
      expect(errors.length).toEqual(2);
      expect(errors[0].constraints.IsValidCreditCardNumber).toEqual('number0 should be a valid credit card number');
    }

  });
});
