import styled from "styled-components";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 40px 80px 40px 110px;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    padding: 20px 30px 0 34px;
    width: 100vw;
    min-height: 95vh;
  }
`;

export default function Section({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
