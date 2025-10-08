import { expect, jest, test } from '@jest/globals';
import { MyMath } from "../src/mymath";

describe('MyMath Module Tests:', () =>{
    test('test sum should correctly add 3 and 5 to equal 8', () => {
        const result = MyMath.sum(3,5);
        expect(result).toEqual(8);
    });

    test('difference works correctly', () => {
        expect(MyMath.difference(5, 3)).toBe(2);
    });

    test('multiply works correctly', () => {
        expect(MyMath.multiply(5, 3)).toBe(15);
    });

    test('divide works correctly', () => {
        expect(MyMath.divide(10, 5)).toBe(2);
    });

    test('currency conversion works correctly', async () => {
        const currencySpy = jest.spyOn(MyMath, 'getCurrencyConversionRatesFromInternet').mockResolvedValue(4);
        const result = await MyMath.convertCurrency(100, 'usd', 'zł');
        expect(result).toBe(400);
        expect(MyMath.getCurrencyConversionRatesFromInternet).toHaveBeenCalledTimes(1);
    });
});
