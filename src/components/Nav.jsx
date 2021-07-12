import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    flex: 0;
  }
`;

const Hamburguer = styled.div`
  display: none;
  flex-direction: column;

  span {
    height: 5px;
    width: 35px;
    background: ${({ theme }) => theme.textColor};
    margin: 2px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    position: ${({ isOpen }) => (isOpen ? "relative" : "static")};
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    /* display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; */
    transition: height 0.5s, visibility 0.42s;
    height: ${({ isOpen }) => (isOpen ? "100vh" : "0px")};
    width: 100vw;
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    overflow: hidden;
    flex-direction: column;
    justify-content: flex-start;
    background: ${({ theme }) => theme.foreground};
    border-bottom: 5px solid ${({ theme }) => theme.activeColor};
    position: absolute;
    top: 64px;
    right: 0;
  }
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  font-weight: 800;
  outline: none;
  border-bottom: 2px solid transparent;
  @media screen and (min-width: 768px) {
    &:hover {
      color: ${({ theme }) => theme.activeColor};
      border-bottom: 2px solid ${({ theme }) => theme.activeColor};
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-weight: 400;
    font-size: 32px;
    text-align: center;
    margin: 15px 0;
  }
`;

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Hamburguer isOpen={isOpen} onClick={() => setIsOpen((state) => !state)}>
        <span />
        <span />
        <span />
      </Hamburguer>
      <NavItemsContainer isOpen={isOpen}>
        <NavItem href="#">Sobre mim</NavItem>
        <NavItem href="#">Acadêmico</NavItem>
        <NavItem href="#">Skills</NavItem>
      </NavItemsContainer>
    </Container>
  );
}
