import classNames from "classnames";
import {
  Title,
  Input,
  InputContainer,
  InputError,
} from "../modules/Bill.module.scss";
// import styles from "../modules/People.module.scss";

const People = ({ value, onChange, src, validate }) => (
  <div>
    <div className={Title}>
      <h3>number of people</h3>
      {validate ? <h3>can't be zero</h3> : ""}
    </div>
    <div
      className={classNames(InputContainer, {
        [InputError]: validate === true,
      })}
    >
      <img src={src} />
      <input className={Input} value={value} onChange={onChange} required />
    </div>
  </div>
);

export default People;
