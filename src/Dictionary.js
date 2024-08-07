import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("sunset");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictonaryResponse(response) {
    setResults(response.data);
  }

  function handleImgResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=31044e85dc6dotb5a7ff80ae77ab2504`;
    axios.get(apiUrl).then(handleDictonaryResponse);

    let imgUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=31044e85dc6dotb5a7ff80ae77ab2504`;
    axios.get(imgUrl).then(handleImgResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="searchBar">
          <h1>What word would you like to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue="sunset"
              onChange={handleKeywordChange}
            />
          </form>
          <div className="Hint">Suggested words: sunset, forest, yoga...</div>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
