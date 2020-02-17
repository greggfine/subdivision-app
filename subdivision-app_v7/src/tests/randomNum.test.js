import { randomNumObj } from "../reducers/questionReducer";

const input = ["notation1", "notation2"];

describe("randomNumObj", () => {
  it("exists", () => {
    expect(randomNumObj).toBeDefined();
  });
  //   it("returns an object", () => {
  //     expect(randomNumObj(input)).toEqual(
  //       expect.objectContaining({
  //         correctAnswer: input[0],
  //         wrongAnswer: input[1]
  //       })
  //     );
  //   });
});

// describe("randomNum", () => {
//   it("exists", () => {
//     expect(randomNum).toBeDefined();
//   });

//   it("returns an array", () => {
//     expect(randomNum([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
//   });

//   it("returns a random number from the array", () => {
// expect(randomNum([1, 2, 3, 4, 5])).toBe(1 || 2 || 3 || 4 || 5);
//   });
