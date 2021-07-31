import { useState } from "react";
import Bill from "./Bill";
import ValuePerPerson from "./ValuePerPerson";
import Reset from "./Reset";
import People from "./People";
import Tip from "./Tip";
import styles from "../modules/TipCalc.module.css";

const TipCalc = () => {
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
    let tipValue = Number.parseInt(event.target.value) / 100;
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
    let overallCost = bill + overallTip;
    let perPersonCost = overallCost / nPeople;
    setTipPerPerson(perPersonTip ? perPersonTip : 0);
    setTotalPerPerson(perPersonCost ? perPersonCost : 0);
  };

  // reset
  const handleReset = (event) => {
    event.preventDefault();
    setBill(0);
    setNPeople(0);
    setTip(0);
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  return (
    <>
      <form className={styles.container} onSubmit={HandleCosts}>
        <div>
          <Bill value={bill} onChange={handleBill} />
          <People value={nPeople} onChange={handlePeople} />
          <Tip onClick={handlePresetTip} onChange={handleCustomTip} />
        </div>
        {/* <h3>tip value is {tip * 100}%</h3> */}
        <div>
          <ValuePerPerson
            tipPerPerson={tipPerPerson}
            totalPerPerson={totalPerPerson}
          />
          <button type="submit">Calculate</button>
          <Reset onClick={handleReset} />
        </div>
      </form>
    </>
  );
};

export default TipCalc;
