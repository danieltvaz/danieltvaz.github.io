import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function MainContentWrapper({ children }) {
  return <MainWrapper>{children}</MainWrapper>;
}
