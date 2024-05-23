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

// function arrayToObject(arr) {
//   return arr.reduce((acc, [key, value]) => {
//     acc[key] = value;
//     return acc;
//   }, {});
// }

// console.log(arrayToObject(arr));

// Задача 2
// Напишите функцию isEmpty, которая будет проверять, пуст ли объект.

// const obj = {};
// function isEmpty(obj) {
//   if (Object.entries(obj).length === 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// isEmpty(obj);

// Задача 3 **
//  Создать объект "Товар" с полями "название", "цена" и методом "снизить цену", который уменьшает цену на указанное значение.

// const product = {
//   tv: "lg",
//   price: 100,

//   reducePrice: function (amount) {
//     if (amount > 0 && amount < this.price) {
//       this.price -= amount;
//     } else {
//       console.log("Некоректное значение");
//     }
//   },
// };

// product.reducePrice(25);

// console.log(product);

// const arr = [1, 2, 34, 5, 6, 67];

// const [one, two, three, ...last] = arr;

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(last);

// const person = {
//   value: "vladilen",
//   enumerable: true,
//   writable: true,
//   configurable: true,
// };

// const { value, writable } = person;

// console.log(writable);

// Создайте объект "Банковский счет" с полями "имя владельца", "баланс" и методом "пополнить баланс", который увеличивает баланс на указанное значение.

// const bankAccount = {
//   userName: "Vadim",
//   userDeposit: 2000,
//   addAmount: function (amount) {
//     if (amount > 0) {
//       this.userDeposit += amount;
//     }
//   },
// };

// bankAccount.addAmount(200);
// console.log(bankAccount);

// Создайте объект "Автомобиль" с полями "марка", "модель", "пробег" и методом "добавить пробег", который увеличивает пробег на указанное значение.

// const car = {
//   name: "toyota",
//   model: "q8",
//   kilometers: 220000,
//   maxSpeed: 120,
//   addKm: function (km) {
//     if (km > 0) {
//       this.kilometers += km;
//     }
//   },
//   maxSpeedToKm: function (tokm = 1.6) {
//     if (tokm > 0) {
//       this.maxSpeed = this.maxSpeed / tokm;
//     }
//   },
// };

// car.addKm(9999);

// console.log(car);

// car.maxSpeedToKm();
// console.log(car);

// Создайте объект "Студент" с полями "имя", "возраст", "оценки" и методом "добавить оценку", который добавляет новую оценку к массиву оценок.
// Оценки студентов не могут быть отрицательными или 0  а так же не быть больше 5

// const student = {
//   name: "Anna",
//   age: 22,
//   number: [1, 1, 1, 1, 1],
//   addNumber: function (grade) {
//     if (grade > 0 && grade <= 5) {
//       this.number.push(grade);
//     }
//   },
// };

// student.addNumber(4);
// student.addNumber(5);

// console.log(student);

// Создайте объект "Ресторан" с полями "название", "меню" и методом "добавить в меню", который добавляет новое блюдо к массиву меню.
// Блюда не могут быть цифрами

// const restaurant = {
//   name: "wawes",
//   menu: ["steak", "salad"],
//   totalTips: 0,
//   minOrderAmount: 50,
//   addInMenu: function (dish) {
//     if (typeof dish === "string") {
//       this.menu.push(dish);
//     }
//   },
//   addTips: function (guestOrder, tips) {
//     if (guestOrder >= this.minOrderAmount && tips >= 15) {
//       this.totalTips = (guestOrder * tips) / 100;
//     } else if (guestOrder < this.minOrderAmount) {
//       this.totalTips = (guestOrder * 15) / 100;
//     } else {
//       console.log("jlob");
//     }
//   },
// };

// restaurant.addInMenu("porkchop");

// console.log(restaurant);

// restaurant.addTips(200, 10);

// console.log(restaurant);

// Создайте объект "Фильм" с полями "название", "режиссер", "рейтинг" и методом "изменить рейтинг", который изменяет рейтинг фильма на новое значение.

// const movie = {
//   name: "terminator",
//   author: "John Travolta",
//   rating: 8,
//   reviews: [],
//   changeRating: function (addRating) {
//     this.rating += addRating;
//   },
//   addReviews: function (review) {
//     if (review.length >= 20 && review.length <= 100) {
//       this.reviews.push(review);
//     }
//   },
// };

// movie.changeRating(2);

// console.log(movie);

// movie.addReviews("goood");

// console.log(movie);

// Увеличьте на 1 все четные числа в массиве, а нечетные оставьте без изменений.
// [1, 3, 3, 5, 5, 7]

// const array = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     array[i] += 1;
//   }
// }

// console.log(array);

// Создайте функцию, которая принимает массив объектов и рассчитывает общую сумму на основе количества купленных товаров. При необходимости применяйте налог с продаж в размере 6% для каждого товара. ➞ 15.3

// const checkout = [
//   { desc: "potato chips", price: 2, qty: 2, taxable: false },
//   { desc: "soda", price: 3, qty: 2, taxable: false },
//   { desc: "paper plates", price: 5, qty: 1, taxable: true },
// ];

// function checkTaxes(arr) {
//   let taxApply = 0;
//   let result = 0;
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element.price * element.qty;
//     if (element.taxable === true) {
//       taxApply = (element.price * element.qty * 6) / 100;
//     }
//     result = sum + taxApply;
//   });
//   console.log(result);
// }

// checkTaxes(checkout);
