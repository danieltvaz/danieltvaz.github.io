import Grid from "../components/Grid";
import ImpactText from "../components/ImpactText";
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
import vueIcon from "../assets/skills/vue.png";
import sassIcon from "../assets/skills/sass.png";

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
    name: "VueJS",
    icon: vueIcon,
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
    name: "Sass",
    icon: sassIcon,
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
      <Grid optionName data={skillsData} />
      <ImpactText>
        "A persistência é o melhor caminho do êxito." <br /> Charles Chaplin.
      </ImpactText>
    </Section>
  );
}
