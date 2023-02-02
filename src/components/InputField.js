import React from "react";

const InputField = ({name,id,handleChange,disabled,label=name.substring(0,1).toUpperCase()+name.substring(1)}) => {
  return (
    <div>
      <label style={{ display: "block" }} htmlFor={id}>
        {label}
      </label>
      <input
        onChange={handleChange}
        disabled={disabled}
        name={name}
        style={{ marginBottom: "10px" }}
      />
    </div>
  );
};

export default InputField;
