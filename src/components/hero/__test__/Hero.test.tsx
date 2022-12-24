import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
import { BrowserRouter as Router } from "react-router-dom";

describe("Hero", () => {
  it("renders hero text", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    expect(screen.getByText(/FRONTEND/)).toBeInTheDocument();
  });

  it("renders call-to-action button", () => {
    render(
      <Router>
        <Hero />
      </Router>
    );
    expect(screen.getByTestId(/call-to-action/)).toBeInTheDocument();
  });
});
