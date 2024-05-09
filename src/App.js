import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {useRef} from 'react'

function App() {
  const [value, setValue] = useState("")
  const inputRef = useRef(null)
  const showDom = () => {
    console.log(inputRef.current)
    console.dir(inputRef.current)
  }

  return (
    <div className="App">
      <h1>My First React App</h1>
      <p>Welcome to my first React app!</p>
      <input
      type = "text"
      value = {value}
      onChange={(e) => setValue(e.target.value)}/>
      <div>
        <input type="text" ref={inputRef}/>
        <button onClick={showDom}>click me</button>
      </div>
    </div>
  );
}

export default App;
