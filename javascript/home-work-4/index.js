"use strict";

//todo  The function which calls the object and creates the user using the method inside the object.

function createNewUser() {
	let firstName = prompt("Введите Ваше имя!", "");

	let lastName = prompt("Введите Вашу фамилию!", "");

	let newUser = {
		firstName,

		lastName,

		getLogin() {
			return `${this.firstName[0]}${this.lastName}`.toLowerCase();
		}
	};
	return newUser;
}

let outputFunction = createNewUser();

console.log(outputFunction);

console.log(outputFunction.getLogin());
