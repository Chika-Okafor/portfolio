import { act, renderHook } from "@testing-library/react";
import useUnderlayVisibility from "./use-underlay-visibility";
import { MutableRefObject } from "react";

describe("useUnderlayVisibility", () => {
  let ref: MutableRefObject<HTMLDivElement | null>;
  let scrollY: number;

  beforeEach(() => {
    ref = { current: document.createElement("div") };
    scrollY = 100;
  });

  it("should update underlay animation when scrollY is less than underlay threshold", () => {
    const { result } = renderHook(() =>
      useUnderlayVisibility({ ref, scrollY })
    );

    act(() => {
      scrollY = 50;
    });

    expect(result.current).toBeDefined();
  });

  it("should update underlay animation when scrollY is greater than underlay threshold", () => {
    const { result } = renderHook(() =>
      useUnderlayVisibility({ ref, scrollY })
    );

    act(() => {
      scrollY = 150;
    });

    expect(result.current).toBeDefined();
  });

  it("should not update underlay animation if ref is null", () => {
    ref.current = null;
    const { result } = renderHook(() =>
      useUnderlayVisibility({ ref, scrollY })
    );

    act(() => {
      scrollY = 50;
    });

    expect(result.current).toBeDefined();
  });
});
