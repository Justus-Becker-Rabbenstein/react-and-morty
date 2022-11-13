import styled from "styled-components";
import { useState } from "react";
import { Character } from "../character/Character";

export const Card = ({  ramApiData, indexOfClicked, onClickCharacterIndex, setterRamApiData }) => {
  // Render (all Characters) in Home or one Character based on onClick event
  const [clickedCharacterButton, setClickedCharacterButton] = useState(false);

  return (
    <CardContainer>
      {clickedCharacterButton === false ? ramApiData.map((character) => {
        return (
          <li>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <button
              onClick={function () {
                onClickCharacterIndex(ramApiData.indexOf(character));
                setClickedCharacterButton(true);
              }}
            >
              show more
            </button>
          </li>
        );
      }) : <Character ramApiData={ramApiData} indexOfClicked={indexOfClicked} onClickCharacterIndex={onClickCharacterIndex} setterRamApiData={setterRamApiData} />}
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
