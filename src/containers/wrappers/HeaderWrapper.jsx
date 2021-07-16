import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  justify-content: space-around;
  background: ${({ theme }) => theme.foreground};
  padding: 0 20px;
  position: sticky;
  top: 0;
  left: 0;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: space-between;
    padding: none;
  }
`;

export default function HeaderWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
