import styled from "styled-components";

const ButtonLayout = styled.button`
  left: 15px;
  right: 15px;
  padding: 13px 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  border: none;
  border-radius: 2px;
  color: #fff;
  background-color: #8479e1;
  cursor: pointer;
`;

const Button = ({ contents }) => {
  return <ButtonLayout>{contents}</ButtonLayout>;
};

export default Button;
