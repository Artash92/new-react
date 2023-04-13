import React, {useState} from 'react';
import AmJquery from '../lang/AmJquery';
import RuJquery from '../lang/RuJquery';

function Jquery() {
  
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
        
        
        
        <h1>JavaScript(JQuery)</h1>

<p>
jQuery is a JavaScript library that simplifies the process of writing JavaScript code and working with HTML documents. It was created in 2006 by John Resig and is currently one of the most popular JavaScript libraries.    
</p>

<p>
jQuery provides a variety of functions for working with the Document Object Model (DOM), as well as for working with AJAX (Asynchronous JavaScript and XML) and creating animations. It also simplifies writing cross-browser code because the jQuery library automatically handles browser compatibility issues.
</p>

<p>Here are some examples of how jQuery can be used:</p>

<p>Manipulating DOM elements:</p>

<p>{'// Changing the text of an element with ID "myElement"'}</p>

<p>{"$('#myElement').text('New Text'); "}</p>

<p>{'// Adding a new element to the page '}</p>

<p>{"$('body').append('<div>New Element</div>');"}</p>

<p>2. Handling events:</p>

<p>{'// Handling the click event of a button with ID "myButton" '}</p>

<p>{"$('#myButton').click(function() { "}</p>

<p>{" alert('Button clicked!');"}</p>

<p>{"});"}</p>

<p>3. Working with AJAX:</p>

<p>{'// Making an AJAX request to a server and updating a page element with the response '}</p>

<p>{" $.get('https://example.com/api/data', function(response) { "}</p>

<p>{" $('#myElement').text(response); "}</p>

<p>{" }); "}</p>

<p>Overall, jQuery is a powerful and versatile tool for simplifying JavaScript development and making it easier to create dynamic and interactive web pages.</p>

<b>To include jQuery in an HTML document, you can use the following steps:</b>

<p>1. Download the jQuery library from the official website <a href="https://jquery.com/download/" target='_blank' > 👉🏼 (https://jquery.com/download/)</a> or use a CDN (Content Delivery Network) link. </p>

<p>2. Create a new HTML file and add the following code inside the "head" section of your HTML document to include the jQuery library:</p>

<p>{'<head>'}</p>

<p>{'<script src="path/to/jquery.js"></script>'}</p>

<p>{'</head>'}</p>

<p>Replace "path/to/jquery.js" with the actual path where the jQuery library is stored on your server, or use the CDN link:</p>

<p>{'<head>'}</p>

<p>{' <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> '}</p>

<p>{'</head>'}</p>

<p>3. Once you have included the jQuery library in your HTML document, you can start using it by writing JavaScript code that references the jQuery library.</p>

<p>For example, to change the text of an HTML element with an ID of "myElement", you can use the following code:</p>

<p>{'<body>'}</p>

<p>{'<div id="myElement">Hello World!</div>'}</p>

<p>{'<script>'}</p>

<p>{'$(document).ready(function() {'}</p>

<p>{'$("#myElement").text("New text!");'}</p>

<p>{'});'}</p>

<p>{'</script>'}</p>

<p>{'</body>'}</p>

<p>In this example, we are using jQuery to select the element with the ID "myElement" and change its text to "New text!". The code is wrapped in a document ready function, which ensures that the code is executed only after the document has finished loading.</p>

<p>Overall, including jQuery in an HTML document is a simple process that involves referencing the jQuery library and writing JavaScript code that uses the library to manipulate HTML elements.</p>

<p>jQuery syntax is a combination of CSS-style selectors and JavaScript code, which makes it easy to select and manipulate HTML elements. Here are some examples of jQuery syntax:</p>

<b>1. Selecting elements</b>
<p>To select an HTML element, you can use the jQuery function, which takes a CSS-style selector as its argument. For example, to select all "p" elements on the page, you can use the following code:</p>

<p>{"$('p')"}</p> 

<p>You can also chain selectors to select elements based on their relationship to other elements. For example, to select all "p" elements that are children of a "div" element, you can use the following code:</p>

<p>{"$('div > p')"}</p>

<b>2. Modifying elements</b>
<p>Once you have selected an element, you can modify its content, attributes, and CSS properties using jQuery. For example, to change the text of all "p" elements on the page, you can use the following code:</p>

<p>{"$('p').text('New text')"}</p>

<p>{'To add a class to an element, you can use the "addClass" method: '}</p>

<p>{"$('p').addClass('highlight')"}</p>

<b>3.Handling events</b>

<p>You can use jQuery to handle events such as clicks, mouseovers, and keypresses. For example, to handle the click event of a button with an ID of "myButton", you can use the following code:</p>

<p>{"$('#myButton').click(function() {"}</p>    
    
<p>{" alert('Button clicked!') "}</p> 

<p>{"})"}</p>

<b>4. Working with AJAX</b>

<p>jQuery makes it easy to work with AJAX requests. For example, to make a GET request to a URL and handle the response, you can use the following code:</p>

<p>{"$.get('https://example.com/data', function(response) {"}</p>

<p>{"console.log(response)"}</p>

<p>{"}) "}</p>

<p>Overall, jQuery syntax is easy to learn and use, and it provides a powerful way to manipulate HTML elements and handle events in your web applications.</p>

<b>jQuery Traversing methods are used to navigate and find elements in a DOM tree. The following are some examples of traversing methods that deal with sibling elements.</b>    

<b>1. next() method:</b> 

<p>The next() method returns the next sibling element of the selected element. For example:</p>

<p>{'$(document).ready(function(){ '}</p> 

<p>{'$("h2").next().css("background-color", "yellow");'}</p>

<p>{'}); '}</p>

<p>This code selects all "h2" elements and applies a CSS style to their next sibling element by changing its background color to yellow</p>

<b>2. prev() method:</b>

<p>The prev() method returns the previous sibling element of the selected element. For example:</p>

<p>{'$(document).ready(function(){'}</p>

<p>{' $("h2").prev().css("background-color", "yellow");'}</p>

<p>{'});'}</p>

<p>This code selects all "h2" elements and applies a CSS style to their previous sibling element by changing its background color to yellow.</p>
 
<b>3. nextAll() method:</b>

<p>The nextAll() method returns all the next sibling elements of the selected element. For example</p>

<p>{'$(document).ready(function(){'}</p>

<p>{'$("h2").nextAll().css("background-color", "yellow");'}</p>

<p>{'}); '}</p>

<p>This code selects all "h2" elements and applies a CSS style to all their next sibling elements by changing their background color to yellow.</p>

<b>4. prevAll() method:</b> 

<p>The prevAll() method returns all the previous sibling elements of the selected element. For example:</p>

<p>{'$(document).ready(function(){'}</p> 

<p>{'$("h2").prevAll().css("background-color", "yellow");'}</p>
    
<p>{'}); '}</p> 

<p>This code selects all "h2" elements and applies a CSS style to all their previous sibling elements by changing their background color to yellow</p>

<b>5. siblings() method:</b>

<p>The siblings() method returns all the sibling elements of the selected element. For example:</p>

<p>{'$(document).ready(function(){'}</p>

<p>{'$("h2").siblings().css("background-color", "yellow");'}</p>

<p>{'});'}</p>

<p>This code selects all "h2" elements and applies a CSS style to all their sibling elements by changing their background color to yellow.</p>

<p>Overall, these traversing methods allow you to easily navigate and select sibling elements of an HTML element, which can be useful for various purposes such as styling or modifying conten</p>

<b>JQuery (CSS)</b>

<p>{'$(document).ready(function(){'}</p>

<p>{'$(".box").click(function(){'}</p>

<p>{'$(this).css("background-color", "red");'}</p>

<p>{'});'}</p>

<p>{'});'}</p>

<p>This code selects the element with class "box" using the jQuery selector ".box". Then, it attaches a click event handler to that element using the click() method. Inside the event handler function, we use the css() method to change the background color of the element to red.</p>

<p>So when the box element is clicked, its background color changes from blue to red. We can also use the css() method to change other CSS properties like font-size, border-width, etc.</p>

<p>Here's another example that demonstrates how to change multiple CSS properties using the css() method:</p>

<p>{'$(document).ready(function(){'}</p>

<p>{'$(".box").css({'}</p>

<p>{'"background-color": "green",'}</p>

<p>{'"width": "150px",'}</p>

<p>{'"height": "150px",'}</p>

<p>{'"border": "2px solid black"'}</p>

<p>{' });'}</p>

<p>{'});'}</p>

<p>This code selects all elements with class "box" and changes their background color to green, width and height to 150px, and adds a 2px solid black border.</p>

<p>Overall, using jQuery to manipulate CSS provides a powerful way to dynamically style HTML elements based on user interactions or other events.</p>

<b>JQuery ($.each)</b>

<p>The $.each() method in jQuery is used to iterate over arrays and objects. Here's an example that demonstrates how to use it:</p>

<p>Suppose we have an array of numbers and we want to iterate over each element of the array and print its value to the console:</p>
    
<p>{'var numbers = [1, 2, 3, 4, 5];'}</p>

<p>{'$.each(numbers, function(index, value){'}</p>

<p>{'console.log("Element at index " + index + " is " + value);'}</p>

<p>{'});'}</p>

<p>In this code, we pass the numbers array to the $.each() method along with a callback function that takes two arguments: the index of the current element and the value of the current element. Inside the callback function, we use console.log() to print the index and value of the current element to the console.</p>
    
<p>The output of this code would be:</p>

<p>{'Element at index 0 is 1'}</p>

<p>{'Element at index 1 is 2'}</p>

<p>{'Element at index 2 is 3'}</p>

<p>{'Element at index 3 is 4'}</p>

<p>{'Element at index 4 is 5'}</p>

<p>Here's another example that demonstrates how to use $.each() with an object:</p>

<p>Suppose we have an object representing a person's details and we want to iterate over its properties and print their values to the console:</p>

<p>{'var person = {'}</p>

<p>{'name: "John",'}</p>

<p>{'age: 30,'}</p>

<p>{'occupation: "Developer"'}</p>

<p>{'};'}</p>

<p>{'$.each(person, function(key, value){'}</p>

<p>{'console.log(key + ": " + value);'}</p>

<p>{'});'}</p>

<p>In this code, we pass the person object to the $.each() method along with a callback function that takes two arguments: the key of the current property and the value of the current property. Inside the callback function, we use console.log() to print the key and value of the current property to the console.</p>

<p>The output of this code would be:</p>

<p>{'name: John'}</p>

<p>{'age: 30'}</p>

<p>{'occupation: Developer'}</p>

<p>Overall, the $.each() method in jQuery provides a convenient way to iterate over arrays and objects and perform operations on their elements.</p>

<b>JQuery Events</b>

<p>JQuery provides a rich set of event-handling methods that allow developers to attach event handlers to HTML elements and respond to user interactions, such as mouse clicks, keyboard input, and form submissions.</p>
    
<p>Here's an example that demonstrates how to use the click() method in jQuery to attach a click event handler to a button element and respond to the user clicking on the button:</p>    
    

<p>{'<!DOCTYPE html>'}</p>

<p>{'<html>'}</p>  

<p>{'<head>'}</p>

<p>{'<title>jQuery Event Example</title>'}</p>

<p>{'<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>'}</p>

<p>{'</head>'}</p>

<p>{'<body>'}</p>

<p>{'<button id="myButton">Click me!</button>'}</p>

<p>{'<script>'}</p>

<p>{'$(document).ready(function(){'}</p>

<p>{'$("#myButton").click(function(){'}</p>

<p>{'alert("Button clicked!");'}</p>

<p>{'});'}</p>

<p>{'});'}</p>

<p>{' </script>'}</p>

<p>{'</body>'}</p>

<p>{'</html>'}</p>


<p>
In this code, we include the jQuery library in the head section of the HTML document and attach a <b>click()</b> event handler to the button element using the ID selector <b>#myButton</b>. Inside the event handler function, we use the <b>alert()</b> method to display a message box with the text "Button clicked!".    
</p>

<p>When the user clicks on the button, the <b>click()</b> event is triggered, and the event handler function is executed, displaying the message box.</p>

<p>Here's another example that demonstrates how to use the <b>submit()</b> method in jQuery to attach a submit event handler to a form element and prevent the default form submission behavior:</p>
    
<p>{'<!DOCTYPE html>'}</p>

<p>{'<html>'}</p>

<p>{'<head>'}</p>

<p>{'<title>jQuery Event Example</title>'}</p>

<p>{'<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>'}</p>

<p>{'</head>'}</p>

<p>{'<body>'}</p>

<p>{'<form id="myForm">'}</p>

<p>{'<label for="name">Name:</label>'}</p>

<p>{'<input type="text" id="name" name="name"><br><br>'}</p>

<p>{'<label for="email">Email:</label>'}</p>

<p>{'<input type="email" id="email" name="email"><br><br>'}</p>

<p>{'<input type="submit" value="Submit">'}</p>

<p>{'</form>'}</p>

<p>{'<script>'}</p>

<p>{'$(document).ready(function(){'}</p>

<p>{'$("#myForm").submit(function(event){'}</p>

<p>{'event.preventDefault();'}</p>

<p>{'alert("Form submitted!");'}</p>

<p>{'});'}</p>

<p>{' });'}</p>

<p>{'</script>'}</p>

<p>{'</body>'}</p>

<p>{'</html>'}</p>

<p>In this code, we attach a <b>submit()</b> event handler to the form element using the ID selector <b>#myForm</b>. Inside the event handler function, we use the <b>preventDefault()</b> method to prevent the default form submission behavior, which would reload the page. Instead, we display a message box with the text "Form submitted!". </p>
    
<p>When the user submits the form, the <b>submit()</b> event is triggered, and the event handler function is executed, preventing the default form submission behavior and displaying the message box.</p>    

<p>Overall, the event-handling methods in jQuery provide a powerful way to handle user interactions and respond to events in a consistent and cross-browser compatible way</p>    
    
</div>
      )}
      {language === 'ru' && (
        <div>
          <RuJquery/>
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmJquery />
        </div>
      )}   
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Jquery;