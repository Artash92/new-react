import React,{useState} from 'react'
import RuEs5_1 from '../lang/RuEs5_1';
import AmEs5_1 from '../lang/AmEs5_1';


function JsEs5_1() {
   
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
        <button onClick={handleRussianClick}>Русский</button>
        <button onClick={handleArmenianClick}>Հայերեն</button>
      </div>
 {language === 'en' && (
        <div>
          <h1>JavaScript</h1>
          
      <p>
      JavaScript was created in 1995 by Brendan Eich while he was working at Netscape Communications Corporation. 
      The language was originally called Mocha, but was later renamed to LiveScript before finally being named JavaScript. 
      The name change was mainly due to marketing reasons and to capitalize on the popularity of Java at the time. 
      Brendan Eich is an American technologist and programmer who has worked for companies like Mozilla, Netscape, and Brave Software. 
      He is considered to be the creator of JavaScript and has made significant contributions to other programming languages as well.
      </p>
      <h3>ECMAScript defines 7 data types:</h3>
      <ul>
        <li>Number: represents numeric values, including integers and floating-point numbers. Examples: 1, 3.14, -42.</li>
        <li>String: represents textual data, enclosed in single or double quotes. Examples: "hello", 'world', "123".</li>
        <li>Boolean: represents a logical entity and can have only two values: true or false. Examples: true, false.</li>
        <li>Undefined: represents a variable that has been declared but has not been assigned a value. Examples: var x; console.log(x); // Output: undefined</li>
        <li>Null: represents the intentional absence of any object value. Examples: var x = null; console.log(x); // Output: null</li>
        <li>Symbol: represents a unique identifier that is not exposed to the calling code. Example: const sym1 = Symbol('foo');</li>
        <li>Object: represents a collection of related data and/or functionality. Examples: var obj = {'{'} name: "John", age: 30 {'}'}; var arr = [1, 2, 3];</li>
      </ul>
      <h2>Boolean Data Type</h2>
      <p>The Boolean data type has only two values: true and false. It is commonly used in comparison operations using the following operators:</p>
      <ul>
        <li>=== and ==</li>
        <li>{'>'} and {'<'}=</li>
        <li>{'>='} and {'<'}=</li>
      </ul>
      <p>Examples:</p>
      <ul>
        <li>10 {'<'} 16 == true</li>
        <li>16 {'>'} 10 == false</li>
      </ul>
      <h2>Boolean Operators</h2>
      <ul>
        <li>NOT (!)</li>
        <li>AND (&&)</li>
        <li>OR (||)</li>
      </ul>
      <p>When evaluating a condition, the Boolean data type is used. The following values are converted to false: 0 and an empty string. The following values are converted to true: all other numbers and non-empty strings.</p>
      <h3>Examples:</h3>
      <p>5 && 6 // 6</p>
  <p>6 && 0 // 0</p>
  <p>true && false // false</p>
  <p>5 || 6 // 5</p>
  <p>0 || false // false</p>
  <p>false || true // true</p>
  <p>6 || 7 // 6</p>
  <p>0 || false // false</p>
  <p>false || true // true</p>
  <p>50 && 6 // 6</p>
  <p>10 && 0 // 0</p>
  <p>'Hello' && 'World'// "World"</p>
  <p>''hello'' && '' '' // " "</p>
  <p>!true // false</p>
  <h3>Expressions and Statements</h3>
  <p>These are examples of expressions and operators in JavaScript. An expression is a combination of values, variables, operators, that can be evaluated to some value. Expressions can be used in other expressions or in statements.</p>
<p>Operators such as *, +, etc., are used to create expressions. The first three lines show examples of expressions with different data types: numbers, strings, and boolean values.</p>
<p>Operators can be used in the form of operator expressions, which are part of operators. The next three lines show examples of operator expressions, which are operators.</p>
<p>Each operator expression ends with an operator (;), which makes it a statement.</p>
  <ul>
    <li><strong>Expression:</strong> 8 * 3 + 2</li>
    <li><strong>Expression:</strong> "Hello, there!"</li>
    <li><strong>Expression:</strong> false</li>
    <li><strong>Statement:</strong> 8 * 3 + 2;</li>
    <li><strong>Statement:</strong> "Hello, there!";</li>
    <li><strong>Statement:</strong> false;</li>
  </ul>
  <h2>JavaScript Special Values and Functions</h2>
  <h5>NaN</h5>
  <p>NaN stands for "Not a Number" and is a special value in JavaScript that represents an undefined or unrepresentable value resulting from an arithmetic operation. For example, dividing zero by zero will result in NaN.</p>
  <h5>typeof</h5>
  <p>typeof is a unary operator in JavaScript that returns a string indicating the data type of an operand. For example, typeof "hello" will return "string" and typeof 42 will return "number".</p>
  <h5>isNaN()</h5>
  <p>isNaN() is a global function in JavaScript that returns true if the argument is NaN (Not a Number), and false otherwise. For example, isNaN("hello") will return true, and isNaN(42) will return false.</p>
  <h5>isFinite()</h5>
  <p>isFinite() is a global function in JavaScript that returns true if the argument is a finite number, and false otherwise. For example, isFinite(42) will return true, and isFinite(Infinity) will return false.</p>
  <h2>Variables</h2>
<ul>
  <li>Declaration of variables (a-A, $, _)</li>
  <ul>
    <li><code>var studentName;</code></li>
    <li><code>var firstName, lastName, age;</code></li>
  </ul>
  <li>Declaration and assignment of variables</li>
  <ul>
    <li><code>var carModel = "Tesla";</code></li>
    <li><code>var carModel = "Tesla", year = 2022, isElectric = true;</code></li>
  </ul>
  <li>Usage of variables</li>
  <ul>
    <li><code>var quantity = 5;</code></li>
    <li><code>quantity = quantity + 3;</code></li>
    <li><code>quantity += 2;</code></li>
  </ul>
</ul>
<h2>Null and Undefined</h2>
  <ul>
    <li>Null is a special value in JavaScript that represents the absence of any object value. It is a primitive value and represents a deliberate non-value or empty value. It is often used to indicate that a variable has no value or that a function returns no value.</li>
    <li>Undefined is a value that a variable can have if it has not been assigned a value or if it has been explicitly assigned the value undefined. It is also a primitive value in JavaScript.</li>
    <li>The typeof operator is used to determine the type of a value. If the value is undefined, typeof returns the string "undefined". If the value is null, typeof returns the string "object". This is a known bug in JavaScript that has existed since the language was first created.</li>
    <li>Null and undefined are often confused with each other because they both represent the absence of a value. However, they are not the same thing. null represents a deliberate absence of a value, while undefined represents an accidental absence of a value.</li>
    <li>The == operator in JavaScript performs type coercion, which means that it will try to convert values of different types to a common type before comparing them. When comparing null and undefined with ==, the result is true because they are both considered falsy values.</li>
    <li>The === operator in JavaScript performs a strict comparison that does not perform type coercion. When comparing null and undefined with ===, the result is false because they are not the same type of value.</li>
    <li>The parseInt, parseFloat, and Number functions are used to convert a string to a number. When passed the value null, all three functions return NaN, which stands for "Not a Number". This is because null is not a valid number and cannot be converted to a number.</li>
  </ul>
  </div>
     )}
      {language === 'ru' && (
        <div>
          <RuEs5_1 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_1 />
        </div>
      )}
    
    </div>
  )
}




export default   JsEs5_1;