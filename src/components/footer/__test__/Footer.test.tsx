import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders social media icons", () => {
    render(<Footer />);
    expect(screen.getByTestId(/InstagramIcon/)).toBeInTheDocument();
    expect(screen.getByTestId(/LinkedInIcon/)).toBeInTheDocument();
    expect(screen.getByTestId(/GitHubIcon/)).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/2022 CHIKA OKAFOR/)).toBeInTheDocument();
  });
});
