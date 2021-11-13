import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
`;

export default function List({ data }) {
  return (
    <Wrapper>
      {data?.map((data, index) => (
        <li key={index}>{data?.name}</li>
      ))}
    </Wrapper>
  );
}
