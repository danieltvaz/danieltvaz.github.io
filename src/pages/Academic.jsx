import ImpactText from "../components/ImpactText";
import List from '../components/List';
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

export default function Academic() {
  return (
    <Section>
      <SectionTitle>Acadêmico</SectionTitle>
      <List data={[
        {
          title: 'Graduação - 2022',
          description: 'Análise e Desenvolvimento de Sistemas - Universidade Norte do Paraná'
        },
        {
          title: 'MBA - 2023',
          description: 'Gestão de Projetos de TI - Universidade Norte do Paraná'
        },
        {
          title: 'Pós-graduação - 2023',
          description: 'Engenharia de Software - Universidade Norte do Paraná'
        },
      ]}/>
      <ImpactText>
        "É preciso um trabalho duro e uma grande vontade para transformar a paixão numa virtude."
        <br />
        Frank Lloyd Wright.
      </ImpactText>
    </Section>
  );
}
