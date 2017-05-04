import React from 'react';
import PropTypes from 'prop-types';

export default class FacebookButton extends React.Component {
   constructor(props) {
      super(props);

      this.FB = props.fb;
   }

   componentDidMount() {
      this.FB.Event.subscribe('auth.logout',
         this.onLogout.bind(this));
      this.FB.Event.subscribe('auth.statusChange',
         this.onStatusChange.bind(this));
   }

   onStatusChange(response) {
      console.log( response );

      if( response.status === "connected" ) {
         this.FB.api('/me', function(response) {
            console.log( response );
         });
      }
   }

   onLogout(response) {
       console.log(response);
   }

   render() {
      return (
          <div className={'button-container'}>
            <div className="fb-login-button" data-width="300" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true" />
          </div>
      );
   }
}

FacebookButton.propTypes = {
    fb: PropTypes.object.isRequired
};
