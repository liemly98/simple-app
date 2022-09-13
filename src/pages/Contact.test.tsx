import React from "react";
import { render, screen, act } from "@testing-library/react";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("renders render contact component", () => {
  const view = render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.click(screen.getByText("Submit"));
  });

  expect(view).toMatchSnapshot();
});
