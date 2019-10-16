import { Test, TestingModule } from '@nestjs/testing';
import { IsValidCreditCardService } from './is-valid-credit-card.service';

describe('IsValidCreditCardService', () => {
  let service: IsValidCreditCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsValidCreditCardService],
    }).compile();

    service = module.get<IsValidCreditCardService>(IsValidCreditCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
