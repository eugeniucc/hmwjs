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

// function sum(a, b) {
//   const result = a + b;
//   return result;
// }

// let num1 = sum(2, 4);

// console.log(num1);

// let num2 = sum(6, 34);

// console.log(num2);

// function rectangle(width, height) {
//   const perimeter = width * 2 + height * 2;
//   const area = width * height;
//   return [perimeter, area];
// }

// const rectangleData = rectangle(20, 30);

// console.log(rectangleData);
// console.log(rectangleData[1]);

// function rectangle(width, heigt) {
//   const rectPerimeter = width * 2 + heigt * 2;
//   const rectArea = width * heigt;
//   return { perimeter: rectPerimeter, area: rectArea };
// }

// const rectangleData = rectangle(20, 30);

// console.log(rectangleData);

// console.log("Периметр:", rectangleData.perimeter);
// console.log("Площадь:", rectangleData.area);

// function menu(n) {
//   if (n == 1)
//     return function (x, y) {
//       return x + y;
//     };
//   else if (n == 2)
//     return function (x, y) {
//       return x - y;
//     };
//   else if (n == 3)
//     return function (x, y) {
//       return x * y;
//     };cx
// }

// let action = menu(1);
// console.log(action(2, 5));

// action = menu(2);
// console.log(action(2, 5));

// action = menu(3);
// console.log(action(2, 5));

// function sum(x, y) {
//   return x + y;
// }
// function substract(x, y) {
//   return x - y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function zero() {
//   return 0;
// }

// function menu(n) {
//   switch (n) {
//     case 1:
//       return sum;
//     case 2:
//       return substract;
//     case 3:
//       return multiply;
//     case 4:
//       return zero;
//   }
// }

// let action = menu(1);
// console.log(action(5, 4));
// action = menu(2);
// console.log(action(5, 4));
// action = menu(3);
// console.log(action(5, 4));
// action = menu(4);
// console.log(action());

// function hello() {
//   console.log("Hello");
// }
// hello();

// const hello = () => console.log("Hello");
// hello();

// const print = (mes) => console.log(mes);

// print("Hello Metanit.com");
// print("Welcome to JavaScript");

// const sum = (x, y) => console.log("Sum =", x + y);

// sum(1, 2);
// sum(4, 3);
// sum(103, 2);

// const sum = (x, y) => x + y;

// console.log(sum(1, 2));
// console.log(sum(3, 4));
// console.log(sum(102, 3));

// const hello = (name) => `Hello, ${name}`;

// console.log(hello("Tom"));
// console.log(hello("Bob"));
// console.log(hello("Frodo"));

// const user = (userName, userAge) => ({ name: userName, age: userAge });

// let tom = user("Tom", 34);
// let bob = user("bob", 25);

// console.log(tom.name, tom.age);
// console.log(bob.name, bob.age);

// const square = (n) => {
//   const result = n * n;
//   return result;
// };

// console.log(square(5));

// function displayZ() {
//   var z = 20;

//   {
//     var z = 30;
//     console.log("Block:", z);
//   }
//   console.log("Function:", z);
// }
// displayZ();

// let z = 10;
// function displayZ() {
//   let z = 20;
//   {
//     let z = 30;
//     console.log(z);
//   }
//   console.log(z);
// }

// displayZ();
// console.log("global: ", z);

// function setAge() {
//   userage = 39;
// }

// setAge();
// console.log(userage);

// function outer() {
//   let x = 5;
//   function inner() {
//     x++;
//     console.log(x);
//   }
//   return inner;
// }

// const fn1 = outer();
// const fn2 = outer();
// fn1();
// fn1();
// fn2();
// fn2();

// function multiply(n) {
//   let x = n;
//   return function (m) {
//     return x * m;
//   };
// }
// const fn1 = multiply(5);
// const result1 = fn1(6);
// console.log(result1);

// const fn2 = multiply(4);
// const result2 = fn2(6);
// console.log(result2);

// const result = multiply(5)(6);
// console.log(result);
// const result1 = multiply(4)(6);
// console.log(result1);

// function person(name, age) {
//   console.log("Person", name, "created");

//   function print() {
//     console.log("Person ", name, " (" + age + ")");
//   }
//   function work() {
//     console.log("Person ", name, " works");
//   }
//   function incrementAge(value) {
//     age = age + value;
//   }
//   return [print, work, incrementAge];
// }

// const tom = person("Tom", 40);
// tom[0]();
// tom[1]();
// tom[2](3);
// tom[0]();

// (function () {
//   console.log("hello");
// })();

// (function (a, b) {
//   const result = a + b;
//   console.log(`${a} + ${b} = ${result}`);
// })(4, 5);

// console.log(
//   ((x, y) =>
//     ((proc2) => ((proc1) => proc1(5, 30))((x, y) => [x, proc2(), y]))(
//       () => x + y
//     ))(10, 15)
// );

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// const result = factorial(3);
// console.log(result);

// function fibonachi(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   } else {
//     return fibonachi(n - 1) + fibonachi(n - 2);
//   }
// }

