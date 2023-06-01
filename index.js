const chalk = require('chalk');
const suma = require('./modules/suma');
const resta = require('./modules/resta');
const multip = require('./modules/multip');
const divis = require('./modules/divis');

const num1 = parseFloat(process.argv.slice(2));
const num2 = parseFloat(process.argv.slice(3));

console.log(chalk.green('--- CALCULADORA ---'));
console.log(chalk.hex('#800080')(`Número 1: ${num1}`));
console.log(chalk.blue(`Número 2: ${num2}`));
console.log('');

console.log(chalk.red.bold('Suma:'), suma.suma(num1, num2));
console.log(chalk.yellow.bold('Resta:'), resta.resta(num1, num2));
console.log(chalk.hex('#FFA500').bold('Multiplicación:'), multip.multip(num1, num2));

try {
  console.log(chalk.white.bold('División:'), divis.divis(num1, num2));
} catch (error) {
  console.log(chalk.red('Error:'), error.message);
}
