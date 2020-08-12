import React from 'react';
import Signin from '../../components/Signin';
import './styles.scss';

const Login = props => {
    return(
        <div className="login">
            <div className="login__container">
                <Signin />
            </div>
        </div>
    );
};

export default Login;
