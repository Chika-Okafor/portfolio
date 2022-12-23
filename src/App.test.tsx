import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  const toggleMenu = jest.fn();
  it("renders the Header component", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const logoText = screen.getAllByText("CHIKA OKAFOR");
    expect(logoText.length).toBe(1);
  });

  it("has a toggleMenu function", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const MenuIcon = screen.getByTestId("MenuIcon");
    expect(MenuIcon).toBeInTheDocument();
  });

  it("renders the PageContentManager component", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const PageContentManagerEl = screen.getByTestId("page-content-manager");
    expect(PageContentManagerEl).toBeInTheDocument();
  });

  it("renders the NavMenu component", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const NavMenuEl = screen.getByTestId("nav-menu");
    expect(NavMenuEl).toBeInTheDocument();
  });

  it("renders the Footer component", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const copyrightText = screen.getAllByText("© 2022 CHIKA OKAFOR");
    expect(copyrightText.length).toBe(1);
  });
});
