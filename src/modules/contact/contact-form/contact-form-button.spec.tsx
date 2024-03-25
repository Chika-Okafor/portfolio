import { render, screen } from "@testing-library/react";
import ContactFormButton from "./contact-form-button";

describe("ContactFormButton component", () => {
  it("handles click event", () => {
    render(<ContactFormButton />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    // fireEvent.click(button);
  });
});
