import styled from "styled-components";
import Logo from "../../Components/Logo/Logo";
import FillButton from "../../Components/Buttons/FillButton/FillButton";
import EmphasisText from "../../Components/EmphasisText/EmphasisText";

const Contents = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & img {
    display: block;
    margin-bottom: 18px;
  }
`;

const MainPage = () => {
  return (
    <>
      <Contents>
        <h2 className="sr-only">마녀의 물약상점 메인 페이지</h2>
        <Logo />
        <EmphasisText>어서오세요, <span>마녀의 물약상점</span>입니다</EmphasisText>
      </Contents>
      <FillButton>물약 제조하러 가기</FillButton>
    </>
  );
};

export default MainPage;
