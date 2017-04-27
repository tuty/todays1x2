import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';

import HeaderDrawer from './HeaderDrawer';


class componentName extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            openDrawer: false
        };
        this.handleCloseDrawer = this.handleCloseDrawer.bind(this);
        this.handleOpenDrawer = this.handleOpenDrawer.bind(this);
    }

    handleCloseDrawer() { this.setState({ openDrawer: false }); }

    handleOpenDrawer() { this.setState({ openDrawer: true }); }

    render() {

        const {title} = this.props;
        const {openDrawer} = this.state;

        return (
            <div>
                <AppBar
                    title={title}
                    onLeftIconButtonTouchTap={this.handleOpenDrawer}
                />
                <HeaderDrawer title={title} openDrawer={openDrawer} handleCloseDrawer={this.handleCloseDrawer}/>
            </div>
        );
    }
}

componentName.propTypes = {
    title: PropTypes.string,
};

export default componentName;
