import { IsNotEmpty, IsNumber } from 'class-validator';
import { IsValidCreditCardNumber } from '../services/is-valid-credit-card/is-valid-credit-card.service';

export class CreditCardDto {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsValidCreditCardNumber({
    message: 'number should be a valid credit card number',
  })
  number: number;

  @IsNumber()
  limit: number;

  balance: number;
}
