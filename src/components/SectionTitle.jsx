import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.h3`
  font-size: 2vmax;
  color: ${({ theme }) => theme.text};
  border-bottom: 2px solid ${({ theme }) => theme.highlight};
  width: 12vmax;
  text-align: center;
  margin: 0 auto 3vmax auto;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    margin: 0 auto 5vmax auto;
  }
`;

export default function SectionTitle({ children }) {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
}
