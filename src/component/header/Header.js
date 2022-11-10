import React from "react";
import styled from "styled-components";

export const Header = () => {
  return <HeaderContainer>React and Morty</HeaderContainer>;
};

const HeaderContainer = styled.header`
  background-color: hotpink;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
