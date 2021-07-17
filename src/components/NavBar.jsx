import styled from "styled-components";
import { Link } from "react-scroll";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  position: relative;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  font-size: 2vmax;
  color: ${({ theme }) => theme.text};
  border-bottom: 2px solid ${({ theme }) => theme.highlight};
  margin: 10% 0;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.highlight};
  }
  &.active {
    color: ${({ theme }) => theme.highlight};
  }
`;

const destinations = [
  { target: "about", name: "Sobre" },
  { target: "skills", name: "Habilidades" },
  { target: "certificates", name: "Certificados" },
  { target: "projects", name: "Projetos" },
];

export default function NavBar() {
  const [isActive, setIsActive] = useState("false");

  function handleActive(section) {
    setIsActive("true");
  }
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
          {destination.name}
        </StyledLink>
      ))}
    </Wrapper>
  );
}
