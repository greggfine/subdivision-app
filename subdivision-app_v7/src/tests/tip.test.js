import React from "react";
import Tip from "../components/tip/Tip";
import { shallow } from "enzyme";
import { render, fireEvent, waitForElement } from "@testing-library/react";

describe("<Tip>", () => {
  it("renders a button", () => {
    const toggleOpenModal = jest.fn();
    const wrapper = shallow(<Tip toggleOpenModal={toggleOpenModal} />);
    expect(wrapper.find(".get-a-tip-btn")).toHaveLength(1);
  });
  it('has a span with text "GET A TIP!"', () => {
    const wrapper = shallow(<Tip />);
    expect(wrapper.find(".tip-txt").text()).toBe("GET A TIP!");
  });
  it("opens a modal when btn is clicked", async () => {
    const { getByTestId } = render(<Tip />);
    const getATipBtn = getByTestId("get-a-tip-btn");
    fireEvent.click(getATipBtn);
    const modal = await waitForElement(() => getByTestId("modal"));
    expect(modal).toBeInTheDocument();
  });
});

/* What would I check?

It renders a button
It renders a lightbulb Icon
onClick opens a modal
*/
