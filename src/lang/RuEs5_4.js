import React from 'react'

 function RuEs5_4() {
  return (
    <div>
    <h3>Рекурсия</h3>

<p>Рекурсия — это техника программирования, при которой функция вызывает сама себя до тех пор, пока не достигнет базового случая. Она часто используется для решения задач, которые можно разбить на более мелкие, похожие подзадачи.</p>

<p>В JavaScript ES5 рекурсия может использоваться для обхода дерева или вложенной структуры, выполнения определенных вычислений или генерации всех возможных комбинаций набора элементов.</p>

<p>Вот пример функции, которая использует рекурсию для вычисления факториала заданного числа:</p>

 
  <code>
    {'function factorial(num) {\n  if (num <= 1) {\n    return 1;\n  } else {\n    return num * factorial(num - 1);\n  }\n}\n\nconsole.log(factorial(5)); // Output: 120'}
  </code>
 

<p>В этом примере функция factorial() вызывает сама себя с меньшим числом до тех пор, пока не достигнет базового случая num {'<='} 1, после чего возвращает 1. Конечный результат вычисляется путем умножения всех возвращенных значений друг на друга.</p>

<p>Важно отметить, что рекурсия может быть памятьоемкой, особенно для больших входных данных, поэтому важно тщательно проектировать ваши рекурсивные функции и обеспечивать наличие базового случая, чтобы избежать бесконечных циклов.</p>

<b>Пример</b>

 
  <code>
    {'function factorial(num) {\n  if (num === 0 || num === 1) {\n    return 1;\n  } else {\n    return num * factorial(num - 1);\n  }\n}\n\nvar result = factorial(5);\nconsole.log(result); // Output: 120'}
  </code>
 

<p>
В обновленном примере мы определили функцию факториала, которая принимает один параметр num. Функция сначала проверяет, равен ли заданный номер 0 или 1, в этом случае она немедленно возвращает 1. В противном случае она рекурсивно вычисляет факториал числа, вызывая ту же функцию factorial с уменьшенным значением num и умножая его на текущее значение num.
Когда мы вызываем функцию факториала с аргументом 5, она рекурсивно вычисляет факториал, вызывая себя с уменьшающимися значениями, пока не достигнет базового случая num === 1, после чего она возвращает 1, и рекурсия развертывается, возвращая конечный результат 5 * 4 * 3 * 2 * 1 = 120.

</p>

<h3>Объект</h3>

<p>
Объект - это структура данных в JavaScript, которая позволяет хранить связанные данные и функциональность. Это ключевое понятие в JavaScript и широко используется во всем языке. Объекты определяются с помощью фигурных скобок {} и состоят из пар ключ-значение, где ключ - это строка, а значение может быть любым типом данных, включая другие объекты или функции.
Объекты используются в JavaScript для широкого спектра целей, включая создание сложных структур данных, организацию кода и предоставление способа инкапсуляции связанных данных и поведения. Они являются важной частью объектно-ориентированного программирования в JavaScript и являются фундаментальным строительным блоком для многих продвинутых функций и библиотек языка.

</p>

<b>Пример</b>

 
  <code>
    {'// Создание объекта\nvar car = {\n  make: "Toyota",\n  model: "Camry",\n  year: 2021,\n  start: function() {\n    console.log("Starting the car...");\n  }\n};\n\n// Доступ к свойствам объекта\nconsole.log(car.make); // Toyota\nconsole.log(car.year); // 2021\n\n// Вызов методов объекта\ncar.start(); // Starting the car...'}
  </code>
 

<b>Свойства объекта</b>

 
  <code>
    {'var person = {\n  name: "John",\n  age: 30,\n  gender: "male"\n};\n\nperson.email = "john@example.com";\n\nconsole.log(person.name); // John\nconsole.log(person.email); // john@example.com'}
  </code>
  

  <b>Свойства объекта</b>

 
  <code>
    {'var person = {\n  name: "John",\n  age: 30,\n  gender: "male"\n};\n\nperson.email = "john@example.com";\n\nconsole.log(person.name); // John\nconsole.log(person.email); // john@example.com'}
  </code>
  

<b>Методы объекта</b>

 
  <code>
    {'var calculator = {\n  add: function(a, b) {\n    return a + b;\n  },\n  subtract: function(a, b) {\n    return a - b;\n  }\n};\n\nconsole.log(calculator.add(5, 3)); // 8\nconsole.log(calculator.subtract(5, 3)); // 2'}
  </code>
 

<b>Объектно-ориентированный тип - массив</b>

 
  <code>
    {'// Создание массива\nvar colors = ["red", "green", "blue"];\n\n// Доступ к элементам массива\nconsole.log(colors[0]); // red\nconsole.log(colors[2]); // blue\n\n// Добавление нового элемента в массив\ncolors.push("yellow");\n\n// Перебор массива\nfor(var i = 0; i < colors.length; i++) {\n  console.log(colors[i]);\n}'}
  </code>
 
<b>Свойства и методы функции</b>

<p>{'function greeting(name) {'}</p>

<p>{'console.log("Hello " + name);'}</p>

<p>{'}'}</p>

<p>{'console.log(greeting.length); // 1 (количество ожидаемых аргументов)'}</p>

<p>{'// Добавление нового свойства в функцию'}</p>

<p>{'greeting.language = "English";'}</p>

<p>{'// Доступ к свойствам функции'}</p>

<p>{'console.log(greeting.language); // English'}</p>

<p>{'// Вызов функции\ngreeting("John"); // Hello John'}</p>

<h3>this</h3>

<p>
В JavaScript ES5, this - это ключевое слово, которое относится к текущему объекту или 
контексту, в котором выполняется код. Оно может ссылаться на различные объекты в зависимости от того, 
как и где оно используется.  
</p>

<p>Когда this используется внутри функции, которая вызывается как метод объекта, оно относится к самому объекту. Например:</p>
    
 
  <code>
    {'var myObject = {\n  name: "John",\n  sayHello: function() {\n    console.log("Hello, my name is " + this.name);\n  }\n};\n\nmyObject.sayHello(); // Output: "Hello, my name is John"'}
  </code>
 

<p>В этом примере this относится к объекту myObject, потому что sayHello() вызывается как метод myObject.</p>
    
 <p>Однако, когда this используется внутри обычной функции (то есть не вызывается как метод объекта), по умолчанию оно относится к глобальному объекту (window в браузере или global в Node.js). Например:</p>   
 
  <code>
    {'function sayHello() {\n  console.log("Hello, my name is " + this.name);\n}\n\nvar name = "John";\n\nsayHello(); // Output: "Hello, my name is undefined"'}
  </code>
 

<p>
В этом случае, ключевое слово this ссылается на глобальный объект, потому что sayHello() не вызывается как метод объекта. Поскольку у глобального объекта нет свойства name, this.name равно undefined.
Важно отметить, что значение this можно явно установить, используя методы, такие как call(), apply() и bind(). Эти методы позволяют вызывать функцию с определенным значением this, независимо от того, как она была вызвана.

</p>

<h3>Функция как объект</h3>

<p>{'var user = {'}</p>

<p>{'name: "John",'}</p>

<p>{'age: 20'}</p>

<p>{'};'}</p>

<p>{'function foo(a, b) {'}</p>

<p>{'console.log(this.name);'}</p>

<p>{'console.log(a + b);'}</p>

<p>{'}'}</p>

<p>{'//Использование метода call для установки \'this\' на объект user foo.call(user, 3, 5);'}</p>

<p>{'//Доступ к свойству length функции\nconsole.log(foo.length);'}</p>

<h3>Аргументы объекта</h3>

<p>Объект arguments - это локальная переменная, которая доступна во всех функциях. Он содержит список аргументов, переданных в функцию, похожий на массив.

Вот пример использования объекта arguments:</p>

 
  <code>
    {'function sum() {\n  var result = 0;\n  for (var i = 0; i < arguments.length; i++) {\n    result += arguments[i];\n  }\n  return result;\n}\n\nvar total = sum(1, 2, 3, 4);\nconsole.log(total); // Output: 10'}
  </code>
 

<p>
В приведенном выше примере функция sum принимает любое количество аргументов, и объект arguments используется для перебора каждого аргумента и их суммирования. Функция затем возвращает общую сумму.
</p>

<p>Еще один пример использования объекта arguments - создание функции, которая объединяет все переданные аргументы вместе.</p>

<p>{'function concatenate() {'}</p>

<p>{' var result = " ";'}</p>

<p>{'for (var i = 0; i < arguments.length; i++) {'}</p>

<p>{'result += arguments[i];'}</p>

<p>{'}'}</p>

<p>{'return result;'}</p>

<p>{'}'}</p>

<p>{'var str = concatenate("Hello", " ", "world", "!");'}</p>

<p>{'console.log(str); // Output: "Hello world!"'}</p>

<p>
В этом примере функция concatenate принимает любое количество аргументов и объединяет их в одну строку, которая возвращается.
</p>

 </div>
  )
}



export default RuEs5_4;



