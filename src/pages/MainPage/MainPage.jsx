import styled from "styled-components";
import Logo from "../../Components/Logo/Logo";
import FillButton from "../../Components/Button/FillButton/FillButton";

const MainLayout = styled.main`
  color: var(--white);

  & button {
    position: absolute;
    bottom: 25px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    margin-bottom: 18px;
  }

  & p {
    font-size: 17px;
    font-weight: 700;
    line-height: 24px;

    & span {
      color: #8479e1;
    }
  }
`;

const MainPage = () => {
  return (
    <MainLayout>
      <Contents>
        <h2 className="sr-only">마녀의 물약상점 메인 페이지</h2>
        <Logo />
        <p>
          어서오세요, <span>마녀의 물약상점</span>입니다
        </p>
      </Contents>
      <FillButton contents="물약 제조하러 가기" />
    </MainLayout>
  );
};

export default MainPage;
