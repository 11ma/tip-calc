import { useState } from "react";
import Bill from "./Bill";
import ValuePerPerson from "./ValuePerPerson";
import Reset from "./Reset";
import People from "./People";
import Tip from "./Tip";

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
      <form onSubmit={HandleCosts}>
        <Bill value={bill} onChange={handleBill} />
        <People value={nPeople} onChange={handlePeople} />
        <Tip onClick={handlePresetTip} onChange={handleCustomTip} />
        {/* <h2>tip is {tip * 100}%</h2> */}
        <button type="submit">Calculate</button>
      </form>
      <Reset onClick={handleReset} />

      <ValuePerPerson
        tipPerPerson={tipPerPerson}
        totalPerPerson={totalPerPerson}
      />
    </>
  );
};

export default App;
