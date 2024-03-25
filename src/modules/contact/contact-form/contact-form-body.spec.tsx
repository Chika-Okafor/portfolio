import { render, screen } from "@testing-library/react";
import ContactFormBody from "./contact-form-body";

describe("ContactFormBody component", () => {
  it("renders ContactFormTextfield component", () => {
    render(<ContactFormBody />);
    const contactFormTextfield = screen.getByRole("textbox");
    const contactFormButton = screen.getByRole("button");

    expect(contactFormTextfield).toBeInTheDocument();
    expect(contactFormButton).toBeInTheDocument();
  });
});
