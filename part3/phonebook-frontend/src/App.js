import React, { useEffect, useState }  from "react";
import './App.css'


import Filter from "./componants/Filter";
import Form from "./componants/Form";
import Persons from "./componants/Persons";
import Notification from './componants/Notification'
import useData from "./hooks/useData";

const App = () => {
  
  const { persons, addPerson, setFilter, deletePerson , notification  } = useData();
  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification  {...notification} />
      
      <Filter setFilter={setFilter}>test</Filter>
      <h2>add a new</h2>
      <Form   submit={addPerson} />
      <h2>Numbers</h2>
      <Persons  deletePerson={deletePerson} persons={persons} />
    </div>
  );
};

export default App;
 