"use strict"

//todo application that performs simple mathematical operations ("+" "-" "*" "/")

let firstNumber = +prompt("Введите первое число!", "");

let secondNumber = +prompt("Введите второе число!", "");

let theChoice = prompt("Ведите один из математических операторов!", "   +   -   *   /   ");

function mathOperations(firstNumber, secondNumber, theChoice) {

	let result = null;

	switch (theChoice) {
		case '+':
			return result = firstNumber + secondNumber;

		case '-':
			return result = firstNumber - secondNumber;

		case '*':
			return result = firstNumber * secondNumber;

		case '/':
			return result = firstNumber / secondNumber;

		default:
			alert('Неизвестное значение ((');
	}
}

console.log(mathOperations(firstNumber, secondNumber, theChoice));
