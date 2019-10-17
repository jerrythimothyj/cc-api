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
      const sampleCreditCardInfo0 = {
        id: 0,
        name: 'sss',
        number: '4539019090394224',
        limit: 0,
      };

      const sampleCreditCardInfo1 = {
        id: 0,
        name: 'sss',
        number: '4024007176710456',
        limit: 0,
      };

      const expectedArray = [];
      let expected = {...sampleCreditCardInfo0, id: 1, balance: 0};
      expectedArray.push(expected);
      let actual = creditCardController.add(sampleCreditCardInfo0);
      expect(actual).toEqual(expected);

      expected = {...sampleCreditCardInfo1, id: 2, balance: 0};
      expectedArray.push(expected);
      actual = creditCardController.add(sampleCreditCardInfo1);
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
