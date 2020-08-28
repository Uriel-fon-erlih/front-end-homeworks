"use strict"


function key () {

	document.onkeypress = function (event) {

		let button = document.querySelectorAll(".btn");

		if (event.key === "Enter") {
			button[0].style.backgroundColor = "blue";

		} else {
			button[0].style.backgroundColor = "black";
		}

		if (event.key === "s" || event.key === "S") {
			button[1].style.backgroundColor = "blue";

		} else {
			button[1].style.backgroundColor = "black";
		}

		if (event.key === "e" || event.key === "E") {
			button[2].style.backgroundColor = "blue";

		} else {
			button[2].style.backgroundColor = "black";
		}

		if (event.key === "o" || event.key === "O") {
			button[3].style.backgroundColor = "blue";

		} else {
			button[3].style.backgroundColor = "black";
		}

		if (event.key === "n" || event.key === "N") {
			button[4].style.backgroundColor = "blue";

		} else {
			button[4].style.backgroundColor = "black";
		}

		if (event.key === "L" || event.key === "l") {
			button[5].style.backgroundColor = "blue";

		} else {
			button[5].style.backgroundColor = "black";
		}

		if (event.key === "z" || event.key === "Z") {
			button[6].style.backgroundColor = "blue";

		} else {
			button[6].style.backgroundColor = "black";
		}
	}

}
key();
