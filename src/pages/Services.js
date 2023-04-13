import React from 'react';
import { NavLink } from 'react-router-dom';

function Services() {
  return (
    <div className="flex-container">
<NavLink to='/weather' className="flex-item javascript">Weather</NavLink>
<NavLink to='/keyboard' className="flex-item html">keyboard</NavLink>
<NavLink to ='' className='flex-item javascript'>JQuery</NavLink>
 </div>
  )
}

export default Services;