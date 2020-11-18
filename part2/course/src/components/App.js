import React from "react";

import Course from "./Course";

import { courses } from "../data";


const App = (props) => <div>
    <h1>Web development curriculum</h1>
     { courses.map(course =><Course key={course.id} course={course} />)}
</div>

export default App;
