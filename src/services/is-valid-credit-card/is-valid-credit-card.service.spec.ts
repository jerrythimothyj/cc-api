import { Test, TestingModule } from '@nestjs/testing';
import { IsValidCreditCardNumber } from './is-valid-credit-card.service';
import { CreditCardDto } from '../../credit-card/credit-card.dto';
import { Validator } from 'class-validator';
import * as R from 'ramda';

describe('IsValidCreditCardNumber', () => {

  const validator = new Validator();

  it('should be able to validate positive scenarios', () => {

    class CreditCard {
      @IsValidCreditCardNumber({
        message: 'number should be a valid credit card number',
      })
      number: number;
    }

    R.map((ccNumber) => {
      const model = new CreditCard();
      model.number = ccNumber;
      return validator.validate(model).then(errors => {
        expect(errors.length).toEqual(0);
      });
    })([
      4024007176710456,
      4532845049275850455,
      5162276248967910,
      3535631613104305205,
      5020532190829892,
      6378975343274928,
      '6378975343274928',
    ]);
  });
});
