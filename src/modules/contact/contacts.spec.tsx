import { render, screen } from "@testing-library/react";
import Contact from "./contact";

describe("Contact component", () => {
  it("renders ContactInfo component", () => {
    render(<Contact />);
    const contactInfo = screen.getByTestId("TerminalIcon");
    const contactForm = screen.getByText("CONTACT ME");

    expect(contactInfo).toBeInTheDocument();
    expect(contactForm).toBeInTheDocument();
  });
});
