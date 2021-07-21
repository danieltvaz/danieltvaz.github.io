import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCode,
  faCertificate,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    /* top: 40vh; */
  }
`;

const linkStyles = `display: flex;
flex: 1;
font-weight: 600;
font-family: "Lato", sans-serif;
transition: all 0.2s;
border-bottom: 1px solid #4958bc;
margin: 10px 0;
padding-bottom: 15px;
text-decoration: none;

color: ${({ theme }) => theme.text};
&:hover {
  cursor: pointer;
  color: ${({ theme }) => theme.highlight};
}
&.active {
  /* border-bottom: 2px solid ${({ theme }) => theme.highlight}; */
  color: ${({ theme }) => theme.activeLink};
} `;

const HtmlLink = styled.a`
  ${linkStyles}
`;

const StyledLink = styled(Link)`
  ${linkStyles}
`;

const LinkName = styled.span`
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  margin-left: 15px;
  color: ${({ theme }) => theme.navLink};
`;

const destinations = [
  { target: "about", name: "Sobre", icon: faHome },
  { target: "projects", name: "Projetos", icon: faCode },
  { target: "skills", name: "Habilidades", icon: faUser },
  { target: "certificates", name: "Certificados", icon: faCertificate },
];

export default function NavBar() {
  return (
    <Wrapper>
      {destinations.map((destination, index) => (
        <StyledLink
          key={index}
          to={destination.target}
          smooth={true}
          spy={true}
          activeClass={"active"}
        >
          <FontAwesomeIcon color="#44bef1" icon={destination.icon} />
          <LinkName>{destination.name}</LinkName>
        </StyledLink>
      ))}
      <HtmlLink href="https://linkedin.com/in/danieltvaz" target="_blank">
        <FontAwesomeIcon color="#44bef1" icon={faLinkedin} />
        <LinkName>LinkedIn</LinkName>
      </HtmlLink>
      <HtmlLink href="https://github.com/danieltvaz" target="_blank">
        <FontAwesomeIcon color="#44bef1" icon={faGithub} />
        <LinkName>GitHub</LinkName>
      </HtmlLink>
    </Wrapper>
  );
}
