import { useState } from "react";

const options = [
  {
    id: 1,
    title: "One",
  },
  {
    id: 2,
    title: "Two",
  },
  {
    id: 3,
    title: "Three",
  },
  {
    id: 4,
    title: "Foure",
  },
];

function RadioComponent() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelecte = (el) => {
    let isSelected = selectedOptions.find((id) => id === el?.id);
    if (isSelected)
      setSelectedOptions(selectedOptions.filter((id) => id !== el?.id));
    else setSelectedOptions([...selectedOptions, el?.id]);
  };

  return (
    <div className="radio-content">
      {options?.map((el, i) => (
        <div
          onClick={() => handleSelecte(el)}
          key={i}
          className={`radio-option ${
            selectedOptions.find((id) => id === el?.id) ? "radio-active" : ""
          }`}
        >
          {el?.title}
        </div>
      ))}
    </div>
  );
}

export default RadioComponent;
