import { useState } from "react";
import RadioComponent from "./RadioComponent/radioComponent";
import Steper from "./Steper/steper";
import Todo from "./Todo/todo";

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

function App() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <RadioComponent/>
      <Steper
        list={[
          {
            title: "Step One Title",
            content: <div>Step 1</div>,
          },
          {
            title: "Step Two Title",
            content: <div>Step 2</div>,
          },
          {
            title: "Step Three Title",
            content: <div>Step 3</div>,
          },
        ]}
        step={step}
        onChange={(val) => setStep(val)}
      />

      <Todo/>
    </div>
  );
}

export default App;
