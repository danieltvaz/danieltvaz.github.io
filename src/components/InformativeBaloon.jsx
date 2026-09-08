import styled from "styled-components";
const Baloon = styled.div`
  background-color: ${({ theme }) => theme.navLink};
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 120px;
  padding: 10px 20px;
  position: relative;
  margin-bottom: 20px;
  max-width: 750px;

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    margin-top: 200px;
  }

  &:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 20px solid ${({ theme }) => theme.navLink};
    border-right: 10px solid transparent;
    border-top: 20px solid ${({ theme }) => theme.navLink};
    border-bottom: 10px solid transparent;
    right: -3px;
    top: 50%;
    transform: rotate(135deg) translate(-50%, 0);

    @media screen and (min-width: 320px) and (max-width: 1023px) {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      border-left: 20px solid ${({ theme }) => theme.navLink};
      border-right: 10px solid transparent;
      border-top: 20px solid ${({ theme }) => theme.navLink};
      border-bottom: 10px solid transparent;
      transform: rotate(45deg);
      left: 50%;
      top: -10px;
      background-color: transparent;
    }
  }
`;

const BaloonIcon = styled.img`
  width: 140px;
  position: absolute;
  top: 50%;
  right: -180px;
  transform: translate(0, -50%);
  user-select: none;
  -webkit-user-drag: none;

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    width: 140px;
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const BaloonText = styled.p``;
const BaloonTitle = styled.h2`
  font-size: 16px;

  a {
    text-decoration: none;
  }
`;
const RoleTitle = styled.h3`
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 2px;

  &:first-of-type {
    margin-top: 6px;
  }
`;

export default function InformativeBaloon({ data, index }) {
  return (
    <>
      <Baloon>
        <BaloonTitle>
          <a href={`https://${data?.link}`} target="_blank" rel="noreferrer">
            {data?.name}
          </a>
        </BaloonTitle>
        {data?.roles?.map((role, roleIndex) => (
          <div key={roleIndex}>
            <RoleTitle>{role.title}</RoleTitle>
            <BaloonText>{role.text}</BaloonText>
          </div>
        ))}
        <BaloonIcon src={data?.icon} />
      </Baloon>
    </>
  );
}
