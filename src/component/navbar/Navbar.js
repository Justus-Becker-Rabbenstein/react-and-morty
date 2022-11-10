import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <footer>
      <nav>
        <UlContainer>
          <li>
            <a href="#">Homepage</a>
          </li>
          <li>
            <a href="#">Favorite</a>
          </li>
          <li>
            <a href="#">Random</a>
          </li>
          <li>Other</li>
        </UlContainer>
      </nav>
    </footer>
  );
};

const UlContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  padding-inline-end: 40px;
`;
