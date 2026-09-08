import InformativeBaloon from "../components/InformativeBaloon";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import dimensaLogo from "../assets/experience/dimensa_tecnologia_logo.png";
import kotasLogo from "../assets/experience/kotas.png";
import gaugeLogo from "../assets/experience/gauge_logo.png";
import watchBrasilLogo from "../assets/experience/watch_brasil_logo.jpeg";

const experienceData = [
  {
    name: "Kotas",
    icon: kotasLogo,
    link: "www.kotas.com.br",
    roles: [
      {
        title: "Frontend Developer",
        text: "Atuação como desenvolvedor Web. Nessa posição, pude realizar melhorias de performance e qualidade, implementação de novos módulos da aplicação, refatoração de pontos críticos do produto, criação de um Back Office novo para apoio à tomada de decisão da gestão.",
      },
    ],
  },
  {
    name: "Dimensa Tecnologia",
    icon: dimensaLogo,
    link: "www.dimensa.com",
    roles: [
      {
        title: "Senior Fullstack Developer / Líder Técnico",
        text: "Líder técnico do time responsável pelo produto Conta Digital. Minhas tarefas do dia a dia se resumem a gestão técnica e pessoal do time, concepção e implementação de novas tecnologias, quality assurance das entregas e arquitetura das soluções ofertadas.",
      },
    ],
  },
  {
    name: "Gauge Tecnologia by Stefanini",
    icon: gaugeLogo,
    link: "www.linkedin.com/company/gauge",
    roles: [
      {
        title: "Senior Fullstack Developer",
        text: `Desenvolvedor Fullstack Sênior como consultor na Wizard (Pearson), desenvolvendo aplicações mobile e APIs serverless com React Native, Node.js e AWS (Lambda, API Gateway, Aurora RDS, DynamoDB, S3, CloudFront). Responsável por planejamento técnico, implementação de funcionalidades, otimização de sistemas e back-office para professores e coordenadores com exportação de relatórios. Participei de definições arquiteturais, revisões técnicas e colaboração com times de produto, design e QA.`,
      },
    ],
  },
  {
    name: "Watch Brasil",
    icon: watchBrasilLogo,
    link: "descubra.watch.tv.br/sobre-a-watch/",
    roles: [
      {
        title: "Arquiteto de Soluções",
        text: "Atuo como Arquiteto de Soluções, responsável pelo desenho de arquiteturas na AWS, microsserviços e padrões como Saga para coordenação de transações distribuídas. Trabalho com bancos de dados relacionais (PostgreSQL, MySQL) e não relacionais (DynamoDB, MongoDB), além de soluções de cache como Redis, Valkey e ElastiCache, garantindo escalabilidade, resiliência e performance das soluções.",
      },
      {
        title: "Senior Fullstack Developer",
        text: "Desenvolvedor Full-Stack Sênior na Watch Brasil, atuando no novo app Android com Kotlin e Jetpack Compose. Trabalho com arquitetura, integrações e otimizações, incluindo cache offline para agilizar a interface e reduzir requisições, garantindo uma experiência rápida e consistente aos usuários.",
      },
    ],
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
