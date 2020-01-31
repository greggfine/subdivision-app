import React from "react";
import Question from "../components/question/Question";
import { Provider } from "react-redux";
import { store } from "../index";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("<Question>", () => {
  test("it exists", () => {
    expect(
      render(
        <Provider store={store}>
          <Question />
        </Provider>
      )
    ).toBeDefined();
  });
  test("it renders header text", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Question />
      </Provider>
    );
    const headerTxt = getByText(/identify the subdivision/i);
    expect(headerTxt).toBeInTheDocument();
  });
});
