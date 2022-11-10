import "./App.css";

function App() {
  return (
    <div className="App">
      <header>React and Morty</header>
      <main>
        <ul>
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
        </ul>
      </main>
      <footer>
        <nav>
          <ul>
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
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
