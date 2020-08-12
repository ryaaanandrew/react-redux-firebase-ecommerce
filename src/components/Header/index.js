import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = (props) => {
    const { currentUser } = props;

    console.log('header props: ', props);


    return(
        <header className="header">
            <div className="header__container">
                <div className="header__logo"><Link to='/'>Logo</Link></div>
                { currentUser && (
                    <>
                        <div className="header__logo">Hello, {currentUser.displayName}</div>
                        <div className="header__logo"><Link to='/logout'>Logout</Link></div>
                    </>
                )}

                { !currentUser && (
                    <>
                    <div className="header__logo"><Link to='/registration'>Registration</Link></div>
                    <div className="header__logo"><Link to='/login'>Login</Link></div>
                    </>
                )}
                
            </div>
        </header>
    );
};

export default Header;
