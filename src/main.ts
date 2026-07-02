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

logMeg(total(1,2,3,5,74))