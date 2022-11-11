import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const Character = ({ oneCharacter }) => {
  // Button Show More
  const [toggleButtonShowMore, settoggleButtonShowMore] = useState(false);
  function handleClick() {
    settoggleButtonShowMore(!toggleButtonShowMore);
  }

  return (
    <LiContainer>
      <img src={oneCharacter.image} alt={oneCharacter.name} />
      <h2>{oneCharacter.name}</h2>
      <button onClick={handleClick}>show more</button>
      <ButtonFavoriteContainer>Save as favorite</ButtonFavoriteContainer>
      {toggleButtonShowMore ? (
        <ul>
          <LiContainer>species: {oneCharacter.species}</LiContainer>
          <LiContainer>gender: {oneCharacter.gender}</LiContainer>
          <LiContainer>status: {oneCharacter.status}</LiContainer>
        </ul>
      ) : (
        ""
      )}
    </LiContainer>
  );
};

const LiContainer = styled.li`
  list-style-type: none;
`;
const ButtonFavoriteContainer = styled.button`
  position: relative;
  top: -333px;
  right: -90px;
`;
