import { render, screen } from "@testing-library/react";
import App from "./app";
import { FOOTER_COPYRIGHT_TEXT_2 } from "./modules/footer/constants";
import { HERO_OVERLAY_TEXT_1 } from "./modules/hero/constants";

it("renders learn react link", () => {
  render(<App />);

  const header = screen.getByTestId("MenuIcon");
  const hero = screen.getByText(HERO_OVERLAY_TEXT_1);
  const contact = screen.getByText("CONTACT ME");
  const footer = screen.getByText(FOOTER_COPYRIGHT_TEXT_2);

  expect(header).toBeInTheDocument();
  expect(hero).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
