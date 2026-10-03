import InformativeBaloon from "../components/InformativeBaloon";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import dimensaLogo from "../assets/experience/dimensa_tecnologia_logo.png";
import kotasLogo from "../assets/experience/kotas.png";
import gaugeLogo from "../assets/experience/gauge_logo.png";
import watchBrasilLogo from "../assets/experience/watch_brasil_logo.jpeg";

const experienceData = [
  {
    name: "Kotas Internet",
    icon: kotasLogo,
    link: "www.kotas.com.br",
    roles: [
      {
        title: "Engenheiro de Software",
        period: "Agosto 2021 – Julho 2022",
        text: "Responsável pela evolução da plataforma, com foco em performance, qualidade de código e experiência do usuário, desenvolvendo principalmente em Vue.js. Criei o sistema de Backoffice, aumentei em 50% o score de SEO da landing page, migrei o código de JavaScript para TypeScript com upgrade para Vue 3, refatorei a autenticação de usuários com mais segurança e implementei as obrigações de LGPD com controle granular de cookies.",
      },
    ],
  },
  {
    name: "Dimensa Tecnologia (Joint Venture TOTVS + B3)",
    icon: dimensaLogo,
    link: "www.dimensa.com",
    roles: [
      {
        title: "Arquiteto de Soluções",
        period: "Julho 2024 – Julho 2025",
        text: "Integrei o time de Arquitetura, projetando e supervisionando soluções técnicas escaláveis e resilientes para múltiplas unidades de negócio, além de liderar iniciativas de modernização, cultura de engenharia e segurança, com infraestrutura na AWS.",
      },
      {
        title: "Líder de Desenvolvimento (Tech Lead)",
        period: "Janeiro 2023 – Julho 2024",
        text: "Liderança técnica, mentoria de times e direcionamento arquitetural, garantindo alinhamento técnico entre os produtos da empresa. Defini padrões de arquitetura e boas práticas de código, planejei funcionalidades junto às áreas de produto e negócio e apoiei a área de Arquitetura na construção de um ecossistema integrado e resiliente.",
      },
      {
        title: "Engenheiro de Software Fullstack Sênior",
        period: "Julho 2022 – Janeiro 2023",
        text: "Implementação de sistemas de Conta Digital para Instituições Financeiras e Sociedades de Crédito Direto, com integrações com Celcoin, Dock Tech, Itaú e CMSW (TED, PIX, Boletos, Recargas e Crédito Pessoal). Reconstruí a base mobile white-label, reduzindo chamados de suporte e melhorando a UX, e atuei em incidentes de segurança, da análise técnica ao plano de ação pós-incidente.",
      },
    ],
  },
  {
    name: "Gauge Consultoria Digital",
    icon: gaugeLogo,
    link: "www.linkedin.com/company/gauge",
    roles: [
      {
        title: "Engenheiro de Software Fullstack Sênior",
        period: "Julho 2025 – Novembro 2025",
        text: "Alocado na Pearson (EdTech), no time de tecnologia da Wizard, desenvolvendo aplicativos mobile (React Native) para alunos e franqueados e APIs serverless na AWS (Lambda, API Gateway, DynamoDB, S3, CloudFront). Construí o backend do back-office de professores e coordenadores (API Gateway, Lambda e Aurora RDS PostgreSQL), com autenticação e exportação de relatórios em XLSX e CSV, e relatórios analíticos com Amazon Redshift. Participei de definições arquiteturais, revisões técnicas e CI/CD com GitHub Actions.",
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
        period: "Março 2026 – Presente",
        text: "Projeto refatorações e novos sistemas do zero, no contexto de streaming de conteúdo digital, definindo a arquitetura de ponta a ponta com foco em integração de sistemas, escalabilidade e resiliência. Aplico microserviços, sistemas distribuídos e arquitetura orientada a eventos na AWS (Lambda, EventBridge, SQS, S3, DynamoDB). Criei um sistema White Label completamente novo, sou responsável pela reconstrução total dos sistemas da empresa com arquitetura moderna e defino padrões arquiteturais e boas práticas entre os times.",
      },
      {
        title: "Engenheiro de Software Fullstack Sênior",
        period: "Novembro 2025 – Abril 2026",
        text: "Atuação em desenvolvimento fullstack, com foco em Kotlin e desenvolvimento Android.",
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
