import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 64px);
  padding: 30px 10px;
  background: ${({ theme }) => theme.background};
  min-height: 100%;
  width: 80%;
  margin: auto;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
  }
`;

export default function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
