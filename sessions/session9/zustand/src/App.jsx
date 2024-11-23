import { useState } from 'react'

import './App.css'
import { useStore } from 'zustand'

function App() {
  const {count,setCount} = useStore(count,setCount)
  // const [count, setCount] = useState(0)
  const handleClick = ()=>{
    setCount(count+1)
    console.log(count)
  }
  return (
    <>
    <button onClick={()=>handleClick()}>dasdasd</button>
      asdasd
    </>
  )
}

export default App
