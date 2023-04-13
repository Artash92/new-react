import React,{useState} from 'react';
import RuEs5_8 from '../lang/RuEs5_8';
import AmEs5_8 from '../lang/AmEs5_8';


 function JsEs5_8() {
  
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
     
      <h4>Date - object</h4>
      <p>
      In JavaScript, the Date object is used to work with dates and times. It allows you to create, manipulate, and format dates and times in various ways. The Date object represents a single moment in time, and is initialized with the current date and time by default.   
      </p>
      <p>
      Here are a few examples of how to use the Date object in JavaScript:   
      </p>
      <p>
      1. Creating a Date object with a specific date and time:     
      </p>

      <p>{'var date = new Date(2022, 0, 1, 12, 0, 0);'}</p>

      <p>{'console.log(date); // Sat Jan 01 2022 12:00:00 GMT+0200 (Eastern European Standard Time)'}</p>
    
<p>
In this example, a new Date object is created with the specified year (2022), month (0 for January), day (1), hour (12), minute (0), and second (0). The output shows the resulting date and time in a human-readable format.  
</p>
<p>
 2. Creating a Date object with the current date and time: 
</p>

<p>{'var date = new Date();'}</p>

<p>{'console.log(date); // Sat Mar 27 2023 13:28:17 GMT+0200 (Eastern European Standard Time)'}</p>
 
<p>
In this example, a new Date object is created with the current date and time. The output shows the resulting date and time in a human-readable format.  
</p>
<p>
 3. Getting the current year, month, and day: 
</p>

<p>{'var date = new Date();'}</p>

<p>{'var year = date.getFullYear();'}</p>

<p>{'var month = date.getMonth();'}</p>

<p>{'var day = date.getDate();'}</p>

<p>{'console.log(year + "-" + month + "-" + day); // 2023-2-27'}</p>
 
<p>In this example, a new Date object is created with the current date and time. The getFullYear(), getMonth(), and getDate() methods are then used to extract the year, month (where 0 represents January), and day from the Date object. The output shows the resulting date in a formatted string.</p>
   
<p> 4.  Converting a date to a string: </p>
   

  <p>{'var date = new Date();'}</p>

  <p>{'var dateString = date.toDateString();'}</p>

  <p>{'console.log(dateString); // Sat Mar 27 2023'}</p>

<p>
In this example, a new Date object is created with the current date and time. The toDateString() method is then used to convert the date to a human-readable string format. The output shows the resulting string representation of the date  
</p>
<p>
These are just a few examples of the many ways you can use the Date object in JavaScript to work with dates and times. 
</p>
<b>Error - object</b>
<p>
In JavaScript, an Error object is used to represent runtime errors. When an error occurs in a program, JavaScript generates an Error object and throws it. The Error object contains information about the error such as the error message and the name of the error. 
</p>
<p>
Here's an example of using a try-catch block to catch a ReferenceError: 
</p>

<p>{'try {'}</p>

<p>{'console.log(variable);'}</p>

<p>{'} catch(err) {'}</p>

<p>{'console.log(err); //ReferenceError: variable is not defined'}</p>

<p>{'console.log(err.name); //ReferenceError'}</p>

<p>{' console.log(err.message); //variable is not defined'}</p>

<p>{'}'}</p>
 
<p>
In this example, the try block attempts to log a variable that has not been defined, resulting in a ReferenceError. The catch block catches the error and logs the error object along with its name and message properties.  
</p>
<p>
Here's another example of using a try-catch block to throw a custom Error object: 
</p>

<p>{'var num1 = 10;'}</p>

<p>{'var num2 = 0;'}</p>

<p>{'try {'}</p>

<p>{'if (num2 == 0) {'}</p>

<p>{' throw new Error("Cannot divide by zero.");'}</p>

<p>{'}'}</p>

<p>{'console.log(num1 / num2);'}</p>

<p>{'} catch (err) {'}</p>

<p>{' console.log(err.name, " : ", err.message) ; '}</p>

<p>{'}'}</p>

<p>
In this example, the try block attempts to divide num1 by num2. If num2 is zero, a new Error object is thrown with a custom error message. The catch block catches the error and logs the error object along with its name and message properties. 
</p>
<p>
Using Error objects and try-catch blocks is an important part of handling runtime errors in JavaScript programs. It allows developers to gracefully handle errors and provide useful feedback to users.  
</p>
</div>
      )}
  
  {language === 'ru' && (
        <div>
          <RuEs5_8 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmEs5_8 />
        </div>
      )}
    </div>
  )
}



export default JsEs5_8;