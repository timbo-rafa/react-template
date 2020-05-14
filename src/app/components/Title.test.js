import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Title from "./Title";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders Title", () => {
  const testTitle = "Test Title";
  act(() => {
    render(<Title>{testTitle}</Title>, container);
  });
  expect(container.textContent).toContain(testTitle);
});