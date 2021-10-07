import { makePrice, makeTransfer, makeTransferTitle } from './make-format';

describe('normalize tickets', () => {
  describe('make price', () => {
    it('check that the price is correct parse', () => {
      const price = 13400;
      const expected = `13\u00A0400 Р`;

      expect(makePrice(price)).toBe(expected);
    });

    it('should be parse', () => {
      const price = 0;
      const expected = '0 Р';

      expect(makePrice(price)).toBe(expected);
    });
  });
  describe('make transfer', () => {
    it('сheck the correct formation of transplants', () => {
      const transfers = ['HKG', 'JNB'];
      const expected = 'HKG, JNB';

      expect(makeTransfer(transfers)).toBe(expected);
    });

    it('check for proper formatting at 1 transplant', () => {
      const transfers = ['HKG'];
      const expected = 'HKG';

      expect(makeTransfer(transfers)).toBe(expected);
    });

    it('check for proper formatting if there are no transplants', () => {
      const transfers: string[] = [];
      const expected = '';

      expect(makeTransfer(transfers)).toBe(expected);
    });
  });

  describe('makeTransferTitle', () => {
    it('check the creation of the title if there are no transplants', () => {
      const transfers: string[] = [];
      const expected = 'Без пересадок';

      expect(makeTransferTitle(transfers)).toBe(expected);
    });

    it('check the creation of the title if 4 transplants', () => {
      const transfers = ['HKG', 'JNB', 'SPB', 'USA'];
      const expected = '4 пересадки';

      expect(makeTransferTitle(transfers)).toBe(expected);
    });

    it('correct declination for a large number of transplants', () => {
      const transfers = ['HKG', 'JNB', 'SPB', 'USA', 'TDD', 'BDD'];
      const expected = '6 пересадок';

      expect(makeTransferTitle(transfers)).toBe(expected);
    });
  });
});
