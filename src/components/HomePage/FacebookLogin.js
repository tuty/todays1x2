import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
}

const FacebookLoginButton = () => {
    return (
        <div
            className={'button-container'}
        >
            <div className="fb-login-button" data-width="300" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true" data-onlogin="checkLoginState();" />
            <FacebookLogin
                appId="131732787371720"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
            />
        </div>
    );
};

export default FacebookLoginButton;
