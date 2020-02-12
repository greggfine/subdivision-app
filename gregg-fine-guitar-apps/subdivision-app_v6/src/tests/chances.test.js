import React from "react";
import { Chances, playGameOver } from "../components/chances/Chances";
import { shallow } from "enzyme";

let wrapper;

beforeAll(() => {
  wrapper = shallow(<Chances />);
});

describe("playGameOver", () => {
  test.todo(
    "Creates a gameOver const and sets it to the gameOver element. It then calls the play method"
  );
});

describe("<Chances />", () => {
  test("it displays txt 'CHANCES", () => {
    expect(wrapper.find(".Chances-txt")).toBeTruthy();
  });
});
