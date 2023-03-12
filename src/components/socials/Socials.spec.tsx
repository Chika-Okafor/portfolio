import { render, screen } from "@testing-library/react";
import Socials from "./Socials";

describe("Socials", () => {
  it("renders the correct social media icons", () => {
    render(<Socials />);
    const wrapper = screen.getByTestId(/socials/i);
    expect(wrapper.children.length).toEqual(3);
    expect(screen.getByTestId(/InstagramIcon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/LinkedInIcon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/GitHubIcon/i)).toBeInTheDocument();
  });
});
