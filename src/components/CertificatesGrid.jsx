import styled from "styled-components";
import cert1 from "../assets/certificates/aceleracao-avanade-01C2F20A_page-0001.jpg";
import cert2 from "../assets/certificates/avancadas-reactjs-9691347F_page-0001.jpg";
import cert3 from "../assets/certificates/componentes-reactjs-A54CE508_page-0001.jpg";
import cert4 from "../assets/certificates/html-css-js-DVWBDTV17HT21165.png";
import cert5 from "../assets/certificates/Introducao-ao-git-BB37395A-1.jpg";
import cert6 from "../assets/certificates/introducao-html5-css3-0C364E8E-1.jpg";
import cert7 from "../assets/certificates/logica-de-programacao-essencial-1D90D0DC-1.jpg";
import Title from "./SectionTitle";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);

  justify-content: center;
  gap: 50px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: repeat(1, auto);

    gap: 10px 5px;
  }
`;

const GridItem = styled.div`
  border: 5px inset ${({ theme }) => theme.activeColor};
`;

const CertificateImg = styled.img`
  width: 100%;
`;

const SkillName = styled.h3`
  color: ${({ theme }) => theme.textColor};
  border-bottom: 2px solid ${({ theme }) => theme.activeColor};
  width: fit-content;
  margin-bottom: 20px;
  margin: auto;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: auto;
  }
`;

export default function CertificatesGrid() {
  return (
    <Grid>
      <GridItem>
        <SkillName>Avanade</SkillName>
        <CertificateImg src={cert1} />
      </GridItem>
      <GridItem>
        <SkillName>Avançado em ReactJS</SkillName>
        <CertificateImg src={cert2} />
      </GridItem>
      <GridItem>
        <SkillName>Componentes em ReactJS</SkillName>
        <CertificateImg src={cert3} />
      </GridItem>
      <GridItem>
        <SkillName>HTML5, CSS3 e JS</SkillName>
        <CertificateImg src={cert4} />
      </GridItem>
      <GridItem>
        <SkillName>Git e GitHub</SkillName>
        <CertificateImg src={cert5} />
      </GridItem>
      <GridItem>
        <SkillName>HTML5 e CSS3</SkillName>
        <CertificateImg src={cert6} />
      </GridItem>
    </Grid>
  );
}
