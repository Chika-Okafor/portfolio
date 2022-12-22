import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  const toggleMenu = jest.fn();

  it("renders logo text", () => {
    render(<Header toggleMenu={toggleMenu} />);
    expect(screen.getByText(/CHIKA OKAFOR/)).toBeInTheDocument();
  });

  it("renders menu button", () => {
    render(<Header toggleMenu={toggleMenu} />);
    expect(screen.getByTestId(/MenuIcon/)).toBeInTheDocument();
  });

  it("renders menu button", () => {
    render(<Header toggleMenu={toggleMenu} />);
    expect(screen.getByTestId(/MenuIcon/)).toBeInTheDocument();
  });
});
