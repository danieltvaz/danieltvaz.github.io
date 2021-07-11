import styled from "styled-components";

const StyledButton = styled.button`
  position: fixed;
  top: 50%;
  left: 0;
`;

export default function ThemeButton({ toggleTheme }) {
  return <StyledButton onClick={toggleTheme}>Alterar cor</StyledButton>;
}
