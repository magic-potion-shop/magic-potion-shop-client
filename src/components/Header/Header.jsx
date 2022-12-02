import styled from "styled-components";
import BackButton from "../Buttons/BackButton/BackButton";
import MenuButton from "../Buttons/MenuButton/MenuButton";

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Header = ({ onClickMenu }) => {
  return (
    <HeaderLayout>
      <h1 className="sr-only">마녀의 물약상점</h1>
      <BackButton />
      <MenuButton onClickMenu={onClickMenu} />
    </HeaderLayout>
  );
};

export default Header;
