import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';


import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
    constructor(props) {
        super(props);
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

        return (
            <div>
                <AppBar
                    title={title}
                    onLeftIconButtonTouchTap={this.handleOpenDrawer}
                />
                <Drawer
                    width={250}
                    open={this.state.openDrawer}
                    docked={false}
                    onRequestChange={(open) => this.setState({ openDrawer: open })}
                    containerStyle = {{"backgroundColor": "rgba(255, 255, 255, 0.8)"}}
                >
                    <AppBar
                        title={title}
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        onLeftIconButtonTouchTap={this.handleCloseDrawer}
                    />
                    <Menu>
                        <MenuItem
                            onTouchTap={this.handleCloseDrawer}
                            containerElement={<IndexLink to="/" />}
                            primaryText={'Home'}
                        />
                        <MenuItem
                            onTouchTap={this.handleCloseDrawer}
                            containerElement={<Link to="/fuel-savings" />}
                            primaryText={'Demo App'}
                        />
                        <MenuItem
                            onTouchTap={this.handleCloseDrawer}
                            containerElement={<Link to="/about" />}
                            primaryText={'About'}
                        />
                    </Menu>
                </Drawer>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: 'My appbar'
};

export default Header;

