import React from 'react';
import styled from 'styled-components';

const Text = styled.strong`
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;

  & span {
    color: #8479e1;
  }
`;

const EmphasisText = (props) => {
  return (
    <Text>{props.children}</Text>
  );
}

export default EmphasisText;
