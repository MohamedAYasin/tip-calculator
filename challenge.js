// Good Luck! You got this 💪🏾
// Building a simple tip calculator using basic JS

const bill = 80;
let tip;

if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
} else {
    tip = bill * 0.2;
}

const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
