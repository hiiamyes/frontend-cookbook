import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import MoneyInput from "./index";

afterEach(cleanup);

describe("MoneyInput", () => {
  test("Placeholder", async () => {
    const minUnit = "100";
    const value = null;
    const onChange = jest.fn(() => {});
    const { getByTestId } = render(
      <MoneyInput value={value} minUnit={minUnit} onChange={onChange} />
    );
    const moneyInput = getByTestId("money-input");
    expect(moneyInput.placeholder).toBe("Input amount");
  });

  test("Min unit = 100", async () => {
    const minUnit = "100";
    const value = null;
    const onChange = jest.fn(() => {});
    const { getByTestId } = render(
      <MoneyInput value={value} minUnit={minUnit} onChange={onChange} />
    );
    const moneyInput = getByTestId("money-input");
    fireEvent.change(moneyInput, { target: { value: "1" } });
    expect(onChange).toHaveBeenCalledWith(100);
  });

  test("Min unit = 0.01", async () => {
    const minUnit = "0.01";
    const value = null;
    const onChange = jest.fn(() => {});
    const { getByTestId } = render(
      <MoneyInput value={value} minUnit={minUnit} onChange={onChange} />
    );
    const moneyInput = getByTestId("money-input");
    fireEvent.change(moneyInput, { target: { value: "1.233" } });
    expect(onChange).toHaveBeenCalledWith(1.23);
  });
});
