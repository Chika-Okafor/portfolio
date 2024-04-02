import { render, screen } from "@testing-library/react";
import ContactForm from "./contact-form";

describe("ContactForm component", () => {
  it("renders Card component", () => {
    render(<ContactForm />);
    const contactFormHeader = screen.getByText("CONTACT ME");
    const contactFormBody = screen.getByRole("textbox");

    expect(contactFormHeader).toBeInTheDocument();
    expect(contactFormBody).toBeInTheDocument();
  });
});
