import styled from "styled-components";
import { Link } from "react-scroll";
import arrow from "../assets/rightarrow.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: right;
  position: absolute;
  top: 70vh;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: space-around;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    top: 40vh;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  font-size: 2vmax;
  color: ${({ theme }) => theme.text};
  margin: 10% 0;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.highlight};
  }
  &.active {
    /* border-bottom: 2px solid ${({ theme }) => theme.highlight}; */
    color: ${({ theme }) => theme.highlight};
  }
`;

const Icon = styled.img`
  width: 2vmax;
  margin-right: 1vmax;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    margin-right: 0.5vmax;
  }
`;

// const destinations = [
//   { target: "about", name: "Sobre", icon: abouticon },
//   { target: "skills", name: "Habilidades", icon: skillsicon },
//   { target: "certificates", name: "Certificados", icon: certificatesicon },
//   { target: "projects", name: "Projetos", icon: projectsicon },
// ];
const destinations = [
  { target: "about", name: "Sobre", icon: arrow },
  { target: "skills", name: "Habilidades", icon: arrow },
  { target: "certificates", name: "Certificados", icon: arrow },
  { target: "projects", name: "Projetos", icon: arrow },
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
          <Icon src={destination.icon} alt="about" />
          {destination.name}
        </StyledLink>
      ))}
    </Wrapper>
  );
}
