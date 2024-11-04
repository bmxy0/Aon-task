import "./plan.css";
import Client from "../svgs/client";
import FreeLancer from "../svgs/freelancer";
import Arrow from "../svgs/arrow";
import { useState } from "react";
const Plan = () => {
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(0);
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
            setActive(true);
            setChecked(1);
          }}
        />
        <label htmlFor="freelancer" className="radio-label">
          <FreeLancer stroke={checked === 1 ? "#3C97AF" : "#0A0A0A"} />
          <h2>Freelancer</h2>
          <p>I’m a freelancer ready to work for projects</p>
        </label>
        <input
          type="radio"
          id="client"
          name="role"
          className="radio-input"
          onClick={() => {
            setActive(true);
            setChecked(2);
          }}
        />
        <label htmlFor="client" className="radio-label">
          <Client stroke={checked === 2 ? "#3C97AF" : "#0A0A0A"}></Client>
          <h2>Client</h2>
          <p>I’m a client searching for talented freelancers</p>
        </label>
      </div>
      <button
        className={active ? "active" : "inActive"}
        onClick={() => {
          if (active) {
            setActive(false);
          }
        }}
      >
        <p>Next</p> <Arrow stroke={active ? "#FFFFFF" : "#999999"}></Arrow>{" "}
      </button>
    </div>
  );
};

export default Plan;
