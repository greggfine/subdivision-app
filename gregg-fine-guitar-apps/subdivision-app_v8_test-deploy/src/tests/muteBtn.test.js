import React from "react";
import MuteBtn from "../components/muteBtn/MuteBtn";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { shallow } from "enzyme";

let wrapper;

beforeAll(() => {
  wrapper = shallow(<MuteBtn />);
});

describe("<MuteBtn />", () => {
  test("it exists", () => {
    expect(MuteBtn).toBeDefined();
  });
  //   test("it fires", () => {
  //     const { getByTestId } = render(<MuteBtn />);
  //     const muteBtn = getByTestId("mute-btn");
  //     fireEvent.click(muteBtn);
  //   });
  test("btn click calls toggleMuted", () => {
    // const mockMuted = false;
    // const mockToggleMuted = jest.fn();
    const mockProps = {
      muted: false,
      toggleMuted: jest.fn()
    };
    const wrapper = shallow(<MuteBtn {...mockProps} />);
    wrapper.find(".mute-btn").simulate("click");
    expect(mockProps.toggleMuted).toHaveBeenCalled();
  });
});
