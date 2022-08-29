import {
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react"

;("use strict")

let response = [
  {
    index: 0,
    isActive: true,
    age: 20,
    name: "Morton 20",
  },
  {
    index: 1,
    isActive: true,
    age: 21,
    name: "Morton 21",
  },
]

let arr = [1, 2, 3, "str", true, 5, 10, 7, 4]

let obj = {
  name: "Igor",
  surname: "Klimchuk",
  age: 29,
  admin: true,
  "Name space": "Open",
  array: arr,
  array2: ["ru", "en", "ua"],
  hello() {
    return this.name
  },
}

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "")

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "")
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      let answerLastFilm = prompt("Один из последних просмотренных фильмов", "")
      let answerLastFilmRating = prompt("На сколько оцените его?", "")

      if (
        answerLastFilm != null &&
        answerLastFilmRating != null &&
        answerLastFilm != "" &&
        answerLastFilmRating != "" &&
        answerLastFilm.length < 50
      ) {
        personalMovieDB.movies[answerLastFilm] = answerLastFilmRating
      } else {
        i--
      }
    }
  },
  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы класический зритель")
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман")
    } else {
      console.log("Произошла ошибка")
    }
  },
  showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB)
    }
  },
  toggleVisibleMyDB() {
    if (this.privat === false) {
      this.privat = true
    } else if (this.privat === true) {
      this.privat = false
    }
  },
  writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`)

      if (genre != "" || genre != null) {
        personalMovieDB.genres[i - 1] = genre
      } else {
        i--
      }
    }
    this.genres.forEach(function (item, i) {
      console.log(`Любимый жанр ${i + 1} - это ${item}`)
    })
  },
}

/* === Базовые знания === */
export const tabBasicInfo = function () {
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

  // Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

  // область видимости
  // Рекурсия - это когда функция вызывает сама себя внутри
  // <script defer src="main.js"></script> // defer -для загрузки скрипта в фоновом режиме
  // <script async src="main.js"></script> // async -для загрузки скрипта в фоновом режиме. Но не ждет никого

  // Интерполяция `текст ${let}`
  // Динамическая типизация
  // To string
  String(7) // '7'
  4 + "7" // '47'

  // To Number
  Number("7") // 7
  ;+"5" // 5 [унарный плюс]

  // To boolean
  0, "", null, undefined, NaN // false
  Boolean("4") // true
  !!"444"

  // Приоритет операторов
  let urlTablePriority = `
        https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table`

  // Variebles
  var variebleName // Функциональная область видимости
  let letName // блочная область видимости

  allert(`hello ${name}`)
  prompt("Вам есть 18 лет?", "18")
  confirm("Удалить аккаунт?")
    ? console.log("Ваш аккаунт удалили!")
    : console.log("Вы нажали отмену") // тернарное выражение
}

/* ========= Methods ========= */
export const tabMethods = function () {
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
  const str = ""
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

  str[2] // r

  // Объекты для хранения именованных коллекций.
  // Массивы для хранения упорядоченных коллекций.
  // Map – это коллекция ключ/значение, как и Object.
  // Но основное отличие в том, что Map позволяет использовать ключи любого типа.

  // Array - упорядоченные коллекций
  // Структура Очередь - Имитируем очередь.
  // Структура Стек - добавляем в конец и забираем с конца.
  // Методы push/pop выполняются быстро, а методы shift/unshift – медленно.
  arr.push(...items) // добавляет элементы в конец - изменяет оригинальный массив
  arr.pop() // извлекает элемент из конца
  arr.shift() // извлекает элемент из начала и возвращает его
  arr.unshift(...items) // добавляет элементы в начало

  arr.splice(pos, deleteCount, ...items) // Умеет всё: добавлять, удалять и заменять элементы.
  arr.slice(3, 7) // возвращает новый массив, в который элементы, начиная с индекса start и до end (не включая end)
  arr.slice() // без аргументов slice можно применять для копирования массива

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

  arr.reduce((sum, current) => sum + current) // собирать масив в одно единое целое. Метод перебора возвращает новый масив.
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

  // Запись объекта со всеми свойствами в фигурных скобках, называется литералом объекта. Если необходимо создать объект с помощью литерала, вам просто нужно использовать фигурные скобки. И если у объекта есть какие-то свойства, записать их внутри этих скобок.
  // Как вы уже знаете, при обращении массив[индекс] мы получаем элемент массива. В нашем случае это объект игрока, из которого можно читать, как из любого другого объекта через точку. Поэтому запись в теле нашего цикла массив[индекс].ключ то же самое, что запись объект.ключ при работе с объектом напрямую.
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
  Object.values(obj) // Возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.

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
}

// Property
let tabProperty = function () {
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
}

/*
 * Conditions
 * Cycles
 * Arrays
 * Functions
 * Геттеры и сеттеры
 * Class
 * Event handlers
 * Event loop
 * Promise
 * Errors
 * Animations
 */
let tabFundamental = function () {
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
    console.log(`Свойство ${key} имеет значение ${obj[key]}`)
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

  // Замыкание — функция, которая помнит о своём окружении. То есть это функция + все значения переменных вне локальной области видимости этой функции. Речь идёт только о переменных, которые функция использует в своём коде.

  // Функции, которые что-то возвращают, называются геттерами и начинаются со слова get.

  // Изнутри методов можно обращаться к свойствам и другим методам объекта с помощью ключевого слова this. Оно указывает на текущий объект и называется контекстом вызова.
  // Важная деталь: пока функция не вызвана, this не содержит никакого значения, контекст появляется только в момент вызова функции.

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
  let log = (function () {
    console.log("Function Expression")
  })(
    // Самовызывающаяся функция IIFE
    function seyHi() {
      console.log("Самовызывающаяся функция")
    }
  )()

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
      console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
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
}

let tabReactExample = function () {
  // <Fragment>html</Fragment> || <>html</>
}

let tabExampleTasks = function () {
  // ========= Tasks ============= //

  // 5 ! = 1 * 2 * 3 * 4 * 5 = 120.
  function factorial(n) {
    let fact = 1
    if (n == 0) fact = 1
    for (let i = 1; i <= n; i++) {
      fact = fact * i
    }
    return fact
  }

  let addAndMul = function (num) {
    num += ""
    let add = 0
    let mul = 1
    for (let i = 0; i < num.length; i++) {
      add += +num[i]
      mul *= num[i]
    }
    return {
      Сумма: add,
      Произведение: mul,
    }
  }

  function reversNumber(number) {
    number += ""
    let reversNumber = ""
    for (let i = number.length - 1; i >= 0; i--) {
      reversNumber += number[i]
    }
    return +reversNumber
  }

  function number(number) {
    number += ""
    let chet = 0,
      nechet = 0
    for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 == 0) chet++
      else nechet++
    }

    return {
      "chet numbers": chet,
      nechet: nechet,
    }
  }

  function randomNumber() {
    let number = Math.floor(Math.random() * 100)

    for (let count = 1; count <= 10; count++) {
      let result = prompt(`Попытка №${count}, Введите число:`)

      if (result == number) {
        return alert(`Вы угадали число! Попыток ${count}, Число ${number}.`)
      } else if (result < number) {
        alert(`Ваше число ${result}, меньше загаданного!`)
      } else if (result > number) {
        alert(`Ваше число ${result}, больше загаданного!`)
      }
    }

    return alert(`Вы не угадали число! Число: ${number}`)
  }

  /**
   * Функция преобразует строку с временем в минуты
   * @param {string} time время в виде строки, например "02:08". Может быть в диапазоне от "00:00" до "23:59".
   * @return {number} целое число в минутах. Например time="02:08" вернет 128.
   */
  function timeToMinute(time) {
    let hour = +time.split(":")[0]
    let minute = +time.split(":")[1]

    return hour * 60 + minute
  }

  // ===================
  // === Udemy Tasks ===
  // ===================

  // Калькулятор
  const inputRub = document.querySelector("#rub"),
    inputUsd = document.querySelector("#usd")

  inputRub.addEventListener("input", () => {
    const request = new XMLHttpRequest()

    request.open("GET", "js/current.json")
    request.setRequestHeader("Content-type", "application/json; charset=utf-8")
    request.send()

    request.addEventListener("load", () => {
      if (request.status === 200) {
        const data = JSON.parse(request.response)
        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2)
      } else {
        inputUsd.value = "Что-то пошло не так"
      }
    })
  })
  // fetch()

  // ==========================
  // === HTML academy Tasks ===
  // ==========================

  // Счётчик символов под формой
  // https://up.htmlacademy.ru/newyear/2022/module/4/item/6/11
  let commentForm = document.querySelector(".comment-form")
  let commentList = document.querySelector(".comment-list")
  let commentField = document.querySelector(".comment-field")
  let charCounter = document.querySelector(".char-counter")
  let submitButton = document.querySelector(".submit-button")

  commentForm.onsubmit = function (evt) {
    evt.preventDefault()

    let newComment = document.createElement("li")
    newComment.classList.add("user-comment")
    newComment.textContent = commentField.value
    commentField.value = ""
    commentList.append(newComment)
    charCounter.textContent = 0
  }

  commentField.oninput = function () {
    charCounter.textContent = commentField.value.length

    if (commentField.value.length > 142) {
      commentForm.classList.add("warning")
      submitButton.disabled = true // блокируем кнопку
    } else {
      commentForm.classList.remove("warning")
      submitButton.disabled = false
    }
  }

  // Виртуальная клавиатура
  // https://up.htmlacademy.ru/newyear/2022/module/4/item/6/17
  let keys = document.querySelectorAll(".key")
  let display = document.querySelector(".display")
  let clear = document.querySelector(".clear")

  for (let key of keys) {
    key.onclick = function () {
      let keyText = key.textContent
      display.append(keyText)
    }
  }

  clear.onclick = function () {
    display.textContent = ""
  }

  // Сортировка массива
  // Массив с числами numbers сортируется по возрастанию элементов. На каждой итерации мы сравниваем minValue с остальными элементами массива. Если какой-то из них окажется меньше, чем minValue, он запишется в minValue, перезаписав старое значение, и переместится в начало массива. Переменная swap — вспомогательная переменная, с помощью которой мы можем поменять элементы местами.
  let numbers = [12, 3, 7, 9, 10, 5]
  for (let i = 0; i <= numbers.length - 2; i++) {
    let minValue = numbers[i]

    for (let j = i + 1; j <= numbers.length - 1; j++) {
      if (numbers[j] < minValue) {
        minValue = numbers[j]
        let swap = numbers[i]
        numbers[i] = minValue
        numbers[j] = swap
      }
    }
  }
  console.log(numbers) // Выведет: [3, 5, 7, 9, 10, 12];

  // Поиск медианы массива
  let median
  if (usersByDay.length % 2 !== 0) {
    let medianIndex = (usersByDay.length - 1) / 2
    median = usersByDay[medianIndex]
  } else {
    let leftIndex = usersByDay.length / 2 - 1
    let rightIndex = usersByDay.length / 2
    median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2
  }
  console.log(median)
}

// function importCodeInPage(selectorName, importedCode) {
//   let codeSelector = document.querySelector(selectorName)
//   codeSelector.textContent = importedCode
// }

// importCodeInPage("#js-code-import-1", tabBasicInfo)
// importCodeInPage("#js-code-import-2", tabMethods)
// importCodeInPage("#js-code-import-3", tabPropertys)
// importCodeInPage("#js-code-import-4", tabFundamental)
// importCodeInPage("#js-code-import-5", tabReactExample)
// importCodeInPage("#js-code-import-6", tabExampleTasks)

// https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
// Ctrl + ~ - открыть терминал
// Ctrl+K Ctrl+0 - свернуть весь код
// Shift + Alt + 🠗 = скопировать строку
// Hold Alt + left mous click = ставим указатель в несколько мест
// Alt+ ↑ / ↓  = Move line up/down

// this
// 1) Обычная функция: this = window, но если use strict - undefined
// 2) контекст у методов  объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

// Какое будет выведено значение: let x = 5; alert( x++ ); ?
// Чему равно такое выражение: [ ] + false - null + true ?
// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// Чему равна сумма [ ] + 1 + 2?
// Что выведет этот код: alert( "1"[0] )?
// Чему равно 2 && 1 && null && 0 && undefined ?
// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// Что выведет этот код: alert( +"Infinity" ); ?
// Верно ли сравнение: "Ёжик" & "яблоко"?
// Чему равно 0 || "" || 2 || undefined || true || falsе

// https://tproger.ru/articles/7-npx-komand-kotorye-pomogajut-pri-razrabotke/
// npx gitignore node // https://github.com/msfeldstein/gitignore
// npx kill-port 9000 // https://github.com/tiaanduplessis/kill-port
// npx sort-package-json // https://github.com/keithamus/sort-package-json
// npx npm-check-updates --target minor -u // https://github.com/raineorshine/npm-check-updates

// npx create-react-app my-app // https://github.com/facebook/create-react-app
// npx create-react-app ./ // https://github.com/facebook/create-react-app
// npx create-react-app NAME --scripts-version 4.0.3 --template typescript

// Yarn
// yarn add <packageName> // Add a regular package
// yarn add typescript@3.7.2 //Add a specific version for a package
// yarn remove <packageName>
// yarn add lodash-es@lodash/lodash#es // Add a package from a specific branch of a GitHub repository

// REACT
// На прямую состояния менять не можем. Для этого используем setState()
// Метод setState всегда запускает метод render()

// Other commands
// rm -r node_modules

// TODO: создать страницу глосарий и фак с ответами
// Стрелочные функции
// Callback функции
// Async, defer
// setTimeout setInterval
// Рекурсия
// Что такое замыкание функции?
// Классы и Функции конструкторы (base).
// Object Spread-оператор
// Деструкторизация
// Контекст вызова this
// AJAX
// Promise
// Fetch API
// Async/Await
// localStorage
// Геттеры и сеттеры
// Инкапсуляция
// Интерполяция
// Event loop

// REST API — архитектурный стиль взаимодействия компонентов распределённого приложения в сети. Другими словами, REST — это набор правил того, как программисту организовать написание кода серверного приложения, чтобы все системы легко обменивались данными и приложение можно было масштабировать.

// WebSocket — протокол связи поверх TCP-соединения, предназначенный для обмена сообщениями между браузером и веб-сервером в режиме реального времени.
