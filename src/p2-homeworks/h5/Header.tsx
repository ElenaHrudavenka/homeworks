import React, {MouseEventHandler, useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './header.module.css'

function Header() {
    let [visibleMenu, setVisibleMenu] = useState<boolean>(false)
    const onClickHandler = () => setVisibleMenu(!visibleMenu)

    return (
        <div className={s.section}>
            {/* {visibleMenu &&
                <nav>
                    <NavLink to={'/pre-junior'}>
                        <button>PreJunior</button>
                    </NavLink>
                    <NavLink to={'/junior'}>
                        <button>Junior</button>
                    </NavLink>
                    <NavLink to={'/junior-plus'}>
                        <button>JuniorPlus</button>
                    </NavLink>
                </nav>
            }
            <a href="#" className={s.menuBtn}>
                <span></span>
            </a>*/}
            {visibleMenu ?
                <>
                    <nav>
                        <NavLink to={'/pre-junior'}>
                            <button className={s.btnMenu}>PreJunior</button>
                        </NavLink>
                        <NavLink to={'/junior'}>
                            <button className={s.btnMenu}>Junior</button>
                        </NavLink>
                        <NavLink to={'/junior-plus'}>
                            <button className={s.btnMenu}>JuniorPlus</button>
                        </NavLink>
                    </nav>
                    <a href="#" className={s.menuClose} onClick={onClickHandler}>
                        <span></span>
                    </a>
                </> :
                <a href="#" className={s.menuBtn} onClick={onClickHandler}>
                    <span></span>
                </a>
            }

        </div>
    )
}

export default Header
