import React from 'react'

function RuEs6() {
  return (
    <div>
  <h1>JavaScript ES6 (ECMAScript 2015) - это шестая версия JavaScript, которая внесла новые возможности и улучшения синтаксиса в язык. Вот некоторые ключевые особенности ES6:</h1>

<p>1. <b>let</b> и <b>const</b>: это новые объявления переменных, которые заменяют старое ключевое слово <b>var</b>. Они обеспечивают лучшие правила области видимости и помогают избежать распространенных ошибок, которые могут возникнуть с <b>var</b>.</p>

<p>2. Стрелочные функции: стрелочные функции обеспечивают более короткий синтаксис для записи выражений функций. Они также лексически привязывают значение <b>this</b>, что упрощает рассуждение о области действия функции.</p>

<p>3. Шаблонные литералы: этот функционал обеспечивает способ вставки выражений внутрь строк, используя обратные кавычки вместо кавычек. Это упрощает создание строк с динамическим содержимым.</p>

<p>4. Оператор расширения: оператор расширения представлен тремя точками (...). Он позволяет расширять итерируемые объекты, такие как выражения массивов или строк, в местах, где ожидаются ноль или более аргументов (для вызовов функций) или элементов (для литералов массивов).</p>

<p>5. Деструктурирование: деструктурирование обеспечивает способ извлечения данных из массивов и объектов в отдельные переменные с использованием краткой записи синтаксиса.</p>

<p>6. Классы: ES6 представил новый синтаксис классов, который обеспечивает более простой и интуитивно понятный способ создания объектов и определения их поведения.</p>      

<p>7. Модули: Модули - это способ организации кода в отдельные, самодостаточные файлы, которые могут легко импортироваться и экспортироваться по мере необходимости. Это позволяет более эффективно разрабатывать и поддерживать большие приложения. ES6 ввел стандартизированный синтаксис модуля с использованием ключевых слов import и export, что упрощает совместное использование кода в нескольких файлах и проектах.</p>

<p>8. Классы: ES6 ввел новый синтаксис для создания классов, который позволяет использовать объектно-ориентированное программирование в JavaScript. Классы могут использоваться для создания объектов с свойствами и методами, а также могут наследовать другие классы. Этот синтаксис упрощает написание и поддержку сложного кода, а также может улучшить читаемость и повторное использование вашего кода.</p>

<p>9. Промисы: Промисы - это способ обработки асинхронных операций в JavaScript. Они предоставляют стандартизированный способ обработки результата асинхронной операции, либо ее разрешения, либо отклонения значения. Промисы могут объединяться и комбинироваться с другими функциями, такими как async/await, чтобы создавать более сложные и мощные асинхронные потоки.</p>

<p>Это лишь некоторые из многих функций, введенных в ES6. Изучение и использование этих функций могут значительно улучшить ваш код JavaScript и сделать ваш процесс разработки более эффективным и эффективным.</p>

<b>Переменные ES6</b>

<p>{'const num = 10; '}</p>

<p>{'console.log(num);// 10'}</p>

<p>{'{'}</p>

<p>{'const num2 = 20;'}</p>

<p>{'console.log(num2); // 20 '}</p>

<p>{'}'}</p>

<p>{'// num2 не определено'}</p>

<p>{'console.log(num); // 10'}</p>

<p>Этот код использует переменные ES6. Первая строка создает константную переменную с именем "num" и присваивает ей значение 10. Вторая строка начинает блок кода, используя фигурные скобки, которые являются новой функцией в ES6.</p>

<p>Внутри этого блока объявляется новая переменная с именем "num2" с использованием ключевого слова "const" и присваивается значение 20. Эта переменная доступна только внутри блока, потому что она была объявлена с использованием ключевого слова "const", которое создает переменную с областью видимости блока. Третья строка выводит значение "num2" в консоль, которое будет равно 20.</p>

<p>После блока вызывается еще один оператор console.log, но на этот раз выводится значение переменной "num", которая находится за пределами блока и, следовательно, доступна. Наконец, код пытается вывести значение "num2", но так как оно было объявлено внутри блока и не доступно за его пределами, возникнет ошибка, сообщающая, что "num2 не определен".</p>

<b>Переменные ES6</b>

<p>{'const name = "Leo";'}</p>

<p>{'const name = "Kevin"; //Идентификатор (name) уже был объявлен'}</p>

<p>{'const name = "Leo";'}</p>

<p>{'if (true) { '}</p>

<p>{'const name = "Mike";'}</p>

<p>{'console.log(name); // Mike'}</p>

<p>{'}'}</p>

<p>{'console.log(name); // Leo'}</p>

 <p>Этот код объявляет константную переменную "name", а затем пытается ее переопределить с другим значением, что приводит к ошибке "Идентификатор 'name' уже был объявлен".</p>

<p>Затем код переопределяет "name" как "Leo" и создает область видимости блока с помощью оператора if. Внутри блока объявляется новая переменная "name" со значением "Mike", которое затем выводится в консоль. За пределами блока в области видимости остается исходная переменная "name" со значением "Leo", которая также выводится в консоль.</p>

<p>Таким образом, вывод этого кода состоит из сообщения об ошибке "Идентификатор 'name' уже был объявлен", за которым следуют "Mike" и "Leo".</p>

<b>Переменные ES6</b>

<p>{'if (true) {'}</p>

<p>{'// Темпоральная зона до объявления'}</p>

<p>{'console.log(typeof value); // value не определена'}</p>

<p>{'let value = 10;'}</p>

<p>{'} '}</p>

<p>{'console.log(typeof value); // undefined'}</p>

<p>
Ключевое слово <b>let</b> используется для объявления переменной <b>value</b> внутри блока. Однако, когда вызывается <b>typeof value</b> внутри блока до объявления <b>value</b>, движок JavaScript выбрасывает ошибку ReferenceError, потому что переменная еще не определена. Это называется Темпоральной зоной до объявления, которая относится к периоду времени между созданием переменной и ее объявлением, когда к ней нельзя получить доступ. Оператор <b>console.log(typeof value)</b> за пределами блока возвращает <b>undefined</b>, потому что <b>value</b> не определена в текущей области видимости.     
</p>

<p>Во втором блоке кода:</p>

<p>{'if(true) {'}</p>

<p>{'let value = 10;'}</p>

<p>{'}'}</p>

<p>Переменная <b>value</b> объявляется и присваивается значение <b>10</b> внутри блока. Однако, поскольку блок не находится в глобальной области видимости, и <b>value</b> не возвращается или не присваивается переменной во внешней области видимости, значение <b>value</b> фактически теряется после завершения выполнения блока.</p>

<b>Переменные ES6</b>   

<p>Этот код демонстрирует разницу в области видимости переменных при использовании var и let в цикле for.</p>

<pre>
    <code>
    <p>{'for(var i = 0; i < 5; i++) {'}</p>
        <p>{'// Код здесь'}</p>
    <p>{'}'}</p>
    <p>{'console.log(i); // 5 '}</p>
    
    <p>{'for(let i = 0; i < 5; i++) {'}</p>
        <p>{'// Код здесь'}</p>
    <p>{'}'}</p>
    <p>{'console.log(i); // i не определен'}</p>
</code>
</pre>
<p>
В первом примере переменная i объявляется с использованием var, которая имеет область видимости на уровне функции. Это означает, что переменная существует за пределами цикла for, и поэтому значение i равно 5 при выводе в консоль.
</p>
<p>
Во втором примере i объявляется с использованием let, которая имеет область видимости на уровне блока. Это означает, что переменная существует только внутри блока цикла for и не доступна за его пределами. Поэтому при выводе i в консоль за пределами цикла возникает ошибка ссылки, говорящая о том, что i не определена.
</p>
<b>Оператор расширения ES6 (Spread Operator)</b>

<p>
Оператор расширения - это новая функция, введенная в ES6, которая позволяет расширять или разворачивать итерируемые объекты в отдельные элементы. Этим итерируемым объектом может быть массив, строка или любой другой итерируемый объект.
</p>    

<b>
    Оператор расширения (spread operator) представлен тремя точками (...) и может использоваться в различных контекстах. Вот несколько примеров:
</b>

<p>1. Использование оператора расширения для объединения массивов:</p>

<p>{'const array1 = [1, 2, 3];'}</p>

<p>{'const array2 = [4, 5, 6];'}</p>

<p>{'const newArray = [...array1, ...array2];'}</p>

<p>{'console.log(newArray); // [1, 2, 3, 4, 5, 6]'}</p>

<p>2. Использование оператора расширения для создания копии массива:</p>

<p>{'const array1 = [1, 2, 3];'}</p>

<p>{'const array2 = [...array1];'}</p>

<p>{'console.log(array2); // [1, 2, 3]'}</p>

<p>3. Использование оператора расширения для передачи аргументов в функцию:</p>

<p>{'function sum(a, b, c) { '}</p>

<p>{' return a + b + c;'}</p>

<p>{'}'}</p>

<p>{'const numbers = [1, 2, 3];'}</p>

<p>{'const result = sum(...numbers);'}</p>

<p>{'console.log(result); // 6'}</p>

<p>4. Использование оператора расширения для объединения объектов: </p>

<p>{'const object1 = { x: 1, y: 2 };'}</p>

<p>{'const object2 = { z: 3 };'}</p>

<p>{'const mergedObject = { ...object1, ...object2 };'}</p>

<p>{'console.log(mergedObject); // { x: 1, y: 2, z: 3 }'}</p>

<p>
    Во всех этих примерах оператор распространения используется для раскрытия итерируемого объекта в отдельные элементы. 
    Это полезная функция, которая может упростить ваш код и сделать его более читабельным.  
</p>

<b>Деструктуризация в ES6</b>

<p>
Деструктуризация в ES6 является способом извлечения значений из объектов или массивов 
и присваивания их переменным более кратким и читаемым способом. 
</p>

<p>Например, рассмотрим следующий объект:</p>

<p>{'const person = { '}</p>

<p>{`name: ' John Doe ' , `}</p>

<p>{' age: 30,'}</p>

<p>{` email: 'john.doe@example.com'`}</p>

<p>{'};'}</p>

<p>Вместо доступа к каждому свойству по отдельности, как здесь:</p>

<p>{'const name = person.name;'}</p>

<p>{'const age = person.age;'}</p>

<p>{'const email = person.email;'}</p>

<p>Вы можете использовать деструктуризацию, чтобы присвоить каждому свойству переменную более кратким способом:</p>

<p>{'const { name, age, email } = person;'}</p>

<p>Это создает три переменные <b>(name, age и email)</b> и присваивает им значения соответствующих свойств объекта person.</p>

<p>Также можно использовать деструктуризацию с массивами. Например:</p>
<p>{'const numbers = [1, 2, 3, 4, 5];'}</p>
<p>{'const [first, second, ...rest] = numbers;'}</p>
<p>{'console.log(first); // 1'}</p>
<p>{'console.log(second); // 2'}</p>
<p>{'console.log(rest); // [3, 4, 5]'}</p>
<p>
    Этот код создает три переменные <b>(first, second и rest)</b> и присваивает им значения первых двух элементов в массиве <b>numbers</b>, а также оставшихся элементов соответственно.
</p>
<p>
    Деструктуризация также может использоваться с вложенными объектами и массивами, и даже может иметь значения по умолчанию, присваиваемые переменным в случае, если значение, которое деструктурируется, не определено. 
</p>
<p>
    В целом, деструктуризация - это мощная функция в ES6, которая может помочь сделать ваш код более читаемым и кратким.
</p>
<b>Цикл ES6 (for - of)</b>

<p>ES6 представил новый тип цикла в JavaScript, называемый циклом <b>for...of</b>. 
    Этот цикл используется для перебора элементов итерируемого объекта, таких как массивы, строки, карты, множества и т.д.</p>
<p>Вот пример использования цикла <b>for...of</b> для перебора массива:</p>

<p>{'const arr = [1, 2, 3, 4, 5];'}</p>

<p>{'for(let num of arr) { '}</p>

<p>{'console.log(num);'}</p>

<p>{'} '}</p>

<p>В этом примере цикл <b>for...of</b> перебирает каждый элемент в массиве <b>arr</b> и выводит его в консоль.</p>

<p>Мы также можем использовать цикл <b>for...of</b> для перебора символов в строке:</p>

<p>{'const str = "Hello, world!";'}</p>

<p>{'for(let char of str) {'}</p>

<p>{'console.log(char);'}</p>

<p>{'}'}</p>

<p>В этом примере цикл <b>for...of</b> перебирает каждый символ в строке <b>str</b> и выводит его в консоль.</p>

 <p>Также мы можем использовать цикл <b>for...of</b> для перебора ключей или значений объекта Map:</p>

<p>{'const map = new Map(['}</p>

<p>{`['a', 1],`}</p>

<p>{`['b', 2],`}</p>

<p>{`['c', 3]`}</p>

<p>{']);'}</p>


<p>{'for(let [key, value] of map) {'}</p>

<p>{'console.log(key, value);'}</p>

<p>{'}'}</p>

<p>В этом примере цикл <b>for...of</b> перебирает каждую пару ключ-значение в объекте <b>map</b> и выводит их в консоль.</p>

<p>В целом, цикл <b>for...of</b> - это полезное дополнение к языку JavaScript, которое упрощает перебор итерируемых объектов.</p>

<b>Параметр остаточных значений функции ES6</b>

<p>Параметр остаточных значений функции ES6 - это функциональность, которая позволяет функции принимать неопределенное количество аргументов в виде массива. Его обозначают тремя точками (...) и именем параметра.</p>

<p>Вот пример использования параметра остаточных значений:</p>

<p>{'function sum(...numbers) {'}</p>

<p>{'let result = 0;'}</p>

<p>{'for (let number of numbers) {'}</p>

<p>{' result += number;'}</p>

<p>{' }'}</p>

<p>{'return result;'}</p>

<p>{'}'}</p>

<p>{'console.log(sum(1, 2, 3)); // Вывод: 6'}</p>

<p>{'console.log(sum(4, 5, 6, 7)); // Вывод: 22'}</p>

<p>
В приведенном выше примере функция sum принимает неопределенное количество аргументов, используя параметр остаточных аргументов ...numbers. Затем она проходит по массиву чисел, используя цикл for...of, чтобы сложить значения и вернуть результат.  
</p>

<p>
Параметр остаточных аргументов полезен, когда вы хотите написать функцию, которая может обрабатывать переменное количество аргументов, не задавая каждый аргумент явно. Он часто используется в функциях, которые манипулируют массивами или выполняют математические операции над набором значений.  
</p>

<p>
В целом, параметр остаточных аргументов - это удобная функция, которая облегчает написание более гибких и универсальных функций.  
</p>

<b>Стрелочные функции(Arrow functions)</b>

<p>
    Стрелочные функции - это краткий способ написания функций в JavaScript, введенный в ES6 (ECMAScript 2015). Они обеспечивают более компактный синтаксис по сравнению с традиционными выражениями функций, что упрощает чтение и написание кода.  
</p>

<p>
Вот пример традиционного выражения функции, которая принимает два параметра и возвращает их сумму:  
</p>

<p>{'function sum(a, b) {'}</p>

<p>{'return a + b;'}</p>

<p>{'}'}</p>

<p>Ту же функцию можно написать, используя стрелочную функцию, следующим образом:</p>

<p>{'const sum = (a, b) => a + b;'}</p>

<p>В этом примере функция определена с помощью синтаксиса стрелки <b>{'=>.'}</b>. Параметры <b>(a, b)</b> заключены в скобки, за которыми следует стрелка <b>{'=>'}</b> и тело функции <b>a + b.</b> Поскольку тело функции состоит из одного оператора, фигурные скобки и ключевое слово <b>return</b> могут быть опущены.
</p>

<p>
Стрелочные функции также могут использоваться как анонимные функции, назначаться переменным и передаваться в качестве аргументов другим функциям. Вот пример стрелочной функции, которая принимает массив и возвращает новый массив, в котором каждый элемент удвоен:  
</p>

<p>{'const doubleArray = arr => arr.map(item => item * 2);'}</p>

<p>
В этом примере стрелочная функция{' (item => item * 2)'} передается в качестве аргумента методу <b>map()</b>, который применяет функцию к каждому элементу массива и возвращает новый массив с измененными значениями.  
</p>

<p>
У стрелочных функций также есть лексическое привязывание <b>this</b>, что означает, что <b>this</b> относится к значению <b>this</b> в замыкающей области видимости, а не собственному <b>this</b> функции. Это делает стрелочные функции особенно полезными для работы с методами объектов и обработчиками событий.  
</p> 

<p>
В целом, стрелочные функции предоставляют более краткий и читаемый способ написания функций на JavaScript, упрощая понимание и поддержку кода.  
 </p>

 <b>Прототип(Prototype)</b>

<p>
В JavaScript каждый объект имеет внутреннее свойство, называемое [[Prototype]] (иногда называемое "dunder proto"), которое ссылается на другой объект или null. Это свойство используется для реализации наследования и позволяет объектам наследовать свойства и методы от своих прототипов.  
</p>

<p>
В ES5 вы можете создавать прототип с помощью конструкторов функций и свойства prototype. Вот пример:  
</p>

<p>{'function Person(name, age) { '}</p>

<p>{'this.name = name;'}</p>

<p>{'this.age = age;'}</p>

<p>{'} '}</p>

<p>{'Person.prototype.greet = function() { '}</p>

<p>{'console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);'}</p>

<p>{'} '}</p>

<p>{'const john = new Person("John", 30);'}</p>

<p>{'john.greet(); // "Привет, меня зовут John и мне 30 лет."'}</p>

<p>В этом примере мы создаем конструктор функции с именем <b>Person</b>, который принимает <b>name</b> и <b>age</b> в качестве аргументов и устанавливает их как свойства объекта. Затем мы добавляем метод <b>greet</b> в прототип <b>Person</b> с помощью объекта <b>Person.prototype</b>. Этот метод записывает приветственное сообщение в консоль, которое включает имя и возраст человека.</p>

<p>При создании нового объекта с помощью ключевого слова <b>new</b> и конструктора <b>Person</b>, свойство [[Prototype]] нового объекта будет указывать на объект <b>Person.prototype</b>. Это позволяет новому объекту наследовать метод <b>greet</b> от его прототипа.</p>

<p>В ES6 вы можете использовать синтаксис <b>class</b>, чтобы определить класс и его прототип. Вот тот же пример, используя классы ES6:</p>

<p>{'class Person {'}</p>

<p>{'constructor(name, age) {'}</p>

<p>{'this.name = name;'}</p>

<p>{'this.age = age;'}</p>

<p>{'}'}</p>

<p>{'greet() {'}</p>

<p>{'console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);'}</p>

<p>{'}'}</p>

<p>{'}'}</p>

<p>{`const john = new Person("John", 30);`}</p>

<p>{`john.greet(); // "Hello, my name is John and I am 30 years old."`}</p>

<p>В этом примере мы определяем класс <b>Person</b> с конструктором, который принимает <b>name</b> и <b>age</b> и устанавливает их в качестве свойств объекта. Затем мы определяем метод <b>greet</b> непосредственно в классе. Под капотом синтаксис <b>class</b> создает конструктор функции и устанавливает его прототип на прототип класса.</p>
 
<p>
Концепция прототипов используется как в ES5, так и в ES6 для реализации наследования в JavaScript, но синтаксис определения прототипов различен. Классы ES6 предоставляют более краткий и интуитивно понятный синтаксис для создания классов и определения их прототипов, в то время как прототипы ES5 предоставляют большую гибкость и контроль над тем, как определяются прототипы.   
</p>

<b>Класс (статические методы)</b>

<p>
В ES6 были введены классы как способ создания шаблонов объектов. Классы являются шаблоном для создания объектов, которые инкапсулируют данные и функциональность. Одной из особенностей классов является возможность определения статических методов, которые вызываются на самом классе, а не на экземпляре класса.
</p>

<p>
Статический метод - это метод, принадлежащий самому классу, а не какому-либо экземпляру класса. Его можно вызвать на классе, не создавая сначала экземпляр класса.   
</p>

<p>
Вот пример класса с статическим методом:  
</p>

<p>{'class Car {'}</p>

<p>{'constructor(make, model) {'}</p>

<p>{'this.make = make;'}</p>

<p>{'this.model = model;'}</p>

<p>{'}'}</p>

<p>{'static compare(car1, car2) {'}</p>

<p>{'if (car1.make === car2.make) {'}</p>

<p>{' return "Same make";'}</p>

<p>{' } else {'}</p>

<p>{'return "Different make";'}</p>

<p>  {' }'}</p>

<p>{' }'}</p>

<p>{' }'}</p>

<p>{'let car1 = new Car("Honda", "Civic");'}</p>

<p>{'let car2 = new Car("Toyota", "Corolla");'}</p>

<p>{'console.log(Car.compare(car1, car2)); // "Different make"'}</p> 

<p>
В приведенном выше примере класс Car имеет статический метод compare. Этот метод принимает два объекта Car в качестве параметров и возвращает строку, указывающую, имеют ли они одинаковый make (производитель автомобиля) или нет. Метод compare может быть вызван на самом классе Car, а не на экземпляре класса.
</p>
<p>
Обратите внимание, что в методе compare ключевое слово this не используется, поскольку метод не вызывается на экземпляре класса. Вместо этого метод принимает два объекта Car в качестве параметров и сравнивает их свойства make.
</p>
<p>
В ES5 статические методы могут быть определены на функции-конструкторе с использованием свойства prototype функции-конструктора. Вот пример того, как вышеуказанный класс ES6 может выглядеть в ES5:
</p>
<p>{'function Car(make, model) {'}</p>

<p>{'this.make = make;'}</p>

<p>{'this.model = model;'}</p>

<p>{'} '}</p>

<p>{'Car.compare = function(car1, car2) {'}</p>

<p>{'if (car1.make === car2.make) {  '}</p>

<p>{'return "Same make"; '}</p>

<p>{'} else { '}</p>

<p>{' return "Different make";'}</p>

<p>{'}'}</p>

<p>{'}; '}</p>

<p>{'let car1 = new Car("Honda", "Civic"); '}</p>

<p>{'let car2 = new Car("Toyota", "Corolla");'}</p>

<p>{'console.log(Car.compare(car1, car2)); // "Different make"'}</p>

<p>
В примере ES5 метод compare определяется непосредственно на функции-конструкторе Car, а не на ее свойстве прототипа. Это позволяет вызывать метод на самой функции-конструкторе Car.
</p>

<b>Символ (Symbol) </b> 

<p>
  В ES6 символ (Symbol) - это новый примитивный тип данных, который представляет уникальный идентификатор. В отличие от строк или чисел, символы гарантированно уникальны и неизменяемы, что делает их полезными для создания ключей или свойств объектов, которые должны быть абсолютно уникальными.  
  </p>

  <p>Для создания символа можно использовать функцию <b>Symbol()</b>, например:</p>

  <p>{'const mySymbol = Symbol();'}</p>

  <p>Также можно добавить описание символа, чтобы легче идентифицировать его позже, например:</p>

  <p>{"const mySymbol = Symbol('Мой символ'); "}</p>

  <p>Символы можно использовать в качестве ключей или свойств объектов, например:</p>

  <p>{"const mySymbol = Symbol('Мой символ'); "}</p>

  <p>{'const obj = {}; '}</p>

  <p>{"obj[mySymbol] = 'Привет, Мир!'; "}</p>

  <p>{"console.log(obj[mySymbol]); // Вывод: Привет, Мир! "}</p>

  <p>
  Одно из главных преимуществ использования символов заключается в том, что они не могут быть случайно доступны или изменены, потому что они уникальны и не могут быть скопированы. Это делает их идеальными для создания частных или внутренних свойств объектов.   
  </p>
  <p>
  Еще одно преимущество символов заключается в том, что они могут использоваться для определения известных символов (well-known symbols), которые являются встроенными символами, имеющими определенный смысл или поведение в языке. Например, символ Symbol.iterator используется для определения итератора по умолчанию для объекта.   
  </p>
  
  <p>
  В целом, символы предоставляют мощный и гибкий способ создания уникальных идентификаторов и определения пользовательского поведения для объектов в JavaScript.   
  </p>
  
  <b>Promise (Обещание)</b>

  <p>Объект Promise - это функциональность, введенная в ES6, которая позволяет обрабатывать асинхронные операции более легко и организованно. </p>

<p>
В простых терминах, Promise - это объект, который представляет значение, которое может быть недоступно в настоящее время, но будет доступно в будущем. Он предоставляет способ обработки результатов асинхронных операций (таких как запросы API или запросы к базе данных) без блокирования основного потока выполнения. 
</p>

<p>
Promise имеет три состояния: ожидание (pending), выполнено (fulfilled) или отклонено (rejected). Когда Promise находится в состоянии ожидания, это означает, что операция, которую он представляет, еще не завершена. Когда Promise выполняется, это означает, что операция была успешной и результат доступен. Когда Promise отклонен, это означает, что операция завершилась неудачно, и доступна ошибка.
</p>

<p>
Вот пример использования Promise для получения данных из API:   
</p>

<p>{"fetch('https://jsonplaceholder.typicode.com/todos/1')"}</p>

<p>{'.then(response => response.json())'}</p>

<p>{'.then(data => console.log(data))'}</p>

<p>{'.catch(error => console.error(error))'}</p>

<p>
В этом примере, <b>fetch</b> - это функция, которая возвращает Promise, который разрешается ответом от API. На Promise вызывается метод <b>then</b>, который принимает обратный вызов, который выполняется, когда Promise выполняется. Первый обратный вызов <b>then</b> разбирает ответ как JSON и возвращает его. Второй обратный вызов <b>then</b> выводит разобранные данные в консоль. Вызывается метод <b>catch</b> для обработки любых ошибок, которые могут возникнуть во время операции.
</p>
<p>Промисы могут также создаваться вручную, используя конструктор <b>Promise</b>:</p>

<p>{"const promise = new Promise((resolve, reject) => { "}</p>

<p>{"setTimeout(() => { "}</p>

<p>{" resolve('Success!') "}</p>

<p>{" }, 1000) "}</p>

<p>{"}) "}</p>

<p>{" promise.then(result => console.log(result)) // Вывод: Success! "}</p>

<p>
В этом примере промис создается с помощью функции, принимающей два параметра: <b>resolve и reject.</b> Функция <b>resolve</b> вызывается через одну секунду с аргументом <b>'Success!'</b>. Метод <b>then</b> вызывается на промисе, принимая функцию обратного вызова, которая будет выполнена, когда промис будет выполнен. Функция обратного вызова записывает результат в консоль.  
</p>

    
    </div>

  )
}

export default RuEs6;