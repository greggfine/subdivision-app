import React from "react";
import { Levels } from "../components/levels/Levels";
import { shallow } from "enzyme";
import { Form, Radio } from "semantic-ui-react";

let wrapper;

beforeAll(() => {
  const mockProps = {
    level: { mode: "Easy" },
    setMode: jest.fn()
  };
  wrapper = shallow(<Levels {...mockProps} />);
});

describe("<Levels>", () => {
  test('renders h1 with txt "Set Your Mode"', () => {
    expect(wrapper.find("h1").text()).toMatch(/set your mode/i);
  });

  test('renders h1 with txt "Set Your Mode"', () => {
    expect(wrapper.find("h1").text()).toBe("Set Your Mode");
  });

  test("it renders 2 Radio btns", () => {
    expect(wrapper.find(Radio)).toHaveLength(2);
  });

  test("it triggers an onChange", () => {
    const setModeSpy = jest.fn();
    const mockProps = {
      level: { mode: "Easy" },
      setMode: setModeSpy
    };
    wrapper = shallow(<Levels {...mockProps} />);
    // wrapper
    //   .find(Radio)
    //   .at(0)
    //   .simulate("change");
    // expect(setModeSpy).toHaveBeenCalled();
    // wrapper
    //   .find(Radio)
    //   .at(1)
    //   .simulate("change");
    wrapper.find(Radio).forEach(radioBtn => {
      radioBtn.simulate("change");
    });
    expect(setModeSpy).toHaveBeenCalledTimes(2);
  });
  test("it renders a Form component", () => {
    expect(wrapper.exists(Form)).toBeTruthy();
  });
  test("it renders a single Form component", () => {
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});
