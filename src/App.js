import React from "react";
import "./App.css";
import Question from "./Question";
import Answers from "./Answers";
import ScoreBoard from "./ScoreBoard";

function App() {
  return (
    <div className="App">
      <ScoreBoard />
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
  Score: 10 chances
  Lives: 3
  Points: 100 per correct guess


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

For now: Give me a random number
Give me two choics of numbers
If I pick the correct one, add a point, etc.

create 2 btns, one having the correct answer and one having
a different answer

Which btn will hold the correct answer?


*/
