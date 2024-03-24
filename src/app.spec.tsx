import { render, screen } from "@testing-library/react";
import App from "./app";
import { FOOTER_COPYRIGHT_TEXT_2 } from "./modules/footer/constants";

it("renders learn react link", () => {
  render(<App />);

  expect(screen.getByText(FOOTER_COPYRIGHT_TEXT_2)).toBeInTheDocument();
});
