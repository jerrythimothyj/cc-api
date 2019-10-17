import { Test, TestingModule } from '@nestjs/testing';
import { ValidationPipe422Service, processErrorArray } from './validation-pipe-422.service';

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

  it('should be able to transform the error data to an array of messages', () => {
    const errorsArray = [{
      target:
        { name: '', number: 'a', limit: 0, balance: '56' },
      value: '',
      property: 'name',
      children: [],
      constraints: { isNotEmpty: 'name should not be empty' },
    },
    {
      target:
        { name: '', number: 'a', limit: 0, balance: '56' },
      value: 'a',
      property: 'number',
      children: [],
      constraints:
        { IsValidCreditCardNumber: 'number should be a valid credit card number' },
    }];
    expect(processErrorArray(errorsArray)).toEqual([
      'name should not be empty',
      'number should be a valid credit card number',
    ]);
  });

});
