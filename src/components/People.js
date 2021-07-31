import styles from "../modules/People.module.css";

const People = ({ value, onChange, src }) => (
  <div>
    <h3>Number of people</h3>
    <div className={styles.personInput}>
      <img src={src} />
      <input value={value} onChange={onChange} required />
    </div>
  </div>
);

export default People;
