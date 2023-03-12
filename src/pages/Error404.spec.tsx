import { render, screen } from "@testing-library/react";
import Error404 from "./Error404";

describe("Error404 Page", () => {
  it("renders the Error404 page", () => {
    render(<Error404 />);

    const error404Text = screen.getByText(/404/i);
    expect(error404Text).toBeInTheDocument();
  });
});
