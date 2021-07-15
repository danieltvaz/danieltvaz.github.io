import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
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
