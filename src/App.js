import TipCalc from "./components/TipCalc";
import { AppContainer, Title } from "./modules/App.module.scss";

const App = () => (
  <div className={AppContainer}>
    <h1 className={Title}>SPLITTER</h1>
    <TipCalc />
  </div>
);

export default App;
