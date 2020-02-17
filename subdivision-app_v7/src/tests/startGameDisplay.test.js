import React from "react";
import "../components/startGameDisplay/StartGameDisplay";
import { shallow } from "enzyme";
import { StartGameDisplay } from "../components/startGameDisplay/StartGameDisplay";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<StartGameDisplay />);
});

describe("<StartGameDisplay />", () => {
  test("it exists", () => {
    expect(wrapper).toBeDefined();
  });
});

/* 
What to test?

Has "SUBDIVISIONS" heading
*/
