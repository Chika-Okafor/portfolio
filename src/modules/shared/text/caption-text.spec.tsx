import { render, screen } from "@testing-library/react";
import CaptionText from "./caption-text";

describe("CaptionText component", () => {
  it("renders text correctly", () => {
    const text = "Hello, World!";
    render(<CaptionText text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
