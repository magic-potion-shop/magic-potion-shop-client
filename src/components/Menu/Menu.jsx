import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CloseButton from '../Button/CloseButton/CloseButton';
import LoginButton from '../Button/LoginButton/LoginButton';
import Line from '../Line/Line';

const MenuLayout = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100vh;
  padding: 20px 20px 25px 0;
  text-align: right;
  background-color: #FFF;
  z-index: 100;
`;

const Header = styled.header`
  margin-bottom: 35px;
`;

const Title = styled.strong`
  display: inline-block;
  margin-bottom: 55px;
  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;

  & em {
    color: var(--main-color);
  }
`;

const MenuList = styled.ul`
  font-size: 20px;
  line-height: 1.3;

  & li:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const LoginPhrase = styled.p`
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 1.3;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 25px;
  right: 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.5;

  & a {
    color: var(--sub-color);
  }

  & a:first-child {
    margin-bottom: 8px;
  }
`;

const Menu = ({ onClickCloseButton }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <MenuLayout>
      <Header>
        <CloseButton onClickCloseButton={onClickCloseButton} />
      </Header>

      <div>
        <h2 className='sr-only'>메뉴</h2>
        <Title>
          {
            isLogin
              ? <>반가워요, <em>나무</em>님</>
              : <><em>마녀의 물약상점</em>에<br /> 오신 걸 환영합니다</>
          }
        </Title>

        {
          isLogin
            ? (<MenuList>
              <li>
                <a href="#">홈</a>
              </li>
              <Line margin='20px' />
              <li>
                <a href="#">물약 제조하기</a>
              </li>
              <Line margin='20px' />
              <li>
                <a href="#">보낸 물약</a>
              </li>
              <Line margin='20px' />
              <li>
                <a href="#">받은 물약</a>
              </li>
              <Line margin='20px' />
              <li>
                <a href="#">로그아웃</a>
              </li>
            </MenuList>)
            : (<>
              <LoginPhrase>카카오 로그인을 하시면<br />물약을 제조할 수 있어요</LoginPhrase>
              <LoginButton />
            </>)
        }
      </div>

      <Footer>
        <a href="#">마녀의 물약상점 소개</a>
        <a href="#">이미지 라이센스</a>
      </Footer>
    </MenuLayout>
  );
}

export default Menu;
