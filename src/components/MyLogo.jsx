import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  &:hover {
    user-select: none;
  }
`;

const RightArrow = styled.span`
  color: ${({ theme }) => theme.activeColor};
  font-weight: 400;
  font-size: 48px;
  &:after {
    content: "<";
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 32px;
  }
`;
const LeftArrow = styled.span`
  color: ${({ theme }) => theme.activeColor};
  font-weight: 400;
  font-size: 48px;
  &:after {
    content: ">";
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 32px;
  }
`;

const MyName = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-weight: 400;
  margin: 0 5px;
  display: inline-block;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 32px;
  }
`;

export default function MyLogo() {
  return (
    <Container>
      <RightArrow />
      <MyName>Daniel Tostes</MyName>
      <LeftArrow />
    </Container>
  );
}
