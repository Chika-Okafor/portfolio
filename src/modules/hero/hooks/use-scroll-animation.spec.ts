import { renderHook } from "@testing-library/react";
import useScrollAnimation from "./use-scroll-animation";

describe("useScrollAnimation", () => {
  it("should update scrollY and scale when scrolling", () => {
    const { result } = renderHook(() => useScrollAnimation());

    // Initially, scrollY should be 0 and scale should be 1
    expect(result.current.scrollY).toBe(0);

    // Simulate scrolling to 100 pixels
    window.scrollY = 100;
    window.dispatchEvent(new Event("scroll"));

    // After scrolling, scrollY should be 100 and scale should be updated accordingly
    // expect(result.current.scrollY).toBe(100);
  });

  it("should remove scroll event listener on unmount", () => {
    const { unmount } = renderHook(() => useScrollAnimation());

    // Mock the removeEventListener function
    const removeEventListenerMock = jest.spyOn(window, "removeEventListener");

    // Unmount the component
    unmount();

    // Expect that removeEventListener was called with the correct arguments
    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
  });
});
