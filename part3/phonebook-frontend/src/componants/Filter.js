import React from "react";
import useField from "../hooks/useFields";

const Filter = ({ setFilter }) => {
  const {reset , ...filterField} = useField();
  const updateField = {
    ...filterField,
    onChange: (event) => {
      filterField.onChange(event);
      setFilter(event.target.value);
    },
  };
  return (
    <div>
      filter shown with: <input {...updateField} />
    </div>
  );
};

export default Filter;
