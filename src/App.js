import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://github.com/demimortimer"
            target="_blank"
            rel="noreferrer"
          >
            Demi Mortimer
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/demimortimer/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://demi-dictionary-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
