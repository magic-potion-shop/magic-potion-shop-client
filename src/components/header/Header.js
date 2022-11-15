import styled from "styled-components";

const HeaderLayout = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: right;

  & button {
    width: 30px;
    height: 30px;
    margin: 15px 15px 0 0;
    border: none;
    background-color: transparent;
    background-image: url("/assets/images/Menu.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderLayout>
      <button type="button"></button>
    </HeaderLayout>
  );
};

export default Header;
