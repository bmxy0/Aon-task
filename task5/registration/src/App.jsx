import { useState } from 'react'
import './App.css'
import MainHeader from './components/header/header'
import Progress from './components/progress/progress'
import Plan from './components/plan/plan'
import {BrowserRouter,Routes, Route} from "react-router-dom";
function App() {


  return (
    <div className='container'>
      <BrowserRouter>
    <MainHeader/>
    <div>
    <Progress/>
    <Routes>
    <Route path="/" element={<Plan/>}></Route>
    <Route path="/register/about" element={ <></>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App
