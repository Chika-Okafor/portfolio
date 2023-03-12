import { render, screen } from "@testing-library/react";
import Blog from "./Blog";

describe("Blog Page", () => {
  it("renders the Blog page", () => {
    render(<Blog />);

    const blogText = screen.getByText(/Blog/i);
    expect(blogText).toBeInTheDocument();
  });
});
