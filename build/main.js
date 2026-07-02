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
export {};
//# sourceMappingURL=main.js.map