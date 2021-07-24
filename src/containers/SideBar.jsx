import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import NavBar from "../components/NavBar";
import MyLogo from "../components/MyLogo";

const HeaderWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  min-width: 270px;
  max-width: 270px;
  min-height: 100vh;
  padding: 30px 0 0 40px;
  transition: margin 0.5s linear;
  background: ${({ theme }) => theme.foreground};
  margin-left: ${({ isOpen }) => (isOpen ? "0" : "-270px")};
  color: ${({ theme }) => theme.text};
  box-shadow: 2px 2px 5px ${({ theme }) => theme.foreground};

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    position: fixed;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  transform: rotate(135deg);
  color: #fafafa;
  top: 5px;
  left: 40px;
  position: absolute;
`;

const ContentWrapper = styled.div`
  position: fixed;
`;

const OverflowContent = styled.div`
  background: black;
  opacity: 0.4;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  visibility: hidden;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  }
`;

const Button = styled.span`
  width: 60px;
  height: 60px;
  display: block;
  position: absolute;
  z-index: -1;
  left: 190px;
  top: -10px;
  transform: rotate(45deg);
  background: ${({ theme }) => theme.foreground};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.foreground};
  user-select: none;
`;

const DarkModeButton = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  path {
    color: #fafafa;
    font-size: 24px;
    justify-self: center;
  }
`;

export default function SideBar({ setDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <HeaderWrapper isOpen={isOpen}>
        <ContentWrapper>
          <Button onClick={() => setIsOpen((state) => !state)}>
            <StyledIcon icon={isOpen ? faTimes : faBars} />
          </Button>

          <MyLogo />

          <NavBar />
          <div>
            <DarkModeButton onClick={() => setDarkMode((state) => !state)}>
              <FontAwesomeIcon icon={!darkMode ? faSun : faMoon} />
            </DarkModeButton>
          </div>
        </ContentWrapper>
      </HeaderWrapper>
      <OverflowContent
        onClick={() => setIsOpen((state) => !state)}
        isOpen={isOpen}
      ></OverflowContent>
    </>
  );
}
