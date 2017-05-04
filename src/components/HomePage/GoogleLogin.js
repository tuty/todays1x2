import React, { Component } from 'react';

class GoogleLogin extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.renderGoogleButton();
    }

    renderGoogleButton() {
        window.gapi.signin2.render('g-signin2', {
            'scope': 'profile',
            'width': 300,
            'height': 40,
            'longtitle': true,
            'onsuccess': this.onSuccessGoogleLogin
        });
    }

    onSuccessGoogleLogin(googleUser) {
        let profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }


    render() {
        return (
            <div
                className={'button-container'}
            >
                <div id="g-signin2" />
            </div>
        );
    }
}

export default GoogleLogin;