// const result = fibonachi(2);
// console.log(result);

// function print() {
//   console.log("morning");
//   print = function () {
//     console.log("day");
//   };
// }

// print();
// print();

// function print() {
//   console.log("morning");
//   print = function () {
//     console.log("day");
//   };
// }
// const printMessage = print;

// print();
// print();
// printMessage();
// printMessage();

// function print() {
//   console.log("morning");
//   print = function () {
//     console.log("day");
//   };
// }

// print();
// print();
// const printMessage = print;
// printMessage();
// printMessage();

// console.log(foo);
// var foo = "tom";

// display();

// function display() {
//   console.log("hello");
// }

// let foo;
// console.log(foo);
// foo = "Tom";
// console.log(foo);

// function change(x) {
//   x = 2 * x;
//   console.log("x in change:", x);
// }

// let n = 10;
// console.log("n before change:", n);
// change(n);
// console.log("n after change:", n);

// function change(user) {
//   user.name = "tom";
// }

// let bob = {
//   name: "bob",
// };

// console.log(bob.name);
// change(bob);
// console.log(bob.name);

// function change(array) {
//   array[0] = 8;
// }
// function changeFull(array) {
// }

// let numbers = [1, 2, 3];

// console.log("before changing", numbers);
// change(numbers);
// console.log("after changing", numbers);
// changeFull(numbers);
// console.log("after changeFull", numbers);

// const user = new Object();

// const user = {};
// user.name = "Tom";
// user.age = 26;
// console.log(user);

// const name = "Tom";
// const age = 34;
// const user = { name, age };

// const teacher = { user, course: "JavaScript" };
// console.log(teacher.user);
// console.log(teacher.course);
// console.log(teacher);

// "use strict";

// const user = { name: "Tom", age: 27 };

// console.log(user);

// const name = "tom";
// const age = 34;
// const user = { name, age };
// console.log(user.name);
// console.log(user.age);

// const user = {};
// user.name = "Tom";
// user.age = 26;
// user.display = function () {
//   console.log(user.name);
//   console.log(user.age);
// };

// user.display();

// const user = {
//   name: "Tom",
//   age: 26,
//   display: function () {
//     console.log(this.name);
//     console.log(this.age);
//   },
// };

// user.display();

// let user = {
//   name: "Tom",
//   age: 26,
//   display() {
//     console.log(this.name, this.age);
//   },
//   move(place) {
//     console.log(this.name, "goes to", place);
//   },
// };

// user.display();
// user.move("the shop");

// const user = {};
// user["name"] = "Tom";
// user["age"] = 26;
// user["display"] = function () {
//   console.log(user.name);
//   console.log(user.age);
// };

// user["display"]();

// const user = {
//   ["name"]: "Tom",
//   ["age"]: 26,
//   ["display"]: function () {
//     console.log(user.name);
//     console.log(user.age);
//   },
// };

// user["display"]();

// const user = {
//   name: "Tom",
//   age: 26,
//   display: function () {
//     console.log(user.name);
//     console.log(user.age);
//   },
// };

// user.display();

// const user = {
//   name: "Tom",
//   age: 26,
//   "full name": "Tom Johns",
//   "display info": function () {
//     console.log(user.name);
//     console.log(user.age);
//   },
// };

// console.log(user["full name"]);
// user["display info"]();

// const prop1 = "name";
// const prop2 = "age";
// const tom = {
//   [prop1]: "Tom",
//   [prop2]: 37,
// };

// console.log(tom);
// console.log(tom.name);
// console.log(tom["age"]);

// function createObject(propName, propValue) {
//   return {
//     [propName]: propValue,
//     print() {
//       console.log(`${propName}: ${propValue}`);
//     },
//   };
// }

// const person = createObject("name", "Tom");
// person.print();

// const book = createObject("title", "Javascript Reference");
// book.print();

// let user = {
//   name: "tom",
//   age: 26,
//   display: function () {
//     console.log(user.name);
//     console.log(user.age);
//   },
// };

// console.log(user.name);
// delete user.name;
// console.log(user);

// function getSalary(status) {
//   if (status === "senior") {
//     return 1500;
//   } else {
//     return 500;
//   }
// }
// const name = "Tom";
// const age = 37;
// const person = { name: name, age: age, salary: getSalary() };

// console.log(person);

// function display() {
//   console.log(this.name, this.age);
// }
// const move = function (place) {
//   console.log(this.name, "goes to", place);
// };
// const name = "Tom";
// const age = 37;
// const salary = 500;
// const person = { name, age, salary, display, move };

// person.display();
// person.move("cinema");

// const personData = [
//   ["name", "Tom"],
//   ["age", 37],
// ];

// const person = Object.fromEntries(personData);
// console.log(person);
// console.log(person.name);

// console.log(globalThis);

// function foo() {
//   var bar = "local";
//   console.log(this.bar);
// }

// var bar = "global";

// foo();

// const obj = {
//   bar: "object",
//   foo: function () {
//     console.log(this.bar);
//   },
// };

