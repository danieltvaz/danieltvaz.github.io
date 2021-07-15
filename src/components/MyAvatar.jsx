import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid blue; */
  width: 1024px;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Photo = styled.img`
  width: 300px;
  border-radius: 10px;
`;

export default function MyAvatar({ children }) {
  return (
    <Wrapper>
      <Photo src="https://avatars.githubusercontent.com/u/73543926?v=4" />
      {children}
    </Wrapper>
  );
}
