import React from "react";
import { render, screen } from "@testing-library/react";
import FooterCopyRightText from "./footer-copyright-text";
import {
  FOOTER_COPYRIGHT_TEXT_1,
  FOOTER_COPYRIGHT_TEXT_2,
  FOOTER_COPYRIGHT_TEXT_SEPARATOR,
  FOOTER_SHOUTOUT_TEXT_1,
  FOOTER_SHOUTOUT_TEXT_2,
  FOOTER_SHOUTOUT_LINK,
} from "./constants";

describe("FooterCopyRightText component", () => {
  describe("ShoutOut text", () => {
    it("renders correctly", () => {
      render(<FooterCopyRightText />);

      expect(screen.getByText(/Created with/i)).toBeInTheDocument();
      expect(screen.getByText(FOOTER_SHOUTOUT_TEXT_2)).toBeInTheDocument();
    });

    it("renders shoutout link correctly", () => {
      render(<FooterCopyRightText />);
      const shoutoutLink = screen.getByRole("link", {
        name: FOOTER_SHOUTOUT_TEXT_2,
      }); // Adjust the name according to your text
      expect(shoutoutLink).toHaveAttribute("href", FOOTER_SHOUTOUT_LINK);
      expect(shoutoutLink).toHaveAttribute("target", "_blank");
    });
  });

  describe("Copyright text", () => {
    it("renders copyright text correctly", () => {
      render(<FooterCopyRightText />);

      expect(screen.getByText(/Chika Michael Okafor/i)).toBeInTheDocument();
      expect(
        screen.getByText(FOOTER_COPYRIGHT_TEXT_SEPARATOR)
      ).toBeInTheDocument();
      expect(screen.getByText(FOOTER_COPYRIGHT_TEXT_2)).toBeInTheDocument();
    });
  });
});
