import React, { useContext } from 'react';
import { ScrollContext } from './ScrollContext';
import "./Navigation.css"

export default function Navigation() {
    const { scrollToSection } = useContext(ScrollContext);

    return (
        <div className="navigation" style={{
                zIndex: "1000",
                display: "flex",
                justifyContent: "space-around",
                width: "135px",
                }}
                >
            <button
                onClick={() => scrollToSection('containerForAnimatedDivTwo')}
                className="custom-btn btn-5">
                <span>
                    Skills
                </span>
            </button>
            <button
                onClick={() => scrollToSection('containerForAnimatedDivThree')}
                className="custom-btn btn-5">
                <span>
                    Projects
                </span>
            </button>
        </div>
    );
}
