import { useState } from "react";
import styled from "styled-components";

const FullBlur = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.9);
  position: fixed;
  display: ${({ isOpen }) => !isOpen && "none"};
  top: 0;
  left: 0;
`;

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  z-index: 1;
  font-size: 3rem;
  text-align: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.activeColor};
  background: rgb(230, 230, 230);
  width: 50vw;
  height: 50vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  border-radius: 10px;
  width: 30%;
  height: 10%;
  margin-top: 30px;
  transition: none;

  &:active {
    color: ${({ theme }) => theme.activeColor};
    transition: none;
  }
`;

export default function UnderConstruction() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick(e) {
    setIsOpen(false);
  }

  return (
    <FullBlur isOpen={isOpen}>
      <Modal isOpen={isOpen}>
        Esta página ainda está sendo construída, por favor não repare caso algo
        não funcione bem. =)
        <Button onClick={handleClick}>Ok, entendi!</Button>
      </Modal>
    </FullBlur>
  );
}
