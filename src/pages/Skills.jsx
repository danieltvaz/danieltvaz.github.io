import Grid from "../components/Grid";
import ImpactText from "../components/ImpactText";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import { skillsData } from "../constants/skillsData";

export default function Skills() {
  return (
    <Section>
      <SectionTitle>Habilidades</SectionTitle>
      <Grid optionName data={skillsData} />
      <ImpactText>
        "A persistência é o melhor caminho do êxito." <br /> Charles Chaplin.
      </ImpactText>
    </Section>
  );
}
