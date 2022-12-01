import styled from "styled-components";

const Button = styled.button`
  left: 15px;
  right: 15px;
  padding: 13px 0;
  font-size: 15px;
  line-height: 24px;
  border: none;
  border-radius: 2px;
  color: #fff;
  background-color: #8479e1;
  cursor: pointer;
`;

const FillButton = ({ contents }) => {
  return <Button>{contents}</Button>;
};

export default FillButton;
