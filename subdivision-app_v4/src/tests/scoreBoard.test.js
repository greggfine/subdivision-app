import React from "react";
import ScoreBoard from "../components/scoreboard/ScoreBoard";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../index";
afterEach(cleanup);

describe("<ScoreBoard>", () => {
  expect.assertions(1);
  test('it displays "GET A TIP!"', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ScoreBoard />
      </Provider>
    );
    const Button = getByText("GET A TIP!");
    expect(Button).toHaveTextContent("GET A TIP!");
  });
});
