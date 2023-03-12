import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./Hero";

describe("Hero", () => {
  it("should render the correct components", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );

    const heroText = screen.getByTestId(/hero/i);

    expect(heroText).toBeInTheDocument();
  });
});
