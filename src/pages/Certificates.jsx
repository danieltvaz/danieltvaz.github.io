import Section from "../components/Section";
import Grid from "../components/Grid";

import SectionTitle from "../components/SectionTitle";

import { certificatesData } from "../constants/certificatesData";

export default function Certificates() {
  return (
    <Section>
      <SectionTitle>Certificados</SectionTitle>
      <Grid data={certificatesData} optionName optionModal />
    </Section>
  );
}
