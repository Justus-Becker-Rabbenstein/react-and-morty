// Import: CSS
import "./App.css";
// Import: React
import { useState } from "react";
// Import: Components
import { Header } from "./component/header/Header";
import { Card } from "./component/card/Card";
import { Navbar } from "./component/navbar/Navbar";
import { Character } from "./component/character/Character";
import { Favorite } from "./pages/favorite/Favorite";

function App() {
  /* Start: Page Switch Logic */
  const [currentPage, setCurrentPage] = useState("Homepage");
  const onClickPage = (pageName) => {
    setCurrentPage(pageName);
  };
  /* End: Page Switch Logic */

  /* Start: lift all characters from Card.js */
  const [allCharacters, setAllCharacters] = useState([]);
  const onClickCharacters = (characterNames) => {
    setAllCharacters(characterNames);
  };
  /* End: lift all characters from Card.js */

  /* Start: lift one character from Card.js */
  const [oneCharacter, setOneCharacter] = useState([]);
  const onClickCharacter = (characterName) => {
    setOneCharacter(characterName);
    function putIntoAllCharacters() {
      const newArray = [...allCharacters, oneCharacter];
      setAllCharacters(newArray);
    }
    putIntoAllCharacters();
  };
  /* End: lift one character from Card.js */

  return (
    <div className="App">
      <Header />
      <main>
        {currentPage === "Homepage" ? (
          <Card
            onClickPage={onClickPage}
            onClickCharacter={onClickCharacter}
            onClickCharacters={onClickCharacters}
          />
        ) : (
          ""
        )}
        {currentPage === "Favorite" ? (
          <Favorite oneCharacter={oneCharacter} allCharacters={allCharacters} />
        ) : (
          ""
        )}
        {currentPage === "Random" ? <p>Dummy Page Random</p> : ""}
        {currentPage === "Character" ? (
          <Character
            oneCharacter={oneCharacter}
            onClickCharacter={onClickCharacter}
          />
        ) : (
          ""
        )}
      </main>
      <Navbar onClickPage={onClickPage} />
    </div>
  );
}

export default App;
