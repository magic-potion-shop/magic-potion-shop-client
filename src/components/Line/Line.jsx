import React from 'react';
import styled from 'styled-components';

const Horizon = styled.hr`
  width: 90%;
  height: 1px;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: var(--line-color);
  margin: 0 0 ${props => props.margin} auto;
`;

const Line = ({ margin }) => {
  return (
    <Horizon margin={margin}></Horizon>
  );
}

export default Line;