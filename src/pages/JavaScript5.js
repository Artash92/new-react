import React from 'react'
import { NavLink } from 'react-router-dom';

function JavaScript() {
  return (
  
<div className="flex-container">
<NavLink to='/es5_1' className="flex-item javascript"> JavaScript 1</NavLink>
<NavLink to='/es5_2' className="flex-item html">JavaScript 2 </NavLink>
<NavLink to='/es5_3' className="flex-item javascript"> JavaScript 3</NavLink>
<NavLink to='/es5_4' className="flex-item html">JavaScript 4</NavLink>
<NavLink to='/es5_5' className="flex-item javascript"> JavaScript 5</NavLink>
<NavLink to='/es5_6' className="flex-item html">JavaScript 6</NavLink>
<NavLink to='/es5_7' className="flex-item javascript"> JavaScript 7</NavLink>
<NavLink to='/es5_8' className="flex-item html">JavaScript 8</NavLink>
<NavLink to='/es5_9' className="flex-item javascript"> JavaScript DOM/BOM</NavLink>
<NavLink to='/es5_10' className="flex-item javascript"> JavaScript ES5 Examples</NavLink>
 
 </div>
  )
}



export default JavaScript;