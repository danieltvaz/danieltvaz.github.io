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
        Sou prático para resolver problemas e gosto de desafios. Tenho boa
        interação com pessoas dentro e fora do local de trabalho e tenho muita
        facilidade em fazer amizades e amo isso. Sou entusiasta da tecnologia
        desde criança, quando desenhava teclados na caixa de sapatos da minha
        mãe para brincar de programador.
      </Paragraph>
      <ImpactText>
        "Quem conhece os outros é sábio; Quem conhece a si mesmo é iluminado."
        <br />
        Lao-Tsé
      </ImpactText>
    </Section>
  );
}
