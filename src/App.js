import React, { useState } from "react";

const App = () => {
  const [bill, setBill] = useState(0);
  const [nPeople, setNPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const handleBill = (event) => {
    setBill(Number(event.target.value));
  };

  const handlePeople = (event) => {
    setNPeople(Number(event.target.value));
  };

  const handleCustomTip = (event) => {
    setTip(Number(event.target.value));
  };

  const handlePresetTip = (event) => {
    let tipValue = Number.parseInt(event.target.textContent);
  };

  // calculate cost
  const handleCosts = (event) => {
    event.preventDefault();
    let overallTip = bill * (tip / 100);
    let perPersonTip = overallTip / nPeople;
    let perPersonCost = bill + overallTip;
    setTipPerPerson(perPersonTip);
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
      <form onSubmit={handleCosts}>
        <div>
          <h3>Bill</h3>
          <input value={bill} onChange={handleBill} />
        </div>
        <div>
          <h3>Number of people</h3>
          <input value={nPeople} onChange={handlePeople} />
        </div>
        <div>
          <h3>Tip</h3>
          <button onClick={handlePresetTip}>5%</button>
          <input value={tip} onChange={handleCustomTip} />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <button type="submit" onClick={handleReset}>
        Reset
      </button>

      <h2>Tip/person: £{tipPerPerson}</h2>
      <h2>Total/person: £{totalPerPerson}</h2>
    </>
  );
};

export default App;
