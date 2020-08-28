"use strict"

function changeColor() {

	let wrapper = document.querySelector(".wrapper-page-bgr");

	let switchColors = document.querySelector(".check-one");

	if (localStorage.getItem("backgroundColor") !== null) {

		let saveBackground = localStorage.getItem("backgroundColor");

		wrapper.style.background = saveBackground;
	}

	switchColors.addEventListener("click", () => {

		if (wrapper.classList.contains("wrapper-page-bgr")) {

			wrapper.classList.remove("wrapper-page-bgr");

			wrapper.style.background = "#0ec7f5";

			localStorage.setItem("backgroundColor", "#0ec7f5")
			
		} else {

			wrapper.classList.add("wrapper-page-bgr");

			wrapper.style.background = "#f7fcfc";

			localStorage.setItem("backgroundColor", "#f7fcfc")
		}

	})

}
changeColor();
