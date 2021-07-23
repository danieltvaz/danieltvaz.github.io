import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Grid from "../components/Grid";
import ImpactText from "../components/ImpactText";
const data = [
  { name: "Loading...", icon: "" },
  { name: "Loading...", icon: "" },
  { name: "Loading...", icon: "" },
  { name: "Loading...", icon: "" },
  { name: "Loading...", icon: "" },
  { name: "Loading...", icon: "" },
  { name: "Loading...", icon: "" },
  { name: "Loading...", icon: "" },
  { name: "Loading...", icon: "" },
  { name: "Loading...", icon: "" },
];

export default function Projects() {
  return (
    <Section>
      <SectionTitle>Projetos</SectionTitle>
      <Grid data={data} />
      <ImpactText>
        "É preciso um trabalho duro e uma grande vontade para transformar a
        paixão numa virtude."
        <br />
        Frank Lloyd Wright.
      </ImpactText>
    </Section>
  );
}
