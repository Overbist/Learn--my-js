'use strict';

let response = [
    {
        "index": 0,
        "isActive": true,
        "age": 20,
        "name": "Morton 20"
    },
    {
        "index": 1,
        "isActive": true,
        "age": 21,
        "name": "Morton 21"
    },
];

let arr = [1, 2, 3, "str", true, 5, 10, 7, 4];

let obj = {
    name: "Igor",
    surname: "Klimchuk",
    age: 29,
    admin: true,
    "Name space": "Open",
    array: arr,
    array2: ['ru', 'en', 'ua'],
    hello() {
        return this.name;
    },
};


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let answerLastFilm = prompt('Один из последних просмотренных фильмов', '');
            let answerLastFilmRating = prompt('На сколько оцените его?', '');
        
            if (answerLastFilm != null && answerLastFilmRating != null && answerLastFilm != '' && answerLastFilmRating != '' && answerLastFilm.length < 50) {
                personalMovieDB.movies[answerLastFilm] = answerLastFilmRating;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы класический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB() {
        if(this.privat === false) {
            this.privat = true;
        } else if(this.privat === true) {
            this.privat = false;
        }
    },
    writeYouGenres() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre != "" || genre != null) {
                personalMovieDB.genres[i-1] = genre;
            } else {
                i--;
            }
        }
        this.genres.forEach(function(item, i) {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    
};



let exampleCodeOne = function() {

    /*
        Number
        String
        Boolean
        Object
        Null
        Undefined
     */ 

    // область видимости
    // Рекурсия - это когда функция вызывает сама себя внутри
    // <script defer src="main.js"></script> // defer -для загрузки скрипта в фоновом режиме
    // <script async src="main.js"></script> // async -для загрузки скрипта в фоновом режиме. Но ниждет никого


    // Интерполяция `текст ${let}`
    // Динамическая типизация
    // To string
    String(7); // '7'
    4 + '7'; // '47'

    // To Number
    Number('7'); // 7
    +'5'; // 5 [унарный плюс]

    // To boolean
    0, '', null, undefined, NaN; // false
    Boolean('4'); // true
    !!'444';
    
    // Приоритет операторов
    let urlTablePriority = `
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table`;


    // Methods
    document.querySelector('.header'); // поиска селектора. Возращяет первый найденный
    document.querySelectorAll('.header'); // поиска селектора // forEach(item => item.style.color = 'red')
    document.createElement('имя тега');
    Element.innerHTML = 'html or text'; // вставляем html плюс текст
    Element.insertAdjacentHTML('position', '<h2>Hello</h2>'); // вставляем код
    Element.classList.remove('class'); // удаляем класс
    Element.classList.add('class'); // добавляем класс
    Element.classList.toggle('class'); // чередуем классы
    Element.classList.contains('class'); // проверяем, есть ли у элемента класс
    Element.insertBefore(div, lement[2]); // добавляет элемент в
    Element.appendChild(); // добавляет элемент в конец элемента.
    Element.append(добавляемый-элемент); // добавляет элемент в конец элемента-родителя.
    Element.prepend(добавляемый-элемент); // добавляет элемент в начало элемента-родителя.
    Element.remove(); // удаляем елемент
    Element.replaceWith(element); // заменяем елемент
    Element.closest(); // возвращает ближайший родительский элемент (или сам элемент)
    Element.parentNode; // получаем родителя
    Element.parentElement; // получаем родителя
    Element.firstChild;
    Element.firstElementChild;
    Element.lastChild;
    Element.nextElementSibling; // 
    Element.style.color = '#000'; // добавляем стили
    Element.style.cssText = 'width: 500px; height: 100px;'; // добавляем стили
    


    // Numbers
    // В JavaScript встроен объект Math, который содержит различные математические функции и константы.
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
    const num = 1;
    num.toString(); // возвращает строковое представление числа
    toFixed(n); // округляет число до n знаков после запятой
    Math.floor(x); // Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
    Math.ceil(); // Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
    Math.round(); // Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
    Math.trunc(); // Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.
    Math.random(); // Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
    Math.max(3, 5, -10, 0, 1); // 5 - Возвращает наибольшее число из перечисленных аргументов.
    Math.min(1, 2); // 1, Возвращает наименьшее число из перечисленных аргументов.
    Math.pow(2, 10); // 2 в степени 10 = 1024, Возвращает число n, возведённое в степень
    isNaN(value); // преобразует значение в число и проверяет является ли оно NaN
    isFinite(value); // преобразует аргумент в число и возвращает true,
                                // если оно является обычным числом, т.е. не NaN/Infinity/-Infinity
    // ---
    let pow = 10e3; // 10000. десять возводим в третью степень
    Number.MAX_SAFE_INTEGER; // 9007199254740991
    Number.MIN_SAFE_INTEGER; // -9007199254740991
    Math.pow(2, 53) - 1;
    Number.MAX_VALUE;
    Number.MIN_VALUE;
    incr++; // Инкремент
    decr--; // Декремент

    
    // string
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
    const str = "";
    str.length; // длина строки
    str.toLowerCase(); // возвращает строку в нижнем регистре
    str.toUpperCase(); // возвращает строку в верхнем регистре
    parseInt('100px'); // 100, возвращает целое число
    parseFloat('12.5em'); // 12.5, возвращает число с плавающей точкой
    str.normalize(); // юникодной нормализации
    str.charAt(0); // получаем символ с позиции 0
    str.indexOf('abc'); // проверяем если подстрока abc в строке, else -1
    str.startWith('abc'); // проверяем начинается ли строка на abc
    str.endsWith('abc'); // проверяем заканчивается ли строка на abc
    str.repeat(3); //повторяем строку
    str.trim(); // очищяем пробелы
    str.trimLeft(); // очищяем пробелы
    str.trimRight(); // очищяем пробелы
    str.slice(2, 5); // вырезаем строку
    str.slice(2); // вырезаем строку до конца
    str.slice(-5, -1); // вырезаем строку с конца
    str.substring(2, 5); // вырезаем строку, но без отрецательных значений
    str.substr(2, 5); // вырезаем строку, второе значение сколько вырезать

    str[2]; // r


    // Объекты для хранения именованных коллекций.
    // Массивы для хранения упорядоченных коллекций.
    // Map – это коллекция ключ/значение, как и Object. 
    // Но основное отличие в том, что Map позволяет использовать ключи любого типа.

    // Array - упорядоченные коллекций
    // Структура Очередь - Имитируем очередь.
    // Структура Стек - добавляем в конец и забираем с конца.
    // Методы push/pop выполняются быстро, а методы shift/unshift – медленно.
    arr.push(); // добавляет элементы в конец
    arr.pop(); // извлекает элемент из конца
    arr.shift(); // извлекает элемент из начала и возращяет его
    arr.unshift(); // добавляет элементы в начало

    arr.splice(str, 2, 2); // Умеет всё: добавлять, удалять и заменять элементы.
    arr.slice(3, 7); // возвращает массив, в который элементы, начиная с индекса start и до end (не включая end)

    arr.concat(arr2); // Склеиваем два массива
    arr.indexOf(item, from); // Узнаем индекс элемента в массиве
    arr.lastIndexOf(item, from); // то же самое, но ищет справа налево.
    arr.includes(item, from); // ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
    arr.reverse(); // массив с элементами в обратном порядке
    arr.join("delim"); // Объединить элементы массива в строку
    str.split("delim"); // разбивает строку на массив по заданному разделителю delim

    arr.map(); // 
    arr.sort(); // Сортирует как строки

    arr.find(); //
    arr.findIndex(); // 
    arr.filter(); // 

    arr.reduce(); //
    arr.reduceRight(); // 


    new Map(); // – создаёт коллекцию.
    map.set(key, value); // – записывает по ключу key значение value.
    map.get(key); // – возвращает значение по ключу или undefined, если ключ key отсутствует.
    map.has(key); // – возвращает true, если ключ key присутствует в коллекции, иначе false.
    map.delete(key); // – удаляет элемент по ключу key.
    map.clear(); // – очищает коллекцию от всех элементов.
    map.size; // – возвращает текущее количество элементов.


    arr.forEach(); // позволяет запускать функцию для каждого элемента массива
    arr.forEach(alert); // выведет на экран каждый элемент массива

    // В отличие от str.split, этот метод в работе опирается на итерируемость строки, и поэтому, 
    // как и for..of, он корректно работает с суррогатными парами.
    Array.from(arr); // принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array
    Array.isArray(value); // проверка массив ли это

    arr.length = 0; // самый простой способ очистить массив
    arr[0];
    delete arr[0]; // удаляет первый элемент

    obj.name;
    obj['name'];
    delete obj.name; // Удаляем свойства из объекта 
    const jonh = Object.create(soldier); // задает прототип

    Object.assign(obj, newObj);
    Object.keys(obj); // Получаем масив со всеми ключами объекта 
    Object.keys(obj).length; // Получаем количество елементов в объекте
    Object.is(NaN, NaN) === true; // специальный метод Object.is, который сравнивает значения примерно как ===
    Object.setPrototypeOf(childObj, mainObj); // устанавливаем прототип доч. объекту


    /* === Dates === */
    const now = new Date();
    now.getFullYear(); // Получаем год
    now.getMonth(); // Получаем месяц
    now.getDate(); // Получаем день
    now.getDay(); // Получаем день день недели. Начиная с воскресенья
    now.getHours(); // Получаем день часы
    now.getUTCHours(); // Получаем день часы по UTC
    now.getTimezoneOffset(); // разница между часовым поясом и UTC
    now.getTime(); // Возращяет таймШтамп. Секунд с 1970года.

    now.setHours(18); // устанавливаем часы


    // Property
    str.length; // Свойство содержит длину строки
    arr.length; // Свойство содержит длину массива
    textContent; // Получаем текстовое содержимое
    input.value; // Получаем данные из поля ввода
    checkbox.checked; // отмечен ли чекбокс

    symbol.description; // вывести описание символа


    // Event handlers
    // https://oddler.ru/blog/i63
    // https://developer.mozilla.org/ru/docs/Web/Events

    onclick; // Обработчик события клик
    onsubmit; // Обработчик на форму

    touchstart; // аналог клика для мобайла
    touchmove; // движение пальцем
    touchend; // отпускаем палец


    Element.onclick = () => {
        console.log('Click');
    };
    
    Element.addEventListener( 'click', (e) => {
        e.preventDefault();
        //e.target.remove();
        //e.currentTarget;
        Element.style.color = 'red';
    });

    Element.addEventListener('click', myFunction);
    Element.removeEventListener('click', myFunction);

    document.addEventListener('DOMContentLoaded', () => {

    });

};



let exampleCodeTwo = function() {

    allert(`hello ${name}`);
    prompt('Вам есть 18 лет?', '18');
    confirm("Удалить аккаунт?") ? 
        console.log( "Ваш аккаунт удалили!" ) : 
        console.log( "Вы нажали отмену" ); // тернарное выражение


    // ================================= //
    // ========== conditions =========== //
    // ================================= //
    if( 4 == 4) {
        code;
    } else if ( 4 < 10) {
        code;
    } else {
        code;
    }

    switch (num) {
        case 10:
            console.log('neverno');
            break;
        case 100:
            console.log('neverno');
            break;
        default:
            console.log('vse nevero');
            break;
    }


    // ==================================== //
    // =========== functions ============== //
    // ==================================== //

    // Когда функция содержится внутри объекта, она называется методом данного объекта
    // Function Declaration
    // Function Expression - from let

    let log = function() { // Function Expression
        console.log('Function Expression');
    };

    let arrow = () => { // Стрелочная функция
        code;
    };

    arr.sort(function(a,b) {
        // return a - b; == examples below
        if (a == b) return 0;
        if (a > b) return 1;
        if (a < b) return -1;
    });
    
    arr.sort((a,b) => a - b);


    function compareNum(a, b) {
        return a - b;
    }
    arr.sort(compareNum);
    

    // ================================= //
    // =========== cycles ============== //
    // ================================= //
    while (count < 10) {
        console.log(count);
        count++;
    }

    do {
        console.log(count);
        count++;
    } while (count < 14);

    for (let i = 0; i < 10; i++) {
        if ( i === 7) {
            break;
            //continue; // оператор позволяет пропустить шаг и продолжить цикл
        }

        console.log( i );
    }


    // for array
    for (let i = 0; i < arr.length; i++) {
        console.log( arr[i]*10 );
    }
    
    for (let item of arr) { // for array. (for of)
        console.log( item*10 );
    }

    for (let key in obj) { // for obj. (for in)
        console.log( `Свойство ${key} имеет значение ${obj[key]}` );
    }

    arr.forEach(function(item, i, array) { // arr = [1];
        console.log( item + " Индекс " + i ); // 1 Индекс 0
    });

    let newArr = arr.map(function(item) {
        return item * 10;
    });


    // Next category
    setTimeout( () => {
        //clearTimeout()
        console.log('After timeout');
    }, 2500);

    setInterval( () => {
        console.log('Interval');
    }, 1000);

    const timerId = setTimeout(logger, 2000);
    function logger() {
        console.log('text');
    }

};

    

let exampleCodeTasks = function() {

    // ========= Tasks ============= //

    // 5 ! = 1 * 2 * 3 * 4 * 5 = 120.
    function factorial(n) {
        let fact = 1;
        if (n == 0) fact = 1;
        for(let i=1; i<=n; i++) {
            fact = fact * i;
        }
        return fact;
    }


    let addAndMul = function(num) {
        num += "";
        let add = 0;
        let mul = 1;
        for (let i = 0; i<num.length; i++) {
            add += +num[i];
            mul *= num[i];
        }
        return {
            "Сумма": add,
            "Произведение": mul
        };
    };
    

    function revers(number) {
        number += "";
        let reversNumber = "";
        for (let i=number.length-1; i>=0; i--) {
            reversNumber += number[i];
        }
        return +reversNumber;
    }
    

    function number(number) {
        number += "";
        let chet = 0 , nechet = 0;
        for(let i=0; i<number.length; i++) {
            if(number[i] % 2 == 0) chet++;
            else nechet++;
        }
    
        return {
            "chet numbers": chet,
            "nechet": nechet,
        };
    }


    function randomNumber() {
        let number = Math.floor( Math.random()*100 );
    
        for(let count = 1; count<=10; count++) {
            let result = prompt(`Попытка №${count}, Введите число:`);
    
            if(result == number) {
                return alert(`Вы угадали число! Попыток ${count}, Число ${number}.`);
            } else if (result < number) {
                alert(`Ваше число ${result}, меньше загаданного!`);
            } else if (result > number) {
                alert(`Ваше число ${result}, больше загаданного!`);
            }
        }
    
        return alert(`Вы не угадали число! Число: ${number}`);
    }


    /**
     * Функция преобразует строку с временем в минуты
     * @param {string} time время в виде строки, например "02:08". Может быть в диапазоне от "00:00" до "23:59".
     * @return {number} целое число в минутах. Например time="02:08" вернет 128.
     */
    function timeToMinute(time) {
        let hour = +time.split(":")[0];
        let minute = +time.split(":")[1];

        return hour*60+minute;
    }


    // ===================
    // === Udemy Tasks ===
    // ===================


};


function importCode(className, importedCode) {
    let codeSelector = document.querySelector(className);
    codeSelector.textContent = importedCode;
}

importCode(".js-code-import-1", exampleCodeOne);
importCode(".js-code-import-2", exampleCodeTwo);
importCode(".js-code-import-3", exampleCodeTasks);




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
