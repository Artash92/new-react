import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Features from '../components/Features';
//import SubFooter from './SubFooter';

import { Outlet } from 'react-router-dom';



function Wrapper(props) {
   
    return (
        <div>  
            <Navigation />
            <Outlet/>
            <Features />
           {/* <Footer /> */}
          {/* <SubFooter />*/}
        </div>
    );
}

export default Wrapper; 