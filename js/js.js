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

const dictionary = {
  word1: "apple",
  word2: "banana",
  word3: "strawberry",
};

function findLongWord(obj) {
  let arr = [];
  let acc = 0;
  let letters = [];
  for (const key in obj) {
    arr = obj[key];
    console.log(arr);
    letters = arr.split("");
    console.log(letters);
    for (const index of letters) {
      acc++;
    }
  }
  console.log(acc);
}

findLongWord(dictionary);

// Задача 2
// Подсчитать количетсво объектов
// const votes = [
//     { candidate: 'A' },
//     { candidate: 'B' },
//     { candidate: 'A' },
//     { candidate: 'C' },
//     { candidate: 'A' }
// ];

// Задача 3 *
// Создайте функцию, которая принимает предложение и искомый символ . Возвращает объект каждого слова в предложении со счетчиком указанного символа в качестве значения.
// findOccurrences("Hello World", "o") ➞ {
//   "hello" : 1,
//   "world" : 1
// }ё
