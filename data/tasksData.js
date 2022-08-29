export const tasksData = [
  {
    name: "Оставляем только не повторяющиеся цифры",
    task: `let newNumArr = numArr.filter((number, index) => {
  return numArr.indexOf(number) === index
})`,
  },
  {
    name: "Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.",
    task: `function unique(arr) {
  return Array.from(new Set(arr))
}`,
  },
  {
    name: "Сортируем цифры в порядке возрастания",
    task: `numArr.sort((a, b) => a - b)`,
  },
  {
    name: "Сумма всех чисел",
    task: `let total = numArr.reduce((sum, number) => {
  return sum + number
}, 0)`,
  },
  {
    name: "Сумма свойств объекта",
    task: `let salaries = {John: 100, Pete: 300,}
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0) // 400
}`,
  },
  {
    name: "Создадим объект и присвоим всем элементам значение",
    task: `let fruits = strArr.reduce((acc, element) => {
  acc[element] = 1
  return acc
}, {})`,
  },
  {
    name: "Делаем первую букву заглавной",
    task: `const camelize = (str) => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")
}`,
  },
  {
    name: "Нужно получить отсортированную копию, но оставить arr неизмененным.",
    task: `const copySorted = (arr) => {
    return arr.slice().sort()
}`,
  },
  {
    name: "Напишите функцию reverseStr, которая принимает в себя строку и возвращает эту строку в обратном порядке.",
    task: `const someString = "This is some strange string"
function reverseStr(str) {
  return str.split("").reverse().join("")
}`,
  },
  {
    name: "Напишите функцию reverseNum, которая принимает в себя число и возвращает это число в обратном порядке.",
    task: `function reversNum(number) {
  number += ""
  let reversNumber = ""
  for (let i = number.length - 1; i >= 0; i--) {
    reversNumber += number[i]
  }
  return +reversNumber
}`,
  },
  {
    name: "Числа Фибоначчи",
    task: `function fib(n) {
  let a = 1
  let b = 1
  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
} // или с помощью рекурсии, но такое решение будет работать долго.`,
  },
  {
    name: "Факториал 5 ! = 1 * 2 * 3 * 4 * 5 = 120",
    task: `function factorial(n) {
    let fact = 1
    if (n == 0) fact = 1
    for (let i = 1; i <= n; i++) {
      fact = fact * i
    }
    return fact
  }`,
  },
]
