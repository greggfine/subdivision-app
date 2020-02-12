import { getRandomTip } from "../util/helpers";

const testString =
  "Try to tap your foot on the 1/4 note pulses. With your other hand, evenly divide the pulse into 1/8 notes.";

describe("getRandomTip", () => {
  it("exists", () => {
    expect.assertions(1);
    expect(getRandomTip).toBeDefined();
  });
  it("is a function", () => {
    expect.assertions(1);
    expect(typeof getRandomTip).toBe("function");
  });
  it("returns a string", () => {
    expect(typeof getRandomTip()).toBe("string");
  });
});
