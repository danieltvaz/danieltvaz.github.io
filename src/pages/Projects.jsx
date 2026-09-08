import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import List from "../components/List";
import ImpactText from "../components/ImpactText";
import { projectsData } from "../constants/projectsData";

export default function Projects() {
  return (
    <Section>
      <SectionTitle>Projetos</SectionTitle>
      <List data={projectsData} />
      <ImpactText>
        "É preciso um trabalho duro e uma grande vontade para transformar a paixão numa virtude."
        <br />
        Frank Lloyd Wright.
      </ImpactText>
    </Section>
  );
}
