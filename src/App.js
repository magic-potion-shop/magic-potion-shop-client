import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    color: #FFF;
    background-color: #100720;
  }

  .sr-only {
    position: absolute;
    top: -9999px;
    left: -9999px;
    z-index: -1;
    width: 1px;
    height: 1px;
    overflow: hidden;
    visibility: hidden;
  }
`;

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 15px;
  width: 320px;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
}

export default App;
