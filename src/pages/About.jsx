import styled from "styled-components";
import ImpactText from "../components/ImpactText";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  max-width: 90%;
`;

export default function About() {
  return (
    <Section>
      <SectionTitle>Sobre</SectionTitle>

      <Paragraph>
        Sou Desenvolvedor Web Frontend, prezo pelo código limpo e metodologias
        ágeis na entrega de resultados. Busco cada vez mais o conhecimento em
        novas tecnologias e aprimorar o que já domino.
      </Paragraph>
      <Paragraph>
        Utilizo HTML, CSS, JavaScript e ReactJS para construir interfaces
        responsivas e com as melhores praticas do mercado.
      </Paragraph>
    </Section>
  );
}
