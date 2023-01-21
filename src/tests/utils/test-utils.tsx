import React, { ReactElement } from "react";
import { cleanup, render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

afterEach(() => {
  cleanup();
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { vi } from "vitest";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
