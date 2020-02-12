import { shuffle } from "lodash";
import notation1 from "./notation/notation1.jpg";
import notation2 from "./notation/notation2.jpg";
import { GET_RANDOM_QUESTION } from "../actions";
const images = [notation1, notation2];

export const randomNumObj = arr => {
  const shuffledArr = shuffle(arr);
  return {
    correctAnswer: shuffledArr[0],
    wrongAnswer: shuffledArr[1]
  };
};

export const questionReducer = (
  state = { correctAnswer: notation1, wrongAnswer: notation2 },
  action
) => {
  switch (action.type) {
    case GET_RANDOM_QUESTION:
      return randomNumObj(images);
    default:
      return state;
  }
};
