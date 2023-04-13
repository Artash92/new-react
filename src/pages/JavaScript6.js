import React,{ useState } from 'react';
import AmEs6 from '../lang/AmEs6';
import RuEs6 from '../lang/RuEs6';

 function JavaScript6() {
  
  const [language, setLanguage] = useState('en'); // по умолчанию язык выбран английский

  const handleEnglishClick = () => {
    setLanguage('en');
  };

  const handleRussianClick = () => {
    setLanguage('ru');
  };

  const handleArmenianClick = () => {
    setLanguage('am');
  };
  
  return (
    
    
    <div className='java-script'>

<div>
        <button onClick={handleEnglishClick}>English</button>
        <button onClick={handleRussianClick}>Russian</button>
        <button onClick={handleArmenianClick}>Armenian</button>
      </div>
      {language === 'en' && (
        <div>

       
    <h1>JavaScript ES6 (ECMAScript 2015) is the sixth version of JavaScript that introduced new features and syntax improvements to the language. Here are some key features of ES6:</h1>
    
    <p>1 . <b>let </b>and <b>const</b>: These are new variable declarations that replace the old var keyword. They provide better scoping rules and help avoid common mistakes that can occur with <b>var</b>.</p>
    
    <p>2. Arrow functions: Arrow functions provide a shorter syntax for writing function expressions. They also bind the this value lexically, making it easier to reason about function scope.</p>
    
    <p>3. Template literals: This feature provides a way to embed expressions inside strings using backticks instead of quotes. It makes it easier to create strings with dynamic content.</p>
    
    <p>4. Spread operator: The spread operator is represented by three dots (...). It allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.</p>
    
    <p>5. Destructuring: Destructuring provides a way to extract data from arrays and objects into separate variables using a shorthand syntax.</p>
    
    <p>6. Classes: ES6 introduced a new class syntax that provides a simpler and more intuitive way to create objects and define their behavior.</p>
    
    <p>7. Modules: Modules are a way to organize code into separate, self-contained files that can be easily imported and exported as needed. This allows for more efficient development and maintenance of large applications. ES6 introduced a standardized module syntax using the import and export keywords, making it easier to share and reuse code across multiple files and projects.</p>
    
    <p>8. Classes: ES6 introduced a new syntax for creating classes, which allows for object-oriented programming in JavaScript. Classes can be used to create objects with properties and methods, and can also inherit from other classes. This syntax makes it easier to write and maintain complex code, and can improve the readability and reusability of your code.</p>
    
    <p>9. Promises: Promises are a way to handle asynchronous operations in JavaScript. They provide a standardized way to handle the result of an asynchronous operation, either by resolving or rejecting a value. Promises can be chained together and combined with other features like async/await to create more complex and powerful asynchronous workflows.</p>
    
    <p>These are just a few of the many features introduced in ES6. Learning and using these features can greatly improve your JavaScript code and make your development process more efficient and effective.</p>
    
    <b>ES6 Variables</b>
    
    <p>{'const num = 10; '}</p>

    <p>{'console.log(num);// 10'}</p>

    <p>{'{'}</p>

    <p>{'const num2 = 20;'}</p>

    <p>{'console.log(num2); // 20 '}</p>

    <p>{'}'}</p>

    <p>{'// num2 is not defined'}</p>

    <p>{'console.log(num); // 10'}</p>

    <p>This code is using ES6 variables. The first line creates a constant variable named "num" and assigns the value 10 to it. The second line starts a block of code using curly braces, which is a new feature in ES6.</p>

    <p>Inside this block, a new variable named "num2" is declared using the "const" keyword and assigned the value 20. This variable is only accessible inside the block because it was declared using the "const" keyword which creates a block-scoped variable. The third line outputs the value of "num2" to the console, which will be 20.</p>

    <p>After the block, another console.log statement is called, but this time it outputs the value of the variable "num", which is outside of the block and therefore accessible. Finally, the code attempts to output the value of "num2", but since it was declared inside the block and is not accessible outside of it, an error will occur, saying that "num2 is not defined".</p>

    <b>ES6 Variables</b>

    <p>{'const name = "Leo";'}</p>

    <p>{'const name = "Kevin"; //Identifier (name) has already been declared'}</p>

    <p>{'const name = "Leo";'}</p>

    <p>{'if (true) { '}</p>

    <p>{'const name = "Mike";'}</p>

    <p>{'console.log(name); // Mike'}</p>

    <p>{'}'}</p>
    
    <p>{'console.log(name); // Leo'}</p>

    <p>This code declares a constant variable "name" and then tries to declare it again with a different value, which results in an error "Identifier 'name' has already been declared".</p>
    
    <p>Then the code re-declares "name" as "Leo" and creates a block scope with an if statement. Inside the block, a new variable "name" is declared with the value "Mike", which is then printed to the console. Outside the block, the original variable "name" with the value "Leo" is still in scope and is printed to the console.</p>
    
    <p>So the output of this code is "Identifier 'name' has already been declared" followed by "Mike" and "Leo".</p>

    <b>ES6 Variables</b>

    <p>{'if (true) {'}</p>

    <p>{'// Temporal Dead Zone'}</p>

    <p>{'console.log(typeof value); //value is not defined'}</p>

    <p>{'let value = 10;'}</p>

    <p>{'} '}</p>

    <p>{'console.log(typeof value); //undefined'}</p>

    <p>
    The <b>let</b> keyword is used to declare the variable <b>value</b> within the block. However, when <b>typeof value</b> is called within the block before the declaration of <b>value</b>, the JavaScript engine throws a ReferenceError because the variable is not defined yet. This is known as the Temporal Dead Zone, which refers to the period of time between the creation of a variable and its declaration where it cannot be accessed. The <b>console.log(typeof value)</b> statement outside of the block returns <b>undefined</b> because <b>value</b> is not defined in the current scope.     
    </p>

    <p>In the second block of code:</p>

    <p>{'if(true) {'}</p>

    <p>{'let value = 10;'}</p>

    <p>{'}'}</p>

    <p>The variable <b>value</b> is declared and assigned a value of <b>10 </b> within the block. However, because the block is not in the global scope and <b>value</b> is not returned or assigned to a variable in the outer scope, the value of <b>value </b> is effectively lost once the block finishes executing.</p>

    <b>ES6 Variables</b> 

    <p>{'for(var i = 0; i < 5; i++) {'}</p>
    
    <p>{'// Code here'}</p>

    <p>{'}'}</p>

    <p>{'console.log(i); // 5 '}</p>


    <p>{' for(let i = 0; i < 5; i++) {'}</p>

    <p>{'// Code here'}</p>

    <p>{' }'}</p>

    <p>{'console.log(i); // i is not defined'}</p>

    <p>
    This code demonstrates the difference in variable scoping between using var and let in 
    a for loop. In the first example, the i variable is declared using var, which has function-level scope. 
    This means that the variable exists outside of the for loop, so the value of i is 5 when it is printed to the console.
    </p>

    <p>
    In the second example, i is declared using let, which has block-level scope. This means that the variable only exists within the for loop block, so it is not accessible outside of the loop. Therefore, when i is printed to the console outside of the loop, 
    it throws a reference error saying that i is not defined. 
    </p>

    <b>ES6 Spread Operator</b>

    <p>
    The spread operator is a new feature introduced in ES6 that allows you to spread or expand an iterable object into individual elements. This iterable object could be an array, a string, or any other iterable object.  
    </p>

    <b>
    The spread operator is represented by three dots (...) and can be used in a variety of ways. Here are some examples:  
    </b>

    <p>1. Using spread operator to concatenate arrays:</p>

    <p>{'const array1 = [1, 2, 3];'}</p>

    <p>{'const array2 = [4, 5, 6];'}</p>

    <p>{'const newArray = [...array1, ...array2];'}</p>

    <p>{'console.log(newArray); // [1, 2, 3, 4, 5, 6]'}</p>

    <p>2. Using spread operator to create a copy of an array:</p>

    <p>{'const array1 = [1, 2, 3];'}</p>

    <p>{'const array2 = [...array1];'}</p>

    <p>{'console.log(array2); // [1, 2, 3]'}</p>

    <p>3. Using spread operator to pass arguments to a function:</p>

    <p>{'function sum(a, b, c) { '}</p>

    <p>{' return a + b + c;'}</p>

    <p>{'}'}</p>

    <p>{'const numbers = [1, 2, 3];'}</p>

    <p>{'const result = sum(...numbers);'}</p>

    <p>{'console.log(result); // 6'}</p>

    <p>4. Using spread operator to merge objects: </p>

    <p>{'const object1 = { x: 1, y: 2 };'}</p>

    <p>{'const object2 = { z: 3 };'}</p>

    <p>{'const mergedObject = { ...object1, ...object2 };'}</p>

    <p>{'console.log(mergedObject); // { x: 1, y: 2, z: 3 }'}</p>

    <p>
    In all of these examples, the spread operator is used to expand an iterable object into individual elements. 
    It's a useful feature that can simplify your code and make it more readable.  
    </p>

    <b>ES6 Destructuring</b>

    <p>
    ES6 destructuring is a way of extracting values from objects 
    or arrays and assigning them to variables in a more concise and readable way. 
    </p>

    <p>For example, consider the following object:</p>

    <p>{'const person = { '}</p>

    <p>{`name: ' John Doe ' , `}</p>

    <p>{' age: 30,'}</p>

    <p>{` email: 'john.doe@example.com'`}</p>

    <p>{'};'}</p>

    <p>Instead of accessing each property individually like this:</p>

    <p>{'const name = person.name;'}</p>

    <p>{'const age = person.age;'}</p>

    <p>{'const email = person.email;'}</p>

    <p>You can use destructuring to assign each property to a variable in a more concise way:</p>
    
    <p>{'const { name, age, email } = person;'}</p>

    <p>This creates three variables <b>(name, age, and email)</b> and assigns them the values of their corresponding properties in the person object.</p>

    <p>You can also use destructuring with arrays. For example:</p>

    <p>{'const numbers = [1, 2, 3, 4, 5];'}</p>

    <p>{'const [first, second, ...rest] = numbers;'}</p>

    <p>{'console.log(first); // 1'}</p>

    <p>{'console.log(second); // 2'}</p>

    <p>{'console.log(rest); // [3, 4, 5]'}</p>

    <p>
    This creates three variables <b>(first, second, and rest) </b>and assigns them the values of the first two 
    elements in the <b>numbers</b> array and the rest of the elements, respectively.  
    </p>

    <p>
    Destructuring can also be used with nested objects and arrays, and can even have default values assigned to variables in case the value being destructured is undefined. 
    </p>
    
    <p>
    Overall, destructuring is a powerful feature in ES6 that can help make your code more readable and concise.  
    </p>

    <b>ES6 Cycle (for - of)</b>

    <p>ES6 introduced a new type of loop in JavaScript called the <b>for...of</b> loop. 
      This loop is used to iterate over elements of an iterable object like arrays, strings, maps, sets, etc.</p>
    
    <p>Here's an example of using the <b>for...of </b> loop to iterate over an array:</p>

    <p>{'const arr = [1, 2, 3, 4, 5];'}</p>

    <p>{'for(let num of arr) { '}</p>

    <p>{'console.log(num);'}</p>

    <p>{'} '}</p>
    
    <p>In this example, the <b>for...of</b> loop iterates over each element in the <b>arr</b> array and logs it to the console.</p>

    <p>We can also use the <b>for...of</b> loop to iterate over the characters in a string:</p>

    <p>{'const str = "Hello, world!";'}</p>

    <p>{'for(let char of str) {'}</p>

    <p>{'console.log(char);'}</p>

    <p>{'}'}</p>

    <p>In this example, the <b>for...of</b> loop iterates over each character in the <b>str</b> string and logs it to the console.</p>
    
    <p>We can also use the <b>for...of</b> loop to iterate over the keys or values of a Map object:</p>
    
    <p>{'const map = new Map(['}</p>

    <p>{`['a', 1],`}</p>

    <p>{`['b', 2],`}</p>

    <p>{`['c', 3]`}</p>
    
    <p>{']);'}</p>


    <p>{'for(let [key, value] of map) {'}</p>

    <p>{'console.log(key, value);'}</p>

    <p>{'}'}</p>

    <p>In this example, the <b>for...of</b> loop iterates over each key-value pair in the <b>map</b> object and logs them to the console.</p>

    <p>Overall, the <b>for...of</b> loop is a useful addition to the JavaScript language that simplifies iterating over iterable objects.</p>
    
    <b>ES6 function rest parameter</b>

    <p>The ES6 function rest parameter is a feature that allows a function to accept an indefinite number of arguments as an array. It is denoted by three dots (...) followed by the name of the parameter.</p>
    
    <p>Here is an example of using the rest parameter:</p>

    <p>{'function sum(...numbers) {'}</p>

    <p>{'let result = 0;'}</p>

    <p>{'for (let number of numbers) {'}</p>

    <p>{' result += number;'}</p>

    <p>{' }'}</p>

    <p>{'return result;'}</p>

    <p>{'}'}</p>

    <p>{'console.log(sum(1, 2, 3)); // Output: 6'}</p>

    <p>{'console.log(sum(4, 5, 6, 7)); // Output: 22'}</p>

    <p>
    In the above example, the function sum accepts an indefinite number of arguments using the rest parameter ...numbers. It then loops through the numbers array using a for...of loop to sum up the values and returns the result.  
    </p>

    <p>
    The rest parameter is useful when you want to write a function that can handle a variable number of arguments without having to explicitly define each argument. It is commonly used in functions that manipulate arrays or perform mathematical operations on a set of values.  
    </p>

    <p>
    Overall, the rest parameter is a convenient feature that makes it easier to write functions that are more flexible and versatile.  
    </p>
    
    <b>Arrow functions </b>

    <p>
    Arrow functions are a concise way to write functions in JavaScript, introduced in ES6 (ECMAScript 2015). They provide a more compact syntax compared to traditional function expressions, making the code easier to read and write.  
    </p>

    <p>
    Here is an example of a traditional function expression that takes two parameters and returns their sum:  
    </p>
    
    <p>{'function sum(a, b) {'}</p>
    
    <p>{'return a + b;'}</p>

    <p>{'}'}</p>

    <p>The same function can be written using an arrow function in the following way:</p>

    <p>{'const sum = (a, b) => a + b;'}</p>

    <p>In this example, the function is defined using the arrow syntax <b>{'=>.'}</b> 
    The parameters <b>(a, b)</b> are enclosed in parentheses, followed by the arrow <b>{'=>'}</b> and the function body <b>a + b.</b> Since the function body is a single statement, the curly braces and <b>return</b> keyword can be omitted.
    </p>

    <p>
    Arrow functions can also be used as anonymous functions, assigned to variables, and passed as arguments to other functions. Here is an example of an arrow function that takes an array and returns a new array with each element doubled:  
    </p>

    <p>{'const doubleArray = arr => arr.map(item => item * 2);'}</p>

    <p>
    In this example, the arrow function{' (item => item * 2)'} is passed as an argument to the <b>map()</b> method, which applies the function to each element of the array and returns a new array with the modified values.  
    </p>

    <p>
    Arrow functions also have a lexical <b>this</b> binding, meaning that this refers to the value of <b>this</b> in the enclosing scope, rather than the function's own <b>this</b>. This makes arrow functions particularly useful for working with object methods and event handlers.  
    </p>

    <p>
    Overall, arrow functions provide a more concise and readable way to write functions in JavaScript, making code easier to understand and maintain.  
    </p>

    <b>Prototype</b>

    <p>
    In JavaScript, every object has an internal property called [[Prototype]] (sometimes referred to as "dunder proto"), which refers to another object or null. This property is used to implement inheritance and to allow objects to inherit properties and methods from their prototypes.  
    </p>

    <p>
    In ES5, you can create a prototype using constructor functions and the prototype property. Here is an example:  
    </p>

    <p>{'function Person(name, age) { '}</p>

    <p>{'this.name = name;'}</p>

    <p>{'this.age = age;'}</p>

    <p>{'} '}</p>

    <p>{'Person.prototype.greet = function() { '}</p>

    <p>{'console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);'}</p>

    <p>{'} '}</p>

    <p>{'const john = new Person("John", 30);'}</p>

    <p>{'john.greet(); // "Hello, my name is John and I am 30 years old."'}</p>

    <p>In this example, we create a constructor function called <b>Person</b> that takes a <b>name</b> and an <b>age</b> as arguments and sets them as properties on the object. 
      We then add a <b>greet</b> method to the prototype of <b>Person </b>using the <b>Person.prototype</b> object. This method logs a greeting message to the console that includes 
      the person's name and age.</p>

    <p>When we create a <b>new</b> object using the new keyword and the <b>Person</b> constructor, 
      the new object's [[Prototype]] property will point to the <b>Person.prototype</b> object. 
      This allows the new object to inherit the <b>greet</b> method from its prototype.</p>

      <p>
      In ES6, you can use the <b>class</b> syntax to define a class and its prototype. Here is the same example using ES6 classes:
      </p>

      <p>{'class Person { '}</p>

      <p>{'constructor(name, age) {'}</p>

      <p>{'this.name = name;'}</p>

      <p>{'this.age = age;'}</p>

      <p>{'}'}</p>

      <p>{'greet() { '}</p>

      <p>{'console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);'}</p>

      <p>{'  }'}</p>

      <p>{'}'}</p>

      <p>{`const john = new Person("John", 30);`}</p>

      <p>{`john.greet(); // "Hello, my name is John and I am 30 years old."`}</p>

      <p>
      In this example, we define a class called <b>Person</b> with a constructor that takes a <b>name </b>and an <b>age</b> and sets them as properties on the object. We then define a <b>greet</b> method directly on the class. Under the hood, the <b>class</b> syntax creates a constructor function and sets its prototype to the class's prototype.  
      </p>

      <p>
      Both ES5 and ES6 use the concept of prototypes to implement inheritance in JavaScript, but the syntax for defining prototypes is different. ES6 classes provide a more concise and intuitive syntax for creating classes and defining their prototypes, while ES5 prototypes provide more flexibility and control over how prototypes are defined.   
      </p>

      <b> Class (static methods)</b>

      <p>
      In ES6, classes were introduced as a way to create object blueprints. Classes are a template for creating objects that encapsulate data and functionality. One feature of classes is the ability to define static methods, which are methods that are called on the class itself rather than on an instance of the class.
      </p>

      <p>
      A static method is a method that belongs to the class itself, rather than to any instance of the class. It can be called on the class without having to create an instance of the class first.    
      </p>

      <p>
      Here's an example of a class with a static method:  
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
      In the example above, the Car class has a static method called compare. This method takes two Car objects as parameters and returns a string indicating whether they have the same make or not. The compare method can be called on the Car class itself, rather than on an instance of the class.  
      </p>

      <p>
      Note that in the compare method, the this keyword is not used, since the method is not called on an instance of the class. Instead, the method takes two Car objects as parameters and compares their make properties.  
      </p>

      <p>
      In ES5, static methods can be defined on a constructor function using the constructor function's prototype property. Here's an example of how the above ES6 class might look in ES5:  
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
      In the ES5 example, the compare method is defined directly on the Car constructor function, rather than on its prototype property. This allows the method to be called on the Car constructor function itself.  
      </p>

      <b>Symbol</b>

      <p>
      In ES6, Symbol is a new primitive data type that represents a unique identifier. Unlike strings or numbers, symbols are guaranteed to be unique and immutable, which makes them useful for creating object keys or properties that are meant to be completely unique.  
      </p>

      <p>To create a symbol, you can use the <b>Symbol()</b> function, like this:</p>

      <p>{'const mySymbol = Symbol();'}</p>

      <p>You can also add a description to a symbol to make it easier to identify it later on, like this:</p>

      <p>{"const mySymbol = Symbol('My Symbol'); "}</p>

      <p>Symbols can be used as object keys or properties, like this:</p>

      <p>{"const mySymbol = Symbol('My Symbol'); "}</p>

      <p>{'const obj = {}; '}</p>

      <p>{"obj[mySymbol] = 'Hello, World!'; "}</p>

      <p>{"console.log(obj[mySymbol]); // Output: Hello, World! "}</p>

      <p>
      One of the main benefits of using symbols is that they cannot be accessed or modified accidentally, because they are unique and cannot be replicated. This makes them ideal for creating private or internal properties in objects.   
      </p>
      <p>
      Another benefit of symbols is that they can be used to define well-known symbols, which are built-in symbols that have a specific meaning or behavior in the language. For example, the Symbol.iterator symbol is used to define the default iterator for an object.   
      </p>
      
      <p>
      Overall, symbols provide a powerful and flexible way to create unique identifiers and define custom behavior for objects in JavaScript.   
      </p>

      <b>Promise</b>

      <p>A Promise is a feature introduced in ES6 that 
      allows you to handle asynchronous operations more easily and in a more organized way.
      </p>

      <p>
      In simple terms, a Promise is an object that represents a value that might not be available yet, but will be at some point in the future. It provides a way to handle the results of asynchronous operations (such as API requests or database queries) without blocking the main thread of execution  
      </p>

      <p>
      A Promise has three states: pending, fulfilled, or rejected. When a Promise is pending, it means that the operation it represents hasn't completed yet. When a Promise is fulfilled, it means that the operation was successful and the result is available. When a Promise is rejected, it means that the operation failed and an error is available.  
      </p>

      <p>
      Here is an example of how to use a Promise to fetch data from an API:   
      </p>

      <p>{"fetch('https://jsonplaceholder.typicode.com/todos/1')"}</p>

      <p>{'.then(response => response.json())'}</p>

      <p>{'.then(data => console.log(data))'}</p>

      <p>{'.catch(error => console.error(error))'}</p>

      <p>
      In this example, <b>fetch</b> is a function that returns a Promise that resolves with the response from the API. The <b>then</b> method is called on the Promise, 
      which takes a callback function that is executed when the Promise is fulfilled. The first <b>then</b> callback parses the response as JSON and returns it. 
      The second then callback logs the parsed data to the console. The <b>catch</b> method is called to handle any errors that occur during the operation.   
      </p>

      <p>Promises can also be created manually using the <b>Promise</b> constructor:</p>

      <p>{"const promise = new Promise((resolve, reject) => { "}</p>

      <p>{"setTimeout(() => { "}</p>

      <p>{" resolve('Success!') "}</p>

      <p>{" }, 1000) "}</p>

      <p>{"}) "}</p>

      <p>{" promise.then(result => console.log(result)) // Output: Success! "}</p>

      <p>
      In this example, the Promise is created with a function that takes two parameters: <b>resolve and reject.</b> The <b>resolve</b> function is called after one second with the argument <b>'Success!'</b>. The <b>then</b> method is called on the Promise, which takes a callback function that is executed when the Promise is fulfilled. The callback logs the result to the console.  
      </p>

      </div>
      )}
      {language === 'ru' && (
        <div>
          <RuEs6 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs6 />
        </div>
      )}
    </div>
  )
}



export default JavaScript6;