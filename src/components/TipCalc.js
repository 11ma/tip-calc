import { useState } from "react";
import Tip from "./Tip";
import InputComponent from "./InputComponent";
import ValuePerPerson from "./ValuePerPerson";
import { checkNum, checkInfinity } from "./Utilities";

import styles from "../modules/TipCalc.module.scss";

// icons
import Person from "../assets/images/icon-person.svg";
import Dollar from "../assets/images/icon-dollar.svg";

const TipCalc = () => {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [customInput, setCustomInput] = useState("");
  // const [validatePeople, setValidatePeople] = useState(false);
  // const [validateBill, setValidateBill] = useState(false);

  // Validation with REGEX
  const rgx = /^[+-]?\d*(?:[.,]\d*)?$/;

  const handleBill = (event) => {
    const billInput = event.target.value;
    if (rgx.test(billInput)) setBill(billInput);
  };

  const handlePeople = (event) => {
    const peopleInput = event.target.value;
    setPeople(peopleInput);
  };

  const handleCustomTip = (event) => {
    const tipValue = Number.parseInt(event.target.value) / 100;
    setCustomInput(tipValue * 100);
    setTip(tipValue);
  };

  const handlePresetTip = (event) => {
    const tipValue = Number.parseInt(event.target.textContent) / 100;
    setTip(tipValue);
  };

  const tipValuePerPerson = () => {
    const tipAndBill = bill * tip;
    return checkInfinity(tipAndBill / people);
  };

  const billAmountPerPerson = () => {
    const billPerPerson = checkInfinity(bill / people);
    return tipValuePerPerson() + billPerPerson;
  };

  // reset
  const handleReset = (event) => {
    event.preventDefault();
    setBill(0);
    setPeople(0);
    setTip(0);
    setCustomInput("");
  };

  return (
    <>
      <section className={styles.container}>
        <section className={styles.InputContainer}>
          <InputComponent
            inputName="bill"
            value={bill}
            onChange={handleBill}
            imgSrc={Dollar}
            alt="dollar bill"
            // validate={validateBill}
            errorMessage="can't be zero"
          />
          <Tip
            onClick={handlePresetTip}
            onChange={handleCustomTip}
            value={checkNum(customInput)}
          />
          <InputComponent
            inputName="number of people"
            value={checkNum(people)}
            onChange={handlePeople}
            imgSrc={Person}
            alt="person icon"
            // validate={validatePeople}
            errorMessage="can't be zero"
          />
        </section>

        <section className={styles.OutputContainer}>
          <ValuePerPerson
            tipPerPerson={checkNum(tipValuePerPerson())}
            totalPerPerson={checkNum(billAmountPerPerson())}
          />

          <section className={styles.ResetCalc}>
            <button type="submit" onClick={handleReset}>
              Reset
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default TipCalc;
