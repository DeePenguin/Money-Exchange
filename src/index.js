// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coinsValue = new Map([['H', 50], ['Q', 25], ['D', 10], ['N', 5], ['P', 1]]);
    const amountForExchange = {};
    const notEnoughCoins = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    //check currency
    if(currency === 0) {
        return amountForExchange;
    } else if(currency > 10000) {
        return notEnoughCoins;
    }
    //calculate 
    const calculateAmount = (currency, coinsValue) => {
        for (let [coin, value] of coinsValue){
            const division = Math.trunc(currency / value);
            const remainder = currency % value; 
            if(division > 0) {
                amountForExchange[coin] = division;
                currency = remainder;
            } else if(division > 0 && remainder === 0){
                break;
            }
        }
        return amountForExchange;
    };
    return calculateAmount(currency,coinsValue);
}
