import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 64px);
  padding: 30px 10px;
  background: ${({ theme }) => theme.background};
`;

export default function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
