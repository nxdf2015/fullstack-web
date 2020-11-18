import React, { useState } from "react";
import   Details  from "./Details";

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

export default Country;
