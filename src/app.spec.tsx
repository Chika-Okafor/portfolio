import { render, screen } from "@testing-library/react";
import App from "./app";
import { FOOTER_COPYRIGHT_TEXT_2 } from "./modules/footer/constants";

it("renders learn react link", () => {
  render(<App />);

  const header = screen.getByTestId("MenuIcon");
  const contact = screen.getByText("CONTACT ME");
  const footer = screen.getByText(FOOTER_COPYRIGHT_TEXT_2);

  expect(header).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
