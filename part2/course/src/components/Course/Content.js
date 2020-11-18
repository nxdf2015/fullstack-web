import React from "react";

const Part = ({ name, exercises }) => (
  <p>
    <strong>{name}</strong> {exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map(course  => <Part key={course.id}  {...course} />)}
  </div>
);
export default Content;
