// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(one);
console.log(two);
console.log(rest);
