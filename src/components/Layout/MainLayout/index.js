import React from 'react';
import './styles.scss';

const MainLayout = (props) => {
    return(
        <div className="mainLayout">
            { props.children }
        </div>
    );
};

export default MainLayout;
