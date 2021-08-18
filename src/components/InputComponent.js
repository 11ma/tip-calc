import classNames from "classnames";
import {
  Title,
  Input,
  InputContainer,
  InputError,
} from "../modules/InputComponent.module.scss";

const InputComponent = ({
  inputName,
  value,
  onChange,
  errorMessage,
  imgSrc,
  alt,
  validate,
}) => (
  <div>
    <div className={Title}>
      <h3>{inputName}</h3>
      {validate ? <h3>{errorMessage}</h3> : ""}
    </div>
    <div
      className={classNames(InputContainer, {
        [InputError]: validate === true,
      })}
    >
      <img src={imgSrc} alt={alt} />
      <input className={Input} value={value} onChange={onChange} required />
    </div>
  </div>
);

export default InputComponent;
