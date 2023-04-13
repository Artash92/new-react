import React from 'react';
import { NavLink } from 'react-router-dom';

 function ReactJS() {
  return (
    <div>
    <div className="flex-container">
<NavLink to='/react_1' className="flex-item javascript"> ReactJS 1</NavLink>
<NavLink to='/react_2' className="flex-item html">ReactJS 2 </NavLink>
<NavLink to='/react_3' className="flex-item javascript"> ReactJS 3</NavLink>
<NavLink to='/react_4' className="flex-item html">ReactJS 4</NavLink>
<NavLink to='/react_5' className="flex-item javascript"> ReactJS 5</NavLink>
<NavLink to='/react_6' className="flex-item html">ReactJS 6</NavLink>
<NavLink to='/react_7' className="flex-item javascript"> ReactJS 7</NavLink>
<NavLink to='/react_8' className="flex-item html">ReactJS 8</NavLink>
<NavLink to='/react_9' className="flex-item javascript"> ReactJS 9</NavLink>
 
 </div>
    
    </div>
  )
}


export default ReactJS;