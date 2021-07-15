import styled from "styled-components";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.textColor};
  margin: 0 30px;
  font-size: 20px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: inherit;
  }
`;

export default function SectionParagraph({ children }) {
  return <Paragraph>{children}</Paragraph>;
}
