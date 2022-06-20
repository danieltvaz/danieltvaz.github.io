import styled, { keyframes } from "styled-components";
import { useState } from "react";

const ModalAnimationDesktop = keyframes`
from{
  opacity: 0;
  width: 0;
}
to{
  opacity: 1;
  width: 100%;
}
`;
const ModalAnimationMobile = keyframes`
from{
  opacity: 0;
  width: 0;
}
to{
  opacity: 1;
  width: 100vw;
}
`;

const Wrapper = styled.div`
  display: grid;
  gap: 43px;
  margin-top: 40px;
  grid-template-columns: repeat(5, minmax(100px, 150px));
  grid-template-rows: repeat(2, minmax(100px, 150px));
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, minmax(50px, 110px));
    grid-template-rows: repeat(4, minmax(50px, 110px));
    gap: 15px;
  }
`;
const GridItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: box-shadow 0.5s;
  width: auto;

  &:hover {
    box-shadow: ${({ optionModal }) => (optionModal ? "1px 1px 20px 2px #3445b4" : null)};
  }
`;
const Img = styled.img`
  width: ${({ optionName }) => (optionName ? "100px" : "100%")};
  margin: ${({ optionName }) => (optionName ? "" : "auto")};

  @media screen and (min-width: 320px) and (max-width: 1023px) {
    width: ${({ optionName }) => (optionName ? "50px" : "100%")};
    margin: ${({ optionName }) => (optionName ? "" : "auto")};
  }
`;

const Title = styled.p`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    font-size: 10px;
  }
`;

const OutFocus = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  top: 0;
  left: 0;
  opacity: 0.4;
  background: black;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  z-index: 3;
  align-items: center;
  background: transparent;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    z-index: 2;
    user-select: none;
    border-radius: 10px;
    animation: ${ModalAnimationDesktop} 0.5s;
    @media screen and (min-width: 320px) and (max-width: 1023px) {
      width: 100vw;
      animation: ${ModalAnimationMobile} 0.5s;
    }
  }
`;

export default function Grid({ data, optionModal, optionName }) {
  const [modal, setModal] = useState(false);

  return (
    <Wrapper>
      {data?.map((data, index) => (
        <GridItem key={index} onClick={() => setModal(data.icon)} optionModal={optionModal}>
          {data.link ? (
            <a href={data.link} target="blank" alt={`${data.name} image`}>
              <Img src={data.icon} optionName={optionName} />
              {optionName ? <Title>{data.name}</Title> : ""}
            </a>
          ) : (
            <>
              <Img src={data.icon} optionName={optionName} />
              {optionName ? <Title>{data.name}</Title> : ""}
            </>
          )}
        </GridItem>
      ))}

      {modal && optionModal && (
        <>
          <OutFocus onClick={() => setModal(false)}></OutFocus>
          <Modal>
            <img modal={modal} src={modal} alt={data.name} draggable="false" />
          </Modal>
        </>
      )}
    </Wrapper>
  );
}
