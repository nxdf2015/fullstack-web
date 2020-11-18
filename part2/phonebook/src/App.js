import React  from "react";



import Filter from "./componants/Filter";
import PersonForm from "./componants/PersonForm";
import Persons from "./componants/Persons";

import useData from "./hooks/useData";

const App = () => {
  const { error, persons, addPerson, setFilter } = useData();
   
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter}>test</Filter>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} fields={["name", "number"]} />
      <h2>Numbers</h2>
      {error && <div>{error}</div>}
      <Persons persons={persons} />
    </div>
  );
};

export default App;
