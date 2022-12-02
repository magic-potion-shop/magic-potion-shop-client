import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  display: block;
  width: 100%;
  padding: 13px 0;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  border: none;
  border-radius: 2px;
  color: var(--white);
  background-color: var(--main-color);
  cursor: pointer;
`;

const MoveButton = (props) => {
  return (
    <Button to={props.to}>{props.children}</Button>
  );
};

export default MoveButton;
