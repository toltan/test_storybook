import React, { memo } from "react";

interface CheckBoxProps {
  checked: boolean;
  changeEvent: React.ChangeEventHandler<HTMLInputElement>;
  divClass: string;
  index?: number;
  labelClass: string;
  labelText: string;
  name: string;
}

const CheckBox: React.FC<CheckBoxProps> = memo(
  ({ divClass, changeEvent, checked, index, labelClass, labelText, name }) => {
    console.log("input");
    return (
      <div className={divClass}>
        <label className={labelClass}>{labelText}</label>
        <input
          name={name}
          type="checkbox"
          checked={checked}
          data-index={index}
          onChange={changeEvent}
        />
      </div>
    );
  },
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
