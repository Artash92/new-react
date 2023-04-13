import React, {useState} from 'react';
import RuReact_2 from '../lang/RuReact_2';
import AmReact_2 from '../lang/AmReact_2';

function React_2() {
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
      
      <h1>JSX</h1>

  <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It is used extensively in React to define the structure and layout of UI components.</p>    

    <p>Here is an example of how JSX works:</p>

   <code>
   <p><b>{" import React from 'react'; "}</b></p>

<p>{'function MyComponent() {'}</p>

<p>{' return ( '}</p>

<p>{'<div> '}</p>

<p>{'<h1>Hello, world!</h1> '}</p>

<p>{'<p>This is a simple JSX example.</p> '}</p>

<p>{' </div> '}</p>

<p>{'); '}</p>

<p>{'}'}</p>

<p> <b>{'export default MyComponent;'}</b> </p> 
   </code>

    <p>In this example, we are defining a simple React component using JSX. The component renders a <b>div</b> element that contains an <b>h1 and a p</b> element. Notice that the HTML-like code is enclosed in parentheses and is defined using JSX syntax.</p>

    <p>JSX allows you to easily combine HTML-like code with JavaScript logic. For example, you can use JavaScript variables and expressions inside your JSX code:</p>
    
   <code>
   <p><b>{" import React from 'react'; "}</b></p>

<p>{'function MyComponent() { '}</p>

<p>{"const name = 'John Doe'; "}</p>

<p>{" return ( "}</p>

<p>{" <div> "}</p>

<p>{" <h1>Hello, {name}!</h1> "}</p>

<p>{" <p>This is a simple JSX example.</p> "}</p>

<p>{" </div> "}</p>

<p>{");"}</p>

<p>{" } "}</p>

<p><b>{'export default MyComponent;'}</b></p> 
   
   </code>

    <p>In this example, we are using a JavaScript variable <b>(name)</b> inside our JSX code to dynamically render a personalized greeting.</p>

    <p>JSX is not required for React development, but it is highly recommended as it makes it much easier to write and manage complex UI components. When you write JSX code, it is transpiled into regular JavaScript code that can be executed by the browser.</p>
    
    <p>There are two main types of React components: functional components and class components.</p>
    
    <p>Functional components are defined as JavaScript functions that return a JSX element. They are typically used for simple, presentational UI components that don't have any state or lifecycle methods.</p>
    
    <p>Here's an example of a simple functional component:</p>

    <code>
   
    <p><b>{"import React from 'react'; "}</b></p>

    <p>{'function MyComponent(props) {'}</p>

    <p>{'return ('}</p>

    <p>{'<div> '}</p>

    <p>{' <h1>Hello, {props.name}!</h1> '}</p>

    <p>{'<p>This is a functional component.</p> '}</p>

    <p>{'</div> '}</p>

    <p>{' );'}</p>

    <p>{'}'}</p>

    <p>{'export default MyComponent;'}</p>  
    
    </code>

    <p>In this example, we are defining a functional component called <b>MyComponent</b> that takes in a <b>props</b> object as an argument. The component returns a JSX element that includes a h1 element with a personalized greeting and a <b>p</b> element with a message.</p>
    
    <p>Class components, on the other hand, are defined as JavaScript classes that extend the <b>React.Component</b> class. They are used for more complex UI components that need to manage state and have lifecycle methods.</p>
    
    <p>Here's an example of a simple class component:</p>

    <code>
    <p><b>{" import React from 'react'; "}</b></p>

    <p>{' class MyComponent extends React.Component {' }</p>

    <p>{'constructor(props) {'}</p>

    <p>{'super(props);'}</p>

    <p>{'this.state = {'}</p>

    <p>{'count: 0'}</p>

    <p>{'};'}</p>

    <p>{'}'}</p>

    <p>{'render() {'}</p>

    <p>{' return ('}</p>

    <p>{' <div>'}</p>

    <p>{'<h1>Count: {this.state.count}</h1>'}</p>

    <p>{'<button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>'}</p>

    <p>{' </div> '}</p>

    <p>{' );'}</p>

    <p>{' }'}</p>

    <p>{'}'}</p>

    <p><b>{'export default MyComponent;'}</b></p>  
    </code>

    <p>In this example, we are defining a class component called MyComponent that has a state property called <b>count and a render</b> method that returns a JSX element with a h1 element that displays the current count and a <b>button</b> element that increments the count when clicked.</p>

    <p>Components can be composed and nested to create complex UI elements. They can also accept props as inputs, which allow them to be customized and reused throughout the application.</p>

    <p><b>{'<Component />'}</b> is a syntax used in React to render a component. It's called a self-closing tag or an empty tag, and it's equivalent to calling the component as a function with no arguments.</p>

    <p>For example, let's say we have a simple component called <b>MyComponent</b>:</p>

   <code>
<p>{'function MyComponent() {'}</p>

<p>{'return ( '}</p>

<p>{'<div>  '}</p>

<p>{'<h1>Hello, world!</h1> '}</p>

<p>{'</div> '}</p>

<p>{');'}</p>

<p>{'}'}</p>

   </code>
    <p>To render this component, we would use the <b>{'<MyComponent /> '}</b> syntax:</p>

 <code>
 <p>{'ReactDOM.render( '}</p>

<p>{'<MyComponent />, '}</p>

<p>{" document.getElementById('root')"}</p> 
 </code>

    <p>The <b>{'<MyComponent /> '}</b> syntax creates an instance of the MyComponent component and renders it to the DOM.</p>


    </div>
     )}
      {language === 'ru' && (
        <div>
          <RuReact_2 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_2 />
        </div>
      )} 

    </div>
  )
}

export default React_2;