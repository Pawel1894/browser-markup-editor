import App from "../../../App";
import { render, screen, userEvent, waitFor, vi } from "../../../tests/utils/test-utils";

describe("Sidebar", () => {
  it("Should add new document with default name of Document.md", async () => {
    render(<App />);
    userEvent.click(screen.getByTestId("newDocBtn"));
    expect(await screen.findByText(/Document.md/i)).toBeInTheDocument();
  });

  it("Should change theme to dark", async () => {
    render(<App />);
    userEvent.click(screen.getByTestId("themeToggle"));
    await waitFor(async () =>
      expect(await screen.findByTestId("themeTogglePointer")).toHaveClass("translate-x-[170%]")
    );
  });
});
