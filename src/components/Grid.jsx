import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 43px;
  margin-top: 40px;
  grid-template-columns: repeat(5, minmax(100px, 150px));
  grid-template-rows: repeat(auto, minmax(100px, 150px));
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, minmax(110px, 110px));
    grid-template-rows: repeat(4, minmax(110px, 110px));
    gap: 15px;
  }
`;
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const Img = styled.img`
  width: 100px;

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    width: 50px;
  }
`;

const Title = styled.p`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    font-size: 10px;
  }
`;

export default function Grid({ data }) {
  return (
    <Wrapper>
      {data?.map((data, index) => (
        <GridItem key={index}>
          <Img src={data.icon} />
          <Title>{data.name}</Title>
        </GridItem>
      ))}
    </Wrapper>
  );
}
