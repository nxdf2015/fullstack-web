import React from "react";
const Persons = ({persons}) => (
  <div>
    {persons.map(({ name, number ,id  }) => (
      <div key={id}>
        {name} {number}
      </div>
    ))}
  </div>
);
export default Persons;
