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
            Arquiteto de Soluções, focado em AWS e sistemas distribuídos. Venho de uma sólida base como desenvolvedor Full-Stack, o que me dá uma visão
            completa do ciclo de vida do software, da arquitetura à implementação.
          </Paragraph>
          <Paragraph>
            Atuo no desenho de arquiteturas escaláveis e resilientes, unindo boas práticas de microsserviços, persistência de dados e estratégias de cache
            para construir soluções que agregam valor a negócios e pessoas.
          </Paragraph>
          <Paragraph>
            Tenho como destaque em minhas habilidades a comunicação, trabalho em equipe, oratória, e a que mais me destaco: facilidade e velocidade em
            aprender coisas que me tiram da zona de conforto e me instigam em desafios.
          </Paragraph>
        </TextWrapper>
        <ImgWrapper>
          <img src={me} alt="daniel tostes" />
        </ImgWrapper>
      </MeWrapper>
    </Section>
  );
}
