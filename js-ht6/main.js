// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let length1 = 'hello world';
console.log(length1.length);
let length2 = 'lorem ipsum';
console.log(length2.length);
let length3 = 'javascript is cool';
console.log(length3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


let upper1 = 'hello world';
console.log(upper1.toUpperCase());
let upper2 = 'lorem ipsum';
console.log(upper2.toUpperCase());
let upper3 = 'javascript is cool';
console.log(upper3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lower1 = 'HELLO WORLD';
console.log(lower1.toLowerCase());
let lower2 = 'LOREM IPSUM';
console.log(lower2.toLowerCase());
let lower3 = 'JAVASCRIPT IS COOL';
console.log(lower3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let clean = str;
console.log(clean.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';
console.log(str1.split(' '));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

const arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let str5 = arr.map(numm => `${numm}`)
console.log(str5);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
const sortNums = (mas, direction) => {
    if (direction === 'ascending') {
        mas.sort((a,b) => a-b);
    }else if (direction === 'descending') {
        mas.sort((a, b) => b - a);
    }
    return mas;
}
console.log(sortNums(nums,'ascending'))
console.log(sortNums(nums,'descending'))
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const  suits = [
    {cardSuit:'heart', color:'red'},
    {cardSuit:'diamond', color:'red'},
    {cardSuit:'spade', color:'black'},
    {cardSuit:'clubs', color:'black'},
]

const cardNames = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'joker'];
const deck = [];
for (const suit of suits) { for (const  cardName of cardNames) {
    const card = {
        cardSuit : suit.cardSuit,
        value : cardName,
        color : suit.color
    }
    deck.push(card);
}

}
console.log(deck);

// - знайти піковий туз

let filter7 = deck.filter(value => value.cardSuit === 'spade' && value === 'ace')
console.log(filter7);
// - всі шістки

let filter8 = deck.filter(value => value.value === 6);
console.log(filter8);

// - всі червоні карти

let filter9 = deck.filter(value => value.color === 'red');
console.log(filter9);

// - всі буби

let filter10 = deck.filter(value => value.cardSuit === 'diamond');
console.log(filter10);

// - всі трефи від 9 та більше

let filter11 = deck.filter(value => value.cardSuit === 'clubs' && value.value >= 9) || (value.cardSuit === 'clubs');
console.log(filter11);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }