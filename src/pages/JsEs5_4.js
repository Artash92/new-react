import React,{useState} from 'react';
import RuEs5_4 from '../lang/RuEs5_4';
import AmEs5_4 from '../lang/AmEs5_4';

 function JsEs5_4() {
  
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
     
      <h3>Recursion </h3>

      <p>
      Recursion is a programming technique where a function calls itself until it reaches a base case. It is often used to solve problems that can be broken down into smaller, similar sub-problems.

      In JavaScript ES5, recursion can be used to traverse through a tree or a nested structure, to perform certain calculations or to generate all possible combinations of a set of elements.

      Here's an example of a function that uses recursion to calculate the factorial of a given number:
      </p>
    
  <code>
    {'function factorial(num) {\n  if (num <= 1) {\n    return 1;\n  } else {\n    return num * factorial(num - 1);\n  }\n}\n\nconsole.log(factorial(5)); // Output: 120'}
  </code>
 
 
<p>In this example, the factorial() function calls itself with a smaller</p>
<p>number until it reaches the base case of  {'num <='} , at which point it</p>
<p>returns 1. The final result is calculated by multiplying all the returned values together. </p> 
  
<p>
It's important to note that recursion can be memory-intensive, especially for large inputs, so it's important to design your recursive functions carefully and ensure they have a base case to prevent infinite loops.
</p>
<b>Example</b>
 
  <code>
    {'function factorial(num) {\n  if (num === 0 || num === 1) {\n    return 1;\n  } else {\n    return num * factorial(num - 1);\n  }\n}\n\nvar result = factorial(5);\nconsole.log(result); // Output: 120'}
  </code>
 
<p>
In the updated example, we've defined a function factorial that takes a single parameter num. The function first checks if the given number is 0 or 1, in which case it immediately returns 1. Otherwise, it calculates the factorial of the number recursively by calling the same function factorial with a decremented value of num and multiplying it with the current value of num.

When we call the factorial function with the argument 5, it recursively calculates the factorial by calling itself with decreasing values until it reaches the base case of num === 1, at which point it returns 1 and the recursion unwinds, returning the final result of 5 * 4 * 3 * 2 * 1 = 120.
</p>
<h3>Object</h3>
<p>
An object is a data structure in JavaScript that allows you to store collections of related data and functionality. It is a key concept in JavaScript and is used extensively throughout the language. Objects are defined using curly braces {} and consist of key-value pairs, where the key is a string and the value can be any data type, including other objects or functions.

Objects are used in JavaScript for a wide variety of purposes, including creating complex data structures, organizing code, and providing a way to encapsulate related data and behavior. They are an important part of object-oriented programming in JavaScript and are a fundamental building block for many of the language's advanced features and libraries
</p>
<b>Explame</b>
 
  <code>
    {'// Creating an object\nvar car = {\n  make: "Toyota",\n  model: "Camry",\n  year: 2021,\n  start: function() {\n    console.log("Starting the car...");\n  }\n};\n\n// Accessing object properties\nconsole.log(car.make); // Toyota\nconsole.log(car.year); // 2021\n\n// Invoking object methods\ncar.start(); // Starting the car...'}
  </code>
 
<b>Properties of an object</b>
 
  <code>
    {'var person = {\n  name: "John",\n  age: 30,\n  gender: "male"\n};\n\nperson.email = "john@example.com";\n\nconsole.log(person.name); // John\nconsole.log(person.email); // john@example.com'}
  </code>
 
<b>Methods of an object</b>
 
  <code>
    {'var calculator = {\n  add: function(a, b) {\n    return a + b;\n  },\n  subtract: function(a, b) {\n    return a - b;\n  }\n};\n\nconsole.log(calculator.add(5, 3)); // 8\nconsole.log(calculator.subtract(5, 3)); // 2'}
  </code>
 
<b>Object-oriented type - array</b>
 
  <code>
    {'// Creating an array\nvar colors = ["red", "green", "blue"];\n\n// Accessing array elements\nconsole.log(colors[0]); // red\nconsole.log(colors[2]); // blue\n\n// Adding a new element to the array\ncolors.push("yellow");\n\n// Looping through the array\nfor(var i = 0; i < colors.length; i++) {\n  console.log(colors[i]);\n}'}
  </code>
 
<b>Properties and methods of a function</b>

<p>{'function greeting(name) {'}</p>

<p>{'console.log("Hello " + name);'}</p>

<p>{'}'}</p>

<p>{'console.log(greeting.length); // 1 (the number of expected arguments)'}</p>

<p>{'// Adding a new property to the function'}</p>

<p>{'greeting.language = "English";'}</p>

<p>{'// Accessing function properties'}</p>

<p>{'console.log(greeting.language); // English'}</p>

<p>{'// Invoking function\ngreeting("John"); // Hello John'}</p>


<h3>this</h3>

<p>
In JavaScript ES5, this is a keyword that refers to the current object or context in which the code is being executed. It can refer to different objects depending on how and where it is used.

When this is used inside a function that is called as a method of an object, it refers to the object itself. For example:
</p>
<p>{'var myObject = {'}</p>

<p>{'name: "John",'}</p>

<p>{'sayHello: function() {'}</p>

<p>{'console.log("Hello, my name is " + this.name);'}</p>

<p>{' }'}</p>

<p>{'};'}</p>

<p>{'myObject.sayHello(); // Output: "Hello, my name is John"'}</p>

<p>
In this example, this refers to the myObject object because sayHello() is being called as a method of myObject.
</p>
<p>
However, when this is used inside a regular function (i.e. not called as a method of an object), it refers to the global object (window in the browser or global in Node.js) by default. For example:
</p>

<p>{'function sayHello() {'}</p>

<p>{'console.log("Hello, my name is " + this.name);'}</p>

<p>{'}'}</p>

<p>{'var name = "John";'}</p>

<p>{'sayHello(); // Output: "Hello, my name is undefined"'}</p>

<p>
In this case, this refers to the global object because sayHello() is not being called as a method of an object. Since the global object does not have a name property, this.name is undefined.

It's important to note that the value of this can be explicitly set using methods like call(), apply(), and bind(). These methods allow you to call a function with a specific this value, regardless of how it is being called.
</p>
<h3>Function as an object</h3>

<p>{'var user = {'}</p>

<p>{'name: "John",'}</p>

<p>{'age: 20'}</p>

<p>{'};'}</p>

<p>{'function foo(a, b) {'}</p>

<p>{'console.log(this.name);'}</p>

<p>{'console.log(a + b);'}</p>

<p>{'}'}</p>

<p>{'//Using the call method to set \'this\' to the user object foo.call(user, 3, 5);'}</p>

<p>{'// Accessing the length property of the function\nconsole.log(foo.length);'}</p>

<h3>Object arguments</h3>
<p>arguments object is a local variable that's available within all functions. It contains an array-like list of the arguments passed to the function.

Here's an example of how to use the arguments object:</p>
 
  <code>
    {'function sum() {\n  var result = 0;\n  for (var i = 0; i < arguments.length; i++) {\n    result += arguments[i];\n  }\n  return result;\n}\n\nvar total = sum(1, 2, 3, 4);\nconsole.log(total); // Output: 10'}
  </code>
 
<p>
In the example above, the sum function accepts any number of arguments, and the arguments object is used to loop through each argument and add them together. The function then returns the total sum.
</p>
<p>Another example of using the arguments object is to create a function that concatenates all the arguments passed in</p>

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
In this example, the concatenate function accepts any number of arguments and concatenates them together into a single string, which is returned.
</p>
</div>
      )}
       {language === 'ru' && (
        <div>
          <RuEs5_4 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_4 />
        </div>
      )}
    </div>
  )
}



export default JsEs5_4;