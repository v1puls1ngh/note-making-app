import React from 'react';
import './header.css';

const Header = function() {
    return(
        <div className="header">
            <ul>
                <li>
                    <a className="enterprise-name" href="#">MyCom</a>
                </li>
                <li>
                    <a className="nav-link" href="#">About</a>
                </li>
                <li>
                    <a className="nav-link" href="#">Work</a>
                </li>
                <li>
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;

