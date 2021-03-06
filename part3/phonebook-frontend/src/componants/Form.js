import React  from "react";
import useField from "../hooks/useFields";

const Form = ({ submit }) => {
  const {reset : resetName , ...nameField }= useField();
  const {reset : resetNumber , ...numberField} = useField();
 
  const reset = () => {
    resetName()
    resetNumber()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submit({ name: nameField.value, number: numberField.value });
    reset()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name
        <input {...nameField} />
      </label>
      <label>
        number
        <input {...numberField} />
      </label>
      <input type="submit" value="add" />
    </form>
  );
};

export default Form;
