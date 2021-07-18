import styled from "styled-components";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 2vmax;
  margin: auto 0;
`;

export default function About() {
  return (
    <Section>
      <Paragraph>
        Desenvolvedor Web Frontend, prezo pelo código limpo e metodologias ágeis
        na entrega de resultados. Busco cada vez mais o conhecimento em novas
        tecnologias e aprimorar o que já domino. Sou prático para resolver
        problemas, principalmente de lógica. Tenho boa interação com pessoas
        dentro e fora do local de trabalho, tenho muita facilidade em fazer
        amizades e amo isso. Sou entusiasta da tecnologia desde criança, quando
        desenhava teclados na caixa de sapatos da minha mãe para brincar de
        programador.
      </Paragraph>
    </Section>
  );
}
