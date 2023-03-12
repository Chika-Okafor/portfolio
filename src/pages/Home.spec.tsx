import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

describe("Home Page", () => {
  it("renders the Home page", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const heroText = screen.getByText(/Well, hello there!/i);
    expect(heroText).toBeInTheDocument();
  });
});
