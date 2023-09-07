import classnames from "classnames/bind";
import styles from "./Calculator.module.scss";
import { useState } from "react";

const cx = classnames.bind(styles);

const Calculator = () => {
  const [inputValue, setInputValue] = useState(0);
  const [value, setValue] = useState(0);

  const add = () => {
    setValue((prev) => prev + inputValue);
  };

  const divide = () => {
    setValue((prev) => Math.round(prev / 2));
  };

  return (
    <div className={cx("calculator")}>
      <h2 data-testid="value">{value}</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.valueAsNumber)}
        data-testid="input"
      />
      <button onClick={add}>Add</button>
      <button onClick={divide}>Divide</button>
    </div>
  );
};

export default Calculator;
