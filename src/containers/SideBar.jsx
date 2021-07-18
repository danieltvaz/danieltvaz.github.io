import styled from "styled-components";
import NavBar from "../components/NavBar";
import MyLogo from "../components/MyLogo";
import SocialLinks from "../components/SocialLinks";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-left: 3vmax;
  top: 0;
  align-items: center;
  height: 100vh;
  width: 14vmax;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    margin-left: 1.5vmax;
  }
`;

export default function SideBar() {
  return (
    <HeaderWrapper>
      <MyLogo />
      <SocialLinks />
      <NavBar />
    </HeaderWrapper>
  );
}
