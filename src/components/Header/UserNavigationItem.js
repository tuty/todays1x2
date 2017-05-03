import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import UserNavigationItemContent from './UserNavigationItemContent';

class UserNavigationItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            openUserMenu: false
        };

        this.handleOnRequestChange = this.handleOnRequestChange.bind(this);
        this.handleOnTouchTap = this.handleOnTouchTap.bind(this);
    }

    handleOnRequestChange(value) { this.setState({ openUserMenu: value }); }

    handleOnTouchTap() { this.setState({openUserMenu: !this.state.openUserMenu}); }

    render() {

        const {openUserMenu} = this.state;
        const {avatarSize} = this.props;

        return (
            <IconMenu
                iconButtonElement={<UserNavigationItemContent avatarSize={avatarSize} url={"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/17021666_10209094475742381_2278686381581670974_n.jpg?oh=dd40dbb4d1132e013242ae1a67412db2&oe=598732FE"}/>}
                open={openUserMenu}
                onTouchTap={this.handleOnTouchTap}
                onRequestChange={this.handleOnRequestChange}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                style={{cursor: 'pointer'}}
            >
                <MenuItem primaryText="Download" />
                <MenuItem primaryText="More Info" />
            </IconMenu>
        );
    }
}

UserNavigationItem.propTypes = {
    avatarSize: PropTypes.number,
};

export default UserNavigationItem;
