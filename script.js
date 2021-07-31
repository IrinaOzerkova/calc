let money = 150000;
let income = 'фриланс';
let addExpenses = 'Интернет, транспорт, электричество, телефон';
let deposit = true;
let mission = 1000000;
let period = 12;

console.log('money:', typeof money);
console.log('income:', typeof income);
console.log('deposit:', typeof deposit);

console.log('длина addExpenses = ', addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать '+ mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);
