import { Input, InputContainer } from "../modules/Bill.module.css";

const People = ({ value, onChange, src }) => (
  <div>
    <h3>Number of people</h3>
    <div className={InputContainer}>
      <img src={src} />
      <input className={Input} value={value} onChange={onChange} required />
    </div>
  </div>
);

export default People;
