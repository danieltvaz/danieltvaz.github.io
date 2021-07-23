import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 16px;
  margin-bottom: 3vmax;
`;

const Strong = styled.span`
  color: ${({ theme }) => theme.highlight};
  font-size: 24px;
  text-transform: uppercase;
`;

const Strongest = styled.span`
  color: ${({ theme }) => theme.foreground};
  border-bottom: 1px solid ${({ theme }) => theme.highlight};
  font-size: 28px;
  text-transform: uppercase;
`;

const LineBreak = styled.span`
  display: block;
`;

const Normal = styled.span`
  color: ${({ theme }) => theme.text};
`;
//* : strong
//** : stronger
//"newline" : break line
export default function ColoredApresentation({ children }) {
  const [text, setText] = useState("");

  const PersonalizeText = useCallback((cleanText) => {
    const words = cleanText.replace(",", "").split(" ");
    const styledWords = words.map(
      (item, index) =>
        (item.includes("**") && (
          <Strongest key={index}>{item.replace("**", "")} </Strongest>
        )) ||
        (item.includes("*") && (
          <Strong key={index}>{item.replace("*", "")} </Strong>
        )) ||
        (item.includes("newline") && <LineBreak key={index}></LineBreak>) || (
          <Normal key={index}>{item + ""} </Normal>
        )
    );
    setText(styledWords);
  }, []);

  useEffect(() => {
    children && PersonalizeText(children);
  }, []);

  return <Wrapper>{text}</Wrapper>;
}
