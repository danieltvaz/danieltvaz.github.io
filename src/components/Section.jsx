import styled from "styled-components";

const Wrapper = styled.div`
  /* min-height: 100vh; */
  /* margin-left: 17vmax; */
  background: ${({ theme }) => theme.background};
  padding: 40px 80px 0px;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    /* margin-left: 0;
    padding: 3vmax 1vmax 4vmax 1vmax; */
  }
`;

export default function Section({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
