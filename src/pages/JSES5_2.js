import React , { useState } from 'react'
import RuEs5_2 from '../lang/RuEs5_2';
import AmEs5_2 from '../lang/AmEs5_2';

 function JsEs5_2() {
 
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
        <h3>JavaScript Loops and Conditionals</h3>
  <b>1. The while loop</b>
  <p>The while loop is used to execute a block of code repeatedly while a specified condition is true.</p>

<p>Here is an example:</p>
  
   <p>{'var i = 0; // initialize the counter variable'}</p> 

   <p>{'while (i < 5) { // set the condition'}</p>

   <p>{'console.log(i); // execute the code block'}</p>

   <p>{'i++; // update the counter variable'}</p>

   <p>{'}'}</p>
   
  <p>
  In this example, the loop will run as long as the value of i is less than 5. The code block will be executed each time the loop runs, and the value of i will be incremented by 1 until it reaches 5.
The output of this code will be:
<br/>0<br/>1<br/>2<br/>3<br/>4
  </p>
  <b>2. The for loop</b>
  <p>The for loop is used to execute a block of code a specified number of times.
Here is an example:</p>
<pre>
    <code>
      {'for (var i = 0; i < 5; i++) {\n  console.log(i);\n}'}
    </code>
  </pre>
  <p>
  In this example, the loop will run 5 times, since the condition specifies that i must be less than 5. The code block will be executed each time the loop runs, and the value of i will be incremented by 1 each time.

The output of this code will be the same as the previous example:
<br/>0<br/>1<br/>2<br/>3<br/>4
  </p>
  <b>3. The do-while loop</b>
  <p>
  The do-while loop is similar to the while loop, but it executes the code block at least once, even if the condition is initially false.
Here is an example:
  </p>
  <p>{'var i = 0; // initialize the counter variable'}</p>

  <p>{'do {'}</p>

  <p>{'console.log(i); // execute the code block'}</p>

  <p>{'i++; // update the counter variable'}</p>

  <p>{'}'}</p>

  <p>{'while (i < 5); // set the condition'}</p>

  <p>
  In this example, the loop will run at least once, since the condition is checked after the code block is executed. The code block will be executed each time the loop runs, and the value of i will be incremented by 1 each time, until it reaches 5.
The output of this code will be the same as the previous examples:
<br/>0<br/>1<br/>2<br/>3<br/>4
  </p>
  <b>4. The ++ and -- operators</b>
  <p>
  The ++ and -- operators are used to increment or decrement a variable by 1.
  Here are some examples:
  </p>
  <pre>
    <code>
      {'var i = 0; // initialize a variable\ni++; // increment the variable\nconsole.log(i); // output: 1\n\nvar j = 2; // initialize another variable\nj--; // decrement the variable\nconsole.log(j); // output: 1'}
    </code>
  </pre>
  <p>These operators are often used in loops to keep track of the current iteration.</p>
  <b>5. The if, else, and else if statements</b>
  <p>
  The if statement is used to execute a block of code if a specified condition is true. The else statement is used to execute a block of code if the condition is false. The else if statement is used to test multiple conditions.
Here is an example:
  </p>
  <pre>
    <code>
      {'var x = 10; // initialize a variable\nif (x > 10) { // check the condition\n  console.log("x is greater than 10")'}
    </code>
  </pre>
  <h3>Conditional (ternary) Operator</h3>
  <p>
  The Conditional (ternary) Operator is a shorthand way of writing an if-else statement in JavaScript. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

The syntax for the conditional operator is: (condition) ? true-value : false-value

Here are some examples of using the conditional operator in JavaScript:
  </p>
 
  <b>Example 1:</b>
  <code>
  <p>{'var a = 5;'}</p>

  <p>{'var result = (a == 5) ? "true" : "false";'}</p>

  <p>{'document.getElementById("example1"). innerHTML = result;'}</p>
  </code>
   
<p>
Output: true

Explanation: In this example, we set the value of variable a to 5, and then we use the conditional operator to check if a is equal to 5. Since it is true, the value "true" is returned and assigned to the variable result, which is then printed in the HTML div element.
</p>
<b>Example 2:</b>

<p>{' var a = 10;'}</p>

<p>{'var result = (a == 5) ? "true" : "false";'}</p>

<p>{'document.getElementById("example2"). innerHTML = result;'}</p>

<p>
Output: false

Explanation: In this example, we set the value of variable a to 10, and then we use the conditional operator to check if a is equal to 5. Since it is false, the value "false" is returned and assigned to the variable result, which is then printed in the HTML div element.
</p>
<b>Example 3:</b>

<p>{'var a = 7;'}</p>

<p>{'var result = ( a > 10) ? "greater than10":(a < 5) ? "less than 5":"between5and10";'}</p>

<p>{'document.getElementById("example3"). innerHTML = result;'}</p>


<p>
Output: between 5 and 10

Explanation: In this example, we set the value of variable a to 7, and then we use the conditional operator to check if a is greater than 10. Since it is false, we move to the second condition which checks if a is less than 5. Since this is also false, we move to the third condition which returns the value "between 5 and 10" since it is the only option left. The result is then printed in the HTML div element.
</p>
</div>

)}

{language === 'ru' && (
        <div>
          <RuEs5_2 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_2 />
        </div>
      )}
    </div>
  )
}



export default JsEs5_2;