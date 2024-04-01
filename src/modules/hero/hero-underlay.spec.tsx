import { render, screen } from "@testing-library/react";
import HeroUnderlay from "./hero-underlay";
import { HERO_LOGO_ALT_TEXT } from "./constants";

describe("HeroUnderlay", () => {
  it("renders with the provided props", () => {
    const animation = { opacity: 1 };

    render(<HeroUnderlay animation={animation} />);

    const underlayElement = screen.getByTestId("hero-underlay");
    const imageElement = screen.getByAltText(HERO_LOGO_ALT_TEXT);

    expect(underlayElement).toBeInTheDocument();
    expect(underlayElement.tagName).toBe("DIV");
    expect(underlayElement).toHaveClass("heroUnderlay");
    expect(underlayElement).toHaveStyle({ opacity: 0 });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "logo-wrapped-1.png");
  });
});
