import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreditCardDto {
  id: number;

  @IsNotEmpty()
  name: string;

  number: number;

  @IsNumber()
  limit: number;

  balance: number;
}
