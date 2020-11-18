import React from "react";

import Form from "./Form";
import Field from "./Field";
import Button from "./Button";

const PersonForm = ({ addPerson }) => (
  <Form submit={addPerson} initialize={{ name: "", number: "" }}>
    <div>
      <Field name="name" />
      <Field name="number" />
      <Button name="add" type="submit" />
    </div>
  </Form>
);
export default PersonForm;
