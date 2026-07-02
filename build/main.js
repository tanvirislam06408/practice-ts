// let myName: string;
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: number | string;
// let re: RegExp = /\w+/g
let newUser = 'dave';
const sum = (a, b) => {
    return a + b;
};
const logMeg = (meg) => {
    console.log(meg);
};
logMeg('hello !');
logMeg(sum(4, 3));
logMeg(sum(10, 10));
let multi = (a, b) => {
    return a * b;
};
// optional parameters
const addAll = (a, b, c = 0) => {
    // if (typeof (c) !== 'undefined') {
    //     return a + b + c
    // }
    return a + b + c;
};
logMeg(addAll(2, 2, 5));
logMeg(addAll(2, 2));
// rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMeg(total(1, 2, 3, 5, 74));
// custom types
const typeNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return 'string';
    }
    if (typeNumber(value)) {
        return 'number';
    }
    return 'this should never happen';
};
// 1:42
let value = 'hello';
let srt = value;
console.log(srt);
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return 'concat' + a + b;
};
let myVal = addOrConcat(5, 2, 'concat');
let myValAdd = addOrConcat(5, 2, 'add');
logMeg(myVal);
logMeg(myValAdd);
// the dom
const img = document.querySelector('img');
const myImg = document.getElementById('#myImg');
myImg.src;
img.src;
// const year = document.getElementById('#year')!
// const thisYear: string = new Date().getFullYear().toString();
// year?.setAttribute("dateTime", thisYear)
// year.textContent = thisYear
// 2nd
let year = document.getElementById('year');
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
export {};
// 2:04
//# sourceMappingURL=main.js.map