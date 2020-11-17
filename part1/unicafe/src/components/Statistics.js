import React from "react";

import Statistic from "./Statistic";

function Statistics({ good, bad, neutral }) {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = (100 * good) / total || 0;
  if (total === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      
      <table>
        <thead>
          <tr colSpan="2">
            <th>statistics</th>
          </tr>
        </thead>
        <tbody>
          <Statistic name="good" value={good} />
          <Statistic name="neutral" value={neutral} />
          <Statistic name="bad" value={bad} />
          <Statistic name="all" value={total} />
          <Statistic name="average" value={average} />
          <Statistic name="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
}

export default Statistics;
