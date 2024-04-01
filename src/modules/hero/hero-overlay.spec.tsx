import { render, screen } from "@testing-library/react";
import HeroOverlay from "./hero-overlay";
import {
  HERO_OVERLAY_TEXT_1,
  HERO_OVERLAY_TEXT_2,
  HERO_OVERLAY_TEXT_3,
} from "./constants";

describe("HeroOverlay", () => {
  it("renders correctly", () => {
    const scale = 1.5;
    const animation = { opacity: 1 };

    render(<HeroOverlay scale={scale} animation={animation} />);

    const overlayElement = screen.getByTestId("hero-overlay");

    expect(overlayElement).toBeInTheDocument();
    expect(overlayElement.tagName).toBe("DIV");
    expect(overlayElement).toHaveClass("app-padding");
    expect(overlayElement).toHaveStyle({ opacity: 0 });
    expect(screen.getByText(HERO_OVERLAY_TEXT_1)).toBeInTheDocument();
    expect(screen.getByText(HERO_OVERLAY_TEXT_2)).toBeInTheDocument();
    expect(screen.getByText(HERO_OVERLAY_TEXT_3)).toBeInTheDocument();
  });
});
