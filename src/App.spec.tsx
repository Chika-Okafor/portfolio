import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { currentYear } from "./helpers/DateHelpers";

describe("App", () => {
  const toggleMenu = jest.fn();

  const mockCurrentYear: number = currentYear();
  const mockText: string = `© ${mockCurrentYear} CHIKA OKAFOR`;

  const MyApp = (): JSX.Element => (
    <Router>
      <App />
    </Router>
  );

  beforeEach(() => {
    render(<MyApp />);
  });

  it("renders the Header component", () => {
    const logoText = screen.getAllByText("CHIKA OKAFOR");
    expect(logoText.length).toBe(1);
  });

  it("has a toggleMenu function", () => {
    const menuIcon = screen.getByTestId("MenuIcon");
    expect(menuIcon).toBeInTheDocument();
  });

  it("renders the PageContentManager component", () => {
    const pageContentManagerEl = screen.getByTestId("page-content-manager");
    expect(pageContentManagerEl).toBeInTheDocument();
  });

  it("renders the NavMenu component", () => {
    const navMenuEl = screen.getByTestId("nav-menu");
    expect(navMenuEl).toBeInTheDocument();
  });

  it("renders the Footer component", () => {
    const copyrightText = screen.getAllByText(mockText);
    expect(copyrightText.length).toBe(1);
  });
});
