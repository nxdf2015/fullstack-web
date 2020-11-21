import React from "react";
const Persons = ({ notify ,deletePerson, persons }) => (
  <div>
    {persons.map((person) => (
      <Person notify={notify} key={person.id} {...person} deletePerson={deletePerson} />
    ))}
  </div>
);

const Person = ({ notify , id, name, number, deletePerson }) => (
  <div key={id}>
    {name} {number} {id}
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
