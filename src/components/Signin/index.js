import React from 'react';
import Button from '../Forms/Buttons';
import './styles.scss'

const Signin = (props) => {
    return(
        <div className="signin">
            <div className="signin__container">
                <h1 className="signin__header">sign in</h1>
                <div className="formContainer">
                    <div className="formContainer__social">
                        <Button>Google</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
