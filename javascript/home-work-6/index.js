"use strict"

let massive = ['hello', 'world', 23, '23', null];

let dataType = 'string';

function filterBy(massive, dataType) {
	let createMass = [];

	massive.filter(function (еlement, index) {

		if (typeof еlement !== dataType) {

			createMass.push(massive[index]);
		}

	});
	return createMass;
}

let certainType = filterBy(massive, dataType);

console.log(certainType);
