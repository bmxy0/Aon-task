import "./info.css";
import Show from "../svgs/show";
import { useState, useEffect } from "react";
const Info = () => {
  const [active, setActive] = useState(false);
  const [activeName, setActiveName] = useState(false);
  const [activeEmail, setActiveEmail] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("asda");
  const [email, setEmail] = useState("@");
  const [password, setPassword] = useState("asdasdasdasdasdadasd");

  
  useEffect(() => {
    setActiveName(name !== "" ? true : false);
    setActiveEmail(email.includes("@") && email.includes(".") ? true : false);
    setActivePassword(password.length >= 8 ? true : false);
    if(name !== ""&&email.includes("@") && email.includes(".")&&password.length >= 8)
    {setActive(true);}
    else{setActive(false);}
    
  }, [name, email, password]


);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <h1 className="heading">Enter Your Information</h1>
      <p className="sub-heading">
        Please enter your personal information to complete the registration
        process.
      </p>
      <div className="information">
        <p>Name</p>
        <input
          type="text"
          className={activeName === true ? "active-input" : ""}
          placeholder="Enter your Full name "
          onChange={(e) => setName(e.target.value)}
        />
        <p>Email</p>
        <input
          className={activeEmail ? "active-input" : ""}
          placeholder="Enter your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <div className="password">
          <input
            className={activePassword ? "active-input" : ""}
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => togglePasswordVisibility()}>
            <Show stroke="#007bff"></Show>
          </span>
        </div>
      </div>
      <button className={active ? "active margin" : "inActive margin"}>
        Complete registration
      </button>
    </div>
  );
};

export default Info;
