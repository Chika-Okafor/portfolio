import { render, screen } from "@testing-library/react";
import Footer from "./footer";
import { FOOTER_COPYRIGHT_TEXT_2, FOOTER_SHOUTOUT_TEXT_2 } from "./constants";

describe("Footer", () => {
  it("renders correctly", () => {
    render(<Footer />);

    const footerShoutout = screen.getByText(FOOTER_SHOUTOUT_TEXT_2);
    const footerCopyright = screen.getByText(FOOTER_COPYRIGHT_TEXT_2);

    expect(footerShoutout).toBeInTheDocument();
    expect(footerCopyright).toBeInTheDocument();
  });
});
