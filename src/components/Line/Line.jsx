import React from 'react';
import styled, { css } from 'styled-components';

const PAGES = {
  menu: css`
    width: 90%;
    margin: 0 0 20px auto;
    border-color: var(--line-color);
  `,
  letter: css`
    width: 100%;
    margin: 0 auto 30px auto;
    border-color: var(--letter-line-color);
  `
}

const Horizon = styled.hr`
  ${props => props.pageStyle};
  height: 1px;
  border-width: 1px 0 0 0;
  border-style: solid;
`;

const Line = ({ page = 'menu' }) => {
  const pageStyle = PAGES[page];

  return (
    <Horizon pageStyle={pageStyle} />
  );
}

export default Line;