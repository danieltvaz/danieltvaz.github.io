import styled from "styled-components";
import logo from "../assets/logo.png";

const LogoWrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  transform: translate(-50%, -5%);
  left: 50%;
  top: 5%;
`;

const Logo = styled.img`
  width: 10vmax;
`;

export default function MyLogo() {
  return (
    <LogoWrapper>
      <Logo src={logo} />
    </LogoWrapper>
  );
}
