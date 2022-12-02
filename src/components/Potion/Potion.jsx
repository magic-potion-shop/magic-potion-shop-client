import React from 'react';
import styled from 'styled-components';
import BottleImage from '../../assets/icons/potion/light/bottle.png';

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto ${props => props.marginBottom ? props.marginBottom : 0} auto;
`;

const Bottle = styled.img`
  position: absolute;
  width: 90px;
  height: 90px;
  z-index: 100;
`;

const Color = styled.div`
  position: absolute;
  width: 50px;
  height: 43px;
  left: 20px;
  bottom: 18px;
  border-radius: 38%;
  ${props => props.color};
`;

const Potion = ({ color, marginBottom }) => {
  return (
    <Wrapper marginBottom={marginBottom}>
      <Bottle src={BottleImage} alt="" />
      <Color color={color} />
    </Wrapper>
  );
}

export default Potion;
