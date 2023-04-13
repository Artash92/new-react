import React, { useState } from 'react';
import RuReact_9 from '../lang/RuReact_9';
import AmReact_9 from '../lang/AmReact_9';

function React_9() {
  
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

        <h1>Redux-Saga</h1>

        <p>Redux-saga is a library for handling side effects, such as asynchronous requests and data fetching, in Redux applications. It uses generator functions to manage the flow of asynchronous operations and provides a centralized place for handling all side effects, making it easier to reason about and test application behavio</p>
      
      <p>Here is an example of how you can use redux-saga to handle an asynchronous API call:</p>

    <code>
      <p>{"import { call, put, takeLatest } from 'redux-saga/effects';"}</p>

      <p>{"import axios from 'axios';"}</p>

      <p>{"// Action Types "}</p>

      <p>{"const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'; "}</p>

      <p>{"const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'; "}</p>

      <p>{"const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';"}</p>

      <p>{"// Action Creators"}</p>

      <p>{"const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });"}</p>

      <p>{"const fetchUsersSuccess = (users) => ({ type: FETCH_USERS_SUCCESS, users });"}</p>

      <p>{"const fetchUsersFailure = (error) => ({ type: FETCH_USERS_FAILURE, error });"}</p>

      <p>{"// Reducer"}</p>

      <p>{"const initialState = { users: [], loading: false, error: null };"}</p>

      <p>{"const usersReducer = (state = initialState, action) => {"}</p>

      <p>{"switch (action.type) {"}</p>

      <p>{"case FETCH_USERS_REQUEST:"}</p>

      <p>{"return { ...state, loading: true };"}</p>

      <p>{"case FETCH_USERS_SUCCESS:"}</p>

      <p>{"return { ...state, users: action.users, loading: false };"}</p>

      <p>{"case FETCH_USERS_FAILURE:"}</p>

      <p>{"return { ...state, error: action.error, loading: false };"}</p>

      <p>{"default:"}</p>

      <p>{"return state;"}</p>

      <p>{" }"}</p>

      <p>{"};"}</p>

      <p>{"// Sagas"}</p>

      <p>{"function* fetchUsers() {"}</p>

      <p>{"try {"}</p>

      <p>{"const response = yield call(axios.get, 'https://jsonplaceholder. typicode.com/users');"}</p>

      <p>{"yield put(fetchUsersSuccess(response.data));"}</p>

      <p>{"} catch (error) {"}</p>

      <p>{"yield put(fetchUsersFailure(error));"}</p>

      <p>{"}"}</p>

      <p>{"}"}</p>

      <p>{"function* usersSaga() {"}</p>

      <p>{"yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);"}</p>

      <p>{"}"}</p>

      <p>{"export { usersReducer, usersSaga };"}</p>

    </code>

<p>In this example, we define three action types (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, and FETCH_USERS_FAILURE), three action creators (fetchUsersRequest, fetchUsersSuccess, and fetchUsersFailure), and a reducer function (usersReducer) to handle state updates.</p>

<p>We also define two sagas: fetchUsers and usersSaga. The fetchUsers saga uses the call effect to make an API call using axios and dispatches either fetchUsersSuccess or fetchUsersFailure depending on whether the call succeeds or fails. The usersSaga saga listens to FETCH_USERS_REQUEST actions and runs the fetchUsers saga in response.</p>

<p>Finally, we export both the reducer and saga so they can be used in our Redux store setup:</p>

<code>
  <p>{"import { createStore, applyMiddleware } from 'redux';"}</p>

  <p>{"import createSagaMiddleware from 'redux-saga';"}</p>

  <p>{"import { usersReducer, usersSaga } from './users';"}</p>

  <p>{"const sagaMiddleware = createSagaMiddleware();"}</p>

  <p>{"const store = createStore(usersReducer, applyMiddleware(sagaMiddleware));"}</p>

  <p>{"sagaMiddleware.run(usersSaga);"}</p>

  <p>{"export default store;"}</p>
</code>

<p>In this setup, we create a Redux store with our usersReducer and apply the sagaMiddleware. We then run the usersSaga using sagaMiddleware.run. This will ensure that our saga is active and listening for actions in our application.</p>

</div>
    )}
      {language === 'ru' && (
        <div>
          <RuReact_9 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmReact_9 />
        </div>
      )} 


    </div>
  )
}

export default React_9;