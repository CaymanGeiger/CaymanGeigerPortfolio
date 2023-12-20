import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGitlab } from '@fortawesome/free-brands-svg-icons';
import Navigation from './Navigation';
import useWindowSize from '../functions/WindowSize';
import "./Nav.css"


export default function Nav() {
    const [navOpened, setNavOpened] = useState(false)
    const { width } = useWindowSize()

    const hasClicked = useRef(false);

    const handleClick = () => {
        setNavOpened(!navOpened);
        hasClicked.current = true;
    };

    let navClass;
    if (!hasClicked.current) {
        navClass = 'noDivOpened';
    } else {
        navClass = navOpened ? 'navDivOpened' : 'navDivClosed';
    }


    return (
        <nav>
                <ul className='navUl'>
                    <li
                        className='navLi'
                    >
                    {width < 768 && (
                        <div className='navLogoNameSmallDiv'>
                            <img
                                className='navLogoNameSmall'
                                src="CG1.png" />
                        </div>
                    )}
                    {width > 768 && (
                        <img
                            className='navLogoName'
                            src="CG1.png" />
                    )}
                    </li>
                    {width > 768 && (
                        <li>
                            <Navigation />
                        </li>
                    )}
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
            <div className={navClass}>
                <ul className={navOpened ? 'navUlOpened' : 'navUlClosed'}>
                    <li className={navOpened ? 'navLiOpened' : 'navLiClosed'}>
                    </li>
                    {width < 768 && (
                        <li className={navOpened ? 'navNavigation' : 'navNavigationClosed'}>
                            <Navigation />
                        </li>
                    )}
                </ul>
                <div
                    className={navOpened ? 'navMyMedia' : 'navMyMediaClosed'}
                    >
                    <h3 style={{
                        color: "#c89591",
                        margin: "10px 0 6px 0",
                        padding: 0,
                        borderBottom: "1px solid white"
                        }}
                        >
                        My Media
                    </h3>
                </div>
                <ul
                    className={navOpened ? 'wrapper' : 'wrapperClosed'}>
                    <li className={`${'linkedin'} ${navOpened ? 'navIcon' : 'navIconClosed'}`}>
                        <span className="tooltip">Linkedin</span>
                        <span>
                            <FontAwesomeIcon className='navIcons' icon={faLinkedin} />
                        </span>
                    </li>
                    <li className={`${'gitlab'} ${navOpened ? 'navIcon' : 'navIconClosed'}`}>
                        <span className="tooltip">Gitlab</span>
                        <span>
                            <FontAwesomeIcon className='navIcons' icon={faSquareGitlab} />
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
