import { Controller, Post, Body, Get } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CreditCardDto } from './credit-card.dto';

@Controller('credit-card')
export class CreditCardController {

  constructor(private readonly creditCardService: InMemoryDBService<CreditCardDto>) { }

  @Get()
  getAll(): CreditCardDto[] {
    return this.creditCardService.getAll();
  }

  @Post()
  add(@Body() creditCard: CreditCardDto): CreditCardDto {
    return this.creditCardService.create({ ...creditCard, balance: 0 });
  }
}
