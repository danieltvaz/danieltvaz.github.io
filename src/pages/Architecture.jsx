import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";
import { architectureData } from "../constants/architectureData";

const Group = styled.div`
  margin-bottom: 24px;
`;

const GroupTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
`;

const Tag = styled.li`
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.text};
`;

export default function Architecture() {
  return (
    <Section>
      <SectionTitle>Arquitetura</SectionTitle>
      {architectureData.map((group) => (
        <Group key={group.title}>
          <GroupTitle>{group.title}</GroupTitle>
          <Tags>
            {group.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </Tags>
        </Group>
      ))}
    </Section>
  );
}
