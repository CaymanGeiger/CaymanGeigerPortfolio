import React, { useState, useEffect, useRef } from 'react';
import "./Nav.css"

export default function Nav() {
    const [navOpened, setNavOpened] = useState(false)


    const hasClicked = useRef(false);

    const handleClick = () => {
        setNavOpened(!navOpened);
        hasClicked.current = true;
    };

    let navClass;
    if (!hasClicked.current) {
        navClass = '';
    } else {
        navClass = navOpened ? 'navUlOpened' : 'navUlClosed';
    }


    return (
        <nav>
            <ul className='navUl'>
                <li
                className='navLi'
                >
                Cayman
                </li>
                <li
                    onClick={handleClick}
                    className={`nav-icon3 ${navOpened ? 'open' : ''}`}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
            </ul>
            <ul className={navClass}>
                    <li className={navOpened ? 'navLiOpened' : 'navLiClosed'}>
                        Test
                    </li>
                </ul>
        </nav>
    );
};
