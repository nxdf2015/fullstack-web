import React from "react";
const Persons = ({ deletePerson, persons }) => (
  <div>
    {persons.map((person) => (
      <Person key={person.id} {...person} deletePerson={deletePerson} />
    ))}
  </div>
);

const Person = ({ id, name, number, deletePerson }) => (
  <div key={id}>
    {name} {number}
    <button
      onClick={() => {
        if (window.confirm(`delete ${name} ?`)) {
          deletePerson(id);
        }
      }}
    >
      delete
    </button>
  </div>
);
export default Persons;
