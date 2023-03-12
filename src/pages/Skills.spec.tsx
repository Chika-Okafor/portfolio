import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills Page", () => {
  it("renders the Skills page", () => {
    render(<Skills />);

    const skillsText = screen.getByText(/HTML ROCKSTAR/i);
    expect(skillsText).toBeInTheDocument();
  });
});
