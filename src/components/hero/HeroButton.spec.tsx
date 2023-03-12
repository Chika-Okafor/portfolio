import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroButton from "./HeroButton";

describe("HeroButton", () => {
  it("should render the correct components", () => {
    render(
      <Router>
        <HeroButton />
      </Router>
    );

    const heroButton = screen.getByTestId(/call-to-action/i);

    expect(heroButton).toBeInTheDocument();
    expect(heroButton.textContent).toMatch(/Let's go!/i);
  });
});
