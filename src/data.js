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
    question: `Что такое цикл событий (event loop) и как он работает?`,
    answer: `
      Представляет собой поток выполнения кода JavaScript. Event Loop выполняет одну простую задачу — осуществляет контроль стека вызовов и очереди обратных вызовов. Если стек вызовов пуст, цикл событий возьмет первое событие из очереди и отправит его в стек вызовов, который его запустит.
    `,
    linkYoutube: `https://www.youtube.com/watch?v=w-vUj0gHGgg&t=293s`,
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
  },
];
