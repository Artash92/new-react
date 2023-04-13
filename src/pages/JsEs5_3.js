import React,{useState} from 'react';
import RuEs5_3 from '../lang/RuEs5_3';
import AmEs5_3 from '../lang/AmEs5_3';

 function JsEs5_3() {
 
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

      <h3>Function Concept</h3>
      <p>
      A function is a block of code that can be defined and executed at a later time. It is used to perform a specific task, and 
      it can be called from any part of the program where it is accessible. Functions make the code more organized, reusable and 
      easier to understand.
      </p>
      <h3>Creating a Function</h3>
      <p>
      In JavaScript ES5, a function can be created using the function keyword, 
      followed by the function name, and a set of parentheses. Inside the parentheses, we can define one or more parameters, and inside the curly braces, we define the code to be executed when the function is called.
      </p>
      <b>Example:</b>
      <pre>
  <code>
    {'   function sum(a, b) {\n    return a + b;\n  }'}
  </code>
</pre>
<b>Function Arguments:</b>
<p>
Function arguments are the values that are passed to a function when it is called. We can define one or more parameters inside the parentheses when creating a function. When the function is called, we pass the actual values as arguments.
</p>
<b>Example:</b>
<pre>
  <code>
    {'  function sum(a, b) {\n    return a + b;\n  }\n  var result = sum(5, 10);\n  // Output: 15'}
  </code>
</pre>
<b>Variable scopes:</b>
<p>Variables can have different scopes depending on where they are declared. Here's an example of a variable declared 
  inside a function, which is not accessible outside of that function:</p>
  <b>Example:</b>
  
  <p>{"function showMessage() { "}</p>

  <p>{" var message = 'Hello, World!' ;"}</p>

  <p>{"console.log(message); "}</p>

  <p>{"} "}</p>

  <p>{" showMessage(); //Output:Hello,World! "}</p>

  <p>{" console.log(message); //Output:Uncaught ReferenceError: message is not defined "}</p>

<b>Function expressions:</b>
<p>A function expression is a function that is assigned to a variable. Here's an example:</p>
 
  <code>
    {' var multiply = function(a, b) {\n  return a * b;\n};\n\nvar result = multiply(3, 4);\nconsole.log(result); // Output: 12'}
  </code>
 
<b>Anonymous functions:</b>
<p>An anonymous function is a function without a name. Here's an example of an anonymous function that is immediately 
  invoked:</p>
  
  <code>
    {'(function() {\n  console.log(\'Hello, World!\');\n})();'}
  </code>

<b>Closures</b>
<p>Closures are a feature of JavaScript that allows a function to access and manipulate variables that are outside of its own scope. In other words, a closure is formed when a function is defined inside another function and has access to the parent function's variables.

Here's an example of a closure in JavaScript ES5:</p>
 
  <code>
    {'function outerFunction() {\n  var outerVariable = "I am outside!";\n\n  function innerFunction() {\n    console.log(outerVariable);\n  }\n\n  return innerFunction;\n}\n\nvar closureExample = outerFunction();\nclosureExample(); // Output: "I am outside!"'}
  </code>
 
<p>
In this example, the outerFunction defines a variable outerVariable and a function innerFunction that logs the value of outerVariable. The innerFunction is returned from outerFunction and assigned to the closureExample variable.

When closureExample() is called, it logs the value of outerVariable, which is "I am outside!". This is possible because innerFunction has access to outerVariable through closure, even though outerVariable is not defined within innerFunction.

This is just a simple example of closures in JavaScript ES5, but it demonstrates how powerful and useful they can be. Closures are often used to create private variables and methods in JavaScript, among other things.
</p>
</div>
      )}
      {language === 'ru' && (
        <div>
          <RuEs5_3 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_3 />
        </div>
      )}
    </div>
  )
}



export default JsEs5_3;