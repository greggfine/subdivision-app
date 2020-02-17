import React from "react";
import { Lives } from "../components/lives/Lives";
import { shallow } from "enzyme";

let wrapper;

beforeAll(() => {
  const mockProps = {
    lives: 3,
    setGameOver: jest.fn()
  };
  wrapper = shallow(<Lives {...mockProps} />);
});

describe("<Lives />", () => {
  test('it renders txt "LIVES :', () => {
    expect(wrapper.exists(".Lives")).toBeTruthy();
  });
});
