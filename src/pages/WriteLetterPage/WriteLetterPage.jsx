import React from 'react';
import styled from 'styled-components';
import MoveButton from '../../Components/Buttons/MoveButton/MoveButton';
import EmphasisText from '../../Components/EmphasisText/EmphasisText';
import Line from '../../Components/Line/Line';
import Potion from '../../Components/Potion/Potion';

const Layout = styled.section`
  padding: 10px;
  margin-top: 45px;
  color: var(--main-bg-color);
`;

const LetterWrapper = styled.div`
  padding: 40px 13px 30px;
  margin-bottom: 25px;
  border-radius: 5px;
  background-color: var(--sub-bg-color);
`;

const Header = styled.header`
  margin-bottom: 30px;
`;

const PotionName = styled.p`
  width: 90%;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;
`;

const WritingWrapper = styled.div`
  color: var(--letter-color);

  & input {
    padding: 2px 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.875;
    color: var(--letter-color);
  }

  & input,
  & textarea {
    border: 1px solid var(--line-color);
    border-radius: 5px;
  }

  & label {
    margin-right: 8px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.875;
  }
`;

const ReceiverWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & input {
    flex: 1;
    width: 100%;
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;

  & strong {
    font-size: 12px;
    font-weight: 700;
    line-height: 2.5;
  }

  & textarea {
    width: 100%;
    height: 300px;
    padding: 10px;
    font-size: 15px;
    line-height: 1.73333333333;
  }
`;

const SenderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & input {
    flex: 1;
    width: 100%;
  }
`;

const WriteLetterPage = () => {
  return (
    <Layout>
      <h2 className='sr-only'>편지 작성하기</h2>
      <EmphasisText marginBottom='40px'>물약 안에 <span>마음</span>을 담아주세요</EmphasisText>

      <LetterWrapper>
        <Header>
          <Potion color='background-color: #00DBDE;background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);' marginBottom='11px' />
          <PotionName>고마워그리고귀여워그리고건강해고마워그리고귀여워그리고건강해그리고사랑해</PotionName>
        </Header>
        <Line page='letter' />
        <WritingWrapper>
          <ReceiverWrapper>
            <label for='to'>To.</label>
            <input type='text' id='to' placeholder='홍시' />
          </ReceiverWrapper>
          <ContentsWrapper>
            <strong>(0/500)</strong>
            <textarea />
          </ContentsWrapper>
          <SenderWrapper>
            <label for='from'>From.</label>
            <input type='text' id='from' placeholder='나무' />
          </SenderWrapper>
        </WritingWrapper>
      </LetterWrapper>

      <MoveButton to='/'>물약 전달하기</MoveButton>
    </Layout>
  );
}

export default WriteLetterPage;
