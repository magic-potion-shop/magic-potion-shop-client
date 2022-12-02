import React from 'react';
import styled from 'styled-components';
import RedPotionIcon from '../../assets/icons/potion/dark/red-potion.png';
import OrangePotionIcon from '../../assets/icons/potion/dark/orange-potion.png';
import YellowPotionIcon from '../../assets/icons/potion/dark/yellow-potion.png';
import GreenPotionIcon from '../../assets/icons/potion/dark/green-potion.png';
import BluePotionIcon from '../../assets/icons/potion/dark/blue-potion.png';
import PinkPotionIcon from '../../assets/icons/potion/dark/pink-potion.png';
import PurplePotionIcon from '../../assets/icons/potion/dark/purple-potion.png';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 35px 8px;
  margin-bottom: 70px;
`;

const Item = styled.li`
  text-align: center;
  cursor: pointer;

  & img {
    display: inline-block;
    width: 60px;
    margin-bottom: 5px;
  }

  & figcaption {
    font-size: 14px;
    line-height: 2.1;
  }
`;

const PotionList = () => {
  return (
    <List>
      <Item>
        <figure>
          <img src={RedPotionIcon} alt='' />
          <figcaption>사랑해 물약</figcaption>
        </figure>
      </Item>
      <Item>
        <figure>
          <img src={OrangePotionIcon} alt='' />
          <figcaption>힘내 물약</figcaption>
        </figure>
      </Item>
      <Item>
        <figure>
          <img src={YellowPotionIcon} alt='' />
          <figcaption>축하해 물약</figcaption>
        </figure>
      </Item>
      <Item>
        <figure>
          <img src={GreenPotionIcon} alt='' />
          <figcaption>고마워 물약</figcaption>
        </figure>
      </Item>
      <Item>
        <figure>
          <img src={BluePotionIcon} alt='' />
          <figcaption>건강해 물약</figcaption>
        </figure>
      </Item>
      <Item>
        <figure>
          <img src={PinkPotionIcon} alt='' />
          <figcaption>귀여워 물약</figcaption>
        </figure>
      </Item>
      <Item>
        <figure>
          <img src={PurplePotionIcon} alt='' />
          <figcaption>미안해 물약</figcaption>
        </figure>
      </Item>
    </List>
  );
}

export default PotionList;
