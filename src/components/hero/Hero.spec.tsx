import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("should render the correct components", () => {
    render(<Hero />);

    const heroText = screen.getByTestId(/hero/i);

    expect(heroText).toBeInTheDocument();
  });
});
