'uses strict';
  
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = 'фриланс';
let addExpenses = 'Интернет, транспорт, электричество, телефон';
let deposit = true;
let mission = 1000000;
let period = 12;

let start = function() {
    do {
    money = prompt('Ваш месячный доход?');
    }while (!isNumber(money)); 
};

start();

const showTypeOf = function (data) {
    return typeof data;
};

console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

 
let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','');
deposit = confirm('Есть ли у вас депозит в банке?');

console.log('длина addExpenses = ', addExpenses.length);
//console.log(addExpenses.toLowerCase().split(', '));

let expenses = [];
expenses = addExpenses.toLowerCase().split(', '); 
console.log(expenses);

const getExpenceMonth = function() {
    let sum = 0;
    let amount;
    for (let i = 0; i < expenses.length; i++) {
        do {
            amount = +prompt('Обязательная статья расходов: ' + expenses[i] + '\n' +
            'Во сколько это обойдется?'); 
        }
        while (!isNumber(amount));
        sum += amount; 
    }
    return sum;
};

let expensesAmount = getExpenceMonth();

console.log('Расходы за месяц', expensesAmount);

const getAccumulatedMonth = function(mon, amount) {
    return mon - amount;
}; 

let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
console.log('accumulatedMonth: ', accumulatedMonth);

const getTargetMonth = function(mis, acc) {
    return Math.ceil(mis / acc);
};

let targetMonth = getTargetMonth(mission, accumulatedMonth);
if (targetMonth > 0) {
    console.log('Цель будет достигнута за ' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');
} else {
    console.log('Цель не будет достигнута');
}    
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