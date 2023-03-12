import { render, screen } from "@testing-library/react";
import HeroButton from "./HeroButton";

describe("HeroButton", () => {
  it("should render the correct components", () => {
    render(<HeroButton />);

    const heroButton = screen.getByRole(/button/i);

    expect(heroButton).toBeInTheDocument();
    expect(heroButton.children.length).toEqual(2);
    expect(heroButton.textContent).toMatch(/start here/i);
  });
});
