"use strict"

+
function () {

	document.querySelector(".tab-item").classList.add("active");

	document.querySelector(".block-content").classList.add("active");

	document.querySelectorAll(".tab-item").forEach(element => {

		element.addEventListener("click", function eventHandler(event) {

			let target = event.target.dataset.currentTarget;

			document.querySelectorAll(".tab-item, .block-content").forEach(element => {

				element.classList.remove("active")
			});

			event.target.classList.add("active");

			document.querySelector("." + target).classList.add("active");
		});
	});

}();
