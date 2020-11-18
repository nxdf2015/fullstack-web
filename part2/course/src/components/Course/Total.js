import React from "react";

const Total = ({parts }) => (
  <div>
    <p>
      total of {parts.reduce((count, course) => course.exercises + count, 0)} exercises
    </p>
  </div>
);
export default Total;