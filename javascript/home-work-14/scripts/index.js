$(document).ready(function () {

	let elementClick = null;

	let destination = null;

	let winHeight = $(window).height();

	let element = $(".scroll-top");


	$(".slide-navigation").click(function () {

		$(".navigation-pages").slideToggle("slow");

		$(this).toggleClass("active");

		return false;
	});


	$('a[href^="#"]').click(function (event) {

		event.preventDefault();

		elementClick = $(this).attr("href");

		destination = $(elementClick).offset().top;

		$('html').animate({

			scrollTop: destination

		}, 1400);

		return false;
	});


	$(window).scroll(function () {

		if ($(this).scrollTop() > winHeight) {

			element.show(500);

		} else {

			element.hide('fast');
		}

	});

});
