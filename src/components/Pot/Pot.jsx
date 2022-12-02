import React from 'react';
import styled from 'styled-components';
import PotIcon from '../../assets/icons/pot.png';

const Wrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  margin: 0 auto;
`;

const PotImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Color = styled.div`
  position: absolute;
  width: 125px;
  height: 90px;
  bottom: 6px;
  border-radius: 35%;
  background-color: red;
`;

const Pot = () => {
  return (
    <Wrapper>
      <PotImage src={PotIcon} alt="완성된 물약" />
      <Color />
    </Wrapper>
  );
}

export default Pot;
