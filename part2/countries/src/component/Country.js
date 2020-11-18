import React, { useState } from "react";

const Country = ({ show, name, ...props }) => {
  const [visible, setVisible] = useState(show);

  return (
    <div>
      <h1>
        {name}
        {!show && (
          <button onClick={() => setVisible((visible) => !visible)}>
            show
          </button>
        )}
      </h1>
      <Details visible={visible} {...props} />
    </div>
  );
};

const Details = ({ visible, capital, flag, population, languages }) => {
  if (!visible) {
    return null;
  }
  return (
    <div>
      <div>capital {capital}</div>
      <div>population {population}</div>
      <img src={flag} alt="flag" width="50px" />
      <h2>languages:</h2>
      <ul>
        {languages.map((language, i) => (
          <li key={i}>{language.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Country;
