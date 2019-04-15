import React from "react";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

export default function App() {
 return (
  <div className="container text-center ">
   <h1>Jotto</h1>
   <Congrats success={true} />
   <GuessedWords
    guessedWords={[
     {
      guessedWords: "train",
      letterMatchCount: 3
     }
    ]}
   />
  </div>
 );
}
