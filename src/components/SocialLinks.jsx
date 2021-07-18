import styled from "styled-components";
import emailicon from "../assets/email.png";
import linkedinicon from "../assets/linkedin.png";
import githubicon from "../assets/github.png";
import { scale } from "../visualEffects/Animations";

const socialMedias = [
  { name: "Email", url: "mailto:danieltostes@live.com", icon: emailicon },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/danieltvaz",
    icon: linkedinicon,
  },
  {
    name: "Github",
    url: "https://www.github.com/danieltvaz",
    icon: githubicon,
  },
];

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: relative;
  top: 17vmax;
  /* border-bottom: 2px solid ${({ theme }) => theme.text}; */
  /* border: 1px solid red; */
  @media screen and (max-width: 280px) and (max-width: 319px) {
    top: 21vmax;
  }

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    top: 20vmax;
  }
  @media screen and (min-width: 1024px) and (max-width: 1024px) {
    top: 21vmax;
  }
`;
const Link = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
const Icon = styled.img`
  width: 2.5vmax;
`;

export default function SocialLinks() {
  return (
    <Wrapper>
      {socialMedias.map((item, index) => (
        <Link key={index} href={item.url} target="_blank">
          <Icon src={item.icon} />
        </Link>
      ))}
    </Wrapper>
  );
}
