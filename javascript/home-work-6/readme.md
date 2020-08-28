# Метод forEach()


_Метод_ `forEach()` _предоставляет способ перебора элементов массива._

_По своей сути является 'циклом' для объекта массива._


`forEach(callback[, thisObject])` _выполняет callback-функцию по каждому элементу массива._
```
let myArray = ['a', 'b', 'c'];

myArray.forEach(function (element) {
	 console.log(element);  // выводит в консоль каждый элемент массива по порядку
	 });
```
