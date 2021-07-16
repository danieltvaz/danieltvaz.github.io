import styled from "styled-components";
import reactLogo from "../assets/reactjs.png";
import javascriptLogo from "../assets/javascript.png";
import css3Logo from "../assets/css3.png";
import gitLogo from "../assets/git.png";
import html5Logo from "../assets/html5.png";
import linuxLogo from "../assets/linux.png";
import nodejsLogo from "../assets/nodejs.png";
import scrumLogo from "../assets/scrum.png";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(2, 200px);
  margin: auto;
  justify-content: center;
  align-items: center;
  gap: 80px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(4, 25%);
    gap: 5px;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  border: 5px inset ${({ theme }) => theme.activeColor};
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding: none;
  }
`;

const SkillName = styled.h3`
  color: ${({ theme }) => theme.textColor};
  border-bottom: 2px solid ${({ theme }) => theme.activeColor};
  width: fit-content;
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 10px;
  }
`;

const SkillLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 50px;
  }
`;

export default function Grid() {
  return (
    <GridContainer>
      <GridItem>
        <SkillName>ReactJS</SkillName>
        <SkillLogo src={reactLogo} />
      </GridItem>
      <GridItem>
        <SkillName>JavaScript</SkillName>
        <SkillLogo src={javascriptLogo} />
      </GridItem>
      <GridItem>
        <SkillName>CSS3</SkillName>
        <SkillLogo src={css3Logo} />
      </GridItem>
      <GridItem>
        <SkillName>HTML5</SkillName>
        <SkillLogo src={html5Logo} />
      </GridItem>
      <GridItem>
        <SkillName>Git</SkillName>
        <SkillLogo src={gitLogo} />
      </GridItem>
      <GridItem>
        <SkillName>Linux</SkillName>
        <SkillLogo src={linuxLogo} />
      </GridItem>
      <GridItem>
        <SkillName>NodeJS</SkillName>
        <SkillLogo src={nodejsLogo} />
      </GridItem>
      <GridItem>
        <SkillName>Scrum</SkillName>
        <SkillLogo src={scrumLogo} />
      </GridItem>
    </GridContainer>
  );
}
