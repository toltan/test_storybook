import React, { memo } from "react";

interface ButtonProps {
  divClass: string;
  buttonEvent: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
  labelClass: string;
  labelText: string;
}

const Button: React.FC<ButtonProps> = memo(
  ({ divClass, buttonEvent, buttonText, labelClass, labelText }) => {
    return (
      <div className={divClass}>
        <label className={labelClass}>{labelText}</label>
        <button onClick={buttonEvent}>{buttonText}</button>
      </div>
    );
  },
);

Button.displayName = "Button";

export default Button;
