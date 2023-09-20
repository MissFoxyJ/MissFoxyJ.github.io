import './App.css';
import LoadingSpinner from "./loadingSpinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadingSpinner />
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;


function AboutPage(){
  return(
    <div>
      <h1>
        About Us
      </h1>
      <p>
        Justine Anderson and I am a programmer
      </p>
    </div>
  )
}