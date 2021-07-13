import ContentWrapper from "./wrappers/ContentWrapper";
import Title from "../components/SectionTitle";
import SectionParagraph from "../components/SectionParagraph";
import TypingText from "../components/TypingText";

export default function About() {
  return (
    <ContentWrapper>
      <Title>Seja bem vindo ao meu portfólio</Title>
      <SectionParagraph>
        <TypingText>
          Meu nome é Daniel, desenvolvedor frontend para web e o que mais gosto
          de fazer é programar.
        </TypingText>
      </SectionParagraph>
    </ContentWrapper>
  );
}
