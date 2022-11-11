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

  return (
    <div className="App">
      <Header />
      <main>
        {currentPage === "Homepage" ? <Card onClickPage={onClickPage} /> : ""}
        {currentPage === "Favorite" ? <p>Dummy Page Favorite</p> : ""}
        {currentPage === "Random" ? <p>Dummy Page Random</p> : ""}
        {currentPage === "Character" ? <Character /> : ""}
      </main>
      <Navbar onClickPage={onClickPage} />
    </div>
  );
}

export default App;
