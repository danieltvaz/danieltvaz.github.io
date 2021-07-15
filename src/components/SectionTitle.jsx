import styled from "styled-components";

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.textColor};
  margin: auto;
  border-bottom: 2px solid ${({ theme }) => theme.activeColor};
  width: fit-content;
  margin-bottom: 50px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 10px;
    text-align: center;
  }
`;
export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
