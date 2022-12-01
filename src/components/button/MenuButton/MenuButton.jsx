import React from 'react';
import styled from 'styled-components';
import MenuIcon from "../../../assets/icons/menu.png";

const Button = styled.button`
    width: 30px;
    height: 30px;
    margin: 15px 15px 0 0;
    border: none;
    background-color: transparent;
    background-image: url(${MenuIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
`;

const MenuButton = ({ onClickMenu }) => {
  return <Button onClick={onClickMenu} />;
};

export default MenuButton;
