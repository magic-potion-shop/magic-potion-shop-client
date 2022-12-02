import React from 'react';
import styled from 'styled-components';
import EmphasisText from '../../Components/EmphasisText/EmphasisText';
import PotionList from '../../Components/PotionList/PotionList';
import SelectList from '../../Components/SelectList/SelectList';
import Pot from '../../Components/Pot/Pot';
import MoveButton from '../../Components/Buttons/MoveButton/MoveButton';

const Layout = styled.section`
  margin-top: 45px;
  color: var(--white);
  padding: 10px;
`;

const PostionListWrapper = styled.div`
  margin-bottom: 70px;
`

const SelectPotionListWrapper = styled.div`
  margin-bottom: 70px;
`;

const ResultPotionWrapper = styled.div`
  margin-bottom: 60px;
`;

const MakePotionPage = () => {
  return (
    <Layout>
      <PostionListWrapper>
        <EmphasisText marginBottom='40px'>전하고 싶은 <span>물약</span>을 골라주세요</EmphasisText>
        <PotionList />
      </PostionListWrapper>

      <SelectPotionListWrapper>
        <EmphasisText marginBottom='25px'>선택한 <span>레시피</span>에요</EmphasisText>
        <SelectList />
      </SelectPotionListWrapper>

      <ResultPotionWrapper>
        <EmphasisText marginBottom='40px'>선택한 레시피로 만든 <span>물약</span>이에요</EmphasisText>
        <Pot />
      </ResultPotionWrapper>

      <MoveButton to='/write-letter'>
        물약 포장하러 가기
      </MoveButton>
    </Layout>
  );
}

export default MakePotionPage;
