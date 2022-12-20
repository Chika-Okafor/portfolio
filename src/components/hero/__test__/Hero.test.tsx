import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero", () => {
  it("renders hero text", () => {
    render(<Hero />);
    expect(screen.getByText(/FRONTEND/)).toBeInTheDocument();
  });

  it("renders call-to-action button", () => {
    render(<Hero />);
    expect(screen.getByTestId(/call-to-action/)).toBeInTheDocument();
  });
});
