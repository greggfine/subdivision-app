import React from "react";
import "./App.css";
import Question from "./components/Question";
import Answers from "./components/Answers";
import ScoreBoard from "./components/ScoreBoard";
import { Header } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <ScoreBoard />
      <Header size="huge">Subdivision App</Header>
      <Question />
      <Answers />
    </div>
  );
}

export default App;

/* Create a guessing game
You hear a one beat rhythmic pattern.
You are shown 2 drum notation images.
Choose the one that you are hearing.


Features:
  tooltips

Components:
DATA Panel(holds score, lives, and points)
Guesses (has the 2 images)


Data:
[
  {
    image: rhythmic notation,
    correctAnswer: A or B
  }
]

HOW DO WE PLAY THIS AUDIO???
We don't want to see the notation image.
On "Get Random Question" an audio file is triggered
*/
