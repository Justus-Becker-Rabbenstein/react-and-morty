import React from "react";
import styled from "styled-components";

export const Card = () => {
  return (
    <CardContainer>
      <li>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg
        "
          alt="rick-and-morty-character"
        />
        <h2>Morty Smith</h2>
        <a href="#">
          <button>show more</button>
        </a>
      </li>
    </CardContainer>
  );
};

const CardContainer = styled.ul`
  list-style: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;
