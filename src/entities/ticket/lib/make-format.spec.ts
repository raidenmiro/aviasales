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
});
