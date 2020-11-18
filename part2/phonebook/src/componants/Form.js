import React from "react";

const Form = ({   submit ,initialize, children }) => {
  const fields = Object.keys(initialize)

  const handleSubmit = event => {
      event.preventDefault()
      const target = event.target
      const entries = fields.map(field => [ field , target[field].value])
      const values = Object.fromEntries(entries)
      submit(values)
  }
  return <form onSubmit={handleSubmit} >{children}</form>;
};


export default Form