import { render, screen } from "@testing-library/react";
import Bio from "./Bio";

describe("Bio Page", () => {
  it("renders the Bio page", () => {
    render(<Bio />);

    const bioText = screen.getByText(/WHO AM I/i);
    expect(bioText).toBeInTheDocument();
  });
});
