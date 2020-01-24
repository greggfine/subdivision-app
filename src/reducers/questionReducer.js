const nums = [1, 2, 3, 4, 5];

export const randomNumObj = arr => {
  const result = {};
  let randNum = () => Math.ceil(Math.random() * arr.length);
  result["correctAnswer"] = randNum();
  let randNum2 = randNum();
  while (result["correctAnswer"] === randNum2) {
    randNum2 = randNum();
  }
  result["wrongAnswer"] = randNum2;
  return result;
};

export const questionReducer = (
  state = { correctAnswer: "?", wrongAnswer: "?" },
  action
) => {
  switch (action.type) {
    case "GET RANDOM QUESTION":
      return randomNumObj(nums);
    default:
      return state;
  }
};
