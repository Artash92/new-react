import React from 'react'
import { NavLink } from 'react-router-dom';

function Courses() {
 

return (
<div className="flex-container">
<NavLink to='/javascript' className="flex-item javascript"> JavaScript ES5/ES6 </NavLink>
<NavLink to='/html' className="flex-item html">HTML</NavLink>
<NavLink to='/reactjs' className="flex-item reactjs">ReactJS</NavLink>
</div>
);
}

export default Courses;