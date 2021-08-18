import { TipContainer, Grid } from "../modules/Tip.module.scss";

const Tip = ({ onClick, onChange, value, placeholder = "Custom" }) => (
  <div className={TipContainer}>
    <h3>select tip % </h3>
    <div className={Grid}>
      <button onClick={onClick}>5%</button>
      <button onClick={onClick}>10%</button>
      <button onClick={onClick}>15%</button>
      <button onClick={onClick}>25%</button>
      <button onClick={onClick}>50%</button>
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  </div>
);

export default Tip;
