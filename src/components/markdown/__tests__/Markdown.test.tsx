import App from "../../../App";
import { render, screen, userEvent, waitFor, vi, cleanup } from "../../../tests/utils/test-utils";

describe("Markdown", () => {
  it("input value change", async () => {
    render(<App />);
    const textArea = screen.getByTestId("markdownArea");
    expect(textArea).toBeVisible();

    await userEvent.clear(textArea);
    await userEvent.type(textArea, "# Testing markdown");

    expect(textArea).toHaveValue("# Testing markdown");
  });
});
