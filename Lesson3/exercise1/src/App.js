import logo from './logo.svg';
import './App.css';


//Components

import Players from "./Players/Players";

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
