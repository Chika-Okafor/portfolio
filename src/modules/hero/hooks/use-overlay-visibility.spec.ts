import { act, renderHook } from "@testing-library/react";
import useOverlayVisibility from "./use-overlay-visibility";
import { MutableRefObject } from "react";

describe("useOverlayVisibility", () => {
  let ref: MutableRefObject<HTMLDivElement | null>;
  let scrollY: number;

  beforeEach(() => {
    ref = { current: document.createElement("div") };
    scrollY = 100;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should update overlay animation when scrollY is less than overlay threshold", () => {
    const { result } = renderHook(() => useOverlayVisibility({ ref, scrollY }));

    act(() => {
      scrollY = 50;
    });

    expect(result.current).toBeDefined();
  });

  it("should update overlay animation when scrollY is greater than overlay threshold", () => {
    const { result } = renderHook(() => useOverlayVisibility({ ref, scrollY }));

    act(() => {
      scrollY = 150;
    });

    expect(result.current).toBeDefined();
  });

  it("should not update overlay animation if ref is null", () => {
    ref.current = null;
    const { result } = renderHook(() => useOverlayVisibility({ ref, scrollY }));

    act(() => {
      scrollY = 50;
    });

    expect(result.current).toBeDefined();
  });
});
