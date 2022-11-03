'use strict';
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['name', 'kate', 'age', 27, 'woman', true, [1, 2, 3, 4, 5], 'autumn', 1994, false];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'summer',
    pageCount: 120,
    genre: 'novel'
}
console.log(book1);
let book2 = {
    title: 'winter',
    pageCount: 500,
    genre: 'detective'
}
console.log(book2);
let book3 = {
    title: 'spring',
    pageCount: 400,
    genre: 'fantasy'
}
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book11 = {
    title: 'summer',
    pageCount: 120,
    genre: 'novel',
    authors: ['1','2','3'],
    '1':{name: 'anton', age: 34, },
    '2':{name: 'vasya', age: 31, },
    '3':{name: 'misha', age: 47, }

}
console.log(book11);
let book21 = {
    title: 'winter',
    pageCount: 500,
    genre: 'detective',
    authors: ['1','2','3'],
    '1':{name: 'anton', age: 34, },
    '2':{name: 'vasya', age: 31, },
    '3':{name: 'misha', age: 47, }
}
console.log(book21);
let book31 = {
    title: 'spring',
    pageCount: 400,
    genre: 'fantasy',
    authors: ['1','2','3'],
    '1':{name: 'anton', age: 34, },
    '2':{name: 'vasya', age: 31, },
    '3':{name: 'misha', age: 47, }
}
console.log(book31);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {name: 'usr1', username: 'nik1', password: 123},
    {name: 'usr2', username: 'nik2', password: 456},
    {name: 'usr3', username: 'nik3', password: 789},
    {name: 'usr4', username: 'nik4', password: 544},
    {name: 'usr5', username: 'nik5', password: 345},
    {name: 'usr6', username: 'nik6', password: 672},
    {name: 'usr7', username: 'nik7', password: 333},
    {name: 'usr8', username: 'nik8', password: 665},
    {name: 'usr9', username: 'nik9', password: 234},
    {name: 'usr10', username: 'nik10', password: 888},
];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password)