import styled from "styled-components";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.textColor};
  margin: 0 30px;
  font-size: auto;
`;

export default function SectionParagraph({ children }) {
  return <Paragraph>{children}</Paragraph>;
}
