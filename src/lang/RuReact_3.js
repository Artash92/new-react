import React from 'react'

function RuReact_3() {
  return (
    <div>
      
      <h1>События React</h1>

<p>React предоставляет способ обработки событий в компонентах, аналогичный обработке событий в чистом JavaScript. В React вы можете добавлять обработчики событий для любого элемента JSX с помощью синтаксиса on<b>[ИмяСобытия]</b>.</p>

<p>Например, допустим, у нас есть кнопка в компоненте React, для которой мы хотим обработать событие нажатия:</p>

<code>
  
  <p>{'function MyButton(props) {'}</p>
  
  <p>{'function handleClick() {'}</p>
  
  <p>{" console.log('Кнопка нажата'); "}</p>
  
  <p>{' }'}</p>
  
  <p>{'return ( '}</p>
  
  <p>{'<button onClick={handleClick}>Нажми меня</button>  '}</p>
  
  <p>{');'}</p>
  
  <p>{'} '}</p>

</code>

 <p>В этом примере мы определяем компонент <b>MyButton</b>, который содержит элемент кнопки с пропом <b>onClick</b>, установленным на функцию с именем <b>handleClick</b>. При нажатии на кнопку будет вызвана функция <b>handleClick</b>, и сообщение "Button clicked" будет записано в консоль.</p>
  
<p>Вы также можете передавать аргументы в функцию обработчика событий с помощью стрелочных функций. Допустим, у нас есть список элементов, которые мы хотим отобразить в виде кнопок:</p>

<code>
  
  <p>{'function ItemList(props) { '}</p>
  
  <p>{'const items = props.items; '}</p>
  
  <p>{'function handleClick(item) { '}</p>
  
  <p>{' console.log(`Нажат элемент ${item.id}`); '}</p>
  
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

 <p>В этом примере мы определяем компонент <b>ItemList</b>, который принимает входной параметр <b>items</b>. Мы определяем функцию <b>handleClick</b>, которая принимает аргумент <b>item</b>, который будет использоваться для вывода сообщения в консоль при нажатии на соответствующую кнопку.</p>

<p>Мы используем метод <b>map</b>, чтобы создать новый массив элементов <b>{'<button>'}</b>, где каждый элемент соответствует элементу из входного параметра <b>items</b>. Мы устанавливаем свойство <b>key</b> для каждого элемента <b>{'<button>'}</b> в значение <b>id</b> соответствующего элемента, что является требованием в React для оптимизации обновлений. Мы также используем стрелочную функцию, чтобы передать объект <b>item</b> функции <b>handleClick</b> при нажатии на кнопку.</p>

<p>Затем мы возвращаем элемент <b>{'<div>'}</b>, который содержит массив <b>buttonList</b>.</p>   
    
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
    
<b>Состояние React в классовых компонентах</b>

<p>В React состояние также может быть управляемо с помощью классовых компонентов. Классовые компоненты - это классы JavaScript, которые расширяют класс <b>React.Component</b> и реализуют метод <b>render</b>, который возвращает пользовательский интерфейс компонента.</p>

<p>Вот пример классового компонента, который управляет состоянием:</p>

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

    <p>{'<p>You clicked {this.state.count} раз(а)</p>'}</p>

    <p>{'<button onClick={this.handleClick}>Нажми меня</button>'}</p>

    <p>{' </div>'}</p>

    <p>{');'}</p>

    <p>{'}'}</p>

    <p>{'}'}</p>
</code>    
    
<p>В этом примере мы определяем класс <b>Counter</b>, который расширяет класс <b>React.Component</b>. Внутри класса мы определяем конструктор, который устанавливает начальное состояние компонента в объект со свойством <b>count</b> равным 0. Мы также связываем метод <b>handleClick</b> с экземпляром компонента, используя метод <b>bind</b>.</p>

<p>Метод <b>handleClick</b> обновляет состояние компонента, вызывая метод this.setState с новым объектом, у которого свойство <b>count</b> увеличено на 1.</p>

<p>Метод <b>render</b> возвращает пользовательский интерфейс компонента, который включает элемент <b>{'<p>'}</b>, отображающий текущее значение <b>count</b>, и кнопку, которая вызывает метод <b>handleClick</b> при нажатии.</p>

<p>Как и в функциональных компонентах, важно никогда не изменять состояние напрямую. Вместо этого всегда используйте метод <b>this.setState</b> для обновления состояния.</p>

<p>Хотя классовые компоненты все еще поддерживаются в React, функциональные компоненты обычно предпочтительнее, особенно с введением хуков. Однако понимание классовых компонентов все еще важно для поддержки и обновления старых кодовых баз.</p>

<b>Жизненный цикл React</b>

<p>В React компоненты имеют жизненный цикл, который описывает различные стадии, через которые они проходят в течение своего существования. Понимание жизненного цикла React важно для создания и поддержки надежных приложений на React.</p>

<p>Вот краткий обзор методов жизненного цикла компонента React, сгруппированных по фазам:</p>

<h4>Фаза монтирования:</h4>    

<p><b>{'constructor()'}</b>: Вызывается при инициализации компонента.</p>

<p><b>{'static getDerivedStateFromProps()'}</b>: Вызывается при инициализации компонента, а затем снова, когда ему передаются новые свойства (props). Редко используется.</p>

<p><b>{'render()'}</b>: Вызывается каждый раз, когда компонент должен быть перерисован.</p>

<p><b>{'componentDidMount()'}</b>: Вызывается после того, как компонент был отрисован в первый раз.</p>

<h4>Фаза обновления:</h4>

<p><b>{'static getDerivedStateFromProps()'}</b>: Вызывается при передаче компоненту новых свойств (props).</p>

<p><b>{'shouldComponentUpdate()'}</b>: Вызывается перед повторной отрисовкой компонента. Позволяет отменить обновление.</p>

<p><b>{'render()'}</b>: Вызывается каждый раз, когда компонент должен быть перерисован.</p>

<p><b>{'getSnapshotBeforeUpdate()'}</b>: Вызывается перед обновлением компонента. Редко используется.</p>

<p><b>{'componentDidUpdate()'}</b>: Вызывается после того, как компонент был обновлен.</p>

<h4>Фаза удаления (Unmounting phase):</h4>

<p><b>{'componentWillUnmount()'}</b>: Вызывается, когда компонент готовится быть удален из DOM-дерева.</p>

<p>Вот пример, который демонстрирует методы жизненного цикла:</p>

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
  
  <p>{' <p>You clicked {this.state.count} раз(а)</p>'}</p>
  
  <p>{'<button onClick={this.handleClick}>Нажми меня</button>'}</p>
  
  <p>{'</div>'}</p>
  
  <p>{');'}</p>
  
  <p>{'}'}</p>
  
  <p>{'}'}</p>

</code>

<p>В этом примере мы определяем класс <b>LifecycleDemo</b>, который записывает сообщения в консоль во время каждой фазы жизненного цикла компонента. Мы также определяем метод <b>handleClick</b>, который обновляет состояние компонента.</p>

<p>При первом монтировании компонента вызываются следующие методы в порядке: <b>constructor, getDerivedStateFromProps, render и componentDidMount</b>. Когда состояние компонента изменяется, вызываются методы <b>shouldComponentUpdate, render и componentDidUpdate</b>, в указанном порядке.</p>
   
 <p>При удалении компонента вызывается метод <b>componentWillUnmount</b>.</p>  
    
  <p>Важно понимать жизненный цикл компонента React, чтобы оптимизировать свои компоненты и избегать распространенных проблем, таких как утечки памяти и бесконечные циклы. Но не беспокойтесь, если вначале кажется, что это сложно – с практикой вы станете более уверенными в этом.</p>  
    
    
    </div>
  )
}

export default RuReact_3;