import { combineReducers } from "redux";
import { questionReducer } from "./questionReducer";
import { livesReducer } from "./livesReducer";
import { scoreReducer } from "./scoreReducer";
import { chancesReducer } from "./chancesReducer";
import { gameOverReducer } from "./gameOverReducer";
import { startGameReducer } from "./startGameReducer";
import { playNextReducer } from "./playNextReducer";

export const rootReducer = combineReducers({
  questions: questionReducer,
  lives: livesReducer,
  score: scoreReducer,
  chances: chancesReducer,
  gameOver: gameOverReducer,
  startGame: startGameReducer,
  playNext: playNextReducer
});
