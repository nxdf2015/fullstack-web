import React from "react";

const Total = ({parts }) => (
  <div>
    <p>
      number of exercises {parts.reduce((count, course) => course.exercises + count, 0)}
    </p>
  </div>
);
export default Total;
