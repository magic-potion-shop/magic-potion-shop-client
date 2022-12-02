import React from 'react';
import styled from 'styled-components';
import FillButton from '../../Components/Buttons/FillButton/FillButton';
import EmphasisText from '../../Components/EmphasisText/EmphasisText';
import RedPotionIcon from '../../assets/icons/potion/dark/red-potion.png';
import OrangePotionIcon from '../../assets/icons/potion/dark/orange-potion.png';
import YellowPotionIcon from '../../assets/icons/potion/dark/yellow-potion.png';
import GreenPotionIcon from '../../assets/icons/potion/dark/green-potion.png';
import BluePotionIcon from '../../assets/icons/potion/dark/blue-potion.png';
import PinkPotionIcon from '../../assets/icons/potion/dark/pink-potion.png';
import PurplePotionIcon from '../../assets/icons/potion/dark/purple-potion.png';
import PotIcon from '../../assets/icons/pot.png';
import { Link } from 'react-router-dom';

const Layout = styled.section`
  margin-top: 45px;
  color: var(--white);
  padding: 10px;
`;

const PostionListWrapper = styled.div`
  margin-bottom: 70px;
`

const PotionList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 35px 8px;
  margin-bottom: 70px;
`;

const PotionItem = styled.li`
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

const SelectPotionListWrapper = styled.div`
  margin-bottom: 70px;
`;

const SelectPotionList = styled.ol`
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

const SelectPotionItem = styled.li`
  font-size: 15px;
  line-height: 1.6;
`;

const CancleButton = styled.button`
  padding: 0 6px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 2px;
  color: var(--main-color);
  background-color: var(--sub-bg-color);
`;

const ResultPotionWrapper = styled.div`
  margin-bottom: 60px;
`;

const ResultPotion = styled.div`
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

const MakePotionPage = () => {
  return (
    <Layout>
      <PostionListWrapper>
        <EmphasisText marginBottom='40px'>전하고 싶은 <span>물약</span>을 골라주세요</EmphasisText>
        <PotionList>
          <PotionItem>
            <figure>
              <img src={RedPotionIcon} alt='' />
              <figcaption>사랑해 물약</figcaption>
            </figure>
          </PotionItem>
          <PotionItem>
            <figure>
              <img src={OrangePotionIcon} alt='' />
              <figcaption>힘내 물약</figcaption>
            </figure>
          </PotionItem>
          <PotionItem>
            <figure>
              <img src={YellowPotionIcon} alt='' />
              <figcaption>축하해 물약</figcaption>
            </figure>
          </PotionItem>
          <PotionItem>
            <figure>
              <img src={GreenPotionIcon} alt='' />
              <figcaption>고마워 물약</figcaption>
            </figure>
          </PotionItem>
          <PotionItem>
            <figure>
              <img src={BluePotionIcon} alt='' />
              <figcaption>건강해 물약</figcaption>
            </figure>
          </PotionItem>
          <PotionItem>
            <figure>
              <img src={PinkPotionIcon} alt='' />
              <figcaption>귀여워 물약</figcaption>
            </figure>
          </PotionItem>
          <PotionItem>
            <figure>
              <img src={PurplePotionIcon} alt='' />
              <figcaption>미안해 물약</figcaption>
            </figure>
          </PotionItem>
        </PotionList>
      </PostionListWrapper>

      <SelectPotionListWrapper>
        <EmphasisText marginBottom='25px'>선택한 <span>레시피</span>에요</EmphasisText>
        <SelectPotionList>
          <SelectPotionItem>
            <strong>귀여워 물약</strong>
            <CancleButton>☓</CancleButton>
          </SelectPotionItem>
          <SelectPotionItem>
            <strong>고마워 물약</strong>
            <CancleButton>☓</CancleButton>
          </SelectPotionItem>
          <SelectPotionItem>
            <strong>건강해 물약</strong>
            <CancleButton>☓</CancleButton>
          </SelectPotionItem>
        </SelectPotionList>
      </SelectPotionListWrapper>

      <ResultPotionWrapper>
        <EmphasisText marginBottom='40px'>선택한 레시피로 만든 <span>물약</span>이에요</EmphasisText>
        <ResultPotion>
          <PotImage src={PotIcon} alt="완성된 물약" />
          <Color />
        </ResultPotion>
      </ResultPotionWrapper>

      <FillButton>
        <Link to='/write-letter'>
          물약 포장하러 가기
        </Link>
      </FillButton>
    </Layout>
  );
}

export default MakePotionPage;
