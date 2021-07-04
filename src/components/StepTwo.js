import React from "react";

const StepTwo = (props) => {
  const { name, email, password, setStep } = props;
  const handleButton = () => {
    setStep(true);
  };
  return (
    <div className="container">
      <h2>Results</h2>
      <div className="bgc-result">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>password : {password}</p>
      </div>

      <button onClick={handleButton} className="edit-btn">
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
