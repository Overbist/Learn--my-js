const dataGlossary = [];

const dataFaq = [
  {
    category: "js",
    question: `Что такое замыкание функции?`,
    answer: `Замыкание - это функция, содержащая в себе ссылки на переменные из внешней области видимости. Т.е. она "замыкает" внешние переменные в себе.`,
  },
  {
    category: "browser-js",
    question: `Разница между HTMLCollection и NodeList?`,
    answer: `
    HTMLCollection это динамическая HTML-коллекция которая представляет собой массивоподобный итерируемый объект дочерних элементов. 
    NodeList это статический список нод(NodeList) или узлов, в который входят все найденные в документе элементы. 

    Примеры методов которые возвращают коллекцию и список это: 
    getElementВyClassName() он возвращает HTMLCollection и 
    querySelectorAll() возвращает NodeList 
    отличие между методами в том, что если в разметку динамически будет добавлен ещё один элемент то обновленные данные будут присутствовать только в HTMLCollection так как HTMLCollection это динамическая структура данных. А NodeList статическая, поэтому HDMICollection может изменяться каждый раз после обновления HTML разметки а NodeList не меняется после формирования, даже если изменился HTML код страницы.
    `,
    example: `
      <ul class="list">
        <li class="list__item">First Item</li>
        <li class="list__item">Second Item</li>
      </ul>
      <script>
        document.getElementsByClassName('list__item'); // HTMLCollection(2)
        document.querySelectorAll('list__item');       // NodeList(2)
      </script>

      <!-- Dynamically added one li-element -->
      <ul class="list">
        <li class="list__item">First Item</li>
        <li class="list__item">Second Item</li>
        <li class="list__item">Third Item</li>
      </ul>
      <script>
        document.getElementsByClassName('list__item'); // HTMLCollection(3)
        document.querySelectorAll('list__item');       // NodeList(2)
      </script>
    `,
  },
  {
    category: "browser-js",
    question: `Разница между event.target и event.currentTarget?`,
    answer: `
      event.target – самый глубокий элемент, на котором произошло событие.
      event.currentTarget (=this) – элемент, на котором в данный момент сработал обработчик (до которого «доплыло» событие).
    `,
    linkCode: `https://codepen.io/Ihor-K/pen/ZExKmqJ`,
  },
  {
    category: "browser-js",
    question: `Разница между e.preventDefault() и e.stopPropagation()?`,
    answer: `
      preventDefault запрещает стандартное поведение элемента. Например, клик на кнопку сабмита производит отправку формы, preventDeafult это прекратит. 
      stopPropagation запрещает передачу события от ребенка к родителю, то есть, если мы кликнули по вложенному диву, его родитель "не почувствует" этого нажатия.

      Идеи примеров использования: 
      stopPropagation - например, кнопки поверх картинки. Если кликаем по картинке, включается следующая, если по кнопкам - какое-то другое действие, скажем, лупа.
    `,
  },
  {
    category: "async-js",
    question: `Разница между синхронными и асинхронными функциями?`,
    answer: `
      Синхронные функции являются блокирующими, в то время как асинхронные нет.
    `,
  },
  {
    category: "async-js",
    question: `Подходы при работе с асинхронным кодом?`,
    answer: `
      Callback, Promice, Async/Awaite
    `,
    linkYoutube: `https://www.youtube.com/watch?v=yvOXvZ8aEFo&t=410s`,
  },
  {
    category: "async-js",
    question: `Преимущества использовании промисов вместо колбэков?`,
    answer: `
      1. Помогает избежать Callback Hell который может быть нечитаемым. 
      2. Упрощает написание последовательного читаемого асинхронного кода с помощью .then(), а также обработку ошибок с помощью .catch()
      3. Упрощает написание параллельного асинхронного кода с помощью promise.all 
      4. С использованием промисов, можно избежать следующих проблем, которые возникают при использовании Callback функции. Callback функция была вызвана слишком рано или поздно, либо слишком мало или много раз. Пропуск ошибок или исключений, не удалось передать необходимую среду или параметр.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=yvOXvZ8aEFo&t=481s`,
  },
  {
    category: "async-js",
    question: `Что такое коллбэк-функция (Callback)? Что такое Callback Hell?`,
    answer: `
      1. Помогает избежать Callback Hell который может быть нечитаемым. 
      2. Упрощает написание последовательного читаемого асинхронного кода с помощью .then(), а также обработку ошибок с помощью .catch()
      3. Упрощает написание параллельного асинхронного кода с помощью promise.all 
      4. С использованием промисов, можно избежать следующих проблем, которые возникают при использовании Callback функции. Callback функция была вызвана слишком рано или поздно, либо слишком мало или много раз. Пропуск ошибок или исключений, не удалось передать необходимую среду или параметр.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=yvOXvZ8aEFo&t=481s`,
  },
  {
    category: "async-js",
    question: `Что такое промисы (Promises)?`,
    answer: `
      Это один из приемов работы с асинхронным кодом js.
      Promise (промис) - это объект, представляющий результат успешного или неудачного завершения асинхронной операции.
      В сущности, промис - это возвращаемый объект, в который вы записываете два колбэка вместо того, чтобы передать их функции.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=G4iYlbilozM&t=371s`,
    linkMdn: `https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Using_promises`,
    linkLearnJs: `https://learn.javascript.ru/promise-basics`,
  },
  {
    category: "async-js",
    question: `Что такое цикл событий (event loop) и как он работает?`,
    answer: `
      Представляет собой поток выполнения кода JavaScript. Event Loop выполняет одну простую задачу — осуществляет контроль стека вызовов и очереди обратных вызовов. Если стек вызовов пуст, цикл событий возьмет первое событие из очереди и отправит его в стек вызовов, который его запустит.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=w-vUj0gHGgg&t=293s`,
  },
  {
    category: "async-js",
    question: `Что такое async/await?`,
    answer: `
      Это новый способ написания асинхронного или не блокирующего кода в JavaScript. Он построен на основе промисов и это делает написание асинхронного кода более читаемым и чистым чем Promise и функции обратного вызова или callback. Async/await заставляет кот который работает асинхронно, выглядит как синхронный код это именно то ради чего его используют. Ключевое слово async перед объявлением функции заставляет функцию неявно возвращать промис ключевое слово await можно использовать только внутри асинхронной функции. Использования ключевого слова await в любой другой функции которая не является асинхронной, вызовет ошибку. Ключевое слово await ожидает возврата выражения из правой части предположительно промис, перед выполнением следующей строки кода. Таким образом асинхронный код выполняется последовательно. Особенно это полезно если один запрос зависит от результатов другого, используется Async/await чаще с конструкцией try-catch которая позволяет отлавливать ошибки в асинхронных запросах.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=V-m0sQ-hW58&t=417s`,
  },
  {
    category: "async-js",
    question: `Разница между Promise.all(), Promise.any() и Promise.race()?`,
    answer: `
      Для начала нужно отметить что все три метода предназначены для работы с промисами и в качестве аргумента они принимают массив промисов. 
      Promise.all() это Promise принимающий массив других промисов в качестве аргумента и возвращающий результаты выполнения промисов или ошибку при отклонении одного из них. Основное отличие все промисы должны резолвится, тогда будет получен результат. 
      Promise.race() возвращает результат первого выполненного или отклоненного промиса из переданных ему в виде массива промисов. То есть результат возвращается из первого resolve или reject промиса. 
      Promise.any() это комбинация двух ранее описанных вариантов вернёт результат первого resolve промиса. То есть отработает как рейс, но reject вернётся только в том случае если упадут все переданы промисы.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=XtQPrt8G0n8&t=782s`,
  },
  {
    category: "es",
    question: `Разница между «let», «const» и «var»?`,
    answer: `
      Во-первых переменная объявленная через var всплывает, а это значит что если мы обратимся к переменной ещё до момента ее инициализации, то получим просто undefined. В случае же с let и const мы увидим ошибки.
      Во-вторых у них есть разные области видимости у let и const область видимости, ограничена блоком а не функцией. Другими словами если они объявлены внутри скобок, то доступны только там и на всех вложенных уровнях. Переменная объявленная через var такую область видимости игнорирует и может быть доступна за её пределами.
      В-третьих разница между let и const заключается в том, что переменная объявленная через const становится константой и по идее её невозможно переопределить. При попытке это сделать мы получим ошибку при этом мы можем менять значение свойства объекта объявленного через const, но не переопределить полностью объект.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=1eIRTdgzHtw&t=361s`,
  },
  {
    category: "es",
    question: `Разница между Rest и Spread операторами?`,
    answer: `
      Несмотря на то что синтаксис rest и spread одинаков это три точки в самом начале задачи которые они выполняют, диаметрально противоположные. 
      Спред оператор используется для разделения коллекций на отдельные элементы то время как рест наоборот, предназначен для соединения отдельных значений в массив. 
      С помощью спред очень удобно производить так называемое распыление. Когда например в массив или объект можно добавлять новое значение из других массивов или объектов. Причем эти значения не обязательно перечислять полностью, достаточно взять распыляемая структуру и поставить перед ней три точки. Также spread оператор очень часто применяются при копирование объектов или массивов. 
      Но а рест позволяет сгруппировать массив определенные данные, например собрать остаточные аргументы передаваемые в функцию.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=w-vUj0gHGgg&t=183s`,
  },
  {
    category: "es",
    question: `Что такое деструктуризация?`,
    answer: `
      Деструктуризация или деструктурирующие присваивание, это выражение доступно из версии стандарта es6 которое предоставляет удобный способ извлекать значение из объектов или массивов и помещать их в отдельные переменные. Как и все нововведения стандарта es6 оно призвано минимизировать написанный код, а также сделать его более понятным несмотря на объём. Вместо того чтобы каждый раз объявлять новое значение переменной после чего присваивать ему элемент из массива или объекта. Переменные записываются в прямоугольных или фигурных скобках, после чего пишется равно и указывается объект или массив, деструктуризация данных которого должна произойти.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=w-vUj0gHGgg&t=241s`,
  },
  {
    category: "es",
    question: `Что такое ES6 модули?`,
    answer: `
      Концепция модулей, как способы организации джаваскрипт кода существовала давно. Когда приложение сложное и кода много, самым лучшим путем его организации будет разбиение на отдельные небольшие файлы. Выполняющие какую-то функциональность либо группирующие какие-либо данные по определенному признаку. В каждом файле описывается какая-то небольшая структурная часть. А в дальнейшем это всё собирается воедино. Модули позволяют разделить базу кода на несколько файлов, для большего удобства обслуживания. Синтаксис использование модулей простой, ключевое слово импорт используется для получения функциональности из другого файла в то время как экспорт используется для передачи функциональности из файла. Модули нужны для повышения читаемости и облегчения поддержки кода, возможности повторного использования кода и сохранения чистоты глобального пространства имён.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=V-m0sQ-hW58&t=494s`,
  },
  {
    category: "es",
    question: `Что такое символ (Symbol) в ES6?`,
    answer: `
      Символ это отдельный тип данных, который появился в стандарте ecmascript 2015. Если говорить в целом - то символы это уникальное и неизменное значение которое позволяет добавлять уникальные свойства объектов или идентификаторы и при этом не резервируя какие-нибудь строковые названия для этих свойств или идентификаторов. Создаётся они с помощью специальной функции символ, без использования ключевого слова New. У функции символ есть необязательные аргументы с помощью него можно указать имя для символа, в последующем это имя можно использовать для описания символа. Следует отметить, что для различных символов можно использовать одно и тоже имя. Однако Следует заметить что хоть имена и одинаковые но сами символы не будут равны. Это означает что создать два одинаковых символа невозможно. В обычной разработке символы практически не используются. Однако их можно использовать при написании какой-то библиотеки, для создания уникального пространства имён, которое 100% будет гарантировать уникальность и не приведет к конфликту имен при интеграции этой библиотеки в приложении.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=V-m0sQ-hW58&t=571s`,
  },
  {
    category: "ts",
    question: `Что такое символ TypeScript`,
    answer: `
      ---
    `,
    linkYoutube: `https://www.youtube.com/watch?v=V-m0sQ-hW58&t=571s`,
  },
  {
    category: "react",
    question: `Что такое Компонент высшего порядка (Higher-Order Component / HOC)?`,
    answer: `
      Патерн. Техника переиспользования компонентной логики. 
    `,
    linkYoutube: `https://www.youtube.com/watch?v=yvOXvZ8aEFo&t=637s`,
  },
];
