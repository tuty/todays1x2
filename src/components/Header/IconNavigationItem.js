import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import styled from 'styled-components';
import {displayFlex} from '../../utils/styledComponentsHelpers';

const StyledLink = styled(Link)`
    color: #c7d1d8;
    padding: 0 0.5em;
    .fa {
        font-size: 24px;
    }
    & * {
        ${displayFlex};
        justify-content: center;
    }
    & .label {
        font-size: 0.8em;
        padding: 0.1em;
    }
    &:hover {
        color: #FFF;
    }
`;

const IconNavigationItem = ({link, icon, label}) => {
    return (
        <StyledLink
            to={link}
            className={'nav-item'}
        >
            <div
                className={'nav-item__icon'}
            >
                {icon}
            </div>
            <div
                className={'label'}
            >
                {label}
            </div>
        </StyledLink>
    );
};

IconNavigationItem.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
};

export default IconNavigationItem;
