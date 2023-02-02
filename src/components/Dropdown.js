
import React from "react";

const Dropdown = ({
  name,
  id,
  handleChange,
  disabled,
  label,
  optionsArray,
}) => {
  return (
    <div>
      <label style={{ display: "block" }} htmlFor={id}>
        {label}
      </label>
      <select
        style={{ marginBottom: "10px" }}
        disabled={disabled}
        name={name}
        onChange={handleChange}
      >
        {optionsArray.map((opt) => {
          return <option value={opt.value}>{opt.label}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;



