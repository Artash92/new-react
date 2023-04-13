import React from 'react';
import { NavLink } from 'react-router-dom';

function Html() {
  return (
    <div className="flex-container">
    <NavLink to='/html_1' className="flex-item javascript"> HTML_1</NavLink>
    <NavLink to='/html_2' className="flex-item html">Html_2</NavLink>
    <NavLink to='/html_3' className="flex-item javascript"> Html_3</NavLink>
    </div>
  )
}

export default Html