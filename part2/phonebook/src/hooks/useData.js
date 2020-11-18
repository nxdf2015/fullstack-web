import { useState } from "react";
import { setId } from "../helper";

 const useData = (initialize) => {
  const [data, setData] = useState(initialize.map(d => setId(d)));
  const [filter, setFilter] = useState("");

  let persons = data;

  if (filter) {
    const pattern = RegExp(filter, "i");
    persons = data.filter((item) => pattern.test(item.name));
  } else {
    persons = data;
  }

  const addPerson = ({ name, number }) => {
    if (data.find((person) => person.name === name)) {
      alert(`${name} is already added to the phonebook`);
    } else {
      setData((persons) => [...data, { name, number,id : setId() }]);
    }
  };

  return { persons, addPerson, setFilter };
};


export default useData