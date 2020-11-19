import React  from "react";



import Filter from "./componants/Filter";
import Form from "./componants/Form";
import Persons from "./componants/Persons";

import useData from "./hooks/useData";

const App = () => {
  const { error, persons, addPerson, setFilter, deletePerson  } = useData();
   
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter}>test</Filter>
      <h2>add a new</h2>
      <Form  submit={addPerson} />
      <h2>Numbers</h2>
      {error && <div>{error}</div>}
      <Persons deletePerson={deletePerson} persons={persons} />
    </div>
  );
};

export default App;
