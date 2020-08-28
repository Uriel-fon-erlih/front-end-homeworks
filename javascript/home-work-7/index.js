"use strict"

let title = document.createElement("h1");

title.innerText = "обласные центры украины";

title.style.margin = '30px';

document.body.append(title);


let regionalCenters = ['Винница', 'Днепр', 'Донецк', 'Житомир', 'Запорожье', 'Ивано-Франковск', 'Киев', 'Кропивницкий', 'Луганск', 'Луцк', 'Львов', 'Николаев', 'Одесса', 'Полтава', 'Ровно', 'Сумы', 'Тернополь', 'Ужгород', 'Харьков', 'Херсон', 'Хмельницкий', 'Черкассы', 'Чернигов', 'Черновцы'];

function getListCities(regionalCenters) {
	let list = document.createElement("ul");

	let newArr = regionalCenters.map(argArr => `<li>   ${argArr}   </li>`);

	list.innerHTML = newArr.join("");

	return document.body.appendChild(list);
}
getListCities(regionalCenters);
