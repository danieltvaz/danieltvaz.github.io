import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: disc;
`;

const Spacer = styled.div`
  height:20px;
`;

export default function List({ data }) {
  return (
    <Wrapper>
      {data?.map((data, index) => (
        <>
        <li key={index}>
          <p>
            {data?.link ? (
              <a href={data.link} target="_blank" rel="noreferrer">
                {data?.title}
              </a>
            ) : (
              data?.title
            )}
          </p>
          <p>- {data.description}</p>
        </li>
      <Spacer/>
      </>
    ))}
    </Wrapper>
  );
}
