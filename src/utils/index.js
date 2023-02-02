import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
export const createFormObject = (formData) => {
  const arrayOfInputNames = formData.formInputs.map((el) => {
    return el.name;
  });
  const finalObj = {};
  arrayOfInputNames.forEach((el) => {
    finalObj[el] = "";
  });
  return finalObj;
};

export const returnInput = (inputInfo, handleChange,handleSubmit) => {
  const { disabled, id, name, optionsArray, label } = inputInfo; // USE SWITCH CASE

  switch (inputInfo.__component) {
    case "form-group.text-field":
      return (
        <InputField
          name={name}
          id={id}
          handleChange={handleChange}
          disabled={disabled}
        />
      );
    case "form-group.dropdown":
      return (
        <Dropdown
          name={name}
          id={id}
          handleChange={handleChange}
          disabled={disabled}
          label={label}
          optionsArray={optionsArray}
        />
      );
    case "form-group.button":
      return (
        <Button
          name={name}
          id={id}
          onSubmit={handleSubmit}
          disabled={disabled}
        />
      );
    default:
      return <></>;
  }
};

