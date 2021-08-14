'uses strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
        do {
        money = prompt('Ваш месячный доход?');
        }while (!isNumber(money)); 
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expenseMonth: 0,
    asking:  function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let amount;
        for (let i = 0; i < this.addExpenses.length; i++) {
            do {
                amount = +prompt('Обязательная статья расходов: ' + this.addExpenses[i] + '\n' +
                'Во сколько это обойдется?'); 
            }
            while (!isNumber(amount));
            this.expenses[this.addExpenses[i]] = amount;
        }
    },
    getExpenceMonth: function() {
        let sum = 0;
        
        for (let amount in this.expenses) {
            sum += this.expenses[amount]; 
        }
        this.expenseMonth = sum;
        return sum;
    },
    getBudget: function() {
        this.budgetMonth = money - this.getExpenceMonth();
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    }, 
    getTargetMonth: function() {
        let targetMonth = Math.ceil(this.mission / this.budgetMonth);
        if (targetMonth > 0) {
            console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
        } else {
            console.log('Цель не будет достигнута');
        } 
    },
    getStatusIncome: function() {
        if (this.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
        } else if (this.budgetDay > 600) {
            return ('У вас средний уровень дохода');
        } else if (this.budgetDay > 0) {
            return ('К сожалению, у вас уровень дохода ниже среднего');
        } else {
            return ('Что-то пошло не так');
        }
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