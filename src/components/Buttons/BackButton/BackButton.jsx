import React from 'react'
import styled from 'styled-components';
import BackIcon from '../../../assets/icons/back.png'

const Button = styled.button`
    width: 32px;
    height: 32px;
    border: none;
    background-color: transparent;
    background-image: url(${BackIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
`;

const BackButton = () => {
    return <Button />;
};

export default BackButton;
