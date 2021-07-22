import styled from "styled-components";

const Text = styled.p`
  font-size: 20px;
  font-style: italic;
  color: ${({ theme }) => theme.navLink};
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    font-size: 14px;
  }
`;
const Author = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.navLink};
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    font-size: 10px;
  }
`;
const Wrapper = styled.div`
  margin: 50px 0 0 auto;
  width: fit-content;
  text-align: right;
  user-select: none;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    margin: 20px 0 0 0;
  }
`;

export default function ImpactText({ children }) {
  const text = children[0];
  console.log(children);
  const author = children[2];
  console.log(author);
  return (
    <Wrapper>
      <Text>{text}</Text>

      <Author>{author}</Author>
    </Wrapper>
  );
}
