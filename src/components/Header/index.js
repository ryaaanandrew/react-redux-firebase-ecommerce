import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
    return(
        <header className="header">
            <div className="header__container">
                <div className="header__logo"><Link to='/'>Logo</Link></div>
                <div className="header__logo"><Link to='/registration'>Registration</Link></div>
            </div>
        </header>
    );
};

export default Header;
