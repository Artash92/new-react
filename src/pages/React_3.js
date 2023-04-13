import React,{useState} from 'react';
import RuReact_3 from '../lang/RuReact_3';
import AmReact_3 from '../lang/AmReact_3';

function React_3() {
 
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
      
        
        <h1 >React Events</h1>

    <p>React provides a way to handle events in components, similar to handling events in vanilla JavaScript. In React, you can add event handlers to any JSX element using the on<b>[EventName] </b>syntax</p>

    <p>For example, let's say we have a button in a React component that we want to handle a click event for:</p>

    <code>
      <p>{'function MyButton(props) { '}</p>

    <p>{'function handleClick() {'}</p>

    <p>{" console.log('Button clicked'); "}</p>

    <p>{' }'}</p>

    <p>{'return ( '}</p>

    <p>{'<button onClick={handleClick}>Click me</button>  '}</p>

    <p>{');'}</p>

    <p>{'} '}</p>
    </code>

    <p>In this example, we define a <b>MyButton</b> component that contains a button element with a <b>onClick</b> prop set to a function called <b>handleClick</b>. When the button is clicked, the <b>handleClick</b> function will be called, and the message "Button clicked" will be logged to the console.</p>

    <p>You can also pass arguments to the event handler function using arrow functions. For example, let's say we have a list of items that we want to render as buttons:</p>

    <code>
     <p>{'function ItemList(props) { '}</p>

    <p>{'const items = props.items; '}</p>

    <p>{'function handleClick(item) { '}</p>

    <p>{' console.log(`Item ${item.id} clicked`); '}</p>

    <p>{' } '}</p>

    <p>{'const buttonList = items.map((item) => '}</p>

    <p>{'<button key={item.id} onClick={() => handleClick(item)}> '}</p>

    <p>{'{item.name} '}</p>

    <p>{'</button> '}</p>

    <p>{' ); '}</p>

    <p>{'return ( '}</p>

    <p>{'<div> '}</p>

    <p>{'{buttonList} '}</p>

    <p>{'</div> '}</p>

    <p>{'); '}</p>

    <p>{'} '}</p>
 
    </code>
    <p>In this example, we define an <b>ItemList</b> component that takes in a <b>items</b> prop. We define a <b>handleClick</b> function that takes in an <b>item</b> argument, which will be used to log a message to the console when the corresponding button is clicked.</p>

    <p>We use the <b>map</b> method to create a new array of <b>{'<button>'}</b> elements, where each element corresponds to an item in the <b>items</b> prop. We set the <b>key</b> prop of each <b>{'<button> '}</b> element to the <b>id</b> of the corresponding item, which is a requirement in React to help it optimize updates. We also use an arrow function to pass the <b>item</b> object to the <b>handleClick</b> function when the button is clicked.</p>

    <p>Then we return a <b>{'<div>'}</b> element that contains the <b>buttonList</b> array.</p>

    <h5>React Events</h5>

    <p>onKeyDown</p>

    <p>onKeyPress </p>

    <p>onKeyUp</p>

    <p>onFocus</p>

    <p>onBlur</p>

    <p>onChange</p>

    <p>onInput</p>

    <p>onInvalid </p>

    <p>onSubmit</p>

    <p>onClick</p>

    <p>onContextMenu</p>

    <p>onDoubleClick</p>

    <p>onDrag</p>

    <p>onDragEnd</p>

    <p>onDragEnter</p>

    <p>onDragExit</p>

    <p>onDragLeave</p>

    <p> <a href="https://react.dev/reference/react-dom/components/common#react-event-object" target='_blank' > 👉🏼 React https://react.dev/reference/react-dom/components/common#react-event-object</a> </p>


    <b>React state in class components</b>

    <p>In React, state can also be managed using class components. Class components are JavaScript classes that extend the <b>React.Component</b> class and implement a <b>render</b> method that returns the component's UI.</p>

    <p>Here's an example of a class component that manages state:</p>

    
    <code>
    <p>{"import React, { Component } from 'react';"}</p>

    <p>{'class Counter extends Component { '}</p>
    
    <p>{'constructor(props) {'}</p>

    <p>{'super(props);'}</p>

    <p>{'this.state = { count: 0 };'}</p>

    <p>{'this.handleClick = this.handleClick.bind(this);'}</p>

    <p>{'}'}</p>

    <p>{'handleClick() { '}</p>

    <p>{'this.setState({ count: this.state.count + 1 }); '}</p>

    <p>{'}'}</p>

    <p>{' render() {'}</p>

    <p>{'return ('}</p>

    <p>{'<div>'}</p>

    <p>{'<p>You clicked {this.state.count} times</p>'}</p>

    <p>{'<button onClick={this.handleClick}>Click me</button>'}</p>

    <p>{' </div>'}</p>

    <p>{');'}</p>

    <p>{'}'}</p>

    <p>{'}'}</p>
</code>

<p>In this example, we define a <b>Counter</b> class that extends <b>React.Component</b>. Inside the class, we define a constructor that sets the initial state of the component to an object with a <b>count</b> property of 0. We also bind the <b>handleClick</b> method to the component instance using <b>bind</b>.</p>

<p>The <b>handleClick</b> method updates the component's state by calling this.setState with a new object that has a <b>count</b> property incremented by 1.</p>

<p>The <b>render</b> method returns the component's UI, which includes a <b>{'<p>'}</b> element that displays the current value of <b>count</b>, and a button that calls <b>handleClick</b> when clicked.</p>

<p>Like with functional components, it's important to never modify the state directly. Instead, always use <b>this.setState</b> to update the state.</p>

<p>While class components are still supported in React, functional components are generally preferred, especially with the introduction of hooks. However, understanding class components is still important for maintaining and updating older codebases.</p>

<b>React lifecycle</b>

<p>In React, components have a lifecycle that describes the different stages they go through during their existence. Understanding the React lifecycle is essential for building and maintaining robust React applications.</p>

<p>Here's a brief overview of the React component lifecycle methods, grouped by phase:</p>

<h4>Mounting phase:</h4>

<p><b>{'constructor()'}</b>: Called when the component is initialized.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: Called when the component is initialized, and again when it receives new props. Rarely used.</p>

<p><b>{'render() '}</b>: Called whenever the component needs to be rendered.</p>

<p><b>{'componentDidMount()'}</b>: Called after the component has been rendered for the first time.</p>

<h4>Updating phase:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: Called when the component receives new props.</p>

<p><b>{'shouldComponentUpdate()'}</b>: Called before the component re-renders. Allows you to cancel the update.</p>

<p><b>{'render()'}</b>: Called whenever the component needs to be rendered.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: Called before the component updates. Rarely used.</p>

<p><b>{'componentDidUpdate()'}</b>: Called after the component has been updated.</p>

<h4>Unmounting phase:</h4>

<p><b>{'componentWillUnmount()'}</b>: Called when the component is about to be removed from the DOM.</p>

<p>Here's an example that demonstrates the lifecycle methods:</p>

<code>
  <b>{"import React, { Component } from 'react';"}</b>
  
  <p>{'class LifecycleDemo extends Component {'}</p>

  <p>{'constructor(props) {'}</p>

  <p>{'super(props);'}</p>  

  <p>{'this.state = { count: 0 };'}</p>

  <p>{"console.log('constructor');"}</p>

  <p>{'}'}</p>

  <p>{'static getDerivedStateFromProps(props, state) {'}</p>

  <p>{"console.log('getDerivedStateFromProps');"}</p>

  <p>{'return null;'}</p>

  <p>{'}'}</p>

  <p>{'componentDidMount() {'}</p>

  <p>{"console.log('componentDidMount'); "}</p>

  <p>{'}'}</p>

  <p>{' shouldComponentUpdate(nextProps, nextState) {'}</p>

  <p>{" console.log('shouldComponentUpdate');"}</p>

  <p>{'return true;'}</p>

  <p>{' }'}</p>

  <p>{'getSnapshotBeforeUpdate(prevProps, prevState) {'}</p>

  <p>{" console.log('getSnapshotBeforeUpdate'); "}</p>

  <p>{'return null;'}</p>

  <p>{'}'}</p>

  <p>{'componentDidUpdate(prevProps, prevState, snapshot) {'}</p>

  <p>{"console.log('componentDidUpdate'); "}</p>

  <p>{'}'}</p>

  <p>{'componentWillUnmount() { '}</p>

  <p>{"console.log('componentWillUnmount'); "}</p>

  <p>{'}'}</p>

  <p>{' handleClick = () => {'}</p>

  <p>{' this.setState({ count: this.state.count + 1 });'}</p>

  <p>{'}; '}</p>

  <p>{'render() { '}</p>

  <p>{"console.log('render');"}</p>

  <p>{'return ('}</p>

  <p>{'<div>'}</p>

  <p>{' <p>You clicked {this.state.count} times</p>'}</p>

  <p>{'<button onClick={this.handleClick}>Click me</button>'}</p>
  
  <p>{'</div>'}</p>

  <p>{');'}</p>

  <p>{'}'}</p>

  <p>{'}'}</p>

</code>

<p>In this example, we define a <b>LifecycleDemo</b> class that logs messages to the console during each phase of the component's lifecycle. We also define a <b>handleClick</b> method that updates the component's state.</p>

<p>When the component is mounted for the first time, the following methods are called, in order: <b>constructor, getDerivedStateFromProps, render, and componentDidMount</b> . Whenever the component's state changes, the <b>shouldComponentUpdate, render, and componentDidUpdate </b> methods are called, in that order.</p>

<p>When the component is unmounted, the <b>componentWillUnmount</b> method is called.</p>

<p>It's important to understand the React component lifecycle so you can optimize your components and avoid common pitfalls like memory leaks and infinite loops. But don't worry if it seems overwhelming at first – with practice, you'll become more comfortable with it.</p>

</div>
     )}
      {language === 'ru' && (
        <div>
          <RuReact_3 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_3 />
        </div>
      )} 


    </div>
  )
}

export default React_3;