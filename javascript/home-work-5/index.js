"use strict";

function createNewUser() {

	let firstName = prompt("Введите Ваше имя!", "");

	let lastName = prompt("Введите Вашу фамилию!", "");

	let birthday = prompt("Введите Вашу дату рождения!", "dd.mm.yyyy");

	let newUser = {

		firstName,

		lastName,

		birthday,

		getLogin() {
			return `${this.firstName[0]}${this.lastName}`.toLowerCase();
		},

		getAge() {

			let getUserDay = this.birthday.slice(0, 2); // изымается день

			let getUserMonth = this.birthday.slice(3, 5) - 1; // изымается месяц (конвертация по индексу исчисления[0,1,2] в JavaScript)

			let getUserYear = this.birthday.slice(6); // изымается год

			let dateBirth = new Date(getUserYear, getUserMonth, getUserDay); //Дата рождения пользователя

			let now = new Date(); //Текущя дата

			let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени

			let dateBirthNow = new Date(today.getFullYear(), dateBirth.getMonth(), dateBirth.getDate()); //Дата рождения в текущем году

			let age = today.getFullYear() - dateBirth.getFullYear(); //Возраст = текущий год - год рождения

			if (today < dateBirthNow) { //Если День рождения в этом году ещё предстоит, то вычитаем из age один год
				age -= 1;
			}

			return age;
		},

		getPassword() {
			return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${this.birthday.slice(6)}`;
		},
	};
	return newUser;
}

let outputFunction = createNewUser();

console.log(outputFunction);

console.log(outputFunction.getLogin());

console.log(outputFunction.getAge());

console.log(outputFunction.getPassword());
