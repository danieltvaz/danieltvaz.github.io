import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid blue; */
  width: 1024px;
  margin: auto;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const Photo = styled.img`
  width: 300px;
  flex: 1;
  border-radius: 10px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    max-width: 35%;
  }
`;

export default function MyAvatar({ children }) {
  return (
    <Wrapper>
      <Photo src="https://avatars.githubusercontent.com/u/73543926?v=4" />
      {children}
    </Wrapper>
  );
}
