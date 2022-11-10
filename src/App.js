import "./App.css";
import { Header } from "./component/header/Header";
import { Card } from "./component/card/Card";
import { Navbar } from "./component/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Card />
      </main>
      <Navbar />
    </div>
  );
}

export default App;
