import { fireEvent, render, screen } from "@testing-library/react";

import Calculator from "./Calculator";

const setup = () => {
  const utils = render(<Calculator />);
  const addButton = screen.getByText("Add");
  const divideButton = screen.getByText("Divide");
  const input: HTMLInputElement = screen.getByTestId("input");
  const value: HTMLSpanElement = screen.getByTestId("value");

  return {
    input,
    addButton,
    divideButton,
    value,
    ...utils,
  };
};

describe("Calculator", () => {
  test("add button should affect h2 value", () => {
    const { input, addButton, value } = setup();

    fireEvent.change(input, { target: { value: "23" } });
    fireEvent.click(addButton);

    expect(value.textContent).toBe("23");
  });

  test("divide button should affect h2 value", () => {
    const { input, addButton, divideButton, value } = setup();

    fireEvent.change(input, { target: { value: "10" } });
    fireEvent.click(addButton);
    fireEvent.click(divideButton);

    expect(value.textContent).toBe("5");
  });

  test("value should be rounded >=0,5 = 1", () => {
    const { input, addButton, divideButton, value } = setup();

    fireEvent.change(input, { target: { value: "11" } });
    fireEvent.click(addButton);
    fireEvent.click(divideButton);

    expect(value.textContent).toBe("6");
  });

  test("value should be rounded <0,5 = 0", () => {
    const { input, addButton, divideButton, value } = setup();

    fireEvent.change(input, { target: { value: "10.5" } });
    fireEvent.click(addButton);
    fireEvent.click(divideButton);

    expect(value.textContent).toBe("5");
  });
});
