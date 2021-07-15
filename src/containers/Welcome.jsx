import ContentWrapper from "./wrappers/ContentWrapper";
import Title from "../components/SectionTitle";
import SectionParagraph from "../components/SectionParagraph";
import TypingText from "../components/TypingText";
import MyAvatar from "../components/MyAvatar";

export default function About() {
  return (
    <ContentWrapper>
      <Title>Seja bem vindo ao meu portfólio</Title>
      <MyAvatar>
        <SectionParagraph>
          Desenvolvedor Web Frontend, fiz meus primeiros códigos utilizando o
          bash do Windows, automatizando pequenas tarefas quando tinha 12 anos.
          Ao chegar a fase adulta, decidi seguir meu sonho de desenvolver
          software para Web e aqui estou. Gosto de estudar novas tecnologias e
          aprimorar as que já domino. Estou buscando minha primeira vaga no
          mercado de tecnologia, para construir coisas reais com pessoas legais,
          colaborar com um time e fazer parte de algo que agrega valor.
        </SectionParagraph>
      </MyAvatar>
    </ContentWrapper>
  );
}
