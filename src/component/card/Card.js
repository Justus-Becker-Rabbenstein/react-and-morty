import styled from "styled-components";
import { useEffect, useState } from "react";

export const Card = ({ onClickPage, onClickCharacter }) => {
  /* API FETCH FUNCTION START */
  // ram = Rick and Morty
  const [ramApiData, SetRamApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      SetRamApiData(data.results);
    }
    fetchData();
    // function only called once because of empty dependency array
  }, []);

  return (
    <CardContainer>
      {ramApiData.map((character) => {
        return (
          <li>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <button
              onClick={function name(params) {
                onClickPage("Character");
                onClickCharacter(character);
              }}
            >
              show more
            </button>
          </li>
        );
      })}
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
