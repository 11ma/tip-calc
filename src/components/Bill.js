import classNames from "classnames";
import { Title, InputContainer, InputError } from "../modules/Bill.module.scss";

const Bill = ({ value, onChange, src, validate, alt = "dollar icon" }) => (
  <div>
    <div className={Title}>
      <h3>bill</h3>
      {validate ? <h3>can't be zero</h3> : ""}
    </div>
    <div
      className={classNames(InputContainer, {
        [InputError]: validate === true,
      })}
    >
      <img src={src} alt={alt} />
      <input value={value} onChange={onChange} required />
    </div>
  </div>
);

export default Bill;
