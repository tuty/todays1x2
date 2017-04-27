import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {
//     lightGreen500,
//     lightGreen700,
//     grey400,
//     amber500,
//     grey100,
//     grey500,
//     darkBlack,
//     white,
//     grey300,
//     fullBlack
// } from 'material-ui/styles/colors';
// import {fade} from 'material-ui/utils/colorManipulator';


// const muiTheme = getMuiTheme({
//     palette: {
//         primary1Color: lightGreen500,
//         primary2Color: lightGreen700,
//         primary3Color: grey400,
//         accent1Color: amber500,
//         accent2Color: grey100,
//         accent3Color: grey500,
//         textColor: darkBlack,
//         alternateTextColor: white,
//         canvasColor: white,
//         borderColor: grey300,
//         disabledColor: fade(darkBlack, 0.3),
//         pickerHeaderColor: lightGreen500,
//         clockCircleColor: fade(darkBlack, 0.07),
//         shadowColor: fullBlack
//     }
// });

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
    render() {
        return (
            <div>
                <Header title={'Todays1x2'}/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;
