import styled from "styled-components";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import ContentWrapper from "../components/ContentBox";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 2vmax;
  margin: 2vmax 0;
`;

export default function About() {
  return (
    <Section>
      <SectionTitle>Sobre</SectionTitle>

      <ContentWrapper>
        <Paragraph>
          Sou Desenvolvedor Web Frontend, prezo pelo código limpo e metodologias
          ágeis na entrega de resultados. Busco cada vez mais o conhecimento em
          novas tecnologias e aprimorar o que já domino.
        </Paragraph>
        <Paragraph>
          Sou prático para resolver problemas e gosto de desafios.
        </Paragraph>
        <Paragraph>
          Tenho boa interação com pessoas dentro e fora do local de trabalho e
          tenho muita facilidade em fazer amizades e amo isso.
        </Paragraph>
        <Paragraph>
          Sou entusiasta da tecnologia desde criança, quando desenhava teclados
          na caixa de sapatos da minha mãe para brincar de programador.
        </Paragraph>
      </ContentWrapper>
    </Section>
  );
}
