import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import MainPage from "./Pages/MainPage/MainPage";
import "./app.css";
import { useEffect, useState } from "react";
import MakePotionPage from "./Pages/MakePotionPage/MakePotionPage";
import { useWindowSize } from "./Hooks/useWindowSize";
import { Route, Routes } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: inherit;
    background-color: grey;
  }

  button, input, textarea {
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  hr {
    margin: 0;
  }

  a {
    color: var(--main-bg-color);
    text-decoration: none;
  }
`;

const Main = styled.main`
  flex: 1;
  color: var(--white);

  & button {
    position: absolute;
    bottom: 25px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 15px;
  background-color: var(--main-bg-color);
`;

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header onClickMenu={handleOpenMenu} />
        {
          isOpenMenu ? <Menu onClickCloseButton={handleCloseMenu} /> : null
        }
        <Main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/make" element={<MakePotionPage />} />
            {/* <Route path="/*" element={<NotFoundPage />} /> */}
          </Routes>
        </Main>
      </Container>
    </>
  );
}

export default App;