// var bar = "global";
// obj.foo();

// function foo() {
//   var bar = "foo_bar";
//   console.log(this.bar);
// }

// const obj1 = { bar: "obj1_bar", foo: foo };
// const obj2 = { bar: "obj2_bar", foo: foo };

// var bar = "global_bar";

// foo();
// obj1.foo();
// obj2.foo();

// var bar = "global_bar";

// const obj1 = {
// bar: "obj_bar",
// foo: function () {
//     console.log(this.bar);
// },
// };

// const obj2 = { bar: "obj2_bar", foo: obj1.foo };

// const foo = obj1.foo;

// obj1.foo();
// obj2.foo();
// foo();

// var bar = "global bar";

// function foo() {
//   var bar = "foo bar";
//   function moo() {
//     console.log(this.bar);
//   }
//   moo();
// }
// foo();

// function foo() {
//   console.log(this.bar);
// }

// var bar = "global";
// foo();

// const obj = { bar: "object" };
// const func = foo.bind(obj);
// func();

// const person = {
//   name: "Tom",
//   say: () => console.log(`My names is ${this.name}`),
// };

// person.say();

// const person = {
//   name: "Tom",
//   hello() {
//     console.log("Hi");
//     let say = () => console.log(`My name is ${this.name}`);
//     say();
//   },
// };

// person.hello();

// const school = {
//   title: "Oxford",
//   courses: ["JavaScript", "TypeScript", "Java", "Go"],
//   printCourses() {
//     this.courses.forEach((element) => {
//       console.log(this.title, element);
//     });
//   },
// };

// school.printCourses();

// const country = {
//   name: "Germany",
//   language: "немецкий",
//   capital: {
//     name: "Berlin",
//     population: 3375000,
//     year: 1237,
//   },
// };

// console.log("Столица:", country.capital.name);
// console.log("Население:", country["capital"]["population"]);
// console.log("Год основания", country.capital["year"]);

// const country = {
//   name: "Щвейцария",
//   languages: ["немецкий", "французкий", "итальянский"],
//   capital: {
//     name: "Берн",
//     population: 126598,
//   },
//   cities: [
//     { name: "Цюрих", population: 378884 },
//     { name: "Женева", population: 188634 },
//     { name: "Базель", population: 164937 },
//   ],
// };

// console.log("Официальные языки Щвейцарии");
// for (const lang of country.languages) {
//   console.log(lang);
// }
// console.log("Города Щвейцарии:");
// for (const city of country.cities) {
//   console.log(city.name);
// }

// const tom = { name: "Tom" };
// const bob = tom;
// console.log(tom.name);
// console.log(bob.name);

// bob.name = "Bob";
// console.log("После изменения");

// console.log(tom.name);
// console.log(bob.name);

// bob.age = 37;
// console.log(tom);

// Object.assign(target, ...source);

// const tom = { name: "Tom", age: 37 };
// const bob = Object.assign({}, tom);
// bob.name = "Bob";
// bob.age = 41;

// console.log(tom);
// console.log(bob);

// const tom = { name: "Tom" };
// const sam = { age: 37 };
// const person = { height: 170 };

// Object.assign(person, tom, sam);
// console.log(person);

// const tom = { name: "Tom", age: 37 };
// const sam = { age: 45 };
// const person = { heigh: 170 };
// Object.assign(person, tom, sam);
// console.log(person);

// const tom = { name: "Tom", company: { title: "Microsoft" } };
// const bob = Object.assign({}, tom);
// bob.name = "Bob";
// bob.company.title = "Google";
// console.log(tom.name);
// console.log(bob.company.title);

// const tom = { name: "Tom", age: 37, company: "Google" };
// const bob = { ...tom };
// bob.name = "Bob";

// console.log(tom);
// console.log(bob);

// const tom = { name: "Tom", age: 37, company: "Google" };
// const bob = { ...tom, name: "Bob" };

// console.log(tom);
// console.log(bob);

// const tom = { name: "Tom", age: 37, company: { title: "Microsoft" } };
// const bob = { ...tom };
// bob.name = "Bob";
// bob.company.title = "Google";

// console.log(tom.company.title);
// console.log(bob.company.title);

// const user = {};
// user.name = "Tom";
// user.age = 26;
// user.print = function () {
//   console.log(this.name);
//   console.log(this.age);
// };

// const hasNameProp = "name" in user;
// console.log(hasNameProp);

// const hasWeightProp = "weight" in user;
// console.log(hasWeightProp);

// const hasPrintMethod = "print" in user;
// console.log(hasPrintMethod);

// console.log("/////////////////");

// const hasNamePropUndefined = user.name !== undefined;
// console.log(hasNamePropUndefined);

// const hasWeightPropUndefined = user.weight !== undefined;
// console.log(hasWeightPropUndefined);

// const tom = {
//   name: "Tom",
//   age: 26,
//   print() {
//     console.log(`Name: ${this.name}, age: ${this.age}`);
//   },
// };

// for (const prop in tom) {
//   console.log(prop, ":", tom[prop]);
// }
