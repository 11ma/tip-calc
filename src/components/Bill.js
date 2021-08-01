import styles from "../modules/Bill.module.css";

const Bill = ({ value, onChange, src }) => (
  <div>
    <h3>Bill</h3>
    <div className={styles.InputContainer}>
      <img src={src} />
      <input
        className={styles.Input}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  </div>
);

export default Bill;
