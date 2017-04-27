import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import SocialPerson from 'material-ui/svg-icons/social/person';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import { fullWhite } from 'material-ui/styles/colors';
import ActionReorder from 'material-ui/svg-icons/action/reorder';
import Avatar from 'material-ui/Avatar';
import { Tabs, Tab } from 'material-ui/Tabs';

import HeaderDrawer from './HeaderDrawer';


class Header extends Component {

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

        const { title } = this.props;
        const { openDrawer } = this.state;

        return (
            <div className={'app-header-container'}>
                <Toolbar
                    className={'app-header'}
                    style={{
                        "background-color": "#283E4A",
                        "max-width": "1128px",
                        "margin": "auto"
                    }}
                >
                    <ToolbarGroup firstChild={true}>
                        <IconButton
                            onTouchTap={this.handleOpenDrawer}
                        >
                            <ActionReorder color={fullWhite} />
                        </IconButton>
                        <ToolbarTitle
                            text={title}
                            style={{
                                color: "#FFF"
                            }}
                        />
                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true}>
                        <ToolbarSeparator
                            style={{
                                'background-color': '#FFF',
                                margin: '0 1em',
                                height: '90%'
                            }}
                        />
                        <IconMenu
                            iconButtonElement={
                                <div>
                                    <div
                                        className={'avatar-container'}
                                    >
                                        <Avatar
                                            size={24}
                                            icon={<SocialPerson />}
                                        />
                                    </div>

                                    <div
                                        className={'label'}
                                    >
                                        Me
                                        <i className="material-icons">&#xE5CF;</i>
                                    </div>
                                </div>

                            }
                        >
                            <MenuItem primaryText="Download" />
                            <MenuItem primaryText="More Info" />
                        </IconMenu>
                    </ToolbarGroup>
                </Toolbar>

                <HeaderDrawer title={title} openDrawer={openDrawer} handleCloseDrawer={this.handleCloseDrawer} />
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;
