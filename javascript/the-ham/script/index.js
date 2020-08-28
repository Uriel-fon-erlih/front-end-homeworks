'use strict'
let tabDescription = document.querySelector(".tabs-list");
let btnLoad = document.querySelector(".btn-load-image");
let gifLoad = document.querySelector(".gif-load");
let allImages = document.querySelectorAll(".box-gallery-images");
let tabCategory = document.querySelector(".photo-gallery-list");
function switchTabs() {

	tabDescription.addEventListener("click", (event) => {

		let targetEvent = event.target.dataset.currentTarget;

		document.querySelectorAll(".tabs-item, .tabs-box").forEach(element => {

			element.classList.remove("active")
		});
		event.target.classList.add("active");

		document.querySelector("." + targetEvent).classList.add("active");
	})
}
switchTabs();

function uploadingPhotos() {

	btnLoad.addEventListener("click", () => {

		gifLoad.classList.add("active-load");

		btnLoad.style.display = "none";

		setTimeout(() => {

			gifLoad.classList.remove("active-load");

			btnLoad.style.display = "block";

			allImages.forEach(element => {

				if (element.classList.contains("off")) {

					element.classList.remove("off");

					btnLoad.style.display = "none";
				}
			});

		}, 7000);
	});
}
uploadingPhotos();

function photosCategory() {

	tabCategory.addEventListener("click", (event) => {

		let eventTarget = event.target.dataset.currentTarget;
		// 	event.target.classList.add('active');
		if (event.target.classList.contains('active')) {

			event.target.classList.remove('active');

		} else {

			event.target.classList.add('active');
		}
		allImages.forEach(element => {

			if (eventTarget == element.dataset.currentTarget) {

				element.style.display = "block"

				btnLoad.style.display = "none";

			} else if (eventTarget !== element.dataset.currentTarget) {

				element.style.display = "none"
			}
		});
		if (eventTarget == 'all') {

			for (let index = 0; index < 12; index++) {

				const element = allImages[index].style.display = "block";
			}
			btnLoad.style.display = "block";

			btnLoad.addEventListener("click", () => {

				gifLoad.classList.add("active-load");

				btnLoad.style.display = "none";

				setTimeout(() => {

					gifLoad.classList.remove("active-load");

					allImages.forEach(element => {

						element.style.display = "block";

					});

				}, 7000);

				btnLoad.style.display = "none";
			})
		}
	})
}
photosCategory();

new Glide('.glide', {
	type: 'carousel',
}).mount();
