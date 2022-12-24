import { render, screen } from "@testing-library/react";
import NavMenu from "../NavMenu";
import { BrowserRouter as Router } from "react-router-dom";

describe("NavMENU", () => {
  it("renders nav link text", () => {
    render(
      <Router>
        <NavMenu />
      </Router>
    );

    expect(screen.getByText(/ABOUT/)).toBeInTheDocument();
    expect(screen.getByText(/WORK/)).toBeInTheDocument();
    expect(screen.getByText(/PORTFOLIO/)).toBeInTheDocument();
  });
});
