import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <p>
        <em>{props.meaning.example}</em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
