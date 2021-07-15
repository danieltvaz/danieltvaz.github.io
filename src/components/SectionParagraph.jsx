import styled from "styled-components";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.textColor};
  margin: 0 30px;
  font-size: 20px;
`;

export default function SectionParagraph({ children }) {
  return <Paragraph>{children}</Paragraph>;
}
