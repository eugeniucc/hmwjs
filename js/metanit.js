// Условные операторы

// "use strict";

// const a = 1;
// const b = 2;

// const result = a < b ? a : b;
// console.log(result);

// "use strict";

// const a = 1;
// const b = 2;

// const result = a < b ? a + b : a - b;

// console.log(result);

// const result = "hello " ?? "world";

// console.log(result);

// console.log(0 ?? 5);

// console.log(false ?? true);

// console.log("" ?? "javascript");

// console.log(null ?? "not null");

// console.log(null ?? null);

// console.log(undefined ?? undefined);

// const message = "Hello Javascript";
// let text = null;
// text ??= message;
// console.log(text);

// parseInt();
// parseFloat();
// isNaN();

// const number1 = "56hek";
// const test = "sssss";
// console.log(parseInt(number1));
// console.log(isNaN(number1));
// console.log(isNaN(test));

// Введение в массивы

// const people = ["Tom", "Alice", "Sam"];
// people[7] = "bob";

// console.log(people[5]);
// console.log(people[7]);
// console.log(people[-2]);

// const numbers1 = [0, 1, 2, 3, 4, 5];
// const numbers2 = [
//   [0, 1, 2],
//   [3, 4, 5],
// ];

// const people = [
//   ["Tom", 25, false],
//   ["Bill", 38, true],
//   ["Alice", 21, false],
// ];

// console.log(people[0][2]);

// const numbers = [];
// numbers[0] = [];
// numbers[0][0] = [];
// numbers[0][0][0] = 5;
// console.log(numbers[0][0][0]);

// let income = 200;
// switch (income) {
//   case 100:
//     console.log("Доход равен 100");
//     income += 100;
//     break;
//   case 200:
//     console.log("Доход равен 200");
//     income += 100;
//     break;
//   case 500:
//     console.log("Доход равен 500");
//     income += 100;
//     break;
//     // default если значение не наидено
//   default:
//     console.log("Доход неизвестной величины");
//     break;
// }

// console.log(`Финальный доход равен, ${income}`);

// for (let i = 1, j = 1; i < 5, j < 4; i++, j++) {
//   console.log(i + j);
// }

// const people = [
//   ["Tom", 39],
//   ["Sam", 28],
//   ["Bob", 42],
// ];

// let acc = 0;

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log(people[i][j]);
//   }
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// for (let i = 1; i <= 6; i++) {
//   if (i === 4) continue;
//   {
//     console.log(i);
//   }
// }
// console.log("end");

// const person = { name: "Tom", age: 37 };

// for (prop in person) {
//   console.log(prop, person[prop]);
// }

// const text = "hello";

// for (const char of text) {
//   console.log(char);
// }

// const people = ["tom", "sam", "bob"];

// for (const prop of people) {
//   console.log(prop);
// }

// const numbers = [2, 5, 3, 4, 2, 6];

// for (let i = 0; i < numbers.length - 1; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] > numbers[j]) {
//       const temp = numbers[j];
//       numbers[j] = numbers[i];
//       numbers[i] = temp;
//     }
//   }
// }

// console.log(numbers);

// function hello() {
//   console.log("hello world");
// }

// const message = hello;

// message();

// function goodMorning() {
//   console.log("Доброе утро");
// }
// function goodEvening() {
//   console.log("Добрый вечер");
// }

// let message = goodMorning;
// message();
// message = goodEvening;
// message();

// const message = function () {
//   console.log("hello js");
// };

// message();

// function print() {
//   printHello();
//   printHello();
//   printHello();

//   function printHello() {
//     console.log("hello");
//   }
// }

// print();

// const tom = ["Tom", 39, "tom@example.com"];
// const bob = ["Bob", 43, "bob@example.com"];

// function printPerson(person) {
//   console.log("Name:", person[0]);
//   console.log("Age:", person[1]);
//   console.log("Email:", person[2]);
//   console.log("=========================");
// }

// printPerson(tom);

// function sum() {
//   let result = 0;
//   for (let n of arguments) {
//     result += n;
//     console.log(result);
//   }
// }

// sum(6);
// sum(6, 4);
// sum(6, 4, 5);


