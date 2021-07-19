import { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import MyLogo from "../components/MyLogo";
import SocialLinks from "../components/SocialLinks";
import balloonImage from "../assets/balloon.png";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-left: 0.5vmax;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-15vmax")};
  align-items: center;
  height: 100vh;
  width: 14vmax;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 2px 2px 5px ${({ theme }) => theme.foreground};
  transition: left 0.5s linear;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    margin-left: 0.5vmax;
  }
`;

const Triangle = styled.div`
  position: relative;
  left: 65%;
  top: 40vh;
  width: 0;
  height: 0;
  border-left: ${({ isOpen, theme }) =>
    isOpen ? "" : `20px solid ${theme.highlight}`};
  border-bottom: 20px solid transparent;
  border-top: 20px solid transparent;
  border-right: ${({ isOpen, theme }) =>
    isOpen ? `20px solid ${theme.highlight}` : ""};
  transition: transform 0.1s linear, border 0.5s linear;
  &:active {
    transform: scale(1.2) translate(50%, 0);
    ${({ isOpen }) =>
      isOpen
        ? "border-right: 20px solid cyan"
        : "border-left: 20px solid cyan"};
  }
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    left: 70%;
  }
`;

const Popup = styled.div`
  display: ${({ popUp }) => (popUp ? "flex" : "none")};

  flex-direction: column;
  width: 9vmax;
  height: 7vmax;
  position: relative;
  left: -1vmax;
  top: -7vmax;
  background: url(${balloonImage}) no-repeat center/100%;
`;

const PopupText = styled.span`
  position: relative;
  left: 2vmax;
  top: 0.5vmax;
  font-size: 2vmax;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    font-size: 1.8vmax;
  }
`;

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [popUp, setPopUp] = useState(true);

  return (
    <HeaderWrapper isOpen={isOpen}>
      <Triangle
        isOpen={isOpen}
        onClick={() => {
          setIsOpen((state) => !state);
          setPopUp(false);
        }}
      >
        <Popup popUp={popUp}>
          <PopupText>Fechar menu!</PopupText>
        </Popup>
      </Triangle>

      <MyLogo />
      <SocialLinks />
      <NavBar />
    </HeaderWrapper>
  );
}
