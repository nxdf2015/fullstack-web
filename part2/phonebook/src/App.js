import React, { useEffect, useState }  from "react";
import './App.css'


import Filter from "./componants/Filter";
import Form from "./componants/Form";
import Persons from "./componants/Persons";
import Notification from './componants/Notification'
import useData from "./hooks/useData";

const App = () => {
  
  const { error, persons, addPerson, setFilter, deletePerson  } = useData();
  const [notification  , setNotification ] = useState(false)
  
  
  const notify = ({type , message}) => {
    setNotification({type, message})
  }
  useEffect(() => {

   if (error){
     notify({type:"danger" , message : error})}

  },[error])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification   type={notification.type} message={notification.message} />
      
      <Filter setFilter={setFilter}>test</Filter>
      <h2>add a new</h2>
      <Form  notify={notify} submit={addPerson} />
      <h2>Numbers</h2>
      {error && <div>{error}</div>}
      <Persons notify={notify} deletePerson={deletePerson} persons={persons} />
    </div>
  );
};

export default App;
 