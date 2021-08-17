'uses strict';

let isNumber = function(n) {
    return (!isNaN(parseFloat(n)) && isFinite(n));
};

let isEmpty = function(s) {
    return (s ==='' || s === null);
};

let money,
    start = function() {
        do {
        money = prompt('Ваш месячный доход?');
        } while (!isNumber(money)); 
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expenseMonth: 0,
    asking:  function() {

        if (confirm('Есть ли у вас дополнитенльный заработок?')) {
            let itemIncome;
            do { 
                itemIncome = prompt('Назовите дополнительный заработок', 'копирайтинг');
            } while (isEmpty(itemIncome));
            let cashIncome;
            do {
             cashIncome = prompt('Сколько на этом зарабатываете?',5000);
            } while (!isNumber(cashIncome));
             appData.income[itemIncome] = cashIncome;
        }
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        appData.getInfoDeposit();
        for (let i = 0; i < 2; i++) {
            let itemExpenses;
            do {
                itemExpenses = prompt('Обязательная статья расходов: ',
                'Очередная статья');
            } while (isEmpty(itemExpenses));
                let cashExpenses;
                do {
                cashExpenses = +prompt('Во сколько это обойдется?', 2500); 
            }
            while (!isNumber(cashExpenses));
            appData.expenses[itemExpenses] = cashExpenses;
        }
    },
    getExpenceMonth: function() {
        let sum = 0;
        
        for (let amount in appData.expenses) {
            sum += appData.expenses[amount]; 
        }
        appData.expenseMonth = sum;
        return sum;
    },
    getBudget: function() {
        appData.budgetMonth = money - appData.getExpenceMonth();
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    }, 
    getTargetMonth: function() {
        let targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
        if (targetMonth > 0) {
            console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
        } else {
            console.log('Цель не будет достигнута');
        } 
    },
    getStatusIncome: function() {
        if (appData.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay > 600) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('К сожалению, у вас уровень дохода ниже среднего');
        } else {
            return ('Что-то пошло не так');
        }
        },
    getInfoDeposit: function() {
        if (appData.deposite) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?',10);
            } while (!isNumber(appData.percentDeposit));
            do {
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while (!isNumber(appData.moneyDeposit));
        }
    },
    calcSaveMoney: function() {
        return appData.budgetMonth + appData.period;
    }   
};

appData.asking();
console.log('Расходы за месяц', appData.getExpenceMonth());
appData.getBudget();
appData.getTargetMonth();
console.log(appData.getStatusIncome(appData.budgetDay));

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(key, appData[key]);
}

for (let i = 0; i < appData.addExpenses.length; i++) {
    let s = appData.addExpenses[i];
    s = s[0].toUpperCase() + s.substr(1);
    appData.addExpenses[i] = s;
}
console.log(appData.addExpenses.join(', '));

let buttonCalc = document.getElementById('start');
console.log('buttonCalc: ', buttonCalc);

let buttonPlus1 = document.getElementsByTagName('button')[0];
console.log('buttonPlus1: ', buttonPlus1);

let buttonPlus2 = document.getElementsByTagName('button')[1];
console.log('buttonPlus2: ', buttonPlus2);

let checkbox = document.querySelector('#deposit-check');
console.log('checkbox: ', checkbox);

let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
console.log('additionalIncomeItem: ', additionalIncomeItem);

let budgetMonthValue = document.getElementsByClassName('.budget_month-value');
let budgetDayValue = document.getElementsByClassName('.budget_day-value');
let expensesMonthValue = document.getElementsByClassName('.expenses_month-value');
let additionalIncomeValue = document.getElementsByClassName('.additional_income-value');
let additionalExpensesValue = document.getElementsByClassName('.additional_expenses-value');
let incomePeriodValue = document.getElementsByClassName('.income_period-value');
let targetMonthValue = document.getElementsByClassName('.target_month-value');
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let additionalIncomeItem1 = document.querySelector('.additional_income-item')[0];
let additionalIncomeItem2= document.querySelector('.additional_income-item')[1];
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodAelect = document.querySelector('.period-select');
