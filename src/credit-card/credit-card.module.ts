import { Module } from '@nestjs/common';
import { CreditCardController } from './credit-card.controller';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Module({
  controllers: [CreditCardController],
  providers: [InMemoryDBService],
})
export class CreditCardModule {}
