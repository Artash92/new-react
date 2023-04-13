import React from 'react'

function RuReact_9() {
  return (
    <div>
      <h1>Redux-Saga</h1>

<p>Redux-saga это библиотека для управления побочными эффектами, такими как асинхронные запросы и получение данных, в приложениях Redux. Она использует генераторные функции для управления потоком асинхронных операций и предоставляет централизованное место для обработки всех побочных эффектов, что упрощает понимание и тестирование поведения приложения.</p>

<p>Вот пример того, как вы можете использовать redux-saga для обработки асинхронного вызова API:</p>
    
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
    
    <p>В этом примере мы определяем три типа действий (FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS и FETCH_USERS_FAILURE), три функции-создателя действий (fetchUsersRequest, fetchUsersSuccess и fetchUsersFailure) и функцию-редьюсер (usersReducer) для обновления состояния.</p>
    
    <p>Мы также определяем две саги: fetchUsers и usersSaga. Сага fetchUsers использует эффект call для выполнения API-запроса с использованием axios и диспетчеризует действия fetchUsersSuccess или fetchUsersFailure в зависимости от того, успешно ли выполнен запрос. Сага usersSaga слушает действия FETCH_USERS_REQUEST и запускает сагу fetchUsers в ответ.</p>
    
    <p>Наконец, мы экспортируем как редьюсер, так и сагу, чтобы их можно было использовать в настройке нашего хранилища Redux:</p>
    
  <code>
    <p>{"import { createStore, applyMiddleware } from 'redux';"}</p>

    <p>{"import createSagaMiddleware from 'redux-saga';"}</p>

    <p>{"import { usersReducer, usersSaga } from './users';"}</p>

    <p>{"const sagaMiddleware = createSagaMiddleware();"}</p>

    <p>{"const store = createStore(usersReducer, applyMiddleware(sagaMiddleware));"}</p>

    <p>{"sagaMiddleware.run(usersSaga);"}</p>

    <p>{"export default store;"}</p>
</code>
    
 <p>В этой настройке мы создаем хранилище Redux с нашим usersReducer и применяем sagaMiddleware. Затем мы запускаем usersSaga с помощью sagaMiddleware.run. Это гарантирует, что наша сага активна и прослушивает действия в нашем приложении.</p>   
    
    
    </div>
  )
}

export default RuReact_9;