import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 30px;
  align-self: left;
`;

const Logo = styled.img`
  width: 120px;
  border-radius: 50%;
  transition: all 0.5s;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.highlight};
  margin-bottom: 30px;

  &:hover {
    box-shadow: 0px 0px 15px ${({ theme }) => theme.highlight};
  }
`;

const MyName = styled.h1`
  /* text-align: center; */
  line-break: loose;
  margin: 0;
  font-size: 24px;
`;

const Title = styled.h2`
  /* text-align: center; */
  font-size: 16px;
  margin-top: -5px;
  line-break: loose;
  color: ${({ theme }) => theme.highlight};
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
