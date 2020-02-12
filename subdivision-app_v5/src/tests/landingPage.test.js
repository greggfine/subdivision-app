import React from "react";
import LandingPage from "../components/landingPage/LandingPage";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<LandingPage />);
});

describe("<Landing Page>", () => {
  test("it renders h1 text", () => {
    expect(wrapper.find("h1").text()).toBe("GREGG FINE GUITAR APPS");
  });
  test("it contains 2 Links", () => {
    expect(wrapper.find("Link")).toHaveLength(2);
  });
  test("it contains 1 anchor tag", () => {
    expect(wrapper.find("a").text()).toBe(" Jazz Guitar App ");
  });
});

/* 
Test reducers and actions
Use enzyme's "instance" method to test React component functions
use beforeEach to create wrapper

*/
