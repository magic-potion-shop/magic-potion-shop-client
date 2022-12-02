import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0 6px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 2px;
  color: var(--main-color);
  background-color: var(--sub-bg-color);
`;

const CancleButton = () => {
  return (
    <Button>☓</Button>
  );
}

export default CancleButton;
