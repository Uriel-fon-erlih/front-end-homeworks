"use strict"
let userName = prompt("Please enter your name.", "");
let userAge = +prompt(`Hello! ${userName}! Please enter your age.`);

if (userAge < 18) {
	alert("You are not allowed to visit this website.");

} else if (userAge > 22) {
	alert(`Welcome, ${userName}!`);

} else if (userAge >= 18 && userAge <= 22) {
	let value = confirm("Are you sure you want to continue?");

	if (value === true) {
		alert(`Welcome, ${userName}!`);

	} else {
		alert("You are not allowed to visit this website.");
	}
}
