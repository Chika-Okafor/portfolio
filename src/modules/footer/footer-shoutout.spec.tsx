import { render, screen } from "@testing-library/react";
import { FOOTER_SHOUTOUT_TEXT_2, FOOTER_SHOUTOUT_LINK } from "./constants";
import FooterShoutout from "./footer-shoutout";

describe("FooterShoutout component", () => {
  it("renders correctly", () => {
    render(<FooterShoutout />);

    expect(screen.getByText(/Created with/i)).toBeInTheDocument();
    expect(screen.getByText(FOOTER_SHOUTOUT_TEXT_2)).toBeInTheDocument();
  });

  it("renders shoutout link correctly", () => {
    render(<FooterShoutout />);
    const shoutoutLink = screen.getByRole("link", {
      name: FOOTER_SHOUTOUT_TEXT_2,
    }); // Adjust the name according to your text
    expect(shoutoutLink).toHaveAttribute("href", FOOTER_SHOUTOUT_LINK);
    expect(shoutoutLink).toHaveAttribute("target", "_blank");
  });
});
