import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
       <nav>
           <NavLink to={'/pre-junior' }>Pre</NavLink>
           <NavLink to={'/junior' }>Jun</NavLink>
           <NavLink to={'/junior-plus' }>Jun+</NavLink>
       </nav>
    )
}

export default Header
