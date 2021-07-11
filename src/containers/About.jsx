import styled from "styled-components";
import ContentWrapper from "./wrappers/ContentWrapper";
import Title from "../components/SectionTitle";
import SectionParagraph from "../components/SectionParagraph";

export default function About() {
  return (
    <ContentWrapper>
      <Title>Sobre mim</Title>
      <SectionParagraph />
    </ContentWrapper>
  );
}
