import logo from './logo.svg';
import './App.css';


//Components

import Players from "./Players/Players";




const Users = [{
    namw: "wad",
    firstName: "Mirek",
    lastName: "Kedzierski",
    playedGames: 12,
  },
  {
    namw: "kacpi",
    firstName: "Kacper",
    lastName: "Suchodolski",
    playedGames: 102,
  },

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Simple wideo game website</h2>
      </header>
      <Players />
    </div>
  );
}

export default App;
