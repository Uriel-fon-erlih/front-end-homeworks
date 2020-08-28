"use strict"

//todo показывает все числа кратные 5 от 0 до введенного пользователем числа.

let userInt = +prompt("Введите число!", "");

if (userInt > 4) {
	for (let i = 0; i <= userInt; i++) {
		if (i % 5 === 0) {
			console.log(i);
		}
	}

} else if (userInt < -4) {
	for (let k = 0; k >= userInt; k--) {
		if (k % 5 === 0) {
			console.log(k);
		}
	}

} else {
	console.log("Sorry, no numbers");
}
