import { useState } from "react";

import styled from "styled-components";
import NavBar from "../components/NavBar";
import MyLogo from "../components/MyLogo";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 270px;
  max-width: 270px;
  min-height: 100vh;
  padding: 30px 0 0 40px;
  transition: all 0.5s linear;

  background: ${({ theme }) => theme.foreground};
  margin-left: ${({ isOpen }) => (isOpen ? "0" : "-270px")};
  color: ${({ theme }) => theme.text};
  box-shadow: 2px 2px 5px ${({ theme }) => theme.foreground};

  @media screen and (min-width: 320px) and (max-width: 1023px) {
  }
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 240px;
  top: 60px;
`;

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <HeaderWrapper isOpen={isOpen}>
      <Button onClick={() => setIsOpen((state) => !state)}>oi</Button>

      <MyLogo />
      {/* <SocialLinks /> */}
      <NavBar />
    </HeaderWrapper>
  );
}
