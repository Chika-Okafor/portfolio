import { render, screen } from "@testing-library/react";
import AboutAvatar from "./about-avatar";
import { ADMIN_FULL_NAME, ADMIN_ROLE } from "../../constants";

describe("AboutAvatar component", () => {
  it("renders with correct name and role", () => {
    render(<AboutAvatar />);
    const nameElement = screen.getByText(ADMIN_FULL_NAME);
    const roleElement = screen.getByText(ADMIN_ROLE);
    expect(nameElement).toBeInTheDocument();
    expect(roleElement).toBeInTheDocument();
  });
});
