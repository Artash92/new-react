import React , {useState }from 'react';
import RuEs5_5 from '../lang/RuEs5_5';
import AmEs5_5 from '../lang/AmEs5_5';

 function JsEs5_5() {
 
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
     
      <h1>Array</h1>
      
      <p>
        In JavaScript, an array is a data structure that allows you to store multiple values in a single variable. An array is declared using square brackets, 
        and its elements are separated by commas.
      </p>
      
      <b>Example</b>
     
  <code>
    {' // An array of numbers\nvar numbers = [1, 2, 3, 4, 5];\n\n// An array of strings\nvar fruits = ["apple", "banana", "orange"];'}
  </code>
 

<b>Array Length</b>

<p>The length property of an array returns the number of elements in the array.</p>

<b>Example</b>
 
  <code>
    {'var numbers = [1, 2, 3, 4, 5];\nconsole.log(numbers.length); // Output: 5'}
  </code>
 

<b>Array Methods</b>

<p>Arrays in JavaScript have built-in methods that can be used to manipulate the array data. Some commonly used array methods are:

</p>

<div>

<b>push(): adds one or more elements to the end of an array</b><br/>

<b>pop(): removes the last element from an array</b><br/>

<b>shift(): removes the first element from an array</b><br/>

<b>unshift(): adds one or more elements to the beginning of an array</b><br/>

<b>splice(): adds or removes elements from an array at a specified index</b><br/>

<b>slice(): returns a new array that contains a portion of an existing array</b><br/>

<b>join(): joins all elements of an array into a string</b><br/>

<b>concat(): concatenates two or more arrays</b> 

</div>

<b>Example:</b>

<p>{'var numbers = [1, 2, 3, 4, 5];'}</p>

<p>{'numbers.push(6); // adds 6 to the end of the array'}</p>

<p>{'console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]'}</p>

<hr/>

<p>{'var fruits = ["apple", "banana", "orange"];'}</p>

<p>{'fruits.pop(); // removes the last element from the array'}</p>

<p>{'console.log(fruits); // Output: ["apple", "banana"]'}</p>

<hr />

<p>{'var colors = ["red", "green", "blue"];'}</p>

<p>{'colors.shift(); // removes the first element from the array'}</p>

<p>{'console.log(colors); // Output: ["green", "blue"]'}</p>

<hr/>

<p>{'var cars =["BMW","Audi","Mercedes"];'}</p>

<p>{'cars.unshift("Toyota","Honda"); //adds two elements to the beginning of the array'}</p>

<p>{'console.log(cars);//Output:["Toyota","Honda","BMW","Audi","Mercedes"]'}</p>

<hr/>

<p>{'var animals = ["dog","cat","elephant","lion"];'}</p>

<p>{'animals.splice(2,0,"bear","zebra"); // adds"bear"and"zebra" at index 2'}</p>

<p>{'console.log(animals); // Output:["dog","cat","bear","zebra","elephant","lion"]'}</p>

<hr/>

<p>{'var letters = ["a", "b", "c", "d", "e"];'}</p>

<p>{'var slice1 = letters.slice(0, 2); // returns ["a", "b"]'}</p>

<p>{'var slice2 = letters.slice(2); // returns ["c", "d", "e"]'}</p>

<p>{'console.log(slice1);'}</p>

<p>{'console.log(slice2);'}</p>

<hr/>

<p>{'var fruits = ["apple", "banana", "orange"];'}</p>

<p>{'var fruitString = fruits.join(","); // joins array elements with a comma'}</p>

<p>{'console.log(fruitString); // Output: "apple,banana,orange"'}</p>

<hr />

<p>{'var nums1 = [1, 2, 3];'}</p>

<p>{'var nums2 = [4, 5, 6];'}</p>

<p>{'var nums3 = nums1.concat(nums2); // concatenates nums1 and nums2'}</p>

<p>{'console.log(nums3); // Output: [1, 2, 3, 4, 5, 6]'}</p>


<b>Array Methods | Combining Arrays</b>

<p>
You can combine two or more arrays in JavaScript using the concat() method. This method returns a new array that contains all the elements of the original arrays
</p>

<h3>forEach and map </h3>

<b>
forEach is used to iterate over each element of an array and perform a function on each element. It takes a function as an argument and passes each element of the array as an argument to that function.
</b>
<p>Here is an example of using forEach to print out each element of an array:</p>
 
  <code>
    {'var arr = [1, 2, 3, 4, 5];\n\narr.forEach(function(element) {\n  console.log(element);\n});'}
  </code>
 
<p>This will print out:</p>

<p>1<br/> 2 <br/>3<br/>4<br/> 5</p>

<p>
map, on the other hand, is used to create a new array with the results of calling a function on each element in the original array. It also takes a function as an argument and passes each element of the array as an argument to that function. The function should 
return a new value to be added to the new array.
</p>
<p>
Here is an example of using map to create a new array with each element of the original array doubled:
</p>
 <p>{'var arr = [1, 2, 3, 4, 5];'}</p>

 <p>{'var doubledArr = arr.map(function(element) {'}</p>

  <p>{' return element * 2;'}</p>

  <p>{'});'}</p>

  <p>{'console.log(doubledArr);'}</p>
   
<p>This will print out</p>

<p>[2, 4, 6, 8, 10 ]</p>

<p>
In summary, forEach is used to perform an operation on each element of an array, while map is used to create a new array with the results of calling a function on each element of the original array
</p>

<h3>apply method</h3>

<p>
In JavaScript, the apply() method is used to call a function with a given this value and arguments provided as an array (or an array-like object).
</p>

<p>The syntax for using the apply() method is:</p>
 
  <p>{'functionName.apply(thisValue, [argumentsArray]) '}</p>
 
<b>Where</b>

<p>functionName is the name of the function that you want to call.</p>

<p>thisValue is the value that you want to use as the this value inside the function. This parameter is optional. If you omit it, the global object will be used.</p>

<p>argumentsArray is an array or an array-like object that contains the arguments that you want to pass to the function. This parameter is also optional. If you don't need to pass any arguments, you can omit it.</p>

<p>Here's an example of using the apply() method with an array:</p>
    
  <code>
    {'var numbers = [1, 2, 3, 4, 5];\n\nfunction sumArray() {\n  var sum = 0;\n  for (var i = 0; i < this.length; i++) {\n    sum += this[i];\n  }\n  return sum;\n}\n\nvar result = sumArray.apply(numbers);\nconsole.log(result); // Output: 15'}
  </code>
 
<p>In this example, we have an array of numbers and a function sumArray() that calculates the sum of all the elements in an array. We call the apply() method on the sumArray() function with the numbers array as the this value. The apply() method passes the array as the this value and the sumArray() function calculates 
  the sum of all the elements in the array and returns it.</p>
  <p>
  Note that the apply() method is similar to the call() method. The only difference is that the call() method accepts the arguments as a comma-separated list, while the apply() method accepts the arguments as an array.
  </p>
  <h3>Self-Invoking Function</h3>
  <p>
  A self-invoking function is a JavaScript function that runs automatically when it's defined. It's also known as an immediately invoked function expression (IIFE). This function is wrapped in parentheses and then immediately called using the opening and closing parentheses.
  </p>
  <p>Here's an example of a self-invoking function:</p>
 
  <code>
    {'(function() {\n  console.log("Hello, World!");\n})();'}
  </code>
 
<p>
In this example, the function is defined and then immediately called using the opening and closing parentheses. This will output "Hello, World!" to the console.
</p>
<p>
Self-invoking functions are commonly used to create a private scope in which variables and functions can be defined without polluting the global namespace. Here's an example:
</p>
 
  <code>
    {'(function() {\n  var x = 10;\n  \n  function foo() {\n    console.log(x);\n  }\n  \n  foo(); // Outputs 10\n})();'}
  </code>
 
<p>
In this example, the variables x and the function foo are defined inside the self-invoking function. They are not accessible from outside the function, which helps to prevent naming conflicts with other code.
</p>
<p>
Self-invoking functions can also take arguments, like regular functions. Here's an example:
</p>
 
  <code>
    {'(function(x, y) {\n  console.log(x + y);\n})(10, 20); // Outputs 30'}
  </code>
 
<p>
In this example, the self-invoking function takes two arguments (x and y) and outputs their sum to the console.
</p>
<p>
Self-invoking functions are a powerful tool in JavaScript for creating private scopes, preventing naming conflicts, and managing global variables.
</p>
</div>
      )}
       {language === 'ru' && (
        <div>
          <RuEs5_5 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_5 />
        </div>
      )}
    </div>

  )
}



export default JsEs5_5;