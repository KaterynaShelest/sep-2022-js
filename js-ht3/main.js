// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 55;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
let a = +prompt('write a');
if (a !== 0) {
    document.write('Вірно');
} else {
    document.write('Невірно');
}
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('write number');
if (time >= 0 && time <= 15) {
    document.write(' перша частина');
} else if (time > 15 && time <= 30) {
    document.write(' друга частина');
} else if (time > 30 && time <= 45) {
    document.write(' третя частина');
} else if (time > 45 && time < 60) {
    document.write(' четверта частина')
} else {
    document.write('info not correct');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('write day number');
if (day > 0 && day <= 10) {
    document.write(' перша декада');
} else if (day > 10 && day <= 20) {
    document.write(' друга декада');
} else if (day > 20 && day <= 31) {
    document.write(' третя декада');
} else {
    document.write(' data not correct');
}

//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let weekday = +prompt('enter day number');
switch (weekday) {
    case 1 :
        document.write(' monday');
        break;
    case 2 :
        document.write(' tuesday');
        break;
    case 3 :
        document.write(' wednesday');
        break;
    case 4 :
        document.write(' thursday');
        break;
    case 5 :
        document.write(' friday');
        break;
    case 6 :
        document.write(' saturday');
        break;
    case 7 :
        document.write(' sunday');
        break;
    default :
        document.write(' incorrect')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
let t = +prompt('type number');
let b = +prompt('type number');
if (t > b) {
    console.log(t);
} else if (b > t) {
    console.log(b);
} else if (b === t) {
    console.log('equal');
} else {
    console.log('error');}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let u = prompt('') || 'default';
console.log(u);
// or
let u = '';
if (!!x === false) {
    console.log('default');
} else {
    console.log('hello');
}

// or
let u = '';
if (!x !== false) {
    console.log('default');
} else {
    console.log('hello');
}
// or
let u = '';
if (u) {
    console.log('hello');
} else {console.log('default');
}