import App from "../../../App";
import {
  render,
  screen,
  userEvent,
  waitFor,
  vi,
  queryByTestId,
  waitForElementToBeRemoved,
} from "../../../tests/utils/test-utils";

describe("Document title", () => {
  it("Document title input value change", async () => {
    render(<App />);
    const titleInput = screen.getByTestId("titleInput");
    expect(titleInput).toBeVisible();

    await userEvent.clear(titleInput);
    await userEvent.type(titleInput, "testTitle.md");

    expect(titleInput).toHaveValue("testTitle.md");
  });

  it("Document title change save", async () => {
    render(<App />);
    const titleInput = screen.getByTestId("titleInput");
    const saveBtn = screen.getByTestId("saveBtn");
    expect(saveBtn).toBeVisible();
    await userEvent.clear(titleInput);
    await userEvent.type(titleInput, "testTitle.md");
    userEvent.click(screen.getByTestId("saveBtn"));
    expect(await screen.findByText("testTitle.md")).toBeInTheDocument();
  });

  it("Delete prompt open", async () => {
    render(<App />);
    const removeBtn = screen.getByTestId("removeBtn");
    const deletePrompt = await screen.findByTestId("deletePrompt");

    expect(deletePrompt).not.toHaveClass("block");
    expect(removeBtn).toBeVisible();
    userEvent.click(removeBtn);

    await waitFor(async () => expect(deletePrompt).toHaveClass("block"));
  });
});
