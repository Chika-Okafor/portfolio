import { render, screen } from "@testing-library/react";
import AboutDescription from "./about-description";
import { ABOUT_DESCRIPTION } from "./constants";

describe("AboutDescription", () => {
  it("renders with correct header and descriptions", () => {
    render(<AboutDescription />);

    const headerElement = screen.getByText(/ABOUT ME/i);

    expect(headerElement).toBeInTheDocument();

    ABOUT_DESCRIPTION.forEach((desc) => {
      const descElement = screen.getByText(desc);
      expect(descElement).toBeInTheDocument();
    });
  });
});
