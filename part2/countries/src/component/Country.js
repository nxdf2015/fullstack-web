import React from "react";
const Country = ({ name, capital, population, languages, flag }) => {
  console.log(flag);

  return (
    <div>
      <h1>{name}</h1>
      <div>capital {capital}</div>
      <div>population {population}</div>
      <img src={flag} alt="flag" width="50px" />
      <h2>languages:</h2>
      <ul>
        {languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Country;
