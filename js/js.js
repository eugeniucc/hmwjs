// Учитывая объект людей и их возраст , верните, сколько лет будет людям по nпрошествии многих лет. Используйте абсолютное значение n.

// ➞ {
//     "Baby" : 21,
//     "Child" : 27,
//     "Teenager" : 34,
//     "Adult" : 44,
//     "Elderly" : 90
//   }

// const afterNYears = {
//   Baby: 2,
//   Child: 8,
//   Teenager: 15,
//   Adult: 25,
//   Elderly: 71,
// };

// let n = 19;

// function resultYears(obj, n) {
//   let resultNYears = {};
//   for (const key in obj) {
//     let years = obj[key] + n;
//     resultNYears[key] = years;
//   }
//   console.log(resultNYears);
// }

// resultYears(afterNYears, n);

// Вы хотите ввести скидку для своего интернет-магазина. Каждый покупатель получает скидку 25% на самый дорогой товар в корзине. Скидка будет рассчитана только на один товар , даже если клиент покупает более одного самого дорогого товара.

// Создайте функцию, которая принимает объект и возвращает общую цену после скидки . ➞ 86.96

// const twentyFiveOnOne = [
//   { name: "jogging pants", quantity: 1, price: 29.99 },
//   { name: "tennis socks", quantity: 2, price: 5.99 },
//   { name: "sweat shirt", quantity: 1, price: 59.99 },
// ];

// function getPrice(arr) {
//   let maxPrice = 0;
//   arr.forEach((element) => {
//     if (element.price > maxPrice) {
//       maxPrice = element.price;
//     }
//   });
//   let discountPrice = maxPrice * 0.25;
//   let totalPrice = arr.reduce(
//     (acc, value) => acc + value.price * value.quantity,
//     0
//   );
//   let resultPrice = totalPrice - discountPrice;
//   console.log(resultPrice.toFixed(2));
// }

// getPrice(twentyFiveOnOne);

// Создайте функцию, которая определяет, имеет ли заказ на бесплатную доставку. Заказ имеет право на бесплатную доставку, если общая стоимость приобретенных товаров превышает 50 долларов США.

// const freeShipping = {
//   Monopoly: 11.99,
//   "Secret Hitler": 35.99,
//   Bananagrams: 13.99,
// };

// const freeDelivery = 50;

// function checkDelivery(obj) {
//   let acc = 0;
//   for (const key in obj) {
//     acc += obj[key];
//   }
//   const result = acc > freeDelivery ? true : false;
//   console.log(result);
// }

// checkDelivery(freeShipping);

// Напишите функцию, имеющую два параметра: orders и cost. Возвращайте заказы, стоимость которых превышает стоимость.
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
// ➞ { "a": 3000, "c": 1050 }

// const expensiveOrders = { a: 3000, b: 200, c: 1050 };

// const orderPrice = 1000;

// function mostExpensiveOrders(obj, price) {
//   let resultOrders = {};
//   for (const key in obj) {
//     if (obj[key] > price) {
//       resultOrders[key] = obj[key];
//     }
//   }
//   console.log(resultOrders);
// }

// mostExpensiveOrders(expensiveOrders, orderPrice);

// Учитывая объект, содержащий имена и возраст группы людей, верните имя самого старого человека. ➞ "Emma"

// const oldest = {
//   Emma: 71,
//   Jack: 45,
//   Amy: 15,
//   Ben: 29,
// };

// function oldestPerson(obj) {
//   let maxAge = 0;
//   let resultName = "";
//   for (const key in obj) {
//     if (obj[key] > maxAge) {
//       maxAge = obj[key];
//       resultName = key;
//     }
//   }
//   console.log(resultName);
// }

// oldestPerson(oldest);

// Учитывая объект со студентами и оценки, которые они получили по сданным ими тестам, определите, у какого ученика лучший средний результат теста. Это key будет имя учащегося и value массив его оценок. Вам останется только вернуть имя студента . Вам не нужно возвращать их среднее значение теста. ➞ "Mike"

// const getBestStudent = {
//   Susan: [67, 84, 75, 63],
//   Mike: [87, 98, 64, 71],
//   Jim: [90, 58, 73, 86],
// };

// function bestStudent(obj) {
//   let medNumber = [];
//   let result = 0;
//   let nameStudent = "";
//   for (const key in obj) {
//     medNumber = obj[key];
//     let acc =
//       medNumber.reduce((acc, value) => acc + value, 0) / medNumber.length;
//     if (acc > result) {
//       result = acc;
//       nameStudent = key;
//     }
//   }
//   console.log(nameStudent);
// }

// bestStudent(getBestStudent);

// Найти самое длинное слово в объекте и вывести его ключ.

// const dictionary = {
//   word1: "apple",
//   word2: "banana",
//   word3: "strawberry",
// };

// function findLongWord(obj) {
//   let maxLength = 0;
//   let longestWord = "";
//   for (const key in obj) {
//     const wordLenght = obj[key].length;
//     if (wordLenght > maxLength) {
//       maxLength = wordLenght;
//       longestWord = key;
//     }
//     console.log(maxLength);
//   }
//   console.log(longestWord);
// }

// findLongWord(dictionary);

// Задача 2
// Подсчитать количетсво объектов

// const votes = [
//   { candidate: "A" },
//   { candidate: "B" },
//   { candidate: "A" },
//   { candidate: "C" },
//   { candidate: "A" },
// ];

// function totalNumber(arr) {
//   let result = arr.length;
//   console.log(result);
// }

// totalNumber(votes);

