import Grid from "../components/Grid";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import htmlIcon from "../assets/skills/html5.png";
import css3Icon from "../assets/skills/css3.png";
import javascriptIcon from "../assets/skills/javascript.png";
import styledcomponentsIcon from "../assets/skills/styledcomponents.png";
import reactjsIcon from "../assets/skills/reactjs.png";
import gitIcon from "../assets/skills/git.png";
import nodejsIcon from "../assets/skills/nodejs.png";
import scrumIcon from "../assets/skills/scrum.png";
import linuxIcon from "../assets/skills/linux.png";

const skillsData = [
  {
    name: "html",
    icon: htmlIcon,
  },
  {
    name: "css3",
    icon: css3Icon,
  },
  {
    name: "javascript",
    icon: javascriptIcon,
  },

  {
    name: "react",
    icon: reactjsIcon,
  },
  {
    name: "styled components",
    icon: styledcomponentsIcon,
  },

  {
    name: "git",
    icon: gitIcon,
  },
  {
    name: "nodejs",
    icon: nodejsIcon,
  },
  {
    name: "scrum",
    icon: scrumIcon,
  },
  {
    name: "linux",
    icon: linuxIcon,
  },
];

export default function Skills() {
  return (
    <Section>
      <SectionTitle>Habilidades</SectionTitle>
      <Grid data={skillsData} />
    </Section>
  );
}