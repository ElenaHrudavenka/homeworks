import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './header.module.css'

function Header() {
    let [visibleMenu, setVisibleMenu] = useState<boolean>(false)
    return (
        <nav>
            <img src={require('./img/menu-hamburger-button.png')} alt="Menu" className={s.img}/>
            <NavLink to={'/pre-junior'} className={s.menu}>Pre</NavLink>
            <NavLink to={'/junior'} className={s.menu}>Jun</NavLink>
            <NavLink to={'/junior-plus'} className={s.menu}>Jun+</NavLink>
        </nav>
    )
}

export default Header
