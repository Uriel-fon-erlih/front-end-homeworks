// "use strict"

// let square = document.querySelector(".square");
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
// 	square.classList.toggle("opacity");
// });

// square.addEventListener("click", (e) => {
// 	e.target.classList.toggle("opacity");
// });

// function funcVoid(testFunc, testFunc2, testFunc3) {


// }

// function testFunc() {

// }


// function testFunc2() {

// }

// function testFunc3() {

// }



// funcVoid(testFunc);


// //! проверка типов
// // let str = "Привет";
// // let num = 123;
// // let flag = true;
// // let txt = "true";

// // console.log(typeof (str));
// // console.log(typeof (num));
// // console.log(typeof (flag));
// // console.log(typeof (txt));

// //! ширина
// // let width = prompt("Задайте ширину!", "");
// // let height = prompt("Задайте Высоту!!", "");
// // let answer = (width * height);
// // alert(`ваша площадь = ${answer}`);

// //! число
// // let m = prompt("Введи число", "");
// // if (m > 50) {
// // 	alert("большое!");
// // }
// // if (m == 50) {
// // 	alert("равны!!")
// // } else {
// // 	alert("маленькое!");
// // }

// //! проверка строк
// // let scr = "ECMASCRIPT";
// // let pol = prompt("какое официальное название JavaScript??", "")
// // if (scr === pol.toUpperCase()) {
// // 	alert(`ПРАВИЛЬНО!`);
// // } else {
// // 	alert(`НЕ ПРАВИЛЬНО!`);
// // }

// //! числа
// // if (num > 0) {
// // 	alert(1);
// // } else if (num < 0) {
// // 	alert(-1);
// // } else if (num === 0) {
// // 	alert(0);
// // } else {
// // 	alert(NaN)
// // }

// //! тэрнарный
// // let massage, login;
// // login = prompt('', '');
// // login === "Сотрудник" ? massage = "Привет!" : login === "Директор" ? massage = "Здравствуйте!" : login === " " ? massage = "Нет логина!" : massage = "";

// //! switch
// // let number = prompt('Введите число между 0 и 3', '');
// // switch (+number) {
// // 	case 0:
// // 		alert("Вы ввели число 0");
// // 		break;

// // 	case 1:
// // 		alert('Вы ввели число 1');
// // 		break;

// // 	case 2:
// // 	case 3:
// // 		alert('Вы ввели число 2, а может и 3');
// // 		break;

// // 	default:
// // 		alert('ERROR!');
// // }

// //!?  циклы:  (   for   -   while   -   do-while   )
// // todo <for>!!
// // for (let i = 1; i <= 100; i = i + 1) {
// // 	console.log(i);
// // }

// // todo <while>!!
// // let i = 1
// // while (i <= 100) {
// //   console.log(i);
// //   i++;
// // }

// // let i = 0;
// // while (i < 3) { // выводит 0, затем 1, затем 2
// //   alert( i );
// //   i++;
// // }

// // todo  <do-while>!!
// // do {
// // 	тело цикла
// // } while (условие цикла)

// // !?  Бесконечный цикл
// // while (true) {
// //     ...
// // }

// //todo  Javascript предоставляет нам два оператора для работы с циклом - <break> и <continue>.

// // !? В этом примере оператор <break> завершит цикл, когда значение переменной i будет равно 10:
// // for (let i = 0; i < 100; i++) {
// // 	alert(i);

// // 	if (i === 10) {
// // 		break;
// // 	}
// // }

// // !? В этом примере на экран будут выведены только числа, которые больше десяти:
// // for (let i = 0; i < 100; i++) {
// // 	if (i <= 10) {
// // 		continue;
// // 	}

// // 	alert(i);
// // }




// //! четные с 2
// // for (let i = 0; i <= 10; i += 2) {
// // 	if (i !== 0) {
// // 		console.log(i);
// // 	}
// // }

// // for (let i = 0; i <= 10; i++) {
// // 	if (i % 2 === 0 && i !== 0) {
// // 		console.log(i);
// // 	}
// // }

