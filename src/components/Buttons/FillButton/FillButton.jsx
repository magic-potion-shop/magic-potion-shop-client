import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 13px 0;
  font-size: 15px;
  line-height: 24px;
  border: none;
  border-radius: 2px;
  color: var(--white);
  background-color: var(--main-color);
  cursor: pointer;
`;

const FillButton = (props) => {
  return <Button>{props.children}</Button>;
};

export default FillButton;
