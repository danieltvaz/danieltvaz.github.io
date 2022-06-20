import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Grid from "../components/Grid";
import ImpactText from "../components/ImpactText";
import { projectsData } from "../constants/projectsData";

export default function Projects() {
  return (
    <Section>
      <SectionTitle>Projetos</SectionTitle>
      <Grid data={projectsData} />
      <ImpactText>
        "É preciso um trabalho duro e uma grande vontade para transformar a paixão numa virtude."
        <br />
        Frank Lloyd Wright.
      </ImpactText>
    </Section>
  );
}
