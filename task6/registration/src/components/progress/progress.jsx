import "./progress.css"
import {  useLocation } from "react-router-dom";
const  Progress = () =>{
  const location= useLocation()

  const prog = ()=>{
    if(location.pathname==='/'){

      return "bar "
    }
    else if(location.pathname==='/phone'){
      return "bar done bar3"
    }
    else{ return "bar done bar1"}

  }

  return <div className="flex">
    <div className="bar done"></div>
    <div className="second-bar ">
      <div className={prog()} ></div>
      <div className={location.pathname === "/"||location.pathname==='/phone' ? "bar ":"bar done bar2"}></div>
    </div>
    <div className={location.pathname === "/info"? "bar done":"bar "}></div>
  </div>



}

export default Progress