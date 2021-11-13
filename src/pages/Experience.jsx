import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import kotasLogo from "../assets/experience/kotas.png";
import InformativeBaloon from "../components/InformativeBaloon";

const experienceData = [
  {
    name: "www.kotas.com.br",
    icon: kotasLogo,
    text: "Atuação como Frontend Developer, realizando manutenção e criando novas funcionalidades utilizando VueJS, bem como suas ferramentas: Vuex, Router, etc.",
    title: "Frontend Developer",
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
