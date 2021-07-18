import styled from "styled-components";

const LogoWrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  transform: translate(-50%, -5%);
  left: 50%;
  top: 5%;
`;

const Logo = styled.img`
  width: 10vmax;
  border-radius: 50%;
  transition: all 0.5s;

  box-shadow: 0px 0px 5px ${({ theme }) => theme.highlight};
  &:hover {
    box-shadow: 0px 0px 15px ${({ theme }) => theme.highlight};
  }
`;

const MyName = styled.h1`
  margin-top: 1vmax;
  font-size: 1.2vmax;
  text-align: center;
  line-break: loose;
`;

const Title = styled.h2`
  font-size: 1vmax;
  text-align: center;
  line-break: loose;
`;

export default function MyLogo() {
  return (
    <LogoWrapper>
      <Logo src={"https://avatars.githubusercontent.com/u/73543926?v=4"} />
      <MyName>Daniel Tostes</MyName>
      <Title>Web Developer</Title>
    </LogoWrapper>
  );
}
