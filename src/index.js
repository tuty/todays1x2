/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

///////////////////////////////////////////////////////

// import func to test merging

// import { getUsers, deleteUser } from './api/userApi';

// Populate table of users via API call.

// getUsers().then(result => {
//     let usersBody = ``;

//     result.forEach(user => {
//         usersBody += `<tr>
//             <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
//             <td>${user.id}</td>
//             <td>${user.firstName}</td>
//             <td>${user.lastName}</td>
//             <td>${user.email}</td>
//             </tr>
//         `;
//     });

//     global.document.getElementById('users').innerHTML = usersBody;

//     const deleteLinks = global.document.getElementsByClassName('deleteUser');

//     Array.from(deleteLinks, link => {
//         link.onclick = (event) => {
//             const element = event.target;
//             event.preventDefault();
//             deleteUser(element.attributes["data-id"].value);
//             const row = element.parentNode.parentNode;
//             row.parentNode.removeChild(row);
//         };
//     });
// });
