	(function () {
		let on = document.querySelector('.on');
		let off = document.querySelector('.off');
		let menu = document.querySelector('.header__list');
		let nav = document.querySelector('.header__navigation');
		menu.classList.add('toggle-block');

		nav.addEventListener("click", (event) => {
			if (event.target.dataset.click == 'on') {
				on.style.display = "none";
				off.style.display = "block";
				menu.classList.remove('toggle-block');
			}
			else if (event.target.dataset.click == 'off') {
				on.style.display = "block";
				off.style.display = "none";
				menu.classList.add('toggle-block');
			} else {
				menu.classList.remove('toggle-block');
			}
		})
	})()
