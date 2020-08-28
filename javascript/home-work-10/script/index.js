// "use strict"


(function () {

	let inputPassword = document.querySelectorAll(".input");

	let iconPassword = document.querySelectorAll(".fas");

	let button = document.querySelector(".btn");

	let welcomeWindow = document.querySelector(".welcome-window");

	let errorWindow = document.querySelector(".error-window");

	iconPassword.forEach((element, number) => {

		element.addEventListener("click", (event) => {

			if (event.target.classList.contains('fa-eye')) {

				event.target.classList.remove("fa-eye");

				event.target.classList.add("fa-eye-slash");

				inputPassword[number].type = "password";

			} else {

				event.target.classList.remove("fa-eye-slash");

				event.target.classList.add("fa-eye");

				inputPassword[number].type = "text";
			}

		});
	});

	button.addEventListener("click", () => {

		button.type = "";

		if (inputPassword[0].value === inputPassword[1].value) {

			welcomeWindow.style.display = "block";

		} else if (inputPassword[0].value === " " || inputPassword[1].value === " ") {

			errorWindow.style.display = "block";

		} else {
			errorWindow.style.display = "block";

		}
	})

	inputPassword.forEach(element => {

		element.addEventListener("focusin", () => {

			errorWindow.style.display = "none";
		})
	});

}());
