import React from "react";
import { useDispatch } from "react-redux";

const AnecdoteFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>filter</h1>
      <input
        type="text"
        onChange={(e) => dispatch({ type: "filter", filter: e.target.value })}
      />
    </div>
  );
};

export default AnecdoteFilter;
