export const jsHintsData = {
  tabBasicInfo: `
/*
*  1. Number // ±(253-1)
*  2. bigint
*  3. String
*  4. Boolean
*  5. Null
*  6. Undefined
*  7. Object
*  8. Symbol
*/

// Динамическая типизация
// To string
String(7) // '7'
4 + "7" // '47'

// To Number
Number("7") // 7
+"5" // 5 [унарный плюс]

// To boolean
0, "", null, undefined, NaN // false
Boolean("4") // true
!!"444" // true

// Variebles
var = "Функциональная область видимости"
let = "блочная область видимости"

// Интерполяция
\`текст \${let}\` 

// Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

<script defer src="main.js"></script> // defer -для загрузки скрипта в фоновом режиме
<script async src="main.js"></script> // async -для загрузки скрипта в фоновом режиме. Но не ждет никого

// Приоритет операторов
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table  
  `,
  tabMethods: `
// Numbers
// В JavaScript встроен объект Math, который содержит различные математические функции и константы.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
const num = 1
num.toString() // возвращает строковое представление числа
num.toFixed(n) // округляет число до n знаков после запятой
Math.floor(x) // Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
Math.ceil() // Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
Math.round() // Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
Math.trunc() // Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.
Math.random() // Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
Math.max(3, 5, -10, 0) // 5 - Возвращает наибольшее число из перечисленных аргументов.
Math.min(1, 2) // 1, Возвращает наименьшее число из перечисленных аргументов.
Math.pow(2, 10) // 2 в степени 10 = 1024, Возвращает число n, возведённое в степень
isNaN(value) // преобразует значение в число и проверяет является ли оно NaN
isFinite(value) // преобразует аргумент в число и возвращает true,
// если оно является обычным числом, т.е. не NaN/Infinity/-Infinity
// ---
let pow = 10e3 // 10000. десять возводим в третью степень
Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_SAFE_INTEGER // -9007199254740991
Math.pow(2, 53) - 1
Number.MAX_VALUE
Number.MIN_VALUE
incr++ // Инкремент аналог: i = i + 1
decr-- // Декремент аналог: i = i - 1
i += 1 // К-к-комбо i = i + 1

// string
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
const str = "ABC abc"
str.length // длина строки
str.toLowerCase() // возвращает строку в нижнем регистре
str.toUpperCase() // возвращает строку в верхнем регистре
parseInt("100px") // 100, возвращает целое число
parseFloat("12.5em") // 12.5, возвращает число с плавающей точкой
str.normalize() // юникодной нормализации
str.charAt(0) // получаем символ с позиции 0
str.indexOf("abc") // проверяем если подстрока abc в строке, else -1
str.startWith("abc") // проверяем начинается ли строка на abc
str.endsWith("abc") // проверяем заканчивается ли строка на abc
str.repeat(3) //повторяем строку
str.trim() // очищаем пробелы в начале и конце строки
str.trimLeft() // очищаем пробелы
str.trimRight() // очищаем пробелы
str.slice(2, 5) // вырезаем строку
str.slice(2) // вырезаем строку до конца
str.slice(-5, -1) // вырезаем строку с конца
str.substring(2, 5) // вырезаем строку, но без отрицательных значений
str.substr(2, 5) // вырезаем строку, второе значение сколько вырезать
str.replace("", "") // заменяем символы, можно регуляркой
str.search() // ищет строку для указанного значения и возвращает позицию совпадения.

str[2] // C

// Объекты для хранения именованных коллекций.
// Массивы для хранения упорядоченных коллекций.
// Map – это коллекция ключ/значение, как и Object.
// Но основное отличие в том, что Map позволяет использовать ключи любого типа.

// Array - упорядоченные коллекций
// Структура Очередь - Имитируем очередь.
// Структура Стек - добавляем в конец и забираем с конца.
// Методы push/pop выполняются быстро, а методы shift/unshift – медленно.
Array.push(...items) // добавляет элементы в конец - изменяет оригинальный массив
Array.pop() // извлекает элемент из конца
Array.shift() // извлекает элемент из начала и возвращает его
Array.unshift(...items) // добавляет элементы в начало

arr.splice(pos, deleteCount, ...items) // Умеет всё: добавлять, удалять и заменять элементы.
arr.slice() // без аргументов slice можно применять для копирования массива
arr.slice(3, 7) // возвращает новый массив, в который элементы, начиная с индекса start и до end (не включая end)

arr.concat(arr2) // Склеиваем два массива - не изменяет оригинальный массив. Возвращает новый массив
arr.indexOf(item, from) // Узнаем индекс элемента в массиве
arr.lastIndexOf(item, from) // то же самое, но ищет справа налево.
arr.includes(item, from) // ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
arr.reverse() // массив с элементами в обратном порядке
arr.join("delim") // Объединить элементы массива в строку
str.split("delim") // разбивает строку на массив по заданному разделителю delim

arr.map((item) => item.toLowerCase()) // метод map возвращает новый масив
arr.some((item) => typeof item === "number") // если в масиве хоть одно совпадение и выводит true or false
arr.every((item) => typeof item === "number") // если в масиве все совпадают выводит true
arr.sort((a, b) => b - a) // Сортирует как строки. Копия массива не создаётся!!!

Array(9).fill(null)
arr.fill(value, start, end) // заполняет массив повторяющимися value
arr.find(func) //
arr.findIndex() //
arr.filter((name) => {
  return name.length < 5
}) // фильтрует элементы внутри массива. И возвращает новый масив.

// Метод перебора возвращает новый масив.
arr.reduce((sum, current) => sum + current) // собирать масив в одно единое целое. 
arr.reduceRight() //

// перебирает масив, но не возвращает его
arr.forEach() // позволяет запускать функцию для каждого элемента массива
arr.forEach(alert) // выведет на экран каждый элемент массива

// В отличие от str.split, этот метод в работе опирается на итерируемость строки, и поэтому,
// как и for..of, он корректно работает с суррогатными парами.
Array.from(arr) // принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array
Array.isArray(value) // проверка массив ли это

arr.length = 0 // самый простой способ очистить массив
arr[0]
arr[0] = "value"
delete arr[0] // удаляет первый элемент

// Map – это коллекция ключ/значение, как и Object.
// Но основное отличие в том, что Map позволяет использовать ключи любого типа.
new Map() // – создаёт коллекцию.
map.set(key, value) // – записывает по ключу key значение value.
map.get(key) // – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) // – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) // – удаляет элемент по ключу key.
map.clear() // – очищает коллекцию от всех элементов.
map.size // – возвращает текущее количество элементов.
map.keys() // возвращает итерируемый объект по ключам,
map.values() // возвращает итерируемый объект по значениям,
map.entries() // возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

// Запись объекта со всеми свойствами в фигурных скобках, называется литералом объекта. 
// Если необходимо создать объект с помощью литерала, вам просто нужно использовать фигурные скобки. 
// И если у объекта есть какие-то свойства, записать их внутри этих скобок.
// Как вы уже знаете, при обращении массив[индекс] мы получаем элемент массива. 
// В нашем случае это объект, из которого можно читать, как из любого другого объекта через точку. 
// Поэтому запись в теле нашего цикла массив[индекс].ключ то же самое, что запись объект.ключ при работе с объектом напрямую.
obj.name = 12345 // Добавляем свойства в объект
obj.name
obj["name"]
obj["name"] = 12345 // Добавляем свойства в объект
delete obj.name // Удаляем свойства из объекта
const jonh = Object.create(soldier) // задает прототип

Object.assign(obj, newObj)
Object.is(NaN, NaN) === true // специальный метод Object.is, который сравнивает значения примерно как ===
Object.setPrototypeOf(childObj, mainObj) // устанавливаем прототип доч. объекту
Object.keys(obj).length // Возвращает количество элементов в объекте
Object.keys(obj) // Возвращает массив ключей.
Object.entries(obj) // Возвращает массив пар [ключ, значение].
Object.values(obj) // Возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. 
// Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.

// All Methods
document.querySelector(".header") // поиск селектора. Возвращает первый найденный. NodeList
document.querySelectorAll(".header") // поиска селектора // forEach(item => item.style.color = 'red')
document.getElementById("id") // он может быть вызван только на всём документе.
document.createElement("имя тега")
Element.innerHTML = "html or text" // вставляем html плюс текст
Element.innerText = "text" // вставляем текст
Element.insertAdjacentHTML("position", "<h2>Hello</h2>") // вставляем код
Element.focus() //  устанавливают/снимают фокус
Element.blur() //  устанавливают/снимают фокус
Element.classList.remove("class") // удаляем класс
Element.classList.add("class") // добавляем класс
Element.classList.toggle("class") // чередуем классы
Element.classList.contains("class") // проверяем, есть ли у элемента класс
Element.insertBefore(div, lement[2]) // добавляет элемент в
Element.appendChild() // добавляет элемент в конец элемента-родителя. Работает только с узлами
Element.append(добавляемый - элемент) // добавляет элемент в конец элемента-родителя.
Element.prepend(добавляемый - элемент) // добавляет элемент в начало элемента-родителя.
Element.remove() // удаляем элемент
Element.replaceWith(element) // заменяем элемент
Element.cloneNode(true) // копируем элемент. Без true копирует без содержимого
Element.closest() // возвращает ближайший родительский элемент (или сам элемент)
Element.children // children[0] возвращает коллекцию вложенных, DOM-элементов. Динамическая. HTMLCollection
Element.parentNode // получаем родителя
Element.parentElement // получаем родителя
Element.firstChild
Element.firstElementChild
Element.lastChild
Element.nextElementSibling //
Element.style.color = "#000" // добавляем стили
Element.style.cssText = "width: 500px; height: 100px;" // добавляем стили

Element.dataset // обращение к дата-атрибутам
window.scrollBy(Х, Y) // Скрол от текущей позиции
window.scrollTo(Х, Y) // Чтобы прокрутить страницу
window.getComputedStyle // получаем все стили, которые применяются к элементу

password.type = "text" // Превращаем инпут с паролем в текстовое поле

// JSON
JSON.stringify(obj) // Превращаем объект в json формат
JSON.parse(json) // Получаем объект с json
Response.json() //

// ajax и общение с серверами
const request = new XMLHttpRequest()
request.open("GET", "js/current.json")
request.setRequestHeader("Content-type", "application/json; charset=utf-8")
request.send()
// npx json-server db.json // json-server db.json
// https://winnote.ru/security/160-windows-powershell-vypolnenie-scenariev-otklyucheno-v-etoy-sisteme.html

fetch("http://localhost:3000/menu") // интерфейс JavaScript для работы с запросами и ответами HTTP
  .then((data) => data.json()) // вместо XMLHttpRequest - https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
  .then((res) => console.log(res))

Promise.all([test(1000), test(2000)]) // ждет пока все выполнятся
Promise.race([test(1000), test(2000)]) // выполняет когда уже первый промис выполнился

// localStorage https://tproger.ru/articles/localstorage/
localStorage.setItem("number", 5) // Записываем
localStorage.getItem("number") // Получаем
localStorage.removeItem("number") // удаляем ключ с значением
localStorage.clear() // очищаем localStorage

localStorage["Ключ"] = "Значение" //установка значения
localStorage["Ключ"] // Получение значения
delete localStorage["Ключ"] // Удаление значения
try {
  localStorage.setItem("ключ", "значение")
} catch (e) {
  if (e == QUOTA_EXCEEDED_ERR) {
    alert("Превышен лимит")
  }
}

// data-атрибуты
Element.innerHTML = Element.dataset.attribute

/* Регулярки */
new RegExp("patten", "flag") // /pattern/f
const reg = /n/gim //
const ans = prompt("Введите данные...")

reg.test(ans) //
ans.match(reg) // ищем совпадения и возвращаем в массиве.
ans.search(reg) //
ans.replace(reg, "") // заменяем символы, можно регуляркой

// i - регистр
// g
// m

// \d ищем цифры
// \w ищем все буквы
// \s ищем все пробелы

// \D ищем НЕ цифры
// \W ищем все НЕ буквы

/* === Dates === */
const now = new Date()
now.getFullYear() // Получаем год
now.getMonth() // Получаем месяц
now.getDate() // Получаем день
now.getDay() // Получаем день день недели. Начиная с воскресенья
now.getHours() // Получаем день часы
now.getUTCHours() // Получаем день часы по UTC
now.getTimezoneOffset() // разница между часовым поясом и UTC
now.getTime() // Возвращает таймШтамп. Секунд с 1970года.

now.setHours(18) // устанавливаем часы

// REACT
setState({}) // Модифицируем состояние
componentDidMount() // выполняется после того, как вывод компонента был отрендерен в DOM
componentDidUpdate() // метод, который вызывается при обновлении и перерисовке компоненты.
componentWillUnmount() // демонтирование

useState()
useRef()
useEffect()
useLayoutEffect() // раньше грузится
useMemo() // минимизирует переменные
useCallback() // кеширует ссылку на функцию, полезно если передаете функцию как пропс и при перерендеренге компонента, не создастся новая функции, а значит дочерние компоненты не будут перерендерены.
useDebugValue()
useReducer()
useContext()

React.memo() //  это компонент высшего порядка. Аналог PureComponent
React.PureComponent // реализует его поверхностным сравнением пропсов и состояния.
// Самое главное отличие между useMemo и memo. Это то что первый является hook-ом, а второй HOC-ом, а именно Higher-Order Component или же Компонент Высшего Порядка.
  `,
  tabProperty: `
str.length // Свойство содержит длину строки
arr.length // Свойство содержит длину массива
textContent // Получаем текстовое содержимое
input.value // Получаем данные из поля ввода
checkbox.checked // отмечен ли чекбокс

pageYOffset // количество пикселей, на которое пользователь прокрутил страницу по вертикали
pageXOffset // Величина горизонтальной прокрутки
scrollY
scrollX
clientWidth
clientHeight
offsetWidth
offsetHeight
scrollWidth
scrollHeight
scrollTop

symbol.description // вывести описание символа

// React property
state
  `,
  tabFundamental: `
// ================================= //
// ========== Conditions =========== //
// ================================= //
if (4 == 4) {
  code
} else if (4 < 10) {
  code
} else {
  code
}

switch (num) {
  case 10:
    console.log("neverno")
    break
  case 100:
    console.log("neverno")
    break
  default:
    console.log("vse nevero")
    break
}

// ================================= //
// =========== Cycles ============== //
// ================================= //
while (count < 10) {
  // Действия будут выполняться снова и снова, пока условие не вернёт false
  console.log(count)
  count++
}

do {
  console.log(count)
  count++
} while (count < 14)

for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break // Оператор break прерывает выполнение цикла.
    // continue; // оператор позволяет пропустить шаг и продолжить цикл
    // Внутри while команда continue «перематывает» программу сразу к началу следующей итерации.
    // Внутри for команда continue «перематывает» программу к дополнительной части текущей итерации,
    // после выполнения которой начинается следующая итерация цикла.
  }
  console.log(i)
}

// for array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 10)
}

// for array. (for of)
for (let item of arr) {
  console.log(item * 10)
}

// for obj. (for in)
for (let key in obj) {
  console.log(\`Свойство \${key} имеет значение \${obj[key]}\`)
}

arr.forEach((item, index, array) => {
  // arr = [1];
  console.log(item + " Индекс " + index) // 1 Индекс 0
})

let newArr = arr.map(function (item) {
  return item * 10
})

// ==================================== //
// ============== Arrays ============== //
// ==================================== //

let usersByDay = [812, 1360, 657, 1247]
usersByDay.length // Длина массива
usersByDay[usersByDay.length - 1] // последний элемент массива - 1247

// ==================================== //
// ============ Functions ============= //
// ==================================== //

// Когда функция содержится внутри объекта, она называется методом данного объекта
// Function Declaration - можно вызвать до иницилизации функции
// Function Expression - from let преймущество в том что мы знаем что она будет вызвана только ниже.

// Замыкание — функция, которая помнит о своём окружении. 
// То есть это функция + все значения переменных вне локальной области видимости этой функции. 
// Речь идёт только о переменных, которые функция использует в своём коде.

// Функции, которые что-то возвращают, называются геттерами и начинаются со слова get.

// Изнутри методов можно обращаться к свойствам и другим методам объекта с помощью ключевого слова this. 
// Оно указывает на текущий объект и называется контекстом вызова.
// Важная деталь: пока функция не вызвана, this не содержит никакого значения, 
// контекст появляется только в момент вызова функции.

// Стрелочная функция не имеет своего контекста
let arrow = () => {
  code
}

arr.sort(function (a, b) {
  // return a - b; == examples below
  if (a == b) return 0
  if (a > b) return 1
  if (a < b) return -1
})

arr.sort((a, b) => a - b)

// Function Declaration
function compareNum(a, b) {
  return a - b
}
arr.sort(compareNum)

// Function Expression
let log = function () {
  console.log("Function Expression")
}

// Самовызывающаяся функция IIFE
;(function seyHi() {
  console.log("Самовызывающаяся функция")
})()

// ==================================== //
// ======== Геттеры и сеттеры ========= //
// ==================================== //
const person = {
  name: "Alex",
  age: 25,

  get userAge() {
    return this.age
  },

  set userAge(num) {
    this.age = num
  },
}
console.log((persone.userAge = 30))
console.log(persone.userAge)

// ==================================== //
// ============== Class =============== //
// ==================================== //
class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  calcArea() {
    return this.height * this.width
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width)
    this.text = text
    this.bgColor = bgColor
  }

  showMyProps() {
    console.log(\`Текст: \${this.text}, цвет: \${this.bgColor}\`)
  }
}

const divdiv = new ColoredRectangleWithText(25, 10, "Hello world", "red")
divdiv.showMyProps()
console.log(divdiv.calcArea())

const square = new Rectangle(10, 10)
const squareLong = new Rectangle(20, 100)
console.log(square.calcArea())
console.log(squareLong.calcArea())

// ==================================== //
// ========== Event handlers ========== //
// ==================================== //

// https://oddler.ru/blog/i63
// https://developer.mozilla.org/ru/docs/Web/Events

onclick // Обработчик события клик
onsubmit // Обработчик на форму
oninput // Обработчик на input
onscroll // Обработчик на скрол
onchange // При изменении

Element.onclick = () => {
  console.log("Click")
}

window.onscroll = function () {
  console.log("Scroll")
}

// addEventListener
click // клик левой кнопкой
contextmenu // клик правой кнопкой мыши
mousover // когда мышь наводится на элемент
mousout //  когда мышь покидает элемент

submit
focus
input
change // когда уводим мышку с инпута
readystatechange // отслеживает статус готовности нашего запроса на данный момент
load //

keydown // когда нажимает клавишу

DOMContentLoaded // когда HTML загружен и обработан, DOM документа полностью построен и доступен.

touchstart // аналог клика для мобайла
touchmove // движение пальцем
touchend // отпускаем палец

// KeyboardEvent.keyCode
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    // Проверяем, что код клавиши равен 27
    // Код отсюда выполнится только при нажатии ESC
  }
})

// Асинхронный код
Element.addEventListener("click", (e) => {
  e.preventDefault()
  e.target // элемент по которому кликнули, если следили за списком
  e.target.remove()
  e.currentTarget
  Element.style.color = "red"
})

Element.addEventListener("click", myFunction)
Element.removeEventListener("click", myFunction)

document.addEventListener("DOMContentLoaded", () => {
  code
})

// ==================================== //
// ============ Event loop ============ //
// ==================================== //
// http://latentflip.com/loupe/

// Асинхронный код
setTimeout(() => {
  //clearTimeout()
  console.log("After timeout")
}, 2500)

setInterval(() => {
  console.log("Interval")
}, 1000)

const timerId = setTimeout(logger, 2000)
function logger() {
  console.log("text")
}

// ================================= //
// ========== Promise ============== //
// ================================= //
console.log("Запрос данных...")
const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Подготовка данных...")

    const product = {
      name: "TV",
      price: 2000,
    }

    resolve(product)
  }, 2000)
})

req
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "order"
        resolve(product)
      }, 2000)
    })
  })
  .then((data) => {
    data.modify = true
    return data
  })
  .then((data) => {
    console.log(data)
  })
  .catch(() => {
    console.error("Произошла ошибка...")
  })
  .finally(() => {
    console.error("Finally")
  })

// version 2
const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time)
  })
}

test(1000).then(() => console.log("1000 ms"))
test(2000).then(() => console.log("2000 ms"))

Promise.all([test(1000), test(2000)])
Promise.race([test(1000), test(2000)])

// ================================= //
// =========== Errors ============== //
// ================================= //
try {
  console.log("Normal")
  console.log(a) // <= error this
  console.log("result")
} catch (error) {
  console.log(error)
} finally {
  console.log("Final")
}
console.log("Still normal")

// ================================= //
// ========= Animations ============ //
// ================================= //
function myAnimation() {
  pos++
  elem.style.top = pos + "px"
  elem.style.left = pos + "px"

  if (pox < 300) {
    requestAnimationFrame(myAnimation)
  }
}
btn.addEventListener("click", () => requestAnimationFrame(myAnimation))

let id = requestAnimationFrame(myAnimation)
cancelAnimationFrame(id)
  `,
  tabReactExample: `
// <Fragment>html</Fragment> || <>html</>
  `,
}
