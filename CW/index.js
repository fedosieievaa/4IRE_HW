// const getTower = (num) => {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         let entry = "";
//         let spaces = "";
//         for (let j = 0; j < num - i; j++) {
//             spaces += " ";
//         }
//         for (let j = 0; j < (2 * i + 1); j++) {
//             entry += "*";
//         }
//         arr.push(spaces + entry + spaces);
//     }
//     return arr;
// }


// => getTower other solution
// const getTower = (num) => {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(" ".repeat(num - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(num - i - 1));
//     }
//     return arr;
// }
// console.log(getTower(5));


// ___Class Work 6___
// const obj = {
//     amount: 100,
//     hours: 40
// }
// function calculateSalary() {
//     return this.amount * this.hours
// }
// obj.foo = calculateSalary;
// console.log(obj.foo())


// Создать объект obj, с методами method1(), method2() и method3().
//В методе method3() должна возвращаться строка« метод3».
//Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().

// const obj = {
//     method1: function() {
//         return this;
//     },
//     method2: function() {
//         return this;
//     },
//     method3: function() {
//         return "метод3";
//     }
// }
// console.log(obj.method1().method2().method3());