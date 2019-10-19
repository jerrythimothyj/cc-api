import { Test, TestingModule } from '@nestjs/testing';
import { IsValidNumberOrNumberString } from './is-valid-number-or-numberstring.service';
import { CreditCardDto } from '../../credit-card/credit-card.dto';
import { Validator } from 'class-validator';
import * as R from 'ramda';

describe('IsValidNumberOrNumberString', () => {

  const validator = new Validator();

  it('should be able to validate positive scenarios', async () => {
    const numbers = [
      '4024007176710456',
      '4532845049275850455',
      '5162276248967910',
      '6011122172253296223',
      '5020532190829892',
      '6378975343274928',
      '6378975343274928',
      1234,
      0,
      '1.6',
    ];
    class CreditCard {
      @IsValidNumberOrNumberString({
        message: 'number should be a number',
      })
      number: number | string;
    }

    for (const element of numbers) {
      const model = new CreditCard();
      model.number = element;
      const errors = await validator.validate(model);
      expect(errors.length).toEqual(0);
    }
  });

  it('should be able to validate negative scenarios', async () => {
    const numbers = [
      '4024f007f1767104561',
      '4532845049]2758504551',
      '51622 762489679101',
      '60111-221722532962231',
      '502053+21908298921',
      '637897/53432749281',
      '637897?53432749281',
      null,
      undefined,
      'something',
      '---------',
    ];
    // tslint:disable-next-line:max-classes-per-file
    class CreditCard {
      @IsValidNumberOrNumberString({
        message: 'number0 should be a number',
      })
      number0: string;

      @IsValidNumberOrNumberString({
        message: 'number1 should be a number',
      })
      number1: string;
    }

    for (const element of numbers) {
      const model = new CreditCard();
      model.number0 = element;
      model.number1 = element;
      const errors = await validator.validate(model);
      expect(errors.length).toEqual(2);
      expect(errors[0].constraints.IsValidNumberOrNumberString).toEqual('number0 should be a number');
    }

  });
});
