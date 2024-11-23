const Stepper = ({ list, step, onChange }) => {
  const handleNext = () => {
    if (step === list.length) return;
    else onChange(step + 1);
    console.log(step);
  };
  const handlePrev = () => {
    if (step === 0) return;
    else onChange(step - 1);
    console.log(step);
  };

  return (
    <div className="stepper">
      <div className="dots">
        {list.map((_,id)=>{ })}

      </div>
      {list.map((el, id) => {
        return (
          <div key={id}>
            <h1>{el.title}</h1>
            <p>{el.content}</p>
          </div>
        );
      })}

      <button onClick={() => handleNext()}>next</button>
      <button onClick={() => handlePrev()}>prev</button>
    </div>
  );
};

export default Stepper;
