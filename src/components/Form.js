import React from "react";

const Form = (props) => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirm,
    setConfirm,
    setStep,
  } = props;

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handlEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmChange = (event) => {
    const value = event.target.value;
    setConfirm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirm) {
      alert("Les mots de passe ne correspondent pas !");
    } else {
      setStep(false);
    }
  };

  return (
    <div className="container">
      <h1>Create account</h1>
      <form onSubmit={handleSubmit} className="form">
        <span>Name</span>
        <input
          type="text"
          placeholder="Jean Dupont"
          value={name}
          onChange={handleNameChange}
        />
        <span>Email</span>
        <input
          type="text"
          placeholder="jeandupont@lereacteur.io"
          value={email}
          onChange={handlEmailChange}
        />
        <span>Password</span>
        <input
          type="text"
          placeholder="lErEaCtEuR2021"
          value={password}
          onChange={handlePasswordChange}
        />
        <span>Confirm your password</span>
        <input
          type="text"
          placeholder="lErEaCtEuR2021"
          value={confirm}
          onChange={handleConfirmChange}
        />
        <div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
