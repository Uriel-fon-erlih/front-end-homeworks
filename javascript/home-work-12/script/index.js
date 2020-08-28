"use strict"

function showPicture() {

	let images = document.querySelectorAll(".image-to-show");

	let boxButtons = document.querySelector(".buttons-wrapper");

	let startButton = document.querySelector(".start");

	let stopButton = document.querySelector(".stop");

	let activeIndex = null;

	let interval = null;

	images[0].classList.add("active");

	images.forEach((element, index) => {

		if (element.classList.contains("active")) {

			activeIndex = index;
		}
	});

	function slide() {

		interval = setTimeout(function delaysImg() {

			if (activeIndex == images.length - 1) {

				images[activeIndex].classList.remove("active");

				activeIndex = 0;

				images[activeIndex].classList.add("active");

			} else {

				images[activeIndex].classList.remove("active");

				activeIndex++;

				images[activeIndex].classList.add("active");
			}

			interval = setTimeout(delaysImg, 10000);

			boxButtons.style.display = "block";

		}, 10000);
	}

	slide();

	startButton.addEventListener("click", slide);

	stopButton.addEventListener("click", () => {
		clearTimeout(interval);
	});

}

showPicture();
