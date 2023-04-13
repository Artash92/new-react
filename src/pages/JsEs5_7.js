import React,{ useState } from 'react';
import RuEs5_7 from '../lang/RuEs5_7';
import AmEs5_7 from '../lang/AmEs5_7';

 function JsEs5_7() {
  
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
      
      
      <h1>Object-Oriented Programming, or OOP</h1>
     
      <p>Object-Oriented Programming, or OOP, is a programming paradigm that emphasizes objects, classes, and encapsulation. In JavaScript ES5, 
        OOP is implemented through the use of constructor functions and prototypes.</p>
     
      <p>
      A constructor function is a special function that is used to create and initialize objects. Constructor functions are defined using the function keyword, and their names usually start with a capital letter to distinguish them from regular functions. The this keyword is used inside the constructor 
      function to refer to the object being created. Here's an example:
      </p>

      <p>{'function Person(name, age) {'}</p>

      <p>{'this.name = name;'}</p>

      <p>{'this.age = age;'}</p>

      <p>{'}'}</p>

      <p>{'var person1 = new Person("Alice", 25);'}</p>

      <p>{'var person2 = new Person("Bob", 30);'}</p>

      <p>{'console.log(person1.name); // "Alice"'}</p>

      <p>{'console.log(person2.age); // 30'}</p>

<p>In this example, the Person function is used as a constructor function to create two 
  Person objects, person1 and person2. The name and age properties are set using the this keyword inside the constructor function.
</p>
<p>
In addition to constructor functions, prototypes are used to implement inheritance and share methods and properties between objects. Every object in JavaScript has a prototype, which is another object that the object inherits from. Properties and methods can be added to an object's prototype using the prototype property. Here's an example:
</p>

<p>{'function Person(name, age) {'}</p>

<p>{'this.name = name;'}</p>

<p>{' this.age = age;'}</p>

<p>{'}'}</p>

<p>{'Person.prototype.greet = function() {'}</p>

<p>{'console.log("Hello, my name is" + this.name + "and I am" + this.age + "years old.");'}</p>

<p>{'}'}</p>

<p>{'var person1 = new Person("Alice", 25);'}</p>

<p>{'var person2 = new Person("Bob", 30);'}</p>

<p>{'person1.greet(); // "Hello, my name is Alice and I am 25 years old."'}</p>

<p>{'person2.greet(); // "Hello, my name is Bob and I am 30 years old."'}</p>

<p>
In this example, a greet method is added to the Person prototype using the prototype property. This method can then be called on any Person object, as demonstrated by the person1.greet() and person2.greet() calls. 
</p>
<p>
Another OOP concept in JavaScript ES5 is encapsulation, which refers to the practice of hiding implementation details and exposing only the necessary interfaces to the outside world. This can be achieved using closures, which allow functions to access variables in their outer scope even after the outer function has returned. Here's an example: 
</p>
 
  <code>
    {'function Counter() {\n  var count = 0;\n\n  this.increment = function() {\n    count++;\n    console.log(count);\n  };\n\n  this.decrement = function() {\n    count--;\n    console.log(count);\n  };\n}\n\nvar counter1 = new Counter();\nvar counter2 = new Counter();\n\ncounter1.increment(); // 1\ncounter1.increment(); // 2\ncounter1.decrement(); // 1\n\ncounter2.increment(); // 1 '}
  </code>
 
<p>
In this example, the Counter constructor function creates objects with increment and decrement methods, which access a private count variable using closures. This ensures that the count variable is hidden from the outside world and can only be accessed through the methods provided by the Counter object. 
</p>
<b>Object-Oriented Programming (OOP) with primitive values in JavaScript ES5</b>

<p>{'function Person(name, age, gender) {'}</p>

<p>{'this.name = name;'}</p>

<p>{' this.age = age;'}</p>

<p>{'this.gender = gender;'}</p>

<p>{' this.printDetails = function() {'}</p>

<p>{'console.log("Name: " + this.name);'}</p>

<p>{'console.log("Age: " + this.age);'}</p>

<p>{'console.log("Gender: " + this.gender);'}</p>

<p>{'}'}</p>

<p>{'}'}</p>

<p>{'var person1 = new Person("John", 25, "male");'}</p>

<p>{'var person2 = new Person("Jane", 30, "female");'}</p>

<p>{'person1.printDetails();'}</p>

<p>{'person2.printDetails();'}</p>

<p>{'var bool = new Boolean(true);'}</p>

<p>{'console.log(bool.valueOf()); // true'}</p>

<p>{'var str = new String("Hello");'}</p>

<p>{'console.log(str.concat(" World")); // "Hello World"'}</p>

<p>{'var num = new Number(10);'}</p>

<p>{'console.log(num.valueOf() + 5); // 15'}</p>

<p>
In this example, we define a Person constructor function to create person objects with name, age, and gender properties. We also define a printDetails method on the Person object to print out the person's details.  
</p>
<p>
We then create two Person objects using the constructor function and call the printDetails method for each object.
</p>
<p>
Next, we create Boolean, String, and Number objects using their respective constructor functions and demonstrate some of their methods, such as valueOf, concat, and basic arithmetic operation  
</p>
<b>In JavaScript ES5, we can create objects using the constructor functions Object and Array. 
  This is a form of OOP called constructor-based object creation.
</b>
<p>
To create an object using a constructor function, we use the new keyword followed by the function name. For example, to create an object using the Object constructor function, we can do:
</p>

<p>{'var person = new Object();'}</p>

<p>{'person.name = "John";'}</p>

<p>{'person.age = 30;'}</p>

<p>{'person.job = "Developer";'}</p>

<p>
In the above example, we create a new object person using the Object constructor function. We then add properties to this object using dot notation.  
</p>
<p>
Similarly, we can create an array using the Array constructor function:  
</p>

<p>{'var arr = [];'}</p>

<p>{'arr.push(1);'}</p>

<p>{'narr.push(2);'}</p>

<p>{'arr.push(3);'}</p>

<p>{'console.log(arr); // [1, 2, 3]'}</p>


<p>
In the above example, we create a new array arr using the Array constructor function. We then add elements to this array using the push method.  
</p>
<p>
Constructor-based object creation is useful when we need to create multiple objects of the same type. We can define a constructor function that sets the initial values of the object properties, and then create new objects using this constructor.  
</p>
<p>
For example, suppose we want to create objects representing cars. We can define a constructor function like this:  
</p>

<p>{'function Car(make, model, year) {'}</p>

<p>{' this.make = make;'}</p>

<p>{' this.model = model;'}</p>

<p>{' this.year = year;'}</p>

<p>{'}'}</p>

<p>{'var car1 = new Car("Honda", "Civic", 2020);'}</p>

<p>{'var car2 = new Car("Toyota", "Corolla", 2021);'}</p>

<p>
In the above example, we define a constructor function Car that takes three parameters (make, model, and year) and sets the corresponding properties of the object using the this keyword. We then create two car objects (car1 and car2) using this constructor.  
</p>
<b>OOP I new RegExp()</b>

<p>{'var str = "Hello, world!";'}</p>

<p>{'var regex = new RegExp(\'\\\\w\', \'g\');'}</p>

<p>{'var matches = str.match(regex);'}</p>

<p>{'console.log(matches); // ["H", "e", "l", "l", "o", "w", "o", "r", "l", "d"]'}</p>

<p>
In the example above, we create a regular expression that matches any word character (\w) and use the g flag to perform a global search. We then use the match() method to find all the matches in the string str. Finally, we log the array of matches to the console.
</p>
<p>
Note that we need to escape the backslash character when passing the regular expression pattern as a string to the RegExp constructor. This is because the backslash character is used to escape special characters in regular expressions, and we need to escape it in the string as well.  
</p>
<b>Prototype __proto__</b>
<p>
Prototype-based programming is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from.  
</p>
<p>
In ES5, you can create a prototype by using the Object.create() method, which takes an object as its parameter and creates a new object with its prototype set to that object. You can then add properties and methods to the prototype object, which will be inherited by any objects that are created with it as their prototype.  
</p>
<p>
Here's an example of creating a prototype for a Person object  
</p>

<p>{'var personPrototype = {'}</p>

<p>{'greeting: function() {'}</p>

<p>{'console.log("Hello, my name is " + this.name);'}</p>

<p>{'} ,'}</p>

<p>{'farewell: function() {'}</p>

<p>{'console.log("Goodbye!");'}</p>

<p>{'}'}</p>

<p>{'};'}</p>

<p>{'var john = Object.create(personPrototype);'}</p>

<p>{'john.name = "John";'}</p>

<p>{'john.greeting(); // outputs: "Hello, my name is John"'}</p>

<p>
In this example, we first define a personPrototype object with a greeting() method and a farewell() method. Then, we create a new Person object john by calling Object.create(personPrototype) and setting its name property to "John". Since john is created with personPrototype as its prototype, it inherits the greeting() method from the prototype object and can call it using john.greeting().  
</p>
<b>instanceof</b>
<p>
In JavaScript ES5, instanceof is an operator that is used to check whether an object belongs to a particular class or not. It returns a boolean value indicating whether an object is an instance of a specified class or its subclasses.  
</p>
<p>
The syntax for instanceof is as follows:  
</p>
<p>
object instanceof constructor  
</p>
<p>
Here, object is the name of the object to be checked and constructor is the name of the constructor function or class. The instanceof operator checks the prototype chain of the object and returns true if the object is an instance of the constructor function or class, otherwise it returns false.  
</p>
<p>
Here is an example:  
</p>

<p>{'function Animal(name) {'}</p>

<p>{'this.name = name;'}</p>

<p>{'}'}</p>

<p>{'function Dog(name) {'}</p>

<p>{'Animal.call(this, name);'}</p>

<p>{' }'}</p>

<p>{'Dog.prototype = Object.create(Animal.prototype);'}</p>

<p>{'var myDog = new Dog("Buddy");'}</p>

<p>{'console.log(myDog instanceof Dog);  // true'}</p>

<p>{'console.log(myDog instanceof Animal); // true'}</p>

<p>
In this example, we define two classes Animal and Dog. Dog inherits from Animal. We create a new Dog object and check if it is an instance of both Dog and Animal using the instanceof operator. Both checks return true, because myDog is an instance of both classes.  
</p>
<p>
In summary, instanceof is used to determine whether an object is an instance of a particular class or its subclasses by checking its prototype chain.  
</p>
</div>
      )}
  
  {language === 'ru' && (
        <div>
          <RuEs5_7 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_7 />
        </div>
      )}
    </div>
  )
}



export default JsEs5_7;