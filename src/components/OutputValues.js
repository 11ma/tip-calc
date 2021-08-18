import styles from "../modules/OutputValues.module.scss";

const ValuePerPerson = ({ outputName, subtitle, totalValuePerPerson }) => (
  <div className={styles.ValuePerPersonLayout}>
    <div>
      <h2 className={styles.TipAmountTotal}>{outputName}</h2>
      <h3>{subtitle}</h3>
    </div>
    <h2 className={styles.Figures}>£{totalValuePerPerson.toFixed(2)}</h2>
  </div>
);

export default ValuePerPerson;
