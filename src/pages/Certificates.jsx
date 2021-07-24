import Section from "../components/Section";
import Grid from "../components/Grid";
import htmlcssjs from "../assets/certificates/html-css-js-DVWBDTV17HT21165.jpg";
import htmlcss from "../assets/certificates/introducao-html5-css3-0C364E8E-1.jpg";
import javascript from "../assets/certificates/programa-para-internet-javascript-DB9B06BF-1.jpg";
import git from "../assets/certificates/Introducao-ao-git-BB37395A-1.jpg";
import logica from "../assets/certificates/logica-de-programacao-essencial-1D90D0DC-1.jpg";
import reactjsavancado from "../assets/certificates/avancadas-reactjs-9691347F_page-0001.jpg";
import reactcomponents from "../assets/certificates/componentes-reactjs-A54CE508_page-0001.jpg";
import avanade from "../assets/certificates/aceleracao-avanade-01C2F20A_page-0001.jpg";
import SectionTitle from "../components/SectionTitle";

const data = [
  {
    name: "HTML, CSS, JavaScript",
    icon: htmlcssjs,
  },
  {
    name: "HTML, CSS",
    icon: htmlcss,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Git",
    icon: git,
  },
  { name: "Lógica de Programação", icon: logica },
  { name: "ReactJS Avançado", icon: reactjsavancado },
  { name: "ReactJS Componentes", icon: reactcomponents },
  { name: "Bootcamp Avanade", icon: avanade },
];

export default function Certificates() {
  return (
    <Section>
      <SectionTitle>Certificados</SectionTitle>
      <Grid data={data} optionModal />
    </Section>
  );
}
