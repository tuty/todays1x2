import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';


import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const HeaderDrawer = ({title, handleCloseDrawer, openDrawer}) => {
    return (
        <Drawer
            width={250}
            open={openDrawer}
            docked={false}
            onRequestChange={handleCloseDrawer}
        >
            <AppBar
                title={title}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                onLeftIconButtonTouchTap={handleCloseDrawer}
            />
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
