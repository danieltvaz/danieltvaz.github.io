import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.h3`
  font-size: 28px;
  color: ${({ theme }) => theme.text};
  max-width: 70px;
  margin-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.highlight};
`;

export default function SectionTitle({ children }) {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
}
