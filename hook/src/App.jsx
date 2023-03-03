import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Count.css'

function App() {
  const [count, setCount] = useState(0)
  const [ color,setColor] = useState('red')

  useEffect(() => {
    if (count >= 10) {
      setColor('green')
    } else {
      setColor('red')
    }
  }, [count])

  return (
    <div className="App">
      <h1 >Taller Hooks</h1>
      <div className="card">
        <h2 style={{ color }}>{count}</h2>
        <div className="container">
          <button onClick={() => setCount(() => count + 1)}>
            Add
          </button>
          <button onClick={() => setCount(() => count - 1)} >
            Subtract
          </button>
          <button onClick={() => setCount((count) => count = 0)} >
            Reset
          </button>
        </div>
        <h3>Counter</h3> 
      </div>
    </div>
  )
}
export default App
