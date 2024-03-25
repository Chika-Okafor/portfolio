import { render, screen } from "@testing-library/react";
import ContactFormTextfield from "./contact-form-textfield";

describe("ContactFormTextfield component", () => {
  it("renders FormControl, InputLabel, and Input components", () => {
    render(<ContactFormTextfield />);
    const inputLabel = screen.getByText("Sample");
    const input = screen.getByRole("textbox");

    expect(inputLabel).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});
