import React from "react";

import Form from "./Form";
import Field from "./Field";
import Button from "./Button";

const PersonForm = ({ addPerson, fields }) => {
  const initialize = Object.fromEntries(fields.map((field) => [field, ""]));

  return (
    <Form submit={addPerson} initialize={initialize}>
      <div>
        {fields.map((name, i) => (
          <Field key={i} name={name} />
        ))}
        <Button name="add" type="submit" />
      </div>
    </Form>
  );
};
export default PersonForm;
