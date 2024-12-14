import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 15

  const AddValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    counter = counter - 1
    if(counter < 0){
      counter = 0
    }
    setCounter(counter)
  }

  return (
    <>
    <h1>chai aur React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={AddValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
