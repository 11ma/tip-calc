import classNames from "classnames";
import { Title, InputContainer, InputError } from "../modules/Bill.module.scss";

const Bill = ({ value, onChange, src, validate }) => (
  <div>
    <div className={Title}>
      <h3>Bill</h3>
      {validate ? <h3>Can't be zero</h3> : ""}
    </div>
    <div
      className={classNames(InputContainer, {
        [InputError]: validate === true,
      })}
    >
      <img src={src} />
      <input value={value} onChange={onChange} required />
    </div>
  </div>
);

export default Bill;
