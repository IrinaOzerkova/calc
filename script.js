let money = 150000;
let income = 'фриланс';
let addExpenses = 'Интернет, транспорт, электричество, телефон';
let deposit = true;
let mission = 1000000;
let period = 12;

const showTypeOf = function (data) {
    return typeof data;
};

console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

//console.log('Период равен ' + period + ' месяцев');
//console.log('Цель заработать '+ mission + ' рублей');


 
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

const getExpenceMonth = function(am1, am2) {
    return parseInt(am1) + parseInt(am2);
};

const getAccumulatedMonth = function(mon, amount) {
    return mon - amount;
};

let accumulatedMonth = getAccumulatedMonth(money, getExpenceMonth(amount1,amount2));
console.log('accumulatedMonth: ', accumulatedMonth);

const getTargetMonth = function(mis, acc) {
    return Math.ceil(mis / acc);
};


console.log('Цель будет достигнута за ' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');

budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ', budgetDay);

let getStatusIncome = function(budgetDay) {
if (budgetDay > 1200) {
    return ('У вас высокий уровень дохода');
} else if (budgetDay > 600) {
    return ('У вас средний уровень дохода');
} else if (budgetDay > 0) {
    return ('К сожалению, у вас уровень дохода ниже среднего');
} else {
    return ('Что-то пошло не так');
}
};
console.log(getStatusIncome(budgetDay));