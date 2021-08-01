import { useState } from "react";
import Bill from "./Bill";
import ValuePerPerson from "./ValuePerPerson";
import Reset from "./Reset";
import People from "./People";
import Tip from "./Tip";

import styles from "../modules/TipCalc.module.scss";

// icons
import Person from "../assets/images/icon-person.svg";
import Dollar from "../assets/images/icon-dollar.svg";

const TipCalc = () => {
  const [bill, setBill] = useState(0);
  const [nPeople, setNPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  // Validation with REGEX
  const rgx = /^[+-]?\d*(?:[.,]\d*)?$/;

  const handleBill = (event) => {
    let billInput = event.target.value;
    if (rgx.test(billInput)) setBill(billInput);
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
    let perPersonTip = nPeople ? overallTip / nPeople : 0;
    let overallCost = Number(bill) + Number(overallTip);
    let perPersonCost = nPeople ? overallCost / nPeople : 0;
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
        <div className={styles.InputContainer}>
          <Bill value={bill} onChange={handleBill} src={Dollar} />
          <People value={nPeople} onChange={handlePeople} src={Person} />
          <Tip onClick={handlePresetTip} onChange={handleCustomTip} />
        </div>
        {/* <h3>tip value is {tip * 100}%</h3> */}
        <div className={styles.OutputContainer}>
          <ValuePerPerson
            tipPerPerson={tipPerPerson}
            totalPerPerson={totalPerPerson}
          />

          <div className={styles.ResetCalc}>
            <button type="submit">Calculate</button>
            <Reset onClick={handleReset} />
          </div>
        </div>
      </form>
    </>
  );
};

export default TipCalc;
