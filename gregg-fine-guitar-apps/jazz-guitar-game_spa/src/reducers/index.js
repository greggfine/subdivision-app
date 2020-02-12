import { combineReducers } from "redux";
import { gameOverReducer } from "./gameOverReducer";
import { startGameReducer } from "./startGameReducer";

export const rootReducer = combineReducers({
  gameOver: gameOverReducer,
  startGame: startGameReducer
});
