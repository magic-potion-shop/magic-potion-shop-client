import React from 'react';
import styled from 'styled-components';
import LoginButtonImage from '../../../assets/images/kakao-login.png'

const Button = styled.button`
    width: 183px;
    height: 45px;
    border: none;
    background-color: transparent;
    background-image: url(${LoginButtonImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
`;

const LoginButton = () => {
    return <Button />;
};

export default LoginButton;
