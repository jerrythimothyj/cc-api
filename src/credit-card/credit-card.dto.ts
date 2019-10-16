import { IsNotEmpty } from 'class-validator';

export class CreditCardDto {
  id: number;

  @IsNotEmpty()
  name: string;

  number: number;

  limit: number;

  balance: number;
}
