import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects Page", () => {
  it("renders the Projects page", () => {
    render(<Projects />);

    const projectsText = screen.getByText(/TOY ROBOT/i);
    expect(projectsText).toBeInTheDocument();
  });
});
