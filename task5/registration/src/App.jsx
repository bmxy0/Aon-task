import { useState } from "react";
import "./App.css";
import MainHeader from "./components/header/header";
import Plan from "./components/plan/plan";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Phone from "./components/phone/phone";
import Otp from "./components/otp/otp";
import Info from "./components/info/info";
import Steper from "./components/steper/steper";
function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="container">
      <MainHeader />
      <Steper
        list={[
          <Plan
            active={(val) => {
              setActive(val);
            }}
          />,
          <Phone
            active={(val) => {
              setActive(val);
            }}
          />,
          <Otp
            active={active}
            setActive={(val) => {
              setActive(val);
            }}
          />,
          <Info
            active={active}
            setActive={(val) => {
              setActive(val);
            }}
          />,
        ]}
        active={active}
        setActive={(val) => {
          setActive(val);
        }}
      />
    </div>
  );
}

export default App;
