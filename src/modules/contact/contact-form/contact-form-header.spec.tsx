import { render, screen } from "@testing-library/react";
import ContactFormHeader from "./contact-form-header";

describe("ContactFormHeader component", () => {
  it("renders title and subheader correctly", () => {
    render(<ContactFormHeader />);
    const title = screen.getByText("CONTACT ME");
    const subheader = screen.getByText(
      "Let's create something amazing together!"
    );

    expect(title).toBeInTheDocument();
    expect(subheader).toBeInTheDocument();
  });
});
