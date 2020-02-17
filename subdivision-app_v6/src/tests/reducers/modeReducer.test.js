import React from "react";
import * as constants from "../../actions";
import { modeReducer } from "../../reducers/modeReducer";

describe("modeReducer", () => {
  const loop3 = "loop3.mp3";
  test("if no action, return default state", () => {
    expect(modeReducer(undefined, {})).toEqual({ mode: "Easy", loop: loop3 });
  });
});
