import React from 'react'
import styled from 'styled-components';
import CloseIcon from '../../../assets/icons/close.png'

const Button = styled.button`
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    background-image: url(${CloseIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
`;

const CloseButton = ({ onClickCloseButton }) => {
  return <Button onClick={onClickCloseButton} />;
};

export default CloseButton;
