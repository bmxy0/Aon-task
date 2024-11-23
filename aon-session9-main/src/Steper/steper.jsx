import "./steper.css";

const Steper = ({ list, step, onChange }) => {
  const handleNext = () => {
    if (step === list?.length - 1) return;
    onChange(step + 1);
  };

  const handlePrev = () => {
    if (step === 0) return;
    onChange(step - 1);
  };

  return (
    <div className="steper">
      <div className="dots">
        {list?.map((_, i) => (
          <div className={`dot ${step >= i  ? "dot-active" : ""}`} key={i}>
            <div className="fill-dot"></div>
          </div>
        ))}
      </div>
      <h1>{list[step]?.title}</h1>
      {list[step]?.content}
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Steper;
