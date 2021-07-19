import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 2.2vmax;
  margin-bottom: 3vmax;
`;

const Strong = styled.span`
  color: ${({ theme }) => theme.highlight};
  font-size: 2.5.vmax;
  text-transform: uppercase;
`;

const Strongest = styled.span`
  color: ${({ theme }) => theme.highlight};
  border-bottom: 1px solid ${({ theme }) => theme.highlight};
  font-size: 2.8vmax;
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
    PersonalizeText(children);
  }, []);
  return <Wrapper>{text}</Wrapper>;
}
