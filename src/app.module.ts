import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditCardModule } from './credit-card/credit-card.module';

@Module({
  imports: [InMemoryDBModule, CreditCardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
