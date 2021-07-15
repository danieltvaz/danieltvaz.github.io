import styled from "styled-components";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.textColor};
  display: inline-block;
`;

export default function SectionParagraph({ children }) {
  return <Paragraph>{children}</Paragraph>;
}
