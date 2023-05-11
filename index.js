// if (true) {
//     var a = 1;
// }

// console.log(a);

// console.log(a);
// let a;

// a =1;
// console.log(a);

// function myFunction() {
//   let x = 10;
//   if (true) {
//     let x = 20;
//     console.log(x); // output: 20
//   }
//   console.log(x); // output: 20
// }

// myFunction();

// const name = 'John';
// const age = 30;

// const message = `My name is ${name} and I am ${age} years old.`;

// console.log(message); // output: My name is John and I am 30 years old.

// const a = (x) => {
//   return x + 3;
// };

// function myFunction(a = 1, b = 2){
//     console.log(a, b);
// };

// myFunction(10, 20);

// const person = { name: 'John', age: 30 };
// const { name, age } = person;

// console.log(name); // Output: John
// console.log(age); // Output: 30

// const arr = [1, 2, 3];
// const newArray = [...arr];
// console.log(newArray);

// Gom các phần tử lại thành một mảng khi truyền vào hàm
// function sum(...numbers) {
//   return numbers.reduce((total, number) => total + number, 0);
// }

// console.log(sum(1, 2, 3)); // Output: 6

// // Lấy tất cả các phần tử còn lại của mảng
// const [first, second, ...rest] = [1, 2, 3, 4, 5];

// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(...rest);

// const user = {
//   id: 1,
//   age: 12,
//   password: "123",
// };

// const { password, ...infoUser } = user;
// console.log(password);
// console.log(infoUser);

// const arr = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const newArr = [...arr, ...arr2];
// console.log(newArr);

// const name = "John";
// const age = 30;

// function myTag(strings, ...value) {
//   console.log(strings); // Output: ["My name is ", " and I'm ", ""]
//   console.log(value);
// }

// myTag`My name is ${name} and I'm ${age}.`;


function multy(user){
    user.name = "kk";
    console.log(user.name);
}

const user = {name: "John",};
multy(user);
console.log(user.name);