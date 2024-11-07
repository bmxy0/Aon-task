import { useState, useEffect } from "react";
import { OtpInput } from "reactjs-otp-input";
import clock from "../../assets/clock.svg";
import "./otp.css";
import { useNavigate } from "react-router-dom";
const Otp = () => {
  const [otp, setOtp] = useState("");
  const [active, setActive] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const navigate = useNavigate();

  const handleChange = (otp) => {
    setOtp(otp);
    if (otp.length == 6) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);
  
  const setTime = () => {
    setSeconds(60);
  };

  return (
    <div>
      <h1 className="heading">Enter Your Phone Number</h1>
      <p className="sub-heading">
        Enter your phone number to verify your identity and the validity of your
        number to safely activate your account on the platform.
      </p>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        containerStyle="otp"
        inputStyle={active ? "otp-focus otp-input" : "otp-input"}
        isInputNum={true}
      />
      <div className="time">
        <img src={clock} alt="" />
        <p> 00:{String(seconds).padStart(2, "0")} </p>
      </div>
      <p className={seconds !== 0 ? "message" : "message resend"}>
        Didn't receive a message? <span onClick={setTime}>Resend</span>
      </p>
      <button
        className={active ? "active" : "inActive"}
        onClick={() => (active ? navigate("/info") : {})}
      >
        Verify
      </button>
    </div>
  );
};

export default Otp;
