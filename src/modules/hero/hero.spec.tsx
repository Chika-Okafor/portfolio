import { render, screen } from "@testing-library/react";
import Hero from "./hero";
import useScrollAnimation from "./hooks/use-scroll-animation";
import useOverlayVisibility from "./hooks/use-overlay-visibility";
import useUnderlayVisibility from "./hooks/use-underlay-visibility";

jest.mock("./hooks/use-scroll-animation");
jest.mock("./hooks/use-overlay-visibility");
jest.mock("./hooks/use-underlay-visibility");

const mockUseScrollAnimation = useScrollAnimation as jest.Mock;
const mockUseOverlayVisibility = useOverlayVisibility as jest.Mock;
const mockUseUnderlayVisibility = useUnderlayVisibility as jest.Mock;

describe("Hero", () => {
  beforeEach(() => {
    mockUseScrollAnimation.mockReturnValue({ scrollY: 100, scale: 1 });
    mockUseOverlayVisibility.mockReturnValue({ opacity: 0 });
    mockUseUnderlayVisibility.mockReturnValue({ opacity: 0 });
  });

  it("renders properly", () => {
    render(<Hero />);

    const heroOverlay = screen.getByTestId("hero-overlay");
    const heroUnderlay = screen.getByTestId("hero-underlay");

    expect(heroOverlay).toBeInTheDocument();
    expect(heroUnderlay).toBeInTheDocument();
  });

  it("passes correct props to child components", () => {
    render(<Hero />);

    expect(mockUseScrollAnimation).toHaveBeenCalled();
    expect(mockUseOverlayVisibility).toHaveBeenCalledWith(
      expect.objectContaining({ ref: expect.any(Object), scrollY: 100 })
    );
    expect(mockUseUnderlayVisibility).toHaveBeenCalledWith(
      expect.objectContaining({ ref: expect.any(Object), scrollY: 100 })
    );
  });
});
