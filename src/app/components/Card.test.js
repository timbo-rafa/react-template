import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Card from "./Card";

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

it("renders empty Card", () => {
  act(() => {
    render(<Card></Card>, container);
  });
  expect(container).toBeEmpty();
});

it("renders Card", () => {
  const title = "Test Title";
  const primaryText = "Test primary text";
  const secondaryText = "Test secondary text";
  const buttonText = "Test button text";
  act(() => {
    render(<Card title={title}
                 primaryText={primaryText}
                 secondaryText={secondaryText}
                 buttonText={buttonText}
                ></Card>, container);
  });
  expect(container.textContent).toContain(title);
  expect(container.textContent).toContain(primaryText);
  expect(container.textContent).toContain(secondaryText);
  expect(container.textContent).toContain(buttonText);
});