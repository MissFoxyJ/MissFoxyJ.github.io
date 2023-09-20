import react from "react";
const home = () => {
    return(
        <div>
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
        </div>
    );
}
export default home;