import { ResetCalc } from "../modules/Reset.module.scss";

const Reset = ({ type = "submit", onClick }) => {
  return (
    <button className={ResetCalc} type={type} onClick={onClick}>
      Reset
    </button>
  );
};

export default Reset;
