import { faBriefcase, faCertificate, faCode, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 120px;

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    margin-top: 60px;
  }
`;

const HtmlLink = styled.a`
  display: flex;
  flex: 1;
  font-weight: 600;
  font-family: "Lato", sans-serif;
  transition: all 0.2s;
  border-bottom: 1px solid #4958bc;
  margin: 10px 0;
  padding-bottom: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.navLink};
  &.hover {
    color: ${({ theme }) => theme.activeLink};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex: 1;
  font-weight: 600;
  font-family: "Lato", sans-serif;
  transition: all 0.2s;
  border-bottom: 1px solid #4958bc;
  margin: 10px 0;
  padding-bottom: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.navLink};

  &.active {
    color: ${({ theme }) => theme.activeLink};
  }
`;

const LinkName = styled.span`
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.activeLink};
  }
`;

const destinations = [
  { target: "about", name: "Sobre", icon: faHome },
  // { target: "projects", name: "Projetos", icon: faCode },
  { target: "skills", name: "Habilidades", icon: faUser },
  { target: "experience", name: "Experiência", icon: faBriefcase },
  { target: "certificates", name: "Certificados", icon: faCertificate },
];

export default function NavBar() {
  return (
    <Wrapper>
      {destinations.map((destination, index) => (
        <StyledLink key={index} to={destination.target} smooth={true} spy={true} spyThrottle={500} activeClass="active">
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
