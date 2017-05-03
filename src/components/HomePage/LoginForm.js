import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';

const style = {
    paper: {
        width: '100%',
        height: '70%',
        backgroundColor: 'rgba(40,62,74, 0.5)',
        color: '#FFF',
        padding: '1em',

    }
};

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            passConfirm: null,

        };
    }
    render() {
        return (
            <Paper
                className={'login-form'}
                style={style.paper}
            >
                <header><h1>Welcome</h1></header>
                <div
                    className={'social-login-container'}
                >
                    <FacebookLogin />
                    <GoogleLogin />
                </div>
            </Paper>
        );
    }
}

LoginForm.propTypes = {

};

export default LoginForm;
