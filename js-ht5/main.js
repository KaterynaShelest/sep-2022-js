// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a, b) {
//     return a * b;
// }
//
// let s = square(20, 30);
// console.log(s)
//
// // or
//
// const square = (a, b) => a * b;
// console.log(square(10, 15));
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function squareCircle(Pi, r) {
//     return Pi * r * r;
// }
//
// const Pi = 3.14;
// let sC = squareCircle(Pi, 6);
// console.log(sC);
//
// // or
//
// const squareCircle = (r) => Math.PI * Math.pow(r, 2);
// console.log(squareCircle(10));
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function squareCyl(r, h) {
//     return 2 * Math.PI * r * h;
// }
//
// console.log(squareCyl( 10, 12));
//
// // or
//
// const sCyl = (h, r) => 2 * Math.PI * r * h;
// console.log(sCyl(10, 30));
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let elem = [1, 5, 6, 7, 9];
// function foon (array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
//
// }
//
// foon(elem);
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function info(text) {
//     document.write(`<p>${text}</p>`);
// }
// info('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')
// //
// // // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// //
// function lists (c) {
//     document.write(`<ul>
// <li>${c}</li>
// <li>${c}</li>
// <li>${c}</li>
// </ul>`);
// }
// lists('Lorem ipsum dolor sit amet.')
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function list (a, b) {
//     document.write(`<ul>`)
//     for (let i = 0; i < b; i++) {
//        document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
//     }
// list('Lorem ipsum dolor sit amet.',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1, 2, true, false, 'str'];
// const elem = function (array) {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// elem(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const arrObj = [
//     { idi : 123, name : 'Katya', age : 27},
//     { idi : 223, name : 'Sasha', age : 28},
//     { idi : 673, name : 'Kolya', age : 32},
// ]
// const users = function (array) {
//     for (const user of array) {
//         document.write(`<div>${user.idi} ${user.name} ${user.age}</div>`)
//     }
// }
// users(arrObj);

// - створити функцію яка повертає найменьше число з масиву

// let arr = [-4, 6, 10, 12];
// function f(array) {
//     let min = array[0];
//     for (const minElement of array) { if (minElement<min) {
//         min = minElement;
//     }
//
//     }
//     return min
// }
//
// let f1 = f(arr);
// console.log(f1)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr = [1, 2, 3];
function f(array) {
    let sum = 0;
    for (const sumElement of array) { sum = sumElement + sum

    }
return sum
}

let f2 = f(arr);
console.log(f2)