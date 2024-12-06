const fromCurrency = document.querySelector('#from-currency');
const moneyInput = document.querySelector('#money-input');
const toCurrency = document.querySelector('#to-currency');
const moneyOutput = document.querySelector('#money-output');

const convertations = {
    'ton': { 'ton': 1, 'usdt': 6.76, 'not': 701.57, 'dogs': 8465.67 },
    'usdt': { 'ton': 0.148, 'usdt': 1, 'not': 103.84, 'dogs': 1250.63 },
    'not': { 'ton': 0.001425, 'usdt': 0.009637, 'not': 1, 'dogs': 12.04 },
    'dogs': { 'ton': 0.000118, 'usdt': 0.0007988, 'not': 0.08306, 'dogs': 1 },
};

moneyInput.addEventListener('input', function () {
    moneyOutput.innerText = Number(moneyInput.value) * convertations[fromCurrency.value][toCurrency.value];
    let oldToCurrency = toCurrency.value;
    if (oldToCurrency != toCurrency.value) {
        moneyInput.value = 0;
    }
});
