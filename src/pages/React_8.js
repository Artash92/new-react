import React, { useState } from 'react';
import RuReact_8 from '../lang/RuReact_8';
import AmReact_8 from '../lang/AmReact_8';

function React_8() {
  
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

      <h1>Redux Thunk</h1>
      
      <p>Redux Thunk is a middleware library for Redux that allows you to write async logic that interacts with the Redux store. It enables you to dispatch actions that contain async code, such as API requests or other side effects, by wrapping your action creators in a function that returns another function.</p>

      <p>Here's an example of how Redux Thunk can be used in a React application:</p>

      <code>
        
        <p>{"// actions.js "}</p>

        <p>{"import axios from 'axios'; "}</p>

        <p>{"export const fetchUserRequest = () => ({ "}</p>

        <p>{"type: 'FETCH_USER_REQUEST', "}</p>

        <p>{"}); "}</p>

        <p>{"export const fetchUserSuccess = (user) => ({ "}</p>

        <p>{" type: 'FETCH_USER_SUCCESS', "}</p>

        <p>{"payload: user, "}</p>

        <p>{"}); "}</p>

        <p>{"export const fetchUserError = (error) => ({ "}</p>

        <p>{"type: 'FETCH_USER_ERROR', "}</p>

        <p>{"payload: error, "}</p>

        <p>{"}); "}</p>
        
        <p>{"export const fetchUser = (userId) => { "}</p>

        <p>{"return (dispatch) => { "}</p>

        <p>{"dispatch(fetchUserRequest()); "}</p>

        <p>{"axios.get(` https://jsonplaceholder. typicode.com/users/${userId} `) "}</p>

        <p>{".then((response) => {"}</p>

        <p>{"const user = response.data;"}</p>

        <p>{" dispatch(fetchUserSuccess(user));"}</p>

        <p>{"})"}</p>

        <p>{".catch((error) => {"}</p>

        <p>{" dispatch(fetchUserError(error.message));"}</p>

        <p>{"});"}</p>

        <p>{"};"}</p>

        <p>{"};"}</p>

      </code>

      <p>In the example above, we define three action creators: <b>fetchUserRequest, fetchUserSuccess, and fetchUserError</b>. We also define a <b>fetchUser</b> action creator that returns a function instead of an action object. This function takes <b>dispatch</b> as an argument, which is the Redux store's <b>dispatch</b> function.</p>

      <p>Inside the <b>fetchUser</b> function, we dispatch the <b>fetchUserRequest</b> action, which sets the <b>isLoading</b> state to <b>true</b>. We then make an API call using Axios and dispatch either the <b>fetchUserSuccess or fetchUserError</b> action based on the API response. These actions update the Redux store with the retrieved data or the error message, respectively.</p>

      <p>To use this action creator in a component, we can import it and pass it to <b>dispatch</b> like this:</p>

     <code>
     
     <p>{"// MyComponent.js"}</p>

     <p>{"import React, { useEffect } from 'react';"}</p>

     <p>{"import { useDispatch, useSelector } from 'react-redux'; "}</p>

     <p>{" import { fetchUser } from './actions'; "}</p>

     <p>{" const MyComponent = ({ userId }) => { "}</p>

     <p>{"const dispatch = useDispatch(); "}</p>

     <p>{" const user = useSelector(state => state.user.data); "}</p>

     <p>{" const isLoading = useSelector(state => state.user.isLoading); "}</p>

     <p>{"const error = useSelector(state => state.user.error); "}</p>

     <p>{"useEffect(() => { "}</p>

     <p>{" dispatch(fetchUser(userId));"}</p>

     <p>{"}, [dispatch, userId]); "}</p>

     <p>{" if (isLoading) { "}</p>

     <p>{" return <div>Loading...</div>; "}</p>

     <p>{" } "}</p>

     <p>{"if (error) {  "}</p>

     <p>{"return <div>Error: {error}</div>;  "}</p>

     <p>{" } "}</p>

     <p>{" return ("}</p>

     <p>{" <div> "}</p>

     <p>{"  <h1>{user.name}</h1> "}</p>

     <p>{"<p>{user.email}</p> "}</p>
     
     <p>{" <p>{user.phone}</p> "}</p>
     
     <p>{"</div> "}</p>

     <p>{"  ); "}</p>

     <p>{" }; "}</p>
     
     </code>

<p>In the example above, we use the useDispatch and useSelector hooks from the react-redux library to interact with the Redux store. We dispatch the fetchUser action creator in the useEffect hook, which will be called when the component mounts. We also use useSelector to extract the relevant pieces of data from the Redux store, such as the user data and the isLoading and error flags.</p>

<p>Overall, Redux Thunk is a useful middleware library for Redux that allows you to write async logic that interacts with the Redux store. It can help simplify your code and make it easier to reason about async behavior in your React application.</p>

<h3>Redux-Observable</h3>

<p>Redux-Observable is a middleware for Redux that enables the use of reactive programming in Redux applications. It allows developers to handle complex asynchronous actions and events in a declarative, composable, and easy-to-test way using RxJS, a library for reactive programming.</p>

<p>With Redux-Observable, developers can define "epics" which are functions that listen for certain actions, and then react to them with a stream of new actions. These epics are observables, which are functions that receive a stream of events and can transform, filter, or merge them in a declarative way.</p>

<p>Here is an example of how to use Redux-Observable:</p>

<code>
<p>{"import { createStore, applyMiddleware } from 'redux'; "}</p>

<p>{"import { createEpicMiddleware, combineEpics } from 'redux-observable'; "}</p>

<p>{"import { ajax } from 'rxjs/ajax'; "}</p>

<p>{"import { mergeMap, map, catchError } from 'rxjs/operators'; "}</p>

<p>{"const pingEpic = action$ =>"}</p>

<p>{"action$.ofType('PING')"}</p>

<p>{".mergeMap(action =>"}</p>

<p>{"ajax.getJSON('/api/ping')"}</p>

<p>{".map(response => ({ type: 'PONG', payload: response })) "}</p>

<p>{".catch(error => ({ type: 'PING_ERROR', payload: error.message }))"}</p>

<p>{"); "}</p>

<p>{"const rootEpic = combineEpics("}</p>

<p>{"pingEpic, "}</p>

<p>{"// more epics... "}</p>

<p>{"); "}</p>

<p>{"const epicMiddleware = createEpicMiddleware(); "}</p>

<p>{"const store = createStore("}</p>

<p>{"reducer, "}</p>

<p>{"applyMiddleware(epicMiddleware) "}</p>

<p>{");"}</p>

<p>{"epicMiddleware.run(rootEpic);"}</p>

</code>

<p>In this example, we define an epic called <b>pingEpic</b> which listens for an action of type 'PING', and then makes an AJAX request to a server to ping it. If the request is successful, it dispatches an action of type 'PONG' with the response payload. If the request fails, it dispatches an action of type 'PING_ERROR' with the error message as the payload.</p>

<p>We then combine all our epics into a single <b>rootEpic</b>, and create an instance of <b>createEpicMiddleware()</b> to use as a middleware in our Redux store. Finally, we apply the middleware to the store and run the root epic with <b>epicMiddleware.run(rootEpic)</b>.</p>
   
<p>Overall, Redux-Observable is a powerful tool for handling complex asynchronous actions and events in Redux applications. It provides a flexible and declarative way to manage async behavior using reactive programming concepts.</p>   

</div>
    )}
      {language === 'ru' && (
        <div>
          <RuReact_8 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_8 />
        </div>
      )} 
   
    </div>
  )
}

export default React_8;