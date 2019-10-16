import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface CreditCardEntity extends InMemoryDBEntity {
  name: string;
  number: number;
  limit: number;
  balance: number;
}
