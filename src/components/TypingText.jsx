import styled, { keyframes } from "styled-components";

const blinkingCursor = ({ theme }) => keyframes`
0% {
    border-right: 1px solid transparent;
    
}
50%{
    border-right: 1px solid ${theme.activeColor};
}
100%{
    border-right: 1px solid transparent;
    
}
`;

const growingContainer = () => keyframes`
0%{
    width: 0;
}
50%{
    width: 50%;
}
100%{
    width: 100%;
}
`;

const Wrapper = styled.div`
  display: block;
  overflow: hidden;
  max-width: fit-content;
  white-space: nowrap;
  animation: ${blinkingCursor} 0.5s step-end infinite,
    ${growingContainer} 10s steps(100, end) infinite;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    animation: none;
    white-space: normal;
  }
`;

export default function TypingText({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
