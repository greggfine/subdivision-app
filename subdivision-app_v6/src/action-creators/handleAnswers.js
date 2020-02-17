import { HANDLE_CORRECT_ANSWER, HANDLE_WRONG_ANSWER } from "../actions";

export const handleWrongAnswer = () => ({
  type: HANDLE_WRONG_ANSWER
});

export const handleCorrectAnswer = () => ({
  type: HANDLE_CORRECT_ANSWER
});
