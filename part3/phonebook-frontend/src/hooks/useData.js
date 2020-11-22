import { useEffect, useState } from "react";
import * as personService from "../services/data";
import { v4 } from "uuid";


const useData = (initialize = []) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState({});
  
  const successNotification = message => setNotification({type : "success" , message , id : v4()})
  const errorNotification = message => setNotification({type : "error" , message , id : v4()})
  
  useEffect(() => {
    personService
      .getAll()
      .then(({ data }) => {
        addAll(data);
      })
      .catch((error) => {
        errorNotification(error.message)
         
      });
  }, []);

  let persons = data;

  if (filter) {
    const pattern = RegExp(filter, "i");
    persons = data.filter((item) => pattern.test(item.name));
  } else {
    persons = data;
  }

  const replace = (id, newPerson) => {
    try {
      setData((data) =>
        data.map((person) => (person.id === id ? newPerson : person))
      );
      personService.updateOne(id, newPerson);
    } catch (error) {
      errorNotification(error.message)
    }
  };

  const addAll = (array) => setData((data) => [...data, ...array]);

  const addPerson = async ({ name, number }) => {
    console.log(data)
    if (data.find((person) => person.name === name)) {
      if (
        window.confirm(
          `${name} is already added to the phonebook, replace the old number with the new one ?`
        )
      ) {
        const person = data.find((person) => person.name === name);

        replace(person.id, { ...person, number });
        
        successNotification(`update ${name} `)
         
      }
    } else {
      try {
        const response = await personService.addOne({
          name,
          number,
          id: v4(),
        });

        setData((data) => [...data, response.data]);
        successNotification(`Added ${name}`)
      } catch (error) {
        
        errorNotification(error.message)
      }
    }
  };

  const deletePerson = (id) => {
    const person = data.find((p) => p.id === id);
    personService.deleteOne(id).catch((error) => {
      setNotification({
        type: "danger",
        message: `${person.name} has already been removed from server`,
      });
      errorNotification(`${person.name} has already been removed from server`);
    });
    setData(data.filter((person) => person.id !== id));
  };

  return {   persons, addPerson, setFilter, deletePerson, notification };
};

export default useData;
