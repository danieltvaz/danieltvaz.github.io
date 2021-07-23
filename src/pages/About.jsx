import styled from "styled-components";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import me from "../assets/meb&w.png";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  max-width: 90%;
`;

const MeWrapper = styled.div`
  display: flex;

  img {
    max-width: 400px;
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 5%;
    @media screen and (min-width: 320px) and (max-width: 1023px) {
      max-width: 300px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function About() {
  return (
    <Section>
      <SectionTitle>Sobre</SectionTitle>

      <MeWrapper>
        <TextWrapper>
          <Paragraph>
            Sou Desenvolvedor Web Frontend, prezo pelo código limpo e
            metodologias ágeis na entrega de resultados. Busco cada vez mais o
            conhecimento em novas tecnologias e aprimorar o que já domino.
          </Paragraph>
          <Paragraph>
            Utilizo HTML, CSS, JavaScript e ReactJS para construir interfaces
            responsivas e com as melhores praticas do mercado.
          </Paragraph>
        </TextWrapper>
        <img src={me} style={{ width: "500px" }} alt="daniel tostes" />
      </MeWrapper>
    </Section>
  );
}
