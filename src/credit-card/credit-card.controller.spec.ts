import { Test } from '@nestjs/testing';
import { CreditCardController } from './credit-card.controller';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

describe('CreditCardController', () => {
  let creditCardController: CreditCardController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [CreditCardController],
      providers: [InMemoryDBService],
    }).compile();

    creditCardController = module.get<CreditCardController>(CreditCardController);
  });

  describe('add', () => {
    it('should save each credit card and return the list', async () => {
      const sampleCreditCardInfo = {
        name: 'sss',
        number: 4539019090394224,
        limit: 0,
      };
      const expectedArray = [];
      let expected = {...sampleCreditCardInfo, id: 1, balance: 0};
      expectedArray.push(expected);
      let actual = creditCardController.add(sampleCreditCardInfo);
      expect(actual).toEqual(expected);

      expected = {...sampleCreditCardInfo, id: 2, balance: 0};
      expectedArray.push(expected);
      actual = creditCardController.add(sampleCreditCardInfo);
      expect(actual).toEqual(expected);

      const actualArray = creditCardController.getAll();
      expect(actualArray).toEqual(expectedArray);
    });
  });

  describe('getAll', () => {
    it('should return an empty array of credit cards', async () => {
      const expected = [];
      const actual = creditCardController.getAll();
      expect(actual).toEqual(expected);
    });
  });
});
