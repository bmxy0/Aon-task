import { Component, useState } from 'react'
import './App.css'
import Stepper from './components/stepper/stepper'

function App() {
  const [step,setStep] = useState(0)
  const list =[
    { id:1,
      title:'step1',
      content:'this is step 1'
    },
    { id:2,
      title:'step2',
      content:'this is step 2'
    },
    { id:3,
      title:'step3',
      content:'this is step 3'
    }
  ]
  
  return (
    <>
      <div>
      <Stepper list={list} step={step} onChange={(val)=>setStep(val)}></Stepper>



      </div>
    </>
  )
}

export default App
