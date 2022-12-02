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

const Layout = styled.section`
  margin-top: 45px;
  color: var(--white);

  & button {
    position: absolute;
    bottom: 25px;
  }

  & strong {
    padding-left: 10px;
  }
`;

const PotionList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 35px 8px;
  margin: 0 25px 70px 25px;
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

const MakePotionPage = () => {
  return (
    <Layout>
      <div>
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
      </div>

      <div>
        <EmphasisText marginBottom='25px'>선택한 <span>레시피</span>에요</EmphasisText>
        <ol>
          <li>귀여워 물약</li>
          <li>고마워 물약</li>
          <li>건강해 물약</li>
          <li>귀여워 물약</li>
          <li>고마워 물약</li>
          <li>건강해 물약</li>
          <li>귀여워 물약</li>
          <li>고마워 물약</li>
          <li>건강해 물약</li>
          <li>귀여워 물약</li>
          <li>고마워 물약</li>
          <li>건강해 물약</li>
        </ol>
      </div>

      <div>
        <EmphasisText marginBottom='25px'>선택한 레시피로 만든 <span>물약</span>이에요</EmphasisText>
        <div>물약</div>
      </div>

      {/* <FillButton>물약 전달하러 가기</FillButton> */}
    </Layout>
  );
}

export default MakePotionPage;