// // let i = 0;
// // while (i < 3) {
// // 	console.log(`number ${i}`);
// // 	i++;
// // }


// // let i;
// // do {
// // i =	+prompt("Ведетите число больше 100!", "");
// // } while (i <= 100);

// // for (let i = 45; i < 670; i++) {
// // 	if (i >= 45 && i <= 67) {
// // 		console.log(i);
// // 	} else if (i % 10 === 0) {
// // 		console.log(i);
// // 	}
// // }

// // TODO таблица умножения
// // for (let i = 1; i <= 9; i++) {
// // 	console.log(`%cУмножение на (${i})`, "color: black; font-style: italic; background-color: teal; padding:  7px;");
// // 	for (let k = 1; k <= 9; k++) {
// // 		console.log(`${i} * ${k} = ${k * i}`)
// // 	}
// // }

// //? Рандомное число до 1000
// // prompt(Math.floor(Math.random() * 1000));
// // prompt(Math.ceil(Math.random() * 1000));

// //!  Функция Приветствие с пользователем
// // function hello() {
// // 	let userName = prompt("Tell me your name ??", "")
// // 	alert(`Hello! ${userName}!`)
// // }

// // hello();

// //? возраст #1
// // function checkAge(age) {
// // 	return (age > 18) ? true : confirm("Родители разрешили??");
// // }
// // checkAge(16);

// //? возраст #2
// // function checkAge(age) {
// // 	return (age > 18) || confirm("Родители разрешили??");
// // }
// // checkAge(22);

// // function sum(a, b) {
// // 	if (a < b) {
// // 		return alert(a);
// // 	}
// // 	return alert(b);
// // }

// // sum(2, 5);

// // function power() {
// // 	let x = +prompt("загадай число!", "");
// // 	let n = +prompt("в какую степень?", "");
// // 	let result = 1;
// // 	for (let i = 0; i < n; i++) {
// // 		result = result * x;
// // 	}
// // 	return result;
// // }

// // console.log(power())

// //! возведение в степень из двух чисел
// // function power() {
// // 	let x = +prompt("загадай число!", "");
// // 	let n = +prompt("в какую степень?", "");
// // 	let result = (x ** n);
// // 	return result;
// // }

// // console.log(power())

// // !!hw-3
// // function mathOperations() {
// // 	let firstNumber = +prompt("Введите первое число!", "");

// // 	let secondNumber = +prompt("Введите второе число!", "");

// // 	let theChoice = prompt("Ведите один из математических операторов!", "   +   -   *   /   ");

// // 	let result = null;

// // 	switch (theChoice) {
// // 		case '+':
// // 			result = firstNumber + secondNumber;
// // 			return console.log(`${firstNumber} + ${secondNumber} = ${result}`);
// // 			break;

// // 		case '-':
// // 			result = firstNumber - secondNumber;
// // 			return console.log(`${firstNumber} - ${secondNumber} = ${result}`);
// // 			break;

// // 		case '*':
// // 			result = firstNumber * secondNumber;
// // 			return console.log(`${firstNumber} * ${secondNumber} = ${result}`);
// // 			break;

// // 		case '/':
// // 			result = firstNumber / secondNumber;
// // 			return console.log(`${firstNumber} / ${secondNumber} = ${result}`);
// // 			break;

// // 		default:
// // 			alert('Неизвестное значение ((');
// // 	}
// // }

// // mathOperations();

let table = document.createElement("table");
document.body.insertAdjacentElement("afterbegin", table);

for (let index = 1; index <= 30; index++) {
	let tr = document.createElement("tr");
	table.insertAdjacentElement("beforeend", tr);

	for (let k = 1; k < 30; k++) {
		let td = document.createElement("td");
		tr.insertAdjacentElement("afterbegin", td);
	}
}

table.addEventListener("click", (event) => {
	if (event.target.nodeName == "TD") {
		console.log(event.target);
	}
})
