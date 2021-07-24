import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 30px;
  align-self: left;
`;

const MyName = styled.h1`
  /* text-align: center; */
  line-break: loose;
  margin: 0;
  font-size: 24px;
  color: #fafafa;
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
      <MyName>Daniel Tostes</MyName>
      <Title>Web Developer</Title>
    </LogoWrapper>
  );
}
