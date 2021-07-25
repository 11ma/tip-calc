import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  const handleBill = (event) => {
    setBill(event.target.value);
  };

  const handleTip = (event) => {
    let tip = Number(event.target.id);
    let people = Number(numberOfPeople);
    let tipAmount = ((bill * tip) / people).toFixed(2);
    setTipAmount(tipAmount);
  };

  const handleNumberOfPeople = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleCustomTip = (event) => {
    setCustomTip(event.target.value);
  };

  // const handleCustomTipAmount = (event) => {
  //   console.log(event.target.value);
  // };

  return (
    <>
      <h1>SPLITTER</h1>
      <Bill value={bill} onChange={handleBill} />
      <NumberOfPeople value={numberOfPeople} onChange={handleNumberOfPeople} />
      <Tip value={customTip} onChange={handleCustomTip} onClick={handleTip} />

      <div>
        <h2>tip amount: £{tipAmount}</h2>
        {/* <input value={tipAmount} onChange={handleCustomTipAmount} readOnly /> */}
      </div>
      <h2>total: £{total}</h2>
    </>
  );
}

const GenericInput = ({ value, onChange, placeholder }) => (
  <input value={value} onChange={onChange} placeholder={placeholder} />
);

const Bill = ({ value, onChange }) => (
  <>
    <h3>Bill</h3>
    <GenericInput value={value} onChange={onChange} placeholder={0} />
  </>
);

const Button = ({ id, value, onClick }) => (
  <button id={id} onClick={onClick}>
    {value}
  </button>
);

const Tip = ({ value, onChange, onClick }) => (
  <>
    <h3>Select tip % </h3>
    <Button id={0.05} value="5%" onClick={onClick} />
    <Button id={0.1} value="10%" onClick={onClick} />
    <Button id={0.15} value="15%" onClick={onClick} />
    <Button id={0.25} value="25%" onClick={onClick} />
    <Button id={0.5} value="50%" onClick={onClick} />
    <GenericInput value={value} onChange={onChange} placeholder={"custom"} />
  </>
);

const NumberOfPeople = ({ value, onChange }) => (
  <>
    <h3>Number of People</h3>
    <GenericInput value={value} onChange={onChange} placeholder={0} />
  </>
);

export default App;
