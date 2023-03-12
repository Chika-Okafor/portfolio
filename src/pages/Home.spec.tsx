import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Page", () => {
  it("renders the Home page", () => {
    render(<Home />);

    const heroText = screen.getByText(/DEVELOPMENT/i);
    expect(heroText).toBeInTheDocument();
  });
});
