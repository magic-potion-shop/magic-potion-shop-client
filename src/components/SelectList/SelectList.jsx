import React from 'react';
import styled from 'styled-components';
import CancleButton from '../Buttons/CancleButton/CancleButton';

const List = styled.ol`
  padding: 11px 12px 11px 20px;
  border: 2px solid var(--main-color);
  border-radius: 5px;

  & strong {
    margin-right: 8px;
  }

  & li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Item = styled.li`
  font-size: 15px;
  line-height: 1.6;
`;

const SelectList = () => {
  return (
    <List>
      <Item>
        <strong>귀여워 물약</strong>
        <CancleButton />
      </Item>
      <Item>
        <strong>고마워 물약</strong>
        <CancleButton />
      </Item>
      <Item>
        <strong>건강해 물약</strong>
        <CancleButton />
      </Item>
    </List>
  );
}

export default SelectList;
