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
          title: 'Análise e Desenvolvimento de Sistemas',
          description: 'Graduação Tecnológica'
        },
        {
          title: 'Pós Gradução - MBA',
          description: 'Gestão de Projetos de TI'
        },
        {
          title: 'Pós Gradução - Latu Sensu',
          description: 'Engenharia de Software'
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
