import React from 'react';
import styled from 'styled-components';

const Text = styled.strong`
  display: block;
  ${props => props.marginBottom ? `margin-bottom: ${props.marginBottom};` : null}
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;

  & span {
    color: #8479e1;
  }
`;

const EmphasisText = (props) => {
  return (
    <Text marginBottom={props.marginBottom}>{props.children}</Text>
  );
}

export default EmphasisText;
