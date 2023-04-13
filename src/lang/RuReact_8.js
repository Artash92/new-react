import React from 'react'

function RuReact_8() {
  return (
    <div>
      <h1>Redux Thunk</h1>

<p>Redux Thunk - это библиотека промежуточного программного обеспечения для Redux, которая позволяет вам писать асинхронную логику, взаимодействующую с хранилищем Redux. Он позволяет вам диспетчеризовать действия, которые содержат асинхронный код, такой как запросы API или другие побочные эффекты, обернув ваши создатели действий в функцию, которая возвращает другую функцию.</p>

<p>Вот пример того, как Redux Thunk может быть использован в приложении React:</p>
    
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

      <p>В приведенном выше примере мы определяем три создателя действий: <b>fetchUserRequest, fetchUserSuccess и fetchUserError</b>. Мы также определяем создателя действий <b>fetchUser</b>, который возвращает функцию вместо объекта действия. Эта функция принимает аргументом <b>dispatch</b>, который является функцией <b>dispatch</b> хранилища Redux.</p>
     
      <p>Внутри функции <b>fetchUser</b> мы диспетчеризуем действие <b>fetchUserRequest</b>, которое устанавливает состояние <b>isLoading</b> в значение <b>true</b>. Затем мы делаем вызов API, используя Axios, и диспетчеризуем действие <b>fetchUserSuccess</b> или <b>fetchUserError</b> в зависимости от ответа API. Эти действия обновляют хранилище Redux полученными данными или сообщением об ошибке соответственно.</p>
    
      <p>Чтобы использовать этот создатель действий в компоненте, мы можем импортировать его и передать в <b>dispatch</b> следующим образом:</p>    
    
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

     <p>В приведенном выше примере мы используем хуки <b>useDispatch</b> и <b>useSelector</b> из библиотеки react-redux для взаимодействия с хранилищем Redux. Мы диспетчеризуем создатель действий <b>fetchUser</b> в хуке <b>useEffect</b>, который будет вызван при монтировании компонента. Мы также используем <b>useSelector</b>, чтобы извлечь соответствующие данные из хранилища Redux, такие как данные пользователя, флаги <b>isLoading</b> и <b>error</b>.</p>
     
     <p>В целом, Redux Thunk - это полезная библиотека промежуточного программного обеспечения для Redux, которая позволяет писать асинхронную логику, взаимодействующую с хранилищем Redux. Он может помочь упростить ваш код и сделать его более понятным в отношении асинхронного поведения в вашем приложении React.</p>
     
     <h3>Redux-Observable</h3>
    
    <p>Redux-Observable - это промежуточное программное обеспечение для Redux, которое позволяет использовать реактивное программирование в приложениях Redux. Он позволяет разработчикам обрабатывать сложные асинхронные действия и события в декларативном, компонуемом и легко тестируемом способе с использованием RxJS, библиотеки для реактивного программирования.</p>
    
    <p>С помощью Redux-Observable разработчики могут определять "эпики", которые являются функциями, прослушивающими определенные действия и затем реагирующими на них с потоком новых действий. Эти эпики являются наблюдаемыми объектами, которые получают поток событий и могут декларативно преобразовывать, фильтровать или объединять их.</p>
    
    <p>Вот пример того, как использовать Redux-Observable:</p>

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

<p>В этом примере мы определяем эпик с названием <b>pingEpic</b>, который ожидает действие типа "PING", а затем отправляет AJAX-запрос на сервер для его пинга. Если запрос выполнен успешно, он диспетчит действие типа "PONG" с ответом в качестве полезной нагрузки. Если запрос не удался, он диспетчит действие типа "PING_ERROR" с сообщением об ошибке в качестве полезной нагрузки.</p>

<p>Затем мы объединяем все наши эпики в один <b>rootEpic</b> и создаем экземпляр <b>createEpicMiddleware()</b>, чтобы использовать его в качестве промежуточного программного обеспечения в нашем хранилище Redux. Наконец, мы применяем промежуточное программное обеспечение к хранилищу и запускаем корневой эпик с помощью <b>epicMiddleware.run(rootEpic)</b>.</p>

<p>В целом, Redux-Observable - это мощный инструмент для управления сложными асинхронными действиями и событиями в приложениях Redux. Он обеспечивает гибкий и декларативный подход к управлению асинхронным поведением, используя концепции реактивного программирования.</p>
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default RuReact_8;