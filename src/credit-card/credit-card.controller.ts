import { Controller, Post, Body, Get } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CreditCardDto } from './credit-card.dto';

@Controller('credit-card')
export class CreditCardController {

  constructor(private readonly creditCardService: InMemoryDBService<CreditCardDto>) { }

  @Get()
  findAll(): CreditCardDto[] {
    return this.creditCardService.getAll();
  }

  @Post()
  createUser(@Body() creditCard: CreditCardDto): CreditCardDto {
    return this.creditCardService.create({ ...creditCard, balance: 0 });
  }
}
