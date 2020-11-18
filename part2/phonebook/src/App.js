import React from "react";

import data from "./data";

import Filter from "./componants/Filter";
import PersonForm from "./componants/PersonForm";
import Persons from "./componants/Persons";

import   useData from "./hooks/useData";
 
const App = () => {

  const { persons, addPerson, setFilter } = useData(data);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} fields={["name","number"]} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
