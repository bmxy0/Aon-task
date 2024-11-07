import "./phone.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "./countries";
const Phone = () => {
  const [active, setActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const numbers = ["77", "78", "79", "75", "76"];
  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    const formattedValue = formatInput(inputValue);
    setValue(formattedValue);
  };

  const formatInput = (input) => {
    const match = input.match(/^(\d{0,3})(\d{0,4})(\d{0,3})/);
    checkNumber(value);
    if (!match) return "";
    return [match[1], match[2], match[3]].filter(Boolean).join(" ").trim();
  };

  const checkNumber = (number) => {
    if (number.length == 11 && numbers.includes(value.substring(0, 2))) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div>
      <h1 className="heading">Enter Your Phone Number</h1>
      <p className="sub-heading">
        Enter your phone number to verify your identity and the validity of your
        number to safely activate your account on the platform.
      </p>
      <div className="flex-column">
      <h4>Phone Number</h4>
      <div className="phoneInput">
        <div
          className={
            isFocused
              ? "focused-selector selector"
              : "unfocused-selector selector"
          }
        >
          <img src="https://flagcdn.com/w320/iq.png" alt="Iraq flag" />
          <p>+964</p>
        </div>
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onChange={handleChange}
          placeholder="Enter your phone number"
          maxLength={12}
        />
        </div>
      </div>
      <button
        className={active ? "active verify-btn" : "inActive verify-btn"}
        onClick={() => (active ? navigate("/otp") : {})}
      >
        Send verification code
      </button>
    </div>
  );
};

export default Phone;
