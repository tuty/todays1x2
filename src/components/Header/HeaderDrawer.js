import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import {fullWhite} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const HeaderDrawer = ({ title, handleCloseDrawer, openDrawer }) => {
    return (
        <Drawer
            width={250}
            open={openDrawer}
            docked={false}
            onRequestChange={handleCloseDrawer}
        >
            <Toolbar
                className={'app__drawer-header'}
                style={{
                    "background-color": "#283E4A"
                }}
            >
                <ToolbarGroup
                    firstChild={true}
                    onTouchTap={handleCloseDrawer}
                >
                    <IconButton><NavigationClose color = {fullWhite}/></IconButton>
                    <ToolbarTitle
                        text={title}
                        style={{
                            color: "#FFF"
                        }}
                    />
                </ToolbarGroup>
            </Toolbar>
            <Menu>
                <MenuItem
                    onTouchTap={handleCloseDrawer}
                    containerElement={<IndexLink to="/" />}
                    primaryText={'Home'}
                />
                <MenuItem
                    onTouchTap={handleCloseDrawer}
                    containerElement={<Link to="/fuel-savings" />}
                    primaryText={'Demo App'}
                />
                <MenuItem
                    onTouchTap={handleCloseDrawer}
                    containerElement={<Link to="/about" />}
                    primaryText={'About'}
                />
            </Menu>
        </Drawer>
    );
};

HeaderDrawer.propTypes = {
    title: PropTypes.string,
    handleCloseDrawer: PropTypes.func.isRequired,
    openDrawer: PropTypes.bool,
};

export default HeaderDrawer;
