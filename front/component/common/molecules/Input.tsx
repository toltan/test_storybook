import React, { memo } from "react";

interface InputProps {
  divClass: string;
  inputEvent: React.ChangeEventHandler<HTMLInputElement>;
  inputValue: string;
  name: string;
  labelClass: string;
  labelText: string;
}

const Input: React.FC<InputProps> = memo(
  ({ divClass, inputEvent, inputValue, name, labelClass, labelText }) => {
    return (
      <div className={divClass}>
        <label className={labelClass}>{labelText}</label>
        <input
          type="text"
          name={name}
          value={inputValue}
          onChange={inputEvent}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
