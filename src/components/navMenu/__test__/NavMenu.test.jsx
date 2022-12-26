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

    expect(screen.getByText(/BIO/)).toBeInTheDocument();
    expect(screen.getByText(/SKILLS/)).toBeInTheDocument();
    expect(screen.getByText(/PROJECTS/)).toBeInTheDocument();
  });
});
