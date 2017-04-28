import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import {displayFlex} from '../../utils/styledComponentsHelpers';


const Wrapper = styled.div`
    ${displayFlex}
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    color: #FFF;
    background-color: red;
    background-image: url('http://eridubet.com/wp-content/uploads/2015/03/France-leage-girl-win-predictions-1024x576.jpg');
    background-repeat:no-repeat;
    background-position:center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    & div {
        ${displayFlex}
        flex-direction: column;
        max-width: 50%;
        & a {
            color: #FFF;
        }
    }
`;

const NotFoundPage = () => {
    return (
        <Wrapper>
            <div>
                <h1>
                    404 Page Not Found
                </h1>
                <Link to="/"> Go back to homepage </Link>
            </div>
        </Wrapper>
    );
};

export default NotFoundPage;
