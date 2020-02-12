import * as constants from "../../actions";
import { questionReducer } from "../../reducers/questionReducer";
import { randomNumObj } from "../../reducers/questionReducer";

describe("questionReducer", () => {
  test.todo("test randomNumObj func");
  test.todo("returns random image on action GET_RANDOM_QUESTION");
  test.todo("returns state if no action type");
});

/* 
We don't need to test lodash
randomNumObj is getting passed the images array
So... shuffledArr will be [notation1, notation2] OR [notation2, notation1]
This function returns an object with:
    correctAnswer equal to whatever is in array position 0
    wrongAnswer equal to wahtever is in array position 1

*/
