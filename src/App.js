import TipCalc from "./components/TipCalc";
import styles from "./modules/App.module.css";

const App = () => (
  <div className={styles.AppContainer}>
    <h1 className={styles.Title}>SPLITTER</h1>
    <TipCalc />
  </div>
);

export default App;
