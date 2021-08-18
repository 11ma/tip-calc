import { ResetCalc } from "../modules/Reset.module.scss";

const Reset = ({ type = "submit", onClick }) => {
  return (
    // <section className={ResetCalc}>
    <button className={ResetCalc} type={type} onClick={onClick}>
      Reset
    </button>
    // </section>
  );
};

export default Reset;
