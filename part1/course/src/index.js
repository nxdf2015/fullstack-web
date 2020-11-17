import React from "react";
import ReactDOM from "react-dom";

import Header  from "./components/Header";
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course ={
    name:  "Half Stack application development",
     content : [
      {part: "Fundamentals of React",
      exercises: 10},
      {part: "Using props to pass data",
      exercises: 7},
      {part: "State of a component",
      exercises: 14}
    ]
  }
  
  

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.content}/>
      <Total parts={course.content}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
