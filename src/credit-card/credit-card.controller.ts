import { Controller, Post, Body, Get } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CreditCardEntity } from './credit-card.interface';

@Controller('credit-card')
export class CreditCardController {

  constructor(private readonly creditCardService: InMemoryDBService<CreditCardEntity>) {}

  @Get()
  findAll(): CreditCardEntity[] {
    return this.creditCardService.getAll();
  }

  @Post()
  createUser(@Body() creditCard: CreditCardEntity): CreditCardEntity {
    return this.creditCardService.create(creditCard);
  }
}
