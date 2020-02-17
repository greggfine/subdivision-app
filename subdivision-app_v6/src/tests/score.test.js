import React from "react";
import Score from "../components/score/Score";
import { shallow } from "enzyme";
import { store } from "../index";
import { Provider } from "react-redux";

describe("<Score>", () => {
  test("it exists", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Score />
        </Provider>
      )
    ).toBeDefined();
  });
});
