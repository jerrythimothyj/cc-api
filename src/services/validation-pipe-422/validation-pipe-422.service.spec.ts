import { Test, TestingModule } from '@nestjs/testing';
import { ValidationPipe422Service } from './validation-pipe-422.service';

describe('ValidationPipe422Service', () => {
  let service: ValidationPipe422Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidationPipe422Service],
    }).compile();

    service = module.get<ValidationPipe422Service>(ValidationPipe422Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
