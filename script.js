let money = 150000;
let income = 'фриланс';
let addExpenses = 'Интернет, транспорт, электричество, телефон';
let deposit = true;
let mission = 1000000;
let period = 12;

console.log('money:', typeof money);
console.log('income:', typeof income);
console.log('deposit:', typeof deposit);



console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать '+ mission + ' рублей');


 
let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);

money = prompt('Ваш месячный доход?', '0');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','');
deposit = confirm('Есть ли у вас депозит в банке?');

console.log('длина addExpenses = ', addExpenses.length);
console.log(addExpenses.toLowerCase().split(', '));

let expenses1 = prompt('Введите обязательную статью расходов?'); 
let amount1 = prompt('Во сколько это обойдется?'); 
let expenses2 = prompt('Введите обязательную статью расходов?'); 
let amount2 = prompt('Во сколько это обойдется?'); 

let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц: ', budgetMonth);
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');

budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ', Math.floor(budgetDay));

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay > 0) {
    console.log('К сожалению, у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}