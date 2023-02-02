
import React, { useState } from "react";
import { createFormObject, returnInput } from "../utils";
const Form = ({ formInfo, handleSubmit }) => {
  const [formData, setFormData] = useState(createFormObject(formInfo));


  const handleChange = (event) => {
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return (
    <div>
      {formData && (
        <>
          <div>
            <h2>Form Name: {formInfo.name}</h2>
            <h5>{formInfo.description}</h5>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(formData);
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
                marginTop: "10px",
              }}
            >
              {formInfo &&
                formInfo.formInputs.map((el) => {
                  return returnInput(el,handleChange,handleSubmit)
                })}
              {formInfo && <input type="submit" value="submit" />}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;

