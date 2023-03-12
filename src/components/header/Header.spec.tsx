import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header", () => {
  const toggleMenu = jest.fn();

  it("renders logo text", () => {
    render(
      <Router>
        <Header toggleMenu={toggleMenu} />
      </Router>
    );
    expect(screen.getByText(/CHIKA OKAFOR/)).toBeInTheDocument();
  });

  it("renders menu button", () => {
    render(
      <Router>
        <Header toggleMenu={toggleMenu} />
      </Router>
    );

    expect(screen.getByTestId(/MenuIcon/)).toBeInTheDocument();
  });

  it("renders menu button", () => {
    render(
      <Router>
        <Header toggleMenu={toggleMenu} />
      </Router>
    );
    expect(screen.getByTestId(/MenuIcon/)).toBeInTheDocument();
  });
});
