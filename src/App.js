import React, { useState, useEffect } from "react";
import Tip from "./components/Tip";

const App = () => {
  const [bill, setBill] = useState(0);
  const [nPeople, setNPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    console.log(tip);
  }, [tip]);

  const handleBill = (event) => {
    setBill(Number(event.target.value));
  };

  const handlePeople = (event) => {
    setNPeople(Number(event.target.value));
  };

  const handleCustomTip = (event) => {
    let tipValue = Number(event.target.value) / 100;
    setTip(tipValue);
  };

  const handlePresetTip = (event) => {
    let tipValue = Number.parseInt(event.target.textContent) / 100;
    setTip(tipValue);
  };

  // calculate cost
  const HandleCosts = (event) => {
    event.preventDefault();

    console.log(tip);

    let overallTip = bill * tip;
    let perPersonTip = overallTip / nPeople;
    let perPersonCost = bill + overallTip;
    setTipPerPerson(perPersonTip ? perPersonTip : 0);
    setTotalPerPerson(perPersonCost);
  };

  // reset
  const resetAll = () => {
    setBill(0);
    setNPeople(0);
    setTip(0);
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  const handleReset = (event) => {
    event.preventDefault();
    resetAll();
  };

  return (
    <>
      <h1>SPLITTER</h1>
      <form onSubmit={HandleCosts}>
        <div>
          <h3>Bill</h3>
          <input value={bill} onChange={handleBill} />
        </div>
        <div>
          <h3>Number of people</h3>
          <input value={nPeople} onChange={handlePeople} />
        </div>
        <div>
          <Tip onClick={handlePresetTip} onChange={handleCustomTip} />
          <h2>tip is {tip * 100}%</h2>
        </div>
        <button type="submit">Calculate</button>
      </form>
      <button type="submit" onClick={handleReset}>
        Reset
      </button>

      <h2>Tip/person: £{tipPerPerson.toFixed(2)}</h2>
      <h2>Total/person: £{totalPerPerson.toFixed(2)}</h2>
    </>
  );
};

export default App;
