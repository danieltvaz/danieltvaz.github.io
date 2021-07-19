import styled from "styled-components";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.foreground};
  border-radius: 50px;
  padding: 2vmax;
  box-shadow: 3px 5px 15px ${({ theme }) => theme.highlight};
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    padding: 3vmax;
    box-shadow: 1px 2px 5px ${({ theme }) => theme.highlight};
  }
`;

export default function ContentBox({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
