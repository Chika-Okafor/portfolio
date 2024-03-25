import { render, screen } from "@testing-library/react";
import ContactInfo from "./contact-info";

describe("ContactInfo", () => {
  it("renders Stack, Terminal, and ContactInfoList components", () => {
    render(<ContactInfo />);
    const terminal = screen.getByTestId("TerminalIcon");
    const socialLinksList = screen.getByText("SOCIAL LINKS");
    const contactInfoList = screen.getByText("CONTACT INFO");

    expect(terminal).toBeInTheDocument();
    expect(socialLinksList).toBeInTheDocument();
    expect(contactInfoList).toBeInTheDocument();
  });
});
