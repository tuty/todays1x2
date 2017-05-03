import React from 'react';

/*eslint-disable no-console */

function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

const GoogleLogin = () => {


    return (
        <div
            className={'button-container'}
        >
            <div className="g-signin2" data-width="300" data-height="40" data-longtitle="true" data-onsuccess={onSignIn} />
        </div>
    );
};

export default GoogleLogin;
