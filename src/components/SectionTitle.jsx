import styled from "styled-components";

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.textColor};
  margin: auto;
  border-bottom: 2px solid ${({ theme }) => theme.activeColor};
  width: fit-content;
  font-size: 32px;
  margin: 20px auto;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    margin: 15px auto;
  }
`;

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
