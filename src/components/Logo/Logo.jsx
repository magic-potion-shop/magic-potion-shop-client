import styled from "styled-components";
import WhiteLogo from "../../assets/logo/white.png"

const LogoImage = styled.img`
  width: 200px;
`;

const Logo = () => {
  return (
    <LogoImage src={WhiteLogo} alt="마녀의 물약상점 로고" />
  );
};

export default Logo;
