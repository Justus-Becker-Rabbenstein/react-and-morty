// Import: CSS
import "./App.css";
// Import: React
import { useState } from "react";
// Import: Components
import { Header } from "./component/header/Header";
import { Card } from "./component/card/Card";
import { Navbar } from "./component/navbar/Navbar";
import { Character } from "./component/character/Character";

function App() {
  /* Start: Page Switch Logic */
  const [currentPage, setCurrentPage] = useState("Homepage");
  const onClickPage = (pageName) => {
    setCurrentPage(pageName);
  };
  /* End: Page Switch Logic */

  /* Start: Character Page Logic */
  const [oneCharacter, setOneCharacter] = useState([]);
  const onClickCharacter = (characterName) => {
    setOneCharacter(characterName);
  };
  /* End: Character Page Logic */

  return (
    <div className="App">
      <Header />
      <main>
        {console.log(oneCharacter)}
        {currentPage === "Homepage" ? (
          <Card onClickPage={onClickPage} onClickCharacter={onClickCharacter} />
        ) : (
          ""
        )}
        {currentPage === "Favorite" ? <p>Dummy Page Favorite</p> : ""}
        {currentPage === "Random" ? <p>Dummy Page Random</p> : ""}
        {currentPage === "Character" ? (
          <Character oneCharacter={oneCharacter} />
        ) : (
          ""
        )}
      </main>
      <Navbar onClickPage={onClickPage} />
    </div>
  );
}

export default App;
