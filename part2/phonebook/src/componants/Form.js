import React  from "react";
import useField from "../hooks/useFields";

const Form = ({ submit }) => {
  const nameField = useField();
  const numberField = useField();

  const reset = () => {
    nameField.reset()
    numberField.reset()
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
