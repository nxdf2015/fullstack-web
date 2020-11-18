import { useEffect, useState } from "react";
import { setId } from "../helper";
import { getAll } from "../services/data";


 const useData = (initialize = [] ) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [error , setError ] = useState("");

  useEffect(() => {
    getAll().then(({data }) =>{
      addAll(data.map(setId))
    })
    .catch(error =>setError(error.message) )
    
  },[] )


  let persons = data
 
  if (filter) {
    const pattern = RegExp(filter, "i");
    persons = data.filter((item) => pattern.test(item.name));
  } else {
    persons = data;
  }

  const addAll = (array) => setData(data => [...data,...array])

  const addPerson = ({ name, number }) => {
    if (data.find((person) => person.name === name)) {
      alert(`${name} is already added to the phonebook`);
    } else {
      setData((data) => [...data, { name, number,id : setId() }]);
    }
  };
   
  return { error , persons, addPerson, setFilter };
};


export default useData