import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {useRef} from 'react'

// function Son(props) {
//   console.log(props.children)
//   props.name = "new name"
//   return <div>{props.name}, jsx:{props.child}</div>
//   return <div>{props.children}</div>

// }

function Son ({onGetSonMsg}) {
  const sonMsg = "this is son msg"
  return (
    <div>
      this is Son
      <button onClick= {() => onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}

function App() {
  // const [value, setValue] = useState("")
  // const inputRef = useRef(null)
  // const showDom = () => {
  //   console.log(inputRef.current)
  //   console.dir(inputRef.current)
  // }
  // const name = "this is app name"
  const [msg, setMsg] = useState("")

  const getMsg = (msg) => {
    console.log(msg)
    setMsg(msg)
  }
  return (
    <div className="App">
      {/* <h1>My First React App</h1>
      <p>Welcome to my first React app!</p>
      <input
      type = "text"
      value = {value}
      onChange={(e) => setValue(e.target.value)}/>
      <div>
        <input type="text" ref={inputRef}/>
        <button onClick={showDom}>click me</button>
      </div> */}
      <div>
        this is {msg}
      </div>

      {/* <Son
        name={name}
        age = {18}
        isTrue = {true}
        list = {[1,2,3]}
        obj = {{name: "xiaoming", age: 18}}
        cd = {() => console.log("hello")}
        child = {<div>child</div>}
      /> */}


      {/* <Son>
        <span>this is span</span>
      </Son> */}

      <Son onGetSonMsg={getMsg} />
    </div>
  );
}

export default App;
