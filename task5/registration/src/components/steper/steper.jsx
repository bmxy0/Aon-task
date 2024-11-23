import "./steper.css";
import { useState } from "react";
const Steper = ({ list,active,setActive}) => {
  const [step, setStep] = useState(0);
  
  const handleNext = () => {
    if (step === list?.length - 1) return;
    setStep(step + 1);
    setActive(false)
  };

  const prog = ()=>{
    if(step==0){

      return "bar "
    }
    else if(step==1){
      return "bar done bar3"
    }
    else{ return "bar done bar1"}
  }
  

  return (
    <div className="steper">
      <div className="flex">
    <div className="bar done"></div>
    <div className="second-bar ">
      <div className={prog()} ></div>
      <div className={step <2  ? "bar ":"bar done bar2"}></div>
    </div>
    <div className={step===3? "bar done":"bar "}></div>
  </div>
      {list[step]}
      <button onClick={handleNext}  className={active ? "active" : "inActive"} >Next</button>
    </div>
  );
};

export default Steper;
