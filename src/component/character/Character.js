import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const Character = ({ ramApiData, indexOfClicked, setterRamApiData }) => {
  /* Start: Button Show More */
  const [toggleButtonShowMore, settoggleButtonShowMore] = useState(false);
  function handleClick() {
    settoggleButtonShowMore(!toggleButtonShowMore);
  }
  /* End: Button Show More */

  // Convert ramApiData to Array since Object is not allowed
  const element = ramApiData[indexOfClicked];
  const elementNames = Object.values(element);

  // Set as favorite
  const [boolIsFavorite, setBoolIsFavorite] = useState(false);
  
  function handleFavorite() {
    if(boolIsFavorite === true) {
      removeAsFavorite();
    } else {
      setAsFavorite();
    }
  }
  function setAsFavorite() {
    setBoolIsFavorite(true);
    setterRamApiData([...ramApiData, ramApiData[indexOfClicked]['isFavorite'] = true]);
  }
  function removeAsFavorite() {
    setBoolIsFavorite(false);
    setterRamApiData([...ramApiData, ramApiData[indexOfClicked]['isFavorite'] = false]);
  }

  return (
    <LiContainer>
      <img src={elementNames[8]} alt={elementNames[1]}/>
      <h2>{elementNames[1]}</h2>
      <button onClick={handleClick}>show more</button>
      <ButtonFavoriteContainer
        onClick={handleFavorite}
        favoriteConditionalStyling={boolIsFavorite}
      >
        {boolIsFavorite ? "Remove as favorite" : "Save as favorite"}
      </ButtonFavoriteContainer>
      {toggleButtonShowMore ? (
        <ul>
          <LiContainer>species: {elementNames[3]} </LiContainer>
          <LiContainer>gender: {elementNames[5]} </LiContainer>
          <LiContainer>status: {elementNames[2]} </LiContainer>
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
  background-color: ${props => props.favoriteConditionalStyling ? "green" : ""}
`;
