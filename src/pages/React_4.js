import React, {useState} from 'react';
import RuReact_4 from '../lang/RuReact_4';
import AmReact_4 from '../lang/AmReact_4';

function React_4() {
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
  
      
      <h1>Fetch Data In React</h1>

      <p>1. Fetch data using the fetch API:</p>

      <code>
        
        <p>{" fetch('https://api.example.com/data') "}</p>

        <p>{'.then(response => response.json())'}</p>

        <p>{'.then(data => console.log(data))'}</p>

        <p>{'.catch(error => console.error(error))'}</p>

      </code>
    
    <p>In this example, we're making a request to a server using the <b>fetch</b> API. The <b>response</b> object is converted to JSON format using the <b>json()</b> method, and the resulting data is logged to the console. If an error occurs, it is caught and logged to the console.</p>
    

    <p>2. Display fetched data in the component's state:</p>

<code>

    <p><b>{"import React, { useState, useEffect } from 'react'; "}</b></p>

    <p>{'function MyComponent() { '}</p>

    <p>{'const [data, setData] = useState([]); '}</p>

    <p>{'useEffect(() => { '}</p>

    <p>{"fetch('https://api.example.com/data') "}</p>

    <p>{'.then(response => response.json()) '}</p>

    <p>{'.then(data => setData(data))'}</p>

    <p>{'.catch(error => console.error(error));'}</p>

    <p>{'}, []);'}</p>

    <p>{'return ( '}</p>

    <p>{'<div>'}</p>

    <p>{'{data.map(item => ('}</p>

    <p>{'<p key={item.id}>{item.name}</p> '}</p>

    <p>{'))} '}</p>

    <p>{'</div> '}</p>

    <p>{'); '}</p>

    <p>{'}'}</p>
    
</code>    


<p>In this example, we're using the <b>useState</b> hook to define a state variable called <b>data</b>. We're also using the <b>useEffect</b> hook to fetch data from the server when the component mounts, and update the state variable <b>data</b> with the fetched data. Finally, we're using the <b>map</b> method to loop through the data array and display each item as a paragraph element.</p>
    
    
  <h1>Axios</h1>

  <p>Both Fetch and Axios are JavaScript libraries used for making HTTP requests from the browser or Node.js environment. However, there are some differences between the two.</p>


  <p>Fetch is a built-in browser API that uses promises to handle requests and responses. It has a simpler syntax and is easier to use for simple requests, but it lacks some advanced features like request cancellation, progress events, and automatic request retries.</p>  
    
  <p>Axios is a popular third-party library that provides a more feature-rich and powerful API for making HTTP requests. It supports request cancellation, progress events, and automatic retries out of the box, and also has a built-in support for handling response data like JSON, XML, and FormData.</p>

  <p>In terms of why it's better to use Axios over Fetch, it really depends on the specific needs of your project. If you're building a simple web application that only needs to make basic requests, then Fetch might be sufficient. However, if you need more advanced features and a more powerful API for handling requests and responses, then Axios is a better choice.</p>  

  <p>Some benefits of using Axios over Fetch include:</p>

  <p>1. Better error handling: Axios has a more robust system for handling errors and provides more helpful error messages compared to Fetch.</p>  
    
  <p>2. Interceptors: Axios provides interceptors that allow you to modify requests or responses before they are sent or received.</p>  
    
  <p>3. Automatic transformation of request and response data: Axios can automatically transform request and response data into different formats, like JSON, which can be very helpful when working with APIs.</p>  
    
  <p>4. Easy cancellation of requests: Axios provides a simple way to cancel requests, which can be useful when dealing with slow or unreliable networks.</p>  
    
  <p>In summary, both Fetch and Axios are useful tools for making HTTP requests in JavaScript, but Axios provides more advanced features and a more powerful API that can be very helpful for building more complex applications.</p>  
    
  <p><b>Axios</b> is a library for making HTTP requests from the browser or Node.js. It makes it easy to send requests using promises and handle responses.</p> 

  <p>To use Axios in React.js, you first need to install it using the command:</p>

  <b>npm install axios</b>

  <p>After that, you can use Axios in your React components. For example, the following code sends a GET request to a remote server and displays the response on the page:</p> 
   

  <code>
  
  <p>{'import React, { useState, useEffect } from "react";'}</p>  

  <p>{'import axios from "axios"; '}</p>

  <p>{'function App() { '}</p>  

  <p>{'const [data, setData] = useState("");'}</p>

  <p>{'useEffect(() => { '}</p>

  <p>{'axios.get(" https://jsonplaceholder. typicode.com/todos/1 "). then((response) => { '}</p>

  <p>{'setData(response.data); '}</p>

  <p>{'}); '}</p>

  <p>{' }, []);'}</p>

  <p>{' return <div>{data.title}</div>;'}</p>

  <p>{'}'}</p>

  <p>{'export default App; '}</p>
   
  </code> 
    
  <p>In this example, the <b>useEffect</b> hook is used to send a GET request to the server and update the <b>data</b> state variable with the response. The data variable is then displayed on the page using JSX.</p>  
    
  <p>Axios also supports other HTTP methods, such as POST, PUT, and DELETE, which can be used to send data to the server and modify resources. The axios object also provides many configuration options, such as setting headers, timeouts, and request interceptors, which allow you to customize the behavior of the requests.</p>  

  <p>Overall, Axios is a powerful and flexible library for working with HTTP requests in React.js, and it can simplify many common tasks, such as fetching data from a remote API.</p>

  <p>The HTTP protocol supports several request methods that allow performing various operations with data. Here is a brief description of the four main request methods along with examples of using them in React:</p>
    
  <p>1. <b>GET</b>: a request method used for retrieving data from the server. In React, you can use the <b>axios.get</b> method</p>  
    
  <code>
  
  <p>{" axios.get('/api/data')"}</p>

  <p>{'.then(response => { '}</p>

  <p>{'console.log(response.data); '}</p>

  <p>{'})'}</p>

  <p>{'.catch(error => {' }</p>

  <p>{'console.log(error);'}</p>
  
  <p>{'});'}</p>  
    
  </code> 

  <p>In this example, we are retrieving data from the <b>/api/data</b> endpoint. The response data is logged to the console if the request is successful, and any errors are caught and logged to the console.</p>
    
  <p>2. <b>PUT</b>: a request method used for updating existing data on the server. In React, you can use the <b>axios.put</b> method:</p>  

  <code>
  
  <p>{"axios.put('/api/data/1', { newData: 'updatedData' })"}</p>

  <p>{ '.then(response => {' }</p>

  <p>{'console.log(response.data);'}</p>  

  <p>{'})'}</p>

  <p>{'.catch(error => {'}</p>

  <p>{'console.log(error);'}</p>

  <p>{'});'}</p>

  </code>

  <p>In this example, we are updating data at the <b>/api/data/1</b> endpoint. We are sending a payload with the new data as the second argument to <b>axios.put</b>. The response data is logged to the console if the request is successful, and any errors are caught and logged to the console.</p>    
    
  <p>3. <b>POST </b>: a request method used for creating new data on the server. In React, you can use the <b>axios.post</b> method</p>  
    
  <code>
  
  <p>{"axios.post('/api/data', { newData: 'newData' })"}</p>

  <p>{'.then(response => {'}</p>

  <p>{'console.log(response.data);'}</p>

  <p>{'})'}</p>  

  <p>{'.catch(error => {'}</p>

  <p>{' console.log(error);'}</p> 

  <p>{'});'}</p> 
    
  </code>  

  <p>In this example, we are creating new data at the <b>/api/data</b> endpoint. We are sending a payload with the new data as the second argument to <b>axios.post</b>. The response data is logged to the console if the request is successful, and any errors are caught and logged to the console.</p>
    
  <p>4. <b>DELETE </b>: a request method used for deleting existing data on the server. In React, you can use the <b>axios.delete</b> method:</p>  
    
   <code>
    <p>{" axios.delete('/api/data/1') "}</p>

    <p>{'.then(response => { '}</p>

    <p>{'console.log(response.data); '}</p>

    <p>{'}) '}</p>

    <p>{'.catch(error => { '}</p>

    <p>{'console.log(error);'}</p>

    <p>{'});'}</p>
    
    </code> 

    <p>In this example, we are deleting data at the <b>/api/data/1</b> endpoint. The response data is logged to the console if the request is successful, and any errors are caught and logged to the console</p>

   <p> For more information on Axios, please visit their official website: <a href=" https://axios-http.com" target='_blank' > 👉🏼  https://axios-http.com</a></p>

   </div>
     )}
      {language === 'ru' && (
        <div>
          <RuReact_4 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_4 />
        </div>
      )} 


    
    </div>
  )
}

export default React_4;