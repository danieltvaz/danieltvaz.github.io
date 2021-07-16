import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 64px);
  width: 95vw;
  background: ${({ theme }) => theme.background};
  padding: 5px 0;
  margin: auto;
`;

export default function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
