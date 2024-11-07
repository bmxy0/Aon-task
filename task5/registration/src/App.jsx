import { useState } from 'react'
import './App.css'
import MainHeader from './components/header/header'
import Progress from './components/progress/progress'
import Plan from './components/plan/plan'
import {BrowserRouter,Routes, Route, useNavigate} from "react-router-dom";
import Phone from './components/phone/phone'
import Otp from './components/otp/otp'
import Info from './components/info/info'
function App() {


  return (
    <div className='container'>
      <BrowserRouter>
    <MainHeader/>
    <div className='content'>
    <Progress/>
    <Routes>
    <Route path="/" element={<Plan/>}></Route>
    <Route path="/phone" element={ <Phone/>}></Route>
    <Route path='/otp' element={<Otp/>}></Route>
    <Route path='/info' element={<Info/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App
