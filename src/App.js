// Import: CSS
import "./App.css";
// Import: React
import { useState } from "react";
import { useEffect } from "react";
// Import: Components
import { Header } from "./component/header/Header";
import { Card } from "./component/card/Card";
import { Navbar } from "./component/navbar/Navbar";
import { Favorite } from "./pages/favorite/Favorite";

function App() {
  /* API FETCH FUNCTION START */
  // ram = Rick and Morty
  const [ramApiData, SetRamApiData] = useState([]);
  const setterRamApiData = (changeRamApiData) => {
    SetRamApiData(changeRamApiData);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      SetRamApiData(data.results);
    }
    fetchData();
    // function only called once because of empty dependency array
  }, []);
  /* API FETCH FUNCTION END */

  /* Start: Page Switch Logic */
  const [currentPage, setCurrentPage] = useState("Homepage");
  const onClickPage = (pageName) => {
    setCurrentPage(pageName);
  };
  /* End: Page Switch Logic */

  // get Index of clicked Character for single Character page
  const [indexOfClicked, setIndexOfClicked] = useState(0);
  const onClickCharacterIndex = (clickedIndex) => {
    setIndexOfClicked(clickedIndex);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {currentPage === "Homepage" ? (
          <Card
            ramApiData={ramApiData}
            setterRamApiData={setterRamApiData}
            indexOfClicked={indexOfClicked}
            onClickCharacterIndex={onClickCharacterIndex}
          />
        ) : (
          ""
        )}
        {currentPage === "Favorite" ? (
          <Favorite ramApiData={ramApiData} />
        ) : (
          ""
        )}
        {currentPage === "Random" ? <p>Dummy Page Random</p> : ""}
      </main>
      <Navbar onClickPage={onClickPage} />
    </div>
  );
}

export default App;
