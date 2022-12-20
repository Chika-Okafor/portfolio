import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders logo text", () => {
    render(<Header />);
    expect(screen.getByText(/CHIKA OKAFOR/)).toBeInTheDocument();
  });

  it("renders menu button", () => {
    render(<Header />);
    expect(screen.getByTestId(/MenuIcon/)).toBeInTheDocument();
  });
});
