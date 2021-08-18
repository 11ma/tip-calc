import { useState } from "react";
import Bill from "./Bill";
import ValuePerPerson from "./ValuePerPerson";
import People from "./People";
import Tip from "./Tip";

import styles from "../modules/TipCalc.module.scss";

// icons
import Person from "../assets/images/icon-person.svg";
import Dollar from "../assets/images/icon-dollar.svg";

const TipCalc = () => {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [validatePeople, setValidatePeople] = useState(false);
  const [validateBill, setValidateBill] = useState(false);

  // Validation with REGEX
  const rgx = /^[+-]?\d*(?:[.,]\d*)?$/;

  const handleBill = (event) => {
    let billInput = event.target.value;
    billInput !== 0 ? setValidateBill(false) : setValidateBill(true);
    if (rgx.test(billInput)) setBill(billInput);
  };

  const handlePeople = (event) => {
    setValidatePeople(false);
    const peopleValue = event.target.value;
    setPeople(Number(peopleValue));
  };

  const handleCustomTip = (event) => {
    let tipValue = Number.parseInt(event.target.value) / 100;
    setTip(tipValue);
  };

  const handlePresetTip = (event) => {
    let tipValue = Number.parseInt(event.target.textContent) / 100;
    setTip(tipValue);
  };

  const tipValuePerPerson = () => {
    const tipAndBill = bill * tip;
    return isFinite(tipAndBill / people) ? tipAndBill / people : 0;
  };

  const billPerPerson = () => {
    return isFinite(bill / people) ? bill / people : 0;
  };

  const billAmountPerPerson = () => {
    return tipValuePerPerson() + billPerPerson();
  };

  const checkNum = (value) => {
    return isNaN(value) ? 0 : value;
  };

  //   if (!bill) setValidateBill(true);
  //   if (!people) setValidatePeople(true);

  // reset
  const handleReset = (event) => {
    event.preventDefault();
    setBill(0);
    setPeople(0);
    setTip(0);
    setValidateBill(false);
    setValidatePeople(false);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.InputContainer}>
          <Bill
            value={bill}
            onChange={handleBill}
            imgSrc={Dollar}
            validate={validateBill}
          />
          <Tip onClick={handlePresetTip} onChange={handleCustomTip} />
          <People
            value={isNaN(people) ? 0 : people}
            onChange={handlePeople}
            imgSrc={Person}
            validate={validatePeople}
          />
        </div>

        <div className={styles.OutputContainer}>
          <ValuePerPerson
            tipPerPerson={checkNum(tipValuePerPerson())}
            totalPerPerson={checkNum(billAmountPerPerson())}
          />

          <div className={styles.ResetCalc}>
            <button type="submit" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TipCalc;
