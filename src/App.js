import "./App.scss";
import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [step, setStep] = useState(true);

  return (
    <div className="App">
      {step === true ? (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirm={confirm}
          setConfirm={setConfirm}
          step={step}
          setStep={setStep}
        />
      ) : (
        <StepTwo
          name={name}
          email={email}
          password={password}
          setStep={setStep}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
