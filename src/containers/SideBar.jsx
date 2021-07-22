import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    position: fixed;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  transform: rotate(135deg);
  color: ${({ theme }) => theme.whiteText};
  top: 5px;
  left: 40px;
  position: absolute;
`;

const ContentWrapper = styled.div`
  position: fixed;
`;

const Button = styled.span`
  width: 60px;
  height: 60px;
  display: inline;
  position: absolute;
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

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <HeaderWrapper isOpen={isOpen}>
      <ContentWrapper>
        <Button onClick={() => setIsOpen((state) => !state)}>
          <StyledIcon icon={faBars} />
        </Button>

        <MyLogo />
        <NavBar />
      </ContentWrapper>
    </HeaderWrapper>
  );
}
