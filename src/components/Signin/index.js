import React, { Component } from 'react';
import Button from '../Forms/Buttons';
import { signInWithGoogle } from '../../firebase/utils';
import './styles.scss'

class Signin extends Component {

    handleSubmit = async (e) => {
        e.preventDefault();
        signInWithGoogle();
    };
    
    render(){
        return(
            <div className="signin">
                <div className="signin__container">
                    <h1 className="signin__header">sign in</h1>
                    <div className="formContainer">
                        <div className="formContainer__social">
                            <Button onClick={e => this.handleSubmit(e)}>
                                Sign in with Google
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Signin;
