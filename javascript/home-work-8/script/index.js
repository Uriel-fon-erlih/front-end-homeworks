"use strict"

let container = document.createElement("div"); // создание элемента <div>

container.classList.add("container"); // добавление класса для <div>

document.body.insertAdjacentElement("afterbegin", container); // добавление элемента <div> в <body>

let form = document.createElement("form"); // создание элемента <form>

form.classList.add("form-style"); // добавление класса для <form>

container.insertAdjacentElement("afterbegin", form); // добавление элемента <form> в <div>

let label = document.createElement("label"); // создание элемента <label>

label.classList.add("label-style"); // добавление класса для <label>

form.insertAdjacentElement("afterbegin", label); // добавление элемента <label> в <form>

let input = document.createElement("input"); // создание элемента <input>

label.insertAdjacentElement("afterbegin", input); // добавление элемента <input> в <label>

input.insertAdjacentHTML("beforebegin", "price:"); // добавление текстового узла в элемент <label> перед элементом <input>

input.setAttribute("type", "text"); // добавление атрибута "type" для <input>

input.setAttribute("value", ""); // добавление атрибута "value" для <input>

input.classList.add("input-style"); // добавление класса для <input>

let alert = document.createElement("div"); // создание элемента <div>

alert.classList.add("alert-style"); // добавление класса для <div>

form.insertAdjacentElement("afterbegin", alert); // добавление элемента <div> в <form>

let span = document.createElement("span"); // создание элемента <span>

span.classList.add("span-style"); // добавление класса для <span>

span.insertAdjacentHTML("afterbegin", "Текущая цена: &dollar;"); // добавление текстового узла в элемент <span>

alert.insertAdjacentElement("afterbegin", span); // добавление элемента <span> в <div>

let spanReset = document.createElement("span"); // создание элемента <span>

spanReset.classList.add("span-reset"); // добавление класса для <span>

spanReset.insertAdjacentHTML("afterbegin", "&#10008;"); // добавление текстового узла в элемент <span>

alert.insertAdjacentElement("beforeend", spanReset); // добавление элемента <span> в <div>

let spanError = document.createElement("span"); // создание элемента <span>

spanError.classList.add("span-error"); // добавление класса для <span>

spanError.insertAdjacentHTML("afterbegin", "Please enter correct price."); // добавление текстового узла в элемент <span>

form.insertAdjacentElement("beforeend", spanError); // добавление элемента <span> в <form>

let inputValue; // объявление переменной для считывания числового значения из поля ввода <input>

input.addEventListener("focusin", function () {

	form.insertAdjacentElement("afterbegin", alert);

	form.insertAdjacentElement("beforeend", spanError);

	input.classList.toggle("green-border");

	alert.style.visibility = "hidden";

	spanError.style.visibility = "hidden";

	input.classList.remove("value-green");

	input.classList.remove("red-border");

	input.value = " ";
});

input.addEventListener("focusout", function () {

	inputValue = input.value;

	if (inputValue > 0 || inputValue == Number) {

		input.classList.remove("green-border");

		alert.style.visibility = "visible";

		span.textContent += ` ${inputValue}`;

		input.classList.toggle("value-green");

	} else if (inputValue < 0 || inputValue != Number) {

		input.classList.toggle("red-border");

		spanError.style.visibility = "visible";
	}
});

spanReset.addEventListener("click", function () {

	input.classList.remove("value-green");

	alert.parentNode.removeChild(alert);

	spanError.parentNode.removeChild(spanError);

	input.value = " ";
});
