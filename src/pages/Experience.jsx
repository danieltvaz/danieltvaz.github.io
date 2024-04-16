import InformativeBaloon from "../components/InformativeBaloon";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import dimensaLogo from "../assets/experience/dimensa_tecnologia_logo.png";
import kotasLogo from "../assets/experience/kotas.png";

const experienceData = [
  {
    name: "www.kotas.com.br",
    icon: kotasLogo,
    text: "Atuação como desenvolvedor Web. Nessa posição, pude realizar melhorias de performance e qualidade, implementação de novos módulos da aplicação, refatoração de pontos críticos do produto, criação de um Back Office novo para apoio à tomada de decisão da gestão.",
    title: "Software Developer",
  },
  {
    name: "www.dimensa.com",
    icon: dimensaLogo,
    text: "Líder técnico do time responsável pelo produto Conta Digital. Minhas tarefas do dia a dia se resumem a gestão técnica e pessoal do time, concepção e implementação de novas tecnologias, quality assurance das entregas e arquitetura das soluções ofertadas.",
    title: "Software Developer / Líder Técnico",
  },
];

export default function Experience() {
  return (
    <Section>
      <SectionTitle>Experiência</SectionTitle>
      {experienceData.map((data, index) => (
        <InformativeBaloon data={data} key={index} index={index} />
      ))}
    </Section>
  );
}
