import React from "react";

const Course = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map(course  => <Course {...course} />)}
  </div>
);
export default Content;
