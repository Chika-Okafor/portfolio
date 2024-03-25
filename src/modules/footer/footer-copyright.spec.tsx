import { render, screen } from "@testing-library/react";
import FooterCopyright from "./footer-copyright";
import {
  FOOTER_COPYRIGHT_TEXT_2,
  FOOTER_COPYRIGHT_TEXT_SEPARATOR,
} from "./constants";

describe("FooterCopyright", () => {
  it("renders copyright text correctly", () => {
    render(<FooterCopyright />);

    expect(screen.getByText(/Chika Michael Okafor/i)).toBeInTheDocument();
    expect(
      screen.getByText(FOOTER_COPYRIGHT_TEXT_SEPARATOR)
    ).toBeInTheDocument();
    expect(screen.getByText(FOOTER_COPYRIGHT_TEXT_2)).toBeInTheDocument();
  });
});
