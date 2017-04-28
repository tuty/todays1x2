import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { displayFlex } from '../../utils/styledComponentsHelpers';

import Avatar from 'material-ui/Avatar';
import SocialPerson from 'material-ui/svg-icons/social/person';

const Wrapper = styled.div`
    ${displayFlex};
    justify-content: center;
    flex-direction: column;
    padding: 0 0.3em;
`;

const AvatarContainer = styled.div`
    ${displayFlex};
    justify-content: center;
`;

const Label = styled.div`
    ${displayFlex};
    justify-content: center;
    font-size: 0.8em;
    color: #FFF;
    padding: 0.1em;
    & .material-icons {
        font-size: 1rem;
    }
`;


class UserNavigationItemContent extends Component {

    render() {

        const { avatarSize, url } = this.props;

        return (
            <Wrapper>
                <AvatarContainer
                    className={'avatar-container'}
                >
                    {url ? (<Avatar
                        src={url}
                        size={avatarSize}
                    />) : (<Avatar
                        size={avatarSize}
                        icon={<SocialPerson />}
                    />)}
                </AvatarContainer>
                <Label
                    className={'label'}
                >
                    <span>Me</span>
                    <i className="material-icons">&#xE5CF;</i>
                </Label>
            </Wrapper>
        );
    }
}

UserNavigationItemContent.propTypes = {
    avatarSize: PropTypes.number,
    url: PropTypes.string,
};

UserNavigationItemContent.defaultProps = {
    avatarSize: 24
};

export default UserNavigationItemContent;
