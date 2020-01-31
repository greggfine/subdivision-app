import React from "react";
import MuteBtn from "../components/muteBtn/MuteBtn";
import { render, cleanup, fireEvent } from "@testing-library/react";

describe("<MuteBtn>", () => {
  test("it exists", () => {
    expect(MuteBtn).toBeDefined();
  });
  test("it fires", () => {
    const { getByTestId } = render(<MuteBtn />);
    const muteBtn = getByTestId("mute-btn");
    fireEvent.click(muteBtn);
  });
});
