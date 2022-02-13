import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './header.module.css'

function Header() {
    let [visibleMenu, setVisibleMenu] = useState<boolean>(false)
    const onClickHandler = () => setVisibleMenu(!visibleMenu)
    return (
        <nav>-
            <img src={visibleMenu? require('./img/menu-hamburger-button.png') : require('./img/menu-hamburger-button.png')}
                 alt="Menu"
                 className={s.img}
                 onClick={onClickHandler}
            />
            <NavLink to={'/pre-junior'} className={visibleMenu?s.menu:""}>Pre</NavLink>
            <NavLink to={'/junior'} className={visibleMenu?s.menu:""}>Jun</NavLink>
            <NavLink to={'/junior-plus'} className={visibleMenu?s.menu:""}>Jun+</NavLink>
        </nav>
    )
}

export default Header
