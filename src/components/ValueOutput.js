import styles from "../modules/ValueOutput.module.scss";

const ValuePerPerson = ({ tipPerPerson, totalPerPerson }) => (
  <>
    <div className={styles.ValuePerPersonLayout}>
      <div>
        <h2 className={styles.TipAmountTotal}>tip amount </h2>
        <h3>/ person</h3>
      </div>
      <h2 className={styles.figures}>£{tipPerPerson.toFixed(2)}</h2>
    </div>
    <div className={styles.ValuePerPersonLayout}>
      <div>
        <h2 className={styles.TipAmountTotal}>total </h2>
        <h3>/ person</h3>
      </div>
      <h2 className={styles.figures}>£{totalPerPerson.toFixed(2)}</h2>
    </div>
  </>
);

export default ValuePerPerson;
