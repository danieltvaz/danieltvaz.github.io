import { useEffect, useState } from "react";

import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: absolute;
  top: ${({ pageHeight }) => `${pageHeight}px`};
  left: 0;
  width: 100%;
  justify-content: center;
  height: 48px;
  background: ${({ theme }) => theme.foreground};
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    padding: 10px 20px;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.navLink};
  margin-right: 20px;
  @media screen and (min-width: 320px) and (max-width: 1023px) {
    font-size: 10px;
  }
`;

export default function Footer() {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    setPageHeight(document.body.offsetHeight);
  });

  return (
    <Wrapper pageHeight={pageHeight}>
      <Text>Desenvolvido por Daniel Tostes @ 2021 - Todos os direitos reservados</Text>
    </Wrapper>
  );
}
