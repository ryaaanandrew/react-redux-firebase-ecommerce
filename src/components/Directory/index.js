import React from 'react';
import shopMens from '../../assets/shopMens.jpg';
import shopWomens from '../../assets/shopWomens.jpg';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="directory__container">
                <div 
                    className="card"
                    style={{
                        backgroundImage: `url(${shopMens})`
                    }}>
                        <a className="directory__link" href="www.google.com">Shop Mens</a>
                </div>
                <div 
                    className="card"
                    style={{
                        backgroundImage: `url(${shopWomens})`
                    }}>
                        <a className="directory__link" href="www.google.com">Shop Womens</a>
                </div>
            </div>
        </div>
    );
};

export default Directory;
