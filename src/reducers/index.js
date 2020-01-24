import { combineReducers } from "redux";
import { questionReducer } from "./questionReducer";
import { answersReducer } from "./answersReducer";

export const rootReducer = combineReducers({
  name: "gregg",
  questions: questionReducer,
  answer: answersReducer
});
