import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 48px;
  background: ${({ theme }) => theme.foreground};
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    padding: 10px 20px;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.navLink};
  margin-right: 20px;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    font-size: 10px;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Text>Desenvolvido por Daniel Tostes @ {new Date().getFullYear()} - Todos os direitos reservados</Text>
    </Wrapper>
  );
}
