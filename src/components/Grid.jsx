import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 3vmax;
  grid-template-columns: repeat(3, minmax(auto, 10vmax));
  margin: auto;
  justify-content: center;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(auto, 15vmax));
    gap: 2vmax;
  }
`;
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 8vmax;
  border-radius: 10px;
  padding: 1vmax;
  box-shadow: 2px 5px 10px ${({ theme }) => theme.foreground};
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    height: 12vmax;
  }
`;
const Img = styled.img`
  width: 5vmax;

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    width: 7vmax;
  }
`;

const Title = styled.p`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  font-size: 1vmax;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    font-size: 1.1vmax;
  }
`;

export default function Grid({ data }) {
  return (
    <Wrapper>
      {data.map((data, index) => (
        <GridItem key={index}>
          <Img src={data.icon} />
          <Title>{data.name}</Title>
        </GridItem>
      ))}
    </Wrapper>
  );
}
