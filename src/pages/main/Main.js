import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/button/Button";

const MainLayout = styled.main`
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

const Main = () => {
  return (
    <MainLayout>
      <Contents>
        <h1 className="sr-only">마녀의 물약상점 메인 페이지</h1>
        <Logo />
        <p>
          어서오세요, <span>마녀의 물약상점</span>입니다
        </p>
      </Contents>
      <Button contents="물약 제조하러 가기" />
    </MainLayout>
  );
};

export default Main;
