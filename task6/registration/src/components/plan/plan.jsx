import "./plan.css";
import Client from "../svgs/client";
import FreeLancer from "../svgs/freelancer";
import Arrow from "../svgs/arrow";
import { useState } from "react";

const Plan = ({active}) => {
  const [checked, setChecked] = useState(0);
  const activateButton=(val)=>{
    active(val)

  }
  return (
    <div>
      <h1 className="heading">Let’s Get started!</h1>
      <p className="sub-heading">How do you plan to use this platform</p>
      <div className="options">
        <input
          type="radio"
          id="freelancer"
          name="role"
          className="radio-input"
          onClick={() => {
            activateButton(true);
            setChecked(1);
          }}
        />
        <label htmlFor="freelancer" className="radio-label">
          <FreeLancer stroke={checked === 1 ? "#3C97AF" : "#0A0A0A"} />
          <div>
          <h2>Freelancer</h2>
          <p>I’m a freelancer ready to work for projects</p></div>
        </label>
        <input
          type="radio"
          id="client"
          name="role"
          className="radio-input"
          onClick={() => {
            activateButton(true);
            setChecked(2);
          }}
        />
        <label htmlFor="client" className="radio-label">
          <Client stroke={checked === 2 ? "#3C97AF" : "#0A0A0A"}></Client>
          <div>
          <h2>Client</h2>
          <p>I’m a client searching for talented freelancers</p></div>
        </label>
      </div>

    </div>
  );
};

export default Plan;
