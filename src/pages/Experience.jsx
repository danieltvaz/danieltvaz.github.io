import InformativeBaloon from "../components/InformativeBaloon";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import kotasLogo from "../assets/experience/kotas.png";
import rbmwebLogo from "../assets/experience/rbmweb.jpg";

const experienceData = [
  {
    name: "www.kotas.com.br",
    icon: kotasLogo,
    text: "Atuação como Frontend Developer principal, mentorando outros desenvolvedores, realizando manutenção, otimizando performance da plataforma e criando novas funcionalidades utilizando VueJS, bem como suas ferramentas: Vuex, Router, etc.",
    title: "Frontend Developer",
  },
  {
    name: "www.rbmweb.com.br",
    icon: rbmwebLogo,
    text: "Atuação como Tech Lead, utilizando React e React Native para construir aplicações, prestar manutenção, realizar melhorias e corrigindo falhas de segurança, bem como gerir, instruir, monitrar e mentorar um time com 17 desenvolvedores. Atuante também como mentor em cursos oferecidos pela empresa para colaboradores e prósperos a colaboradores.",
    title: "Frontend/Mobile Tech Lead",
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
