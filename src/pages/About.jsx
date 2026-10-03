import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import me from "../assets/me.png";
import styled from "styled-components";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  max-width: 500px;
`;

const ImgWrapper = styled.div`
  background: ${({ theme }) => theme.highlight};
  position: relative;

  left: 80px;
  top: -50px;
  width: 300px;
  height: 400px;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    height: 400px;
    width: 200px;
    top: 0;
    left: 0;
  }

  img {
    width: 400px;
    /* transform: translate(-50%, -50%); */
    position: absolute;
    top: 32px;
    left: 0;
    @media screen and (min-width: 320px) and (max-width: 1023px) {
      width: 300px;
      top: 124px;
    }
  }
`;

const MeWrapper = styled.div`
  display: flex;

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
            Arquiteto de Soluções com atuação em desenho de arquitetura, refatoração de sistemas legados e construção de novas plataformas do zero, em
            contextos de serviços financeiros (contas digitais, meios de pagamento e plataformas BaaS) e de streaming de conteúdo digital.
          </Paragraph>
          <Paragraph>
            Trabalho com microserviços, sistemas distribuídos e arquitetura orientada a eventos, principalmente na AWS. Tenho background como
            desenvolvedor e líder técnico, o que me aproxima da implementação das decisões arquiteturais: definição de padrões, revisões técnicas,
            mentoria e alinhamento com as áreas de produto e negócio.
          </Paragraph>
          <Paragraph>
            Atuo com metodologias ágeis (Scrum e Kanban), tenho vivência em times que adotam o modelo de desenvolvimento AI-First e inglês avançado em
            leitura, escrita e conversação.
          </Paragraph>
        </TextWrapper>
        <ImgWrapper>
          <img src={me} alt="daniel tostes" />
        </ImgWrapper>
      </MeWrapper>
    </Section>
  );
}
