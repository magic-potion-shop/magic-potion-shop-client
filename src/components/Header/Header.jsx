import styled from "styled-components";
import MenuButton from "../Button/MenuButton/MenuButton";

const HeaderLayout = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: right;
`;

const Header = ({ onClickMenu }) => {
  return (
    <HeaderLayout>
      <h1 className="sr-only">마녀의 물약상점</h1>
      <MenuButton onClickMenu={onClickMenu} />
    </HeaderLayout>
  );
};

export default Header;
