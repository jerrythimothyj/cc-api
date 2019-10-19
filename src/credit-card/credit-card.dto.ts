import { IsNotEmpty } from 'class-validator';
import { IsValidCreditCardNumber } from '../services/is-valid-credit-card/is-valid-credit-card.service';
import { IsValidNumberOrNumberString } from '../services/is-valid-number-or-numberstring/is-valid-number-or-numberstring.service';

export class CreditCardDto {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsValidCreditCardNumber({
    message: 'number should be a valid credit card number',
  })
  number: string;

  @IsValidNumberOrNumberString()
  limit: number | string;

  balance?: number;
}
