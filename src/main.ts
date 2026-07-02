// let myName: string;
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: number | string;
// let re: RegExp = /\w+/g

// album = 10
// meaningOfLife = 52
// isLoading = false
// myName = "42"

// const sum = (a: number, b: string) => {
//     return a + b
// }

// let tuple: [string, number, boolean] = ['tamim', 42, true]
// let mixed = ['ss', 15, false]

// // obj
// let myObj: object
// const example = {
//     prop1: 'tamim',
//     prop2: true
// }

// type person = {
//     name: string,
//     age: number,
//     isMarried: boolean
// }

// const sakib: person = {
//     name: "hassan",
//     age: 5,
//     isMarried: true
// }



// type aliases
// type Guitarist {
// name: string,
// isActive: boolean,
// album: (string | number)[]
// }
type stringOrNumber = string | number
type stringNumberArray = (string | number)[]


interface Guitarist {
    name: string,
    isActive: boolean,
    album: (string | number)[]
}

type userId = stringOrNumber

type userName = 'dave' | 'tamim' | 'hassan'

let newUser: userName = 'dave'

const sum = (a: number, b: number): number => {
    return a + b
}

const logMeg = (meg: any): void => {
    console.log(meg);

}

logMeg('hello !')
logMeg(sum(4, 3))
logMeg(sum(10, 10))

// type mathFunction = (a: number, b: number) => number
interface mathFunction { (a: number, b: number): number }

let multi: mathFunction = (a, b) => {
    return a * b
}

// optional parameters

const addAll = (a: number, b: number, c: number = 0): number => {
    // if (typeof (c) !== 'undefined') {
    //     return a + b + c
    // }
    return a + b + c
}
logMeg(addAll(2, 2, 5))
logMeg(addAll(2, 2))

// rest parameters

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
}

logMeg(total(1, 2, 3, 5, 74))

// custom types
const typeNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}


// use of never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') {
        return 'string'
    }
    if (typeNumber(value)) {
        return 'number'
    }
    return 'this should never happen'
}
// 1:42

let value: unknown = 'hello'
let srt = value as string;
console.log(srt);

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b
    }
    return 'concat' + a + b
}
let myVal: string = addOrConcat(5, 2, 'concat') as string
let myValAdd: number = addOrConcat(5, 2, 'add') as number

logMeg(myVal)
logMeg(myValAdd)

// the dom

const img = document.querySelector('img')!

const myImg = document.getElementById('#myImg') as HTMLImageElement
myImg.src
img.src


// const year = document.getElementById('#year')!
// const thisYear: string = new Date().getFullYear().toString();
// year?.setAttribute("dateTime", thisYear)

// year.textContent = thisYear

// 2nd

let year = document.getElementById('year') as HTMLSpanElement

let thisYear: string = new Date().getFullYear().toString();

year.setAttribute("datetime", thisYear)
year.textContent = thisYear

// 2:04


