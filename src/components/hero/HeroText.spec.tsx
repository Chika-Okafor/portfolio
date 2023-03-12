import { render, screen } from "@testing-library/react";
import HeroText from "./HeroText";

describe("HeroText", () => {
  it("should render the correct components", () => {
    render(<HeroText />);

    const heroText = screen.getByText(/luckiest\?/i);

    expect(heroText).toBeInTheDocument();
  });
});
