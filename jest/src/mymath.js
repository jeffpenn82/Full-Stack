export class MyMath {
    static sum = (x, y) => {
        return x + y;
    }

    static difference = (x, y) => {
        return x - y;
    }

    static multiply = (x, y) => {
        return x * y;
    }

    static divide = (x, y) => {
        return x / y;
    }

    static convertCurrency = async (amount, from = 'usd', to = 'zł') => {
        const toRate = await MyMath.getCurrencyConversionRatesFromInternet('zł');

        return amount * toRate;
    }

    static getCurrencyConversionRatesFromInternet = async (currency = 'usd') => {
        // Pretend that we're calling an API on the internet to fetch
        //   currency conversion rates, default USD
        console.log(`\n\n------- I just made a call to the internet --------\n\n`);
        return Promise.resolve((Math.random() * 4).toFixed(2));
    }
}