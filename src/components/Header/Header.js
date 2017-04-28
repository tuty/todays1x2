import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import { fullWhite } from 'material-ui/styles/colors';
import ActionReorder from 'material-ui/svg-icons/action/reorder';

import HeaderDrawer from './HeaderDrawer';
import IconNavigationItem from './IconNavigationItem';
import UserNavigationItem from './UserNavigationItem';

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

    handleOnRequestChange(value) { this.setState({ openUserMenu: value }); }

    handleOnTouchTap() { this.setState({ openUserMenu: !this.state.openUserMenu }); }

    render() {

        const { title } = this.props;
        const { openDrawer } = this.state;

        return (
            <div className={'app-header-container'}>
                <Toolbar
                    className={'app-header'}
                    style={{
                        "backgroundColor": "#283E4A",
                        "maxWidth": "1128px",
                        "margin": "auto"
                    }}
                >
                    <ToolbarGroup firstChild={true}>
                        <div className={'open-drawer'}>
                            <IconButton
                                onTouchTap={this.handleOpenDrawer}
                            >
                                <ActionReorder color={fullWhite} />
                            </IconButton>
                        </div>
                        <Link
                            to={'/'}
                        >
                            <ToolbarTitle
                                text={title}
                                style={{
                                    color: "#FFF",
                                    fontFamily: 'Indie Flower, cursive',
                                    fontSize: '1.5em'
                                }}
                            />
                        </Link>

                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true}>
                        <IconNavigationItem
                            link={'/'}
                            icon={<i className="material-icons">home</i>}
                            label={'Home'}
                        />
                        <IconNavigationItem
                            link={'/tipsters'}
                            icon={<i className="material-icons">people_outline</i>}
                            label={'Tipsters'}
                        />
                        <IconNavigationItem
                            link={'/betting-guide'}
                            icon={<i className="fa fa-book" aria-hidden="true" />}
                            label={'Betting Guide'}
                        />
                        <IconNavigationItem
                            link={'/messaging'}
                            icon={<i className="material-icons">message</i>}
                            label={'Messaging'}
                        />
                        <IconNavigationItem
                            link={'/notifications'}
                            icon={<i className="fa fa-bell" aria-hidden="true" />}
                            label={'Notifications'}
                        />
                        <ToolbarSeparator
                            style={{
                                'backgroundColor': '#FFF',
                                margin: '0 1em',
                            }}
                        />
                        <UserNavigationItem />
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
