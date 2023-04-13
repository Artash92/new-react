import React,{ useState } from 'react';
import RuReact_6 from '../lang/RuReact_6';
import AmReact_6 from '../lang/AmReact_6';

function React_6() {
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
     
      <h1>Ract Refs</h1>

    <p>In React, a <b>ref</b> is a way to access the underlying DOM node or React component instance of a rendered element. You can use refs to get access to certain properties or methods of a component, or to modify its behavior.</p>

    <p>Here's an example of how to create a ref in React:</p>

    <code>
     <p>{" import React, { useRef } from 'react'; "}</p>

     <p>{'function TextInput() {'}</p>

     <p>{'const inputRef = useRef(null);'}</p> 

     <p>{'const handleClick = () => {'}</p>

     <p>{'inputRef.current.focus(); '}</p>

     <p>{' };'}</p>

     <p>{'return ('}</p>

     <p>{'<div>'}</p>

     <p>{' <input type="text" ref={inputRef} />'}</p>

     <p>{'<button onClick={handleClick}>Focus Input</button>'}</p>

     <p>{'</div>'}</p>

     <p>{' );'}</p>

     <p>{'}'}</p>
    </code>

    <p>In this example, we create a <b>ref</b> using the <b>useRef</b> hook. We then pass the <b>ref</b> to the <b>input</b> element using the <b>ref</b> prop.</p>

    <p>We also create a <b>handleClick</b> function that uses the <b>current</b> property of the <b>ref</b> to call the <b>focus</b> method on the <b>input</b> element. This allows us to set focus to the input when the user clicks the "Focus Input" button.</p>

     <p>Overall, using <b>refs</b> can be a powerful tool for accessing and manipulating components in React. However, it's important to use them sparingly and avoid relying too heavily on imperative code, as this can make your code harder to reason about and maintain.</p>

    <b>Event Emitter</b>

<p>An event emitter is a design pattern that allows objects in a program to communicate with each other by triggering and handling events. In simple terms, an event emitter is a mechanism for broadcasting and receiving messages within a program.</p>

<p>In JavaScript, the EventEmitter class is a built-in module that provides a way to implement this pattern. Here's an example of how to use EventEmitter in Node.js:</p>

<code>
  <p>{"const EventEmitter = require('events');"}</p>

  <p>{"class MyEmitter extends EventEmitter {}"}</p>

  <p>{"const myEmitter = new MyEmitter();"}</p>

  <p>{"myEmitter.on('event', (arg) => {"}</p>

  <p>{"console.log('Event triggered with argument:', arg);"}</p>

  <p>{"});"}</p>

  <p>{"myEmitter.emit('event', 'Hello, world!');"}</p>
</code>

<p>In this example, we create a custom <b>MyEmitter</b> class that extends the <b>EventEmitter</b> class. We then create an instance of this class and define a listener for the <b>event</b> event using the <b>on</b> method. Finally, we emit the <b>event</b> event and pass a string argument, which triggers the listener and logs the argument to the console.</p>

<p>Overall, using an event emitter can be a useful way to implement a pub-sub pattern in your code, where different parts of your program can communicate with each other without having to be tightly coupled together. However, it's important to use this pattern judiciously and not rely too heavily on events, as this can make your code harder to understand and debug.</p>

<p><b>In React</b>, you can use an event emitter pattern to communicate between different components in your application. This can be useful for passing data or triggering actions between components that are not directly related to each other.</p>

<p>One way to implement an event emitter pattern in React is to use a third-party library such as <b>eventemitter3 or mitt</b>. These libraries provide a simple API for creating and subscribing to events, and can be used with both class components and functional components with hooks.</p>

<p>Here's an example of how to use <b>eventemitter3</b> in a React component:</p>

<code>

<p>{"import React, { useEffect } from 'react'; "}</p>

<p>{"import EventEmitter from 'eventemitter3'; "}</p>

<p>{" const emitter = new EventEmitter(); "}</p>

<p>{"function ComponentA() {"}</p>

<p>{" useEffect(() => { "}</p>

<p>{"emitter.emit('eventA', { data: 'Hello from ComponentA' });"}</p>

<p>{"}, []);"}</p>

<p>{"return <div>ComponentA</div>; "}</p>

<p>{"} "}</p>

<p>{"function ComponentB() {"}</p>

<p>{"useEffect(() => {"}</p>

<p>{"emitter.on('eventA', handleEventA);  "}</p>

<p>{"return () => emitter.off('eventA', handleEventA);"}</p>

<p>{" }, []);"}</p>

<p>{"const handleEventA = (payload) => {"}</p>

<p>{"console.log('Received eventA:', payload.data); "}</p>

<p>{" }; "}</p>

<p>{"return <div>ComponentB</div>; "}</p>

<p>{"}"}</p>

</code>

<p>In this example, we create an instance of <b>EventEmitter called emitter</b>. In <b>ComponentA</b>, we use the <b>useEffect</b> hook to emit an event called <b>eventA</b> with some data. In <b>ComponentB</b>, we use the <b>useEffect</b> hook to subscribe to the <b>eventA</b> event, and define a callback function called <b>handleEventA</b> that logs the data to the console.</p>

<p>When ComponentA is mounted, it emits the eventA event with some data. When ComponentB is mounted, it subscribes to the eventA event and starts listening for any events with that name. When eventA is emitted, handleEventA is called with the data, and it logs the message to the console.</p>

<p>Overall, using an event emitter pattern in React can be a useful way to implement communication between components that are not directly related to each other. However, it's important to use this pattern judiciously and not rely too heavily on events, as this can make your code harder to understand and debug.</p>

<h4>React Animation</h4>

<p>In React, you can add animations to your components using a variety of techniques. Animations can make your UI more engaging and provide visual feedback to the user when things change.</p>

<p>One popular way to implement animations in React is to use CSS transitions or animations. You can add CSS classes to your components to trigger these animations, and use React's <b>className</b> prop to toggle the classes based on the component's state.</p>

<p>Here's an example of how to use CSS transitions to animate a button when it's clicked:</p>

<code>
<p>{"import React, { useState } from 'react';"}</p> 

<p>{" import './Button.css'; "}</p>

<p>{"function Button() {"}</p>

<p>{" const [isClicked, setIsClicked] = useState(false); "}</p>

<p>{"const handleClick = () => { "}</p>

<p>{" setIsClicked(true); "}</p>

<p>{" setTimeout(() => setIsClicked(false), 1000); "}</p>

<p>{" }; "}</p>

<p>{"return (  "}</p>

<p>{" <button className={`button ${isClicked ? 'clicked' : ''}`} onClick={handleClick}> "}</p>

<p>{"Click me!  "}</p>

<p>{"</button>  "}</p>

<p>{"); "}</p>

<p>{" }"}</p>

</code>

<p>In this example, we define a component called <b>Button</b> that uses the <b>useState</b> hook to keep track of whether the button has been clicked or not. When the button is clicked, we set the <b>isClicked</b> state to <b>true</b>, which adds the <b>clicked</b> class to the button. We then use <b>setTimeout</b> to remove the <b>clicked</b> class after 1 second, which triggers the transition back to the original state.</p>

<p>We also define a CSS file called <b>Button.css</b> that defines the styles for the button and the clicked <b>class</b>:</p>

<code>
  <p>{'.button {'}</p>

  <p>{'background-color: blue;'}</p>

  <p>{'color: white;'}</p>

  <p>{'padding: 10px 20px;'}</p>

  <p>{'border: none;'}</p>

  <p>{'border-radius: 5px;'}</p>

  <p>{'transition: background-color 0.5s;'}</p>

  <p>{'}'}</p>

  <p>{'.clicked {'}</p>

  <p>{'background-color: red;'}</p>

  <p>{'}'}</p>

</code>

<p>In this CSS file, we define the styles for the button and specify a <b>transition</b> property on the <b>button</b> class to animate changes to the <b>background-color</b> property. We also define the <b>clicked</b> class, which changes the <b>background-color</b> to red when applied.</p>

<p>Another way to implement animations in React is to use a third-party library such as <b>react-spring or framer-motion</b>. These libraries provide a more flexible API for creating complex animations and can be useful for more advanced use cases.</p>
    
<p><b>react-transition-group</b> is a third-party library for React that provides a way to easily add CSS transitions and animations to your components. It provides a set of components and APIs for managing the lifecycle of transitions, including mounting and unmounting elements, adding and removing classes, and delaying animations.</p>

<b>{'npm install react-transition-group'}</b>

<p>The core components in <b>react-transition-group are Transition, CSSTransition, and TransitionGroup</b>. Here's a brief overview of each component:</p>

<p>• <b>Transition</b>: This component defines the basic lifecycle of a transition, including entering, entered, exiting, and exited states. You can use this component to trigger  </p>

<p>• <b>CSSTransition</b>: This component extends the <b>Transition</b> component and adds support for CSS transitions and animations. You can specify CSS classes to apply to your component during the different stages of the transition, such as <b>enter, enter-active, exit, and exit-active</b>.</p>

<p>• <b>TransitionGroup</b>: This component is used to manage a set of <b>Transition or CSSTransition</b> components. It tracks the mounting and unmounting of components and can apply different transition effects to each component. </p>

<p>Here's an example of how to use <b>react-transition-group</b> to add a fade-in animation to a component when it's mounted:</p>


<code>
  <p>{"import React, { useState } from 'react'; "}</p>

  <p>{"import { CSSTransition } from 'react-transition-group'; "}</p>

  <p>{"import './FadeIn.css'; "}</p>

  <p>{"function FadeIn() { "}</p>

  <p>{"const [isMounted, setIsMounted] = useState(false); "}</p>

  <p>{"const handleMount = () => setIsMounted(true); "}</p>

  <p>{"return ( "}</p>

  <p>{"<> "}</p>

  <p>{" <button onClick={handleMount}>Mount component</button> "}</p>

  <p>{'<CSSTransition in={isMounted} timeout={300} classNames="fade"> '}</p>

  <p>{' <div className="content">Hello, world!</div> '}</p>

  <p>{"</CSSTransition> "}</p>

  <p>{" </> "}</p>

  <p>{"); "}</p>

  <p>{"} "}</p>

</code>

<p>In this example, we define a component called <b>FadeIn</b> that uses the <b>useState</b> hook to keep track of whether the component has been mounted or not. When the button is clicked, we set the <b>isMounted</b> state to <b>true</b>, which triggers the <b>CSSTransition</b> component to render the <b>content</b> div with a fade-in animation. We also define a CSS file called <b>FadeIn.css</b> that defines the styles and animation for the fade-in effect:</p>

<code>
  <p>{" .fade-enter { "}</p>

  <p>{"opacity: 0; "}</p>

  <p>{"} "}</p>

  <p>{".fade-enter-active { "}</p>

  <p>{" opacity: 1; "}</p>

  <p>{" transition: opacity 300ms ease-in; "}</p>

  <p>{"} "}</p>

  <p>{".fade-exit { "}</p>

  <p>{"opacity: 1; "}</p>

  <p>{"} "}</p>

  <p>{".fade-exit-active { "}</p>

  <p>{"opacity: 0; "}</p>
  
  <p>{"transition: opacity 300ms ease-out; "}</p>

  <p>{"}"}</p>

</code>

<p>In this CSS file, we define the classes for the different stages of the transition. When the component enters, it has an opacity of 0 (<b>fade-enter</b>) and transitions to an opacity of 1 over 300ms (<b>fade-enter-active</b>). When the component exits, it has an opacity of 1 (<b>fade-exit</b>) and transitions to an opacity of 0 over 300ms (<b>fade-exit-active</b>).</p>

<p>Overall, adding animations to your React components can make your UI more engaging and provide visual feedback to the user. By using CSS transitions or animations, or a third-party library, you can easily add animations to your components and make them more dynamic.</p>    
    
</div>
     )}
      {language === 'ru' && (
        <div>
          <RuReact_6 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_6 />
        </div>
      )} 

    </div>
  )
}

export default React_6;