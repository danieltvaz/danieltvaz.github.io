import styled from "styled-components";

const Wrapper = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  margin-left: 17vmax;
  background: ${({ theme }) => theme.background};
  padding: 5vmax;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    margin-left: 15.5vmax;
    padding: 5vmax 0 5vmax 5vmax;
  }
`;

export default function Section({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
