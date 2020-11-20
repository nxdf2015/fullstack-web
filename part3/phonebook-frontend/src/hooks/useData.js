import { useEffect, useState } from "react";
import * as personService from "../services/data";
import { v4 } from "uuid";

const useData = (initialize = []) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    personService
      .getAll()
      .then(({ data }) => {
        addAll(data);
      })
      .catch((error) => setError(error.message));
  }, []);

  let persons = data;

  if (filter) {
    const pattern = RegExp(filter, "i");
    persons = data.filter((item) => pattern.test(item.name));
  } else {
    persons = data;
  }

  const replace = (id, newPerson) => {
    setData((data) =>
      data.map((person) => (person.id === id ? newPerson : person))
    );
    personService.updateOne(id, newPerson);
  };

  const addAll = (array) => setData((data) => [...data, ...array]);

  const addPerson = async ({ name, number }) => {
    if (data.find((person) => person.name === name)) {
      if (
        window.confirm(
          `${name} is already added to the phonebook, replace the old number with the new one ?`
        )
      ) {
        const person = data.find((person) => person.name === name);
        replace(person.id, { ...person, number });
      }
    } else {
      const response = await personService.addOne({
        name,
        number,
        id: v4(),
      });
      setData((data) => [...data, response.data]);
    }
  };

  const deletePerson = (id) => {
    const person = data.find(p =>p.id === id)
    personService
      .deleteOne(id)
      .catch((error) => setError(`${person.name} has already been removed from server`));
      setData(data.filter((person) => person.id !== id))
  };

  return { error, persons, addPerson, setFilter, deletePerson };
};

export default useData;