// Задача 3 *
// Создайте функцию, которая принимает предложение и искомый символ . Возвращает объект каждого слова в предложении со счетчиком указанного символа в качестве значения.
// findOccurrences("Hello World", "o") ➞ {
//   "hello" : 1,
//   "world" : 1
// }

// const str = "Hello World";

// const letter = "o";

// function findOccurrences(str, letter) {
//   const arr = str.toLowerCase().split(" ");
//   let obj = {};
//   arr.forEach((element) => {
//     let acc = 0;
//     for (const count of element) {
//       if (count === letter) {
//         acc++;
//         obj[element] = acc;
//       }
//     }
//   });
//   console.log(obj);
// }

// findOccurrences(str, letter);

// Google запускает сеть автономных дронов для доставки пиццы и хочет, чтобы вы создали гибкую систему вознаграждений (Pizza Points™), которую можно будет настроить в будущем. Правила просты: если клиент сделал хотя бы N заказов на сумму не менее Y , он получает БЕСПЛАТНУЮ пиццу!

// Создайте функцию, которая принимает объект клиентов, минимальное количество заказов и минимальную цену заказа. Верните массив клиентов, которые имеют право на бесплатную пиццу.  Примеры; ➞ ["Spider-Man"]

// const customersObj = {
//   Batman: [22, 30, 11, 17, 15, 52, 27, 12],
//   SpiderMan: [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
// };

// function pizzaPoints(customers, minOrders, minPrice) {
//   const eligibleCustomers = [];
//   for (const customer in customers) {
//     const orders = customers[customer];
//     if (
//       orders.length >= minOrders &&
//       orders.every((order) => order >= minPrice)
//     ) {
//       eligibleCustomers.push(customer);
//     }
//   }
//   return eligibleCustomers;
// }

// Предположим, у вас есть список гостей и их страны, хранящиеся в виде пар ключ-значение в объекте.

// Напишите функцию, которая принимает имя и возвращает тег имени , который должен читаться так:

// "Hi! I'm [name], and I'm from [country]."
// Если имя отсутствует в объекте, верните:

// "Hi! I'm a guest."
// Примеры
// greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

// const GUEST_LIST = {
//   Randy: "Germany",
//   Karla: "France",
//   Wendy: "Japan",
//   Norman: "England",
//   Sam: "Argentina",
// };

// const guest = "sss";

// function helloGuest(customers, guest) {
//   for (const key in customers) {
//     if (key === guest) {
//       console.log(`Hi! I'm ${key}, and I'm from ${customers[key]}.`);
//     }
//     if (key !== guest) {
//       console.log("Hi! I'm a guest.");
//     }
//   }
// }

// helloGuest(GUEST_LIST, guest);

// Вам будет предоставлен объект с различными потребительскими товарами и соответствующими ценами. Вернуть список товаров с минимальной ценой 500 в порядке убывания. Примеры ➞ ["TV","Computer"]

// const products = { Computer: 600, TV: 800, Radio: 50 };
// const minPrice = 500;

// function filtPrice(products, minPrice) {
//   let arr = [];
//   let obj = {};
//   for (const key in products) {
//     const prices = products[key];
//     if (prices > minPrice) {
//       obj[key] = prices;
//       arr.push(obj);
//     }
//   }
//   let oneObj = Array.from(new Set(arr));
//   let emptyArr = [];
//   for (const value of oneObj) {
//     let result = Object.entries(value).sort((a, b) => b[1] - a[1]);
//     for (const name of result) {
//       emptyArr.push(name[0]);
//     }
//   }

//   console.log(emptyArr);
// }

// filtPrice(products, minPrice);

// Видео 1

// let user = {
//   name: "Vitaliy",
//   age: 30,
//   sayHi() {
//     console.log("hello" + this.name);
//   },
// };

// user.sayHi = function () {
//   console.log("hello");
// };

// function sayHi() {
//   console.log("hello");
// }

// user.sayHi = sayHi;

// console.log(user);

// user.sayHi();

// function sayHi() {
//   console.log(this.name);
// }

// let user = { name: "vitaly" };

// let admin = { name: "sergey" };

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// const sayHi = () => {
//   console.log("hello" + this.name);
// };

// let user = { name: "vitaly" };

// let admin = { name: "sergey" };

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// Видео 2

// const person = Object.create(
//   {
//     calculateAge() {
//       console.log("Age:", new Date().getFullYear() - this.birthYear);
//     },
//   },
//   {
//     name: {
//       value: "vladilen",
//       enumerable: true,
//       writable: true,
//       configurable: true,
//     },
//     birthYear: {
//       value: 1993,
//       enumerable: false,
//       writable: false,
//       configurable: false,
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYear;
//       },
//       set(value) {
//         document.body.style.background = "red";
//         console.log("Set age", value);
//       },
//     },
//   }
// );

// for (const key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log("key", key, person[key]);
//   }
// }

// Домашка
// Напишите функцию arrayToObject, которая будет преобразовывать массив вида [ключ, значение] обратно в объект.
//  { a: 1, b: 2, c: 3 }

// const arr = [
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ];

// function arrayToObject(arr) {}

// arrayToObject(arr);

// Задача 2
// Напишите функцию isEmpty, которая будет проверять, пуст ли объект.

// const obj = { a: 1 };

// function isEmpty(obj) {
//   let result = "";
//   if (Object.entries(obj).length === true) {
//     console.log((result = true));
//   } else {
//     console.log((result = false));
//   }
// }

// isEmpty();

// Задача 3 **
//  Создать объект "Товар" с полями "название", "цена" и методом "снизить цену", который уменьшает цену на указанное значение.

const product = {
  tv: 20,
  mouse: 10,
  can: 5,
  candies: 25,
};
