import { render, screen } from "@testing-library/react";
import Footer from "./footer";
import { FOOTER_COPYRIGHT_TEXT_2 } from "./constants";

describe("Footer", () => {
  it("renders FooterCopyRightText component", () => {
    render(<Footer />);

    expect(screen.getByText(FOOTER_COPYRIGHT_TEXT_2)).toBeInTheDocument();
  });
});
