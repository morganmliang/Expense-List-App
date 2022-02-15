import React from 'react';
import { NavLink } from 'react-router-dom';


const AllPortfolios = () => {

    return (

        <div>
            This is portfolio page.
            <NavLink to="/portfolio/1" >Item1</NavLink>
            <NavLink to="/portfolio/2" >Item2</NavLink>
        
        </div>
    );


};

export default AllPortfolios;